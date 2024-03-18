import { configureStore } from '@reduxjs/toolkit'
import formSlice from './slideFormUser.js'

export default configureStore({
  reducer: {
    form: formSlice,
  },
})