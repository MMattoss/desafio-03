import { PayloadAction } from "@reduxjs/toolkit";
import { CartItem, CartState } from "./cartSlice";

export const addToCartReducer = (
	state: {
		cartItems: CartItem[];
	},
	action: PayloadAction<CartItem>
) => {
	const item = state.cartItems.find(
		(i: { id: string }) => i.id === action.payload.id
	);
	if (item) {
		item.quantity += 1;
	} else {
		state.cartItems.push({ ...action.payload, quantity: 1 });
	}
};

export const removeFromCartReducer = (
	state: CartState,
	action: PayloadAction<string>
) => {
	state.cartItems = state.cartItems.filter(
		(item: { id: string }) => item.id !== action.payload
	);
};

export const clearCartReducer = (state: { cartItems: CartItem[] }) => {
	state.cartItems = [];
};
