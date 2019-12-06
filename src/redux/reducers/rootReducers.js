import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import HSearchReducers from './h-data-search';
import MembersReducers from './membersReducers';
import BlogReducers from './blogReducers';
import GalleryReducers from './galleryReducers';
import MailReducers from './mailReducers';
import CrudReducers from './crud';

const rootReducers = combineReducers({
    hSearch : HSearchReducers,
    members : MembersReducers,
    blogs   : BlogReducers,
    gallery  : GalleryReducers,
    mail    : MailReducers,
    crud    : CrudReducers,
    firebase: firebaseReducer,
    firestore: firestoreReducer  
});

export default rootReducers;