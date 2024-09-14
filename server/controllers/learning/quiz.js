import Quiz from "../../models/learning/Quiz.js";
import Lecture from "../../models/learning/Lecture.js";

export const createQuiz = async (req, res) => {
  try {
    const {
      title,
      question,
      type,
      choices,
      correctAnswer,
      codeTemplate,
      correctCode,
      codeAnswer,
      hints,
    } = req.body;

    if (!question || !type || !title) {
      return res.status(400).json({ message: 'Question and type, title are required' });
    }

    if (type === 'multiple-choice') {
      if (!choices || !Array.isArray(choices) || choices.length === 0) {
        return res.status(400).json({ message: 'Choices are required for multiple-choice questions' });
      }
      if (correctAnswer === undefined || correctAnswer === null) {
        return res.status(400).json({ message: 'Correct answer index is required for multiple-choice questions' });
      }

      if (correctAnswer < 0 || correctAnswer >= choices.length) {
        return res.status(400).json({ message: 'Invalid correct answer index' });
      }
    } else if (type === 'coding') {
      if (!codeTemplate) {
        return res.status(400).json({ message: 'Code template is required for coding questions' });
      }
      if (!correctCode) {
        return res.status(400).json({ message: 'Correct code is required for coding questions' });
      }
      if (codeAnswer === undefined || codeAnswer === null) {
        return res.status(400).json({ message: 'Code answer is required for coding questions' });
      }
    } else {
      return res.status(400).json({ message: 'Invalid question type' });
    }

    const newQuestion = new Quiz({
      title,
      question,
      type,
      choices,
      correctAnswer,
      codeTemplate,
      correctCode,
      codeAnswer,
      hints,
    });


    const savedQuestion = await newQuestion.save();

    return res.status(201).json(savedQuestion);
  } catch (error) {
    console.error('Error creating quiz question:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};


export const getAllQuiz = async (req,res,next) => {
  try{
    const allQuiz = await Quiz.find({}).select('_id title');

    if(allQuiz.length==0)
      return res.status(404).json({ message: "No quiz currently!"});

    return res.status(200).json({ message: "Quiz found!", allQuiz});
  }
  catch(err){
    next(err)
  }
}


export const getQuiz = async (req,res,next) => {
  
  const quizId = req.params.quizId
  try{
    const quiz = await Quiz.findById(quizId);
    
    if(!quiz)
      return res.status(404).json({ message: "Quiz not found!"})

    return res.status(200).json({ message: "Quiz fetched Successfully", quiz});
  }
  catch(err){
    next(err)
  }
}