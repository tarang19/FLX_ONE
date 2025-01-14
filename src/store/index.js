// Third-party Imports
import { configureStore } from '@reduxjs/toolkit'
import authReducer  from './slices/authSlice'

// Slice Imports
export const store = configureStore({
    reducer: {
    auth: authReducer,
  },
    middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false })
})
