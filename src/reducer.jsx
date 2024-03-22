export const initialState = {
    basket: [],
    user: null,
}

function reducer(state, action) {
    console.log(action);
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
        //Code to add to basket
        case 'REMOVE_FROM_BASKET':
            let newBasket = [...state.basket];
            const id = state.basket.findIndex((basketItem) => basketItem.id === action.id);
            if (id >= 0) {
                newBasket.splice(id, 1);
            }
            else {
                console.warn(`Item of ${action.id} not found!`);
            }
            return {
                ...state,
                basket: newBasket
            };
        //Code to remove from basket
        default:
            return state;
    }
}

export default reducer;