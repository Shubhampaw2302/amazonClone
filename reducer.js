export const initialState = {
    basket: [],
    user: null
};

export const getBasketTotal = (basket) => 
    basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {         //Action => Add to the basket or remove from the basket
                                             //state => Initial State
    switch(action.type) {                    
        case 'ADD_TO_BASKET':
            return {
                ...state, 
                basket: [...state.basket, action.item]
            };

        case 'REMOVE_FROM_BASKET':                    // findIndex() method returns the index of the first element in an array that
            const index = state.basket.findIndex(     // pass a test (provided as a function)
                (basketItem) => basketItem.id === action.id
            );
            let newBasket = [...state.basket];
            if (index >= 0) {                           // var a = [11, 25, 65, 89, 78, 45]
                newBasket.splice(index, 1)              // a.splice(2, 1)                               a.splice(2, 2)
            } else {                                    // console.log(a)                            O/P => [11, 25, 78, 45]
                var actionId = action.id;               // output => [11, 25, 89, 78, 45]
                console.warn('Cant remove product (id: '+{actionId}+') as its not in the basket')
            }
            return {
                ...state,
                basket: newBasket
            }

        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }

        default:
            return state;
    }                                        
}

export default reducer;