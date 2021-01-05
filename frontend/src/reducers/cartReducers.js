import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants';

export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case CART_ADD_ITEM:
            const addedItem = action.payload;
            const existingItem = state.cartItems.find(
                (item) => item.product === addedItem.product
            );
            if (existingItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((item) =>
                        item.product === existingItem.product ? addedItem : item
                    ),
                };
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, addedItem],
                };
            }
        case CART_REMOVE_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter(
                    (item) => item.product !== action.payload
                ),
            };
        default:
            return state;
    }
};
