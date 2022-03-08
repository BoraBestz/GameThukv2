const postReducer = (state = [], action) => {
    switch(action.type) {
        case 'GET_DATA':
            return state.concat([action.data]);
        default:
            return state;
    }
}

export default postReducer;