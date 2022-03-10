
export const gameReducer  = (state = null, action) => {
    switch (action.type){
        case 'LOGIN':
            return "BoraBestz login"
        case 'LOGOUT':
            return action.payload
        default:
            return state
    }
} 