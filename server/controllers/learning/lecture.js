import Course from "../../models/learning/Course.js";
import Lecture from "../../models/learning/Lecture.js";
import Quiz from "../../models/learning/Quiz.js";
import User from "../../models/User.js";


export const createLecture = async (req, res, next) => {
  const { courseId, title, videoUrl, index, quizId } = req.body;

  try {
    
    if (!title || !videoUrl || index === undefined) {
      return res.status(400).json({ message: "Missing required fields" });
    }


    const course = await Course.findById(courseId).populate("lectures");

    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    const quiz = await Quiz.findById(quizId)

    if (!quiz) {
      return res.status(404).json({ message: "Quiz not found" });
    }

    const existingLecture = course.lectures.find(lecture => lecture.index === index);

    if (existingLecture) {
      return res.status(400).json({ message: "Lecture with this index already exists" });
    }

    const newLecture = new Lecture({
      title,
      videoUrl,
      index,
      quiz: quiz._id
    });

    const savedLecture = await newLecture.save();
    
    course.lectures.push(savedLecture._id);
    course.totalLectures+=1
    await course.save();

    res.status(201).json({ message: "Lecture saved successfully!", savedLecture});

  } catch (err) {
    next(err); 
  }
};

export const lectureCompleted = async (req, res, next) => {
  const userId = req.user.id;
  const { lectureId, courseId } = req.params;

  try {
    const lecture = await Lecture.findById(lectureId);
    if (!lecture) {
      return res.status(404).json({ message: "Lecture not found!" });
    }

    const course = await Course.findById(courseId);
    const user = await User.findById(userId);


    if (!user || !course) {
      return res.status(404).json({ message: "User or course not found" });
    }

    const isLectureValid = course.lectures.some((lec) => lec.toString() === lectureId);
    if (!isLectureValid) {
      return res.status(404).json({ message: "Lecture not found in this course" });
    }

    let enrolledCourse = user.enrolledCourses.find((courseDetails) => courseDetails.courseId.toString() === courseId);
    if (!enrolledCourse) {
      return res.status(404).json({ message: "User not enrolled in this course" });
    }

    if (enrolledCourse.lectureCompleted.includes(lecture.index)) {
      return res.status(400).json({ message: "Lecture already completed" });
    }

    enrolledCourse.lectureCompleted.push(lecture.index);
    enrolledCourse.progress = (enrolledCourse.lectureCompleted.length / course.totalLectures) * 100;

    if (enrolledCourse.progress === 100) {
      enrolledCourse.completed = true;
    }

    await user.save();

    return res.status(200).json({ message: "Lecture completed successfully!", user });
    
  } catch (err) {
    next(err);
  }
};


export const getLecture = async (req, res, next) => {
  const lectureId = req.params.lectureId
  try{
    const lecture = await Lecture.findById(lectureId);

    if(!lecture)
      return res.status(404).json({ message: "Lecture not found!"});

    res.status(200).json(lecture);
  }
  catch(err){
    next(err)
  }
}