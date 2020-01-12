import { listSelector } from './list.selectors';

export const listActions = {
  HANDLE_SELECT_TEXT: 'HANDLE_SELECT_TEXT',
};

export const handleSelectText = index => {
  return (dispatch, getState) => {
    const value = listSelector.getSelectedText(getState(), index);

    dispatch({
      type: listActions.HANDLE_SELECT_TEXT,
      payload: { value },
    });
  };
};
