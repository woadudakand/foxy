export const addCrud = data => {    
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const db = getFirestore();
        db.collection('crud').add({
            ...data
        }).then(() => {
            dispatch({type: 'CREATE_CRUD', data});
        }).catch((err) => {
            dispatch({type: 'CREATE_CRUD_ERR', err});
        })
    }
}

export const deleteCrud = id => {    
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const db = getFirestore();
        db.collection('crud').doc(id).delete().then(() => {
            dispatch({type: 'DELETE_CRUD'});
        }).catch((err) => {
            dispatch({type: 'DELETE_CRUD_ERR', err});
        })
    }
}