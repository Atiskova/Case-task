import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import * as api from '../services/api.jsx';


  export const getCourses = createAsyncThunk(
    'preview-courses/getCourses',
    async (_, thunkAPI) => {
      try {
        const data = await api.getCourses();
  
        return data;
      } catch (e) {
        return thunkAPI.rejectWithValue(
          e.message,
          toast.error('Oops. Something went wrong 😭')
        );
      }
    }
  );

  export const getCourse = createAsyncThunk(
    'preview-courses/getCourse',
    async (id, thunkAPI) => {
      try {
        const data = await api.getCourse(id);
  
        return data;
      } catch (e) {
        return thunkAPI.rejectWithValue(
          e.message,
          toast.error('Oops. Something went wrong 😭')
        );
      }
    }
  );

