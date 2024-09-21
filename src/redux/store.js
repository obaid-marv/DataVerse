
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/AuthSlice';
import progressReducer from './course/ProgressSlice';
import coursesReducer from './course/CoursesSlice';
import courseReducer from './course/CourseSlice';
const store = configureStore({
  reducer: {
    auth: authReducer, 
    progress: progressReducer,
    courses: coursesReducer,
    course: courseReducer
  },
});

export default store;
