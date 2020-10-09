const signsReducer = (state = { signs: [], loading: false }, action ) => {
    switch(action.type) {
        case 'LOADING_SIGNS': 
        return {
            ...state, 
            signs: [...state.signs], 
            loading: true
        }
        case 'ADD_SIGNS':
            return {
                ...state, 
                signs: action.signs, 
                loading: false
            }
        default:
            return state;
    }
}

export default signsReducer