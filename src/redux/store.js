
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/AuthSlice';
import progressReducer from './course/ProgressSlice';

const store = configureStore({
  reducer: {
    auth: authReducer, 
    progress: progressReducer
  },
});

export default store;
