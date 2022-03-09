import { ADD_TO_LISTGAME } from "../action/gameAction"
// const postReducer = (state = [], action) => {
//     switch(action.type) {
//         case 'GET_DATA':
//             return state.concat([action.data]);
//         default:
//             return state;
//     }
// }
// {
//     id: '',
//     gameName: '',
//     price: ''
// }

const initialState = {
    game: [],
}

export function addToHome (state = initialState, action){
    switch (action.type) {
        case ADD_TO_LISTGAME:
            const updateState = [...state.game, action.payload]

            return {
                ...state,
                cart: updatedState
            }
        
        default:
            return state
    }
}