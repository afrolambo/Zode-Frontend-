export function fetchSigns() {
    return (dispatch) => {
        dispatch({ type: 'START_DISPLAY_ALL_SIGNS' });
        fetch('https://zodiacal.herokuapp.com/api#')
        .then(response => response.json())
        .then(signs => dispatch({ type: 'DISPLAY_SIGNS', signs }))
    }
}