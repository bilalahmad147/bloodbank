import { ADD_DETAIL } from '../Actions/action'

const initialState = {
    thingsForSale: [
        { imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQR80dYVNwdywGVECnOPIYKo9eat3quvIc7Hg&usqp=CAU", name: "Bike Honda 70", price: "25000" },
    ]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_DETAIL: return {
            ...state,
            thingsForSale: [...state.thingsForSale, action.payload]
        }
        default: return state
    }
}

export default reducer;