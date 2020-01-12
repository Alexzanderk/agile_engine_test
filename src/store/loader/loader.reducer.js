import { loaderAction } from './loader.action';
import { editorActions } from '../editor/editor.actions';

const initialState = {
  isLoading: false,
};

export const loaderReducer = (state = initialState, { type }) => {
  switch (type) {
    case editorActions.GET_SYNONYM_REQUEST: {
      return {
        isLoading: true,
      };
    }

    case editorActions.GET_SYNONYM_SUCCESS:
    case editorActions.GET_SYNONYM_FAIL: {
      return {
        isLoading: false,
      };
    }

    case loaderAction.TOGGLE_LOADER: {
      return {
        isLoading: !state.isLoading,
      };
    }

    default:
      return state;
  }
};
