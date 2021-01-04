import { CART_ADD_ITEM } from '../constants/cartConstants';

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
        default:
            return state;
    }
};
