export const editorActions = {
  HANDLE_CHANGE_VALUE: 'HANDLE_CHANGE_VALUE',
  HANDLE_SAVE_TEXT_VALUE: 'HANDLE_SAVE_TEXT_VALUE',
  TOGGLE_BOLD: 'TOGGLE_BOLD',
  TOGGLE_ITALIC: 'TOGGLE_ITALIC',
  TOGGLE_UNDERLINE: 'TOGGLE_UNDERLINE',
  RESET_VALUES: 'RESET_VALUES',
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
  return {
    type: editorActions.HANDLE_SAVE_TEXT_VALUE,
    payload: { value, bold, italic, underline, id  },
  };
};

export const toggleBold = () =>
  console.log('Toggle Bold') || {
    type: editorActions.TOGGLE_BOLD,
  };

export const toggleItalic = () =>
  console.log('Toggle Italic') || {
    type: editorActions.TOGGLE_ITALIC,
  };

export const toggleUnderline = () =>
  console.log('Toggle Underline') || {
    type: editorActions.TOGGLE_UNDERLINE,
  };
