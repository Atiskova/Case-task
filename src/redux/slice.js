import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getCourses, getCourse } from './operation';

const initialState = {
    courses: [],
    course: {},
    status: 'idle',
    error: null,
  };

  const extraAction = [getCourses, getCourse];

const getAction = type => extraAction.map(action => action[type]);

const handlePending = state => {
  state.error = null;
  state.status = 'pending';
};

const handleRejected = (state, { payload }) => {
  state.status = 'rejected';
  state.error = payload;
};

const handleFulfilled = state => {
  state.status = 'resolved';
};

const coursesSlice = createSlice({
  name: 'courses',

  initialState,

  extraReducers: builder => {
    builder
      .addCase(getCourses.fulfilled, (state, { payload }) => {
        state.courses = payload;
      })
      .addCase(getCourse.fulfilled, (state, { payload }) => {
        state.course = payload;
      })
      .addMatcher(isAnyOf(...getAction('pending')), handlePending)
      .addMatcher(isAnyOf(...getAction('fulfilled')), handleFulfilled)
      .addMatcher(isAnyOf(...getAction('rejected')), handleRejected);
  },
});

export const coursesReducer = coursesSlice.reducer;

