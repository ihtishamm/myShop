import { configureStore } from '@reduxjs/toolkit'
import cartReducer from "../Featuers/cartSlice"
export const store = configureStore({
  reducer: {
        CartAll:cartReducer,
  },
})
