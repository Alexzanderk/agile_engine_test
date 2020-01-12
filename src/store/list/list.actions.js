import { listSelector } from './list.selectors';

export const listActions = {
  HANDLE_SELECT_TEXT: 'HANDLE_SELECT_TEXT',
  UPDATE_TEXT: 'UPDATE_TEXT',
};

export const handleDoubleClickText = index => {
  return (dispatch, getState) => {
    const value = listSelector.getSelectedText(getState(), index);

    dispatch({
      type: listActions.HANDLE_SELECT_TEXT,
      payload: { value },
    });
  };
};

export const updateText = (id, value) => {
  return {
    type: listActions.UPDATE_TEXT,
    payload: { id, value },
  };
};
