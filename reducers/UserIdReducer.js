export const UserIdReducer  = (state = null, action) => {
    switch (action.type){
        case 'KEEPID':
            return action.payload
        default:
            return state
    }
} 
export default UserIdReducer;