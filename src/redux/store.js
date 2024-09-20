
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/AuthSlice';
import progressReducer from './course/ProgressSlice';
import coursesReducer from './course/CoursesSlice';

const store = configureStore({
  reducer: {
    auth: authReducer, 
    progress: progressReducer,
    courses: coursesReducer

  },
});

export default store;
