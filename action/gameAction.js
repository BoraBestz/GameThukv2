export const ADD_TO_LISTGAME = 'ADD_TO_LISTGAME'

const action = {
    type: '',
    payload:
    {
        id: '',
        gameName: '',
        price: '',
    
    }
}

//Action creators
export function addToListGame(addToListGame) {
    return {
        type: ADD_TO_LISTGAME,
        payload: addToListGame
    }
}

