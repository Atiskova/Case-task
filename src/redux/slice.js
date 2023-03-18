import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getCourses, getCourse, refreshCourse } from './operation';

const initialState = {
  courses: [],
  course: {},
  page: 0,
  perPage: 10,
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

  reducers: {
    setPage: (state, { payload }) => {
      state.page = payload;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(getCourses.fulfilled, (state, { payload }) => {
        state.courses = payload;
      })
      .addCase(getCourse.fulfilled, (state, { payload }) => {
        state.course = payload;
      })
      .addCase(refreshCourse.fulfilled, (state, { payload }) => {
        state.course = payload;
      })
      .addMatcher(isAnyOf(...getAction('pending')), handlePending)
      .addMatcher(isAnyOf(...getAction('fulfilled')), handleFulfilled)
      .addMatcher(isAnyOf(...getAction('rejected')), handleRejected);
  },
});

export const coursesReducer = coursesSlice.reducer;
export const { setPage } = coursesSlice.actions;
