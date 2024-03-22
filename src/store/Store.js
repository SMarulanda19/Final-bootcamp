import { configureStore } from '@reduxjs/toolkit';
import { reducers } from './AppSlices.js';

export default configureStore({
  reducer: reducers,
});
