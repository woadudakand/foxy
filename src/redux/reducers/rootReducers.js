import { combineReducers } from 'redux';
import HSearchReducers from './h-data-search';
import MembersReducers from './membersReducers';
import BlogReducers from './blogReducers';
import GalleryReducers from './galleryReducers';
import MailReducers from './mailReducers';

const rootReducers = combineReducers({
    hSearch : HSearchReducers,
    members : MembersReducers,
    blogs   : BlogReducers,
    gallery  : GalleryReducers,
    mail    : MailReducers
});

export default rootReducers;