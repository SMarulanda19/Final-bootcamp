import { configureStore } from '@reduxjs/toolkit'
import formSlice from './AppSlices.js'

export default configureStore({
  reducer: {
    form: formSlice,
  },
})