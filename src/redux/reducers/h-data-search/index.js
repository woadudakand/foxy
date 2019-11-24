const initialState = null;

const hSearchReducer = (state = initialState, action) => {
    switch( action.type ) {
        case "CREATE_SEARCH" :            
            return localStorage.getItem('text');
        default: 
            return state;
    }
}
export default hSearchReducer;