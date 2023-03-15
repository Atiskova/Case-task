import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { coursesReducer } from './slice';


const rootReducer = combineReducers({
    courses: coursesReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});