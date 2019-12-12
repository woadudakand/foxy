/* eslint-disable no-console */
const initialState = {
    crud: null
}

const crudReducer = (state=initialState, action) => {
    switch( action.type ) {
        case "CREATE_CRUD" :
            return {
                crud: true
            };
        case "CREATE_CRUD_ERR" :           
            return {
                crud: action.err
            };
        case "DELETE_CRUD" :
                return {
                    crud: "DELETE"
                };
        case "DELETE_CRUD_ERR" :           
                return {
                    crud: action.err
                };
        default: 
            return state;
    }
}
export default crudReducer;