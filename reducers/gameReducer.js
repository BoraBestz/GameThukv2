export const gameReducer  = (state = null, action) => {
    switch (action.type){
        case 'SEARCH':
            return action.payload
        case 'CLICK_GAME':
            return action.payload
        default:
            return state
    }
} 
export default gameReducer;