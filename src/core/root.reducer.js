import { combineReducers } from 'redux';
import { listReducer } from '../store/list/list.reducer';
import { editorReducer } from '../store/editor/editor.reducer';
import { loaderReducer } from '../store/loader/loader.reducer';
import { synonymsReducer } from '../store/synonyms/synonyms.reducer';

export default combineReducers({
  list: listReducer,
  editor: editorReducer,
  loader: loaderReducer,
  synonyms: synonymsReducer,
});
