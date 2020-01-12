import { combineReducers } from 'redux';
import { listReducer } from '../store/list/list.reducer';
import { editorReducer } from '../store/editor/editor.reducer';

export default combineReducers({
  list: listReducer,
  editor: editorReducer,
});
