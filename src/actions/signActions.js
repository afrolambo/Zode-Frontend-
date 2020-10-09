export const fetchSigns = () => {
    return (dispatch) => {
        dispatch({ type: "LOADING_SIGNS" })
        fetch('https://cors-anywhere.herokuapp.com/https://zodiacal.herokuapp.com/api').then(response => {
            return response.json()
        }).then(
            responseJSON => 
            {dispatch({ type: 'ADD_SIGNS', signs: responseJSON})
        }
        )
    }
}