import { datamuseService } from '../../services/datamuse.service';

export const editorActions = {
  HANDLE_CHANGE_VALUE: 'HANDLE_CHANGE_VALUE',
  HANDLE_SAVE_TEXT_VALUE: 'HANDLE_SAVE_TEXT_VALUE',
  TOGGLE_BOLD: 'TOGGLE_BOLD',
  TOGGLE_ITALIC: 'TOGGLE_ITALIC',
  TOGGLE_UNDERLINE: 'TOGGLE_UNDERLINE',
  RESET_VALUES: 'RESET_VALUES',
  GET_SYNONYM_REQUEST: 'GET_SYNONYM_REQUEST',
  GET_SYNONYM_SUCCESS: 'GET_SYNONYM_SUCCESS',
  GET_SYNONYM_FAIL: 'GET_SYNONYM_FAIL',
};

export const resetEditorValues = () => ({
  type: editorActions.RESET_VALUES,
});

export const handleChangeValue = event => {
  return {
    type: editorActions.HANDLE_CHANGE_VALUE,
    payload: { value: event.target.value },
  };
};

export const handleSaveText = ({ value, bold, italic, underline, id }) => {
  return async dispatch => {
    try {
      dispatch({ type: editorActions.GET_SYNONYM_REQUEST });

      const { data, status } = await datamuseService.getSynonym({ ml: value });

      dispatch({ type: editorActions.GET_SYNONYM_SUCCESS });

      dispatch({
        type: editorActions.HANDLE_SAVE_TEXT_VALUE,
        payload: { value, bold, italic, underline, id, synonyms: status === 200 ? data : null },
      });
    } catch (error) {
      dispatch({
        type: editorActions.GET_SYNONYM_FAIL,
      });

      dispatch({
        type: editorActions.HANDLE_SAVE_TEXT_VALUE,
        payload: { value, bold, italic, underline, id, synonyms: null },
      });
    }
  };
};

export const toggleBold = () => ({ type: editorActions.TOGGLE_BOLD });

export const toggleItalic = () => ({ type: editorActions.TOGGLE_ITALIC });

export const toggleUnderline = () => ({ type: editorActions.TOGGLE_UNDERLINE });
