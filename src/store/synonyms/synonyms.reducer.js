import { synonymsActions } from './synonyms.action';
import { listActions } from '../list/list.actions';
import { editorActions } from '../editor/editor.actions';

const initialState = {
  synonyms: [],
  id: null,
};

export const synonymsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case synonymsActions.SHOW_SYNONYMS: {
      return {
        ...state,
        synonyms: payload.filteredWord.synonyms,
        id: payload.filteredWord.id,
      };
    }

    case listActions.UPDATE_TEXT: {
      return initialState;
    }

    case synonymsActions.GET_SYNONYMS_SUCCESS: {
      return {
        ...state,
        synonyms: payload.value,
      };
    }

    case editorActions.RESET_VALUES: {
      return initialState;
    }

    default:
      return state;
  }
};
