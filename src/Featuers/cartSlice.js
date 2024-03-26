import { createSlice } from '@reduxjs/toolkit'
import ProductData from '../Components/Products/product.json'
const initialState = {
  cart:[],
  saveforLater:[{name:'ihtisham', id:4,Warranty:'year all'}],
  items: ProductData,
  totalQuantity: 0,
  totalPrice: 0,
    

}

export const cartSlice = createSlice({
  name: 'Cart',
  initialState,
  reducers: {

          addToCart: (state, action) => {
            let find = state.cart.findIndex((item) => item.id === action.payload.id);
            if(find >=0){
              state.cart[find].totalQuantity += 1;
            }
            else {

            state.cart.push(action.payload);
            }
           
          },
             saveforLater: (state, action) => {

           
      
            state.saveforLater.push(action.payload)
                },
          removeFromCart: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload)
          },
          removeAllCart: (state) => {

            state.cart = [];
          },

             cartTotal:(state) => {
               let {totalQuantity, totalPrice} = state.cart.reduce(
                (cartTotal, cartItem) => {
                  const {price, quantity} = cartItem;
                  const itemTotal = price * quantity;
                  cartTotal.totalPrice += itemTotal;
                  cartTotal.totalQuantity += quantity;
                  return cartTotal;
                },
                {
                  totalPrice:0,
                  totalQuantity:0
                }
               )
               state.totalPrice = parseInt(totalPrice.toFixed(2));
               state.totalQuantity = totalQuantity;
             }
        },
  
})
 
 export const {addToCart, removeFromCart, removeAllCart, cartTotal} = cartSlice.actions

 export default cartSlice.reducer