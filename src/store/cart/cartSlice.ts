import { createSlice } from "@reduxjs/toolkit";
import { addToCartReducer, clearCartReducer, decreaseQuantityReducer, removeFromCartReducer } from "./cartReducers";

export interface CartItem {
  id: string;
  title: string;
  price: number;
  hasDiscount: boolean;
  discount?: number;
  thumbnailUrl: string;
  quantity: number;
}

export interface CartState {
  cartItems: CartItem[];
}

const initialState: CartState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: addToCartReducer,
    removeFromCart: removeFromCartReducer,
    decreaseQuantity: decreaseQuantityReducer,
    clearCart: clearCartReducer
  }
})

export const { addToCart, removeFromCart, clearCart, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
