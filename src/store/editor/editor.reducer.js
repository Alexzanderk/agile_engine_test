import { editorActions } from './editor.actions';
import { listActions } from '../list/list.actions';

const initialState = {
  value: '',
  bold: false,
  italic: false,
  underline: false,
  id: null,
  synonyms: [],
};

export const editorReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case editorActions.HANDLE_CHANGE_VALUE: {
      return {
        ...state,
        value: payload.value,
      };
    }

    case listActions.HANDLE_SELECT_TEXT: {
      const { value, bold, italic, underline, id } = payload.value;

      return {
        ...state,
        value,
        bold,
        italic,
        underline,
        id,
      };
    }

    case editorActions.RESET_VALUES: {
      return initialState;
    }

    case editorActions.HANDLE_SAVE_TEXT_VALUE: {
      return {
        ...state,
        bold: false,
        italic: false,
        underline: false,
      };
    }

    case editorActions.TOGGLE_BOLD: {
      return {
        ...state,
        bold: !state.bold,
      };
    }

    case editorActions.TOGGLE_ITALIC: {
      return {
        ...state,
        italic: !state.italic,
      };
    }

    case editorActions.TOGGLE_UNDERLINE: {
      return {
        ...state,
        underline: !state.underline,
      };
    }

    default:
      return state;
  }
};
