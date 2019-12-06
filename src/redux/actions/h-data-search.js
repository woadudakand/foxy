// eslint-disable-next-line import/prefer-default-export
export const createSearch = text => {
    return (dispatch) => {
        localStorage.setItem('text', text);
        dispatch({
            type: 'CREATE_SEARCH', 
            text
        });
    }
}
