import { listActions } from './list.actions';
import { editorActions } from '../editor/editor.actions';

const initialState = {
  sentences: [],
};

export const listReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case listActions.GET_ALL_DATA: {
      return {
        ...state,
      };
    }

    case listActions.UPDATE_TEXT: {
      const filteredTextIndex = state.sentences.findIndex(item => item.id === payload.id);
      const filteredText = state.sentences.filter(item => item.id === payload.id)[0];
      filteredText.value = payload.value;

      const newSentences = [...state.sentences];
      newSentences[filteredTextIndex] = filteredText;

      return {
        ...state,
        sentences: newSentences,
      };
    }

    case editorActions.HANDLE_SAVE_TEXT_VALUE: {
      const editedTextIndex = state.sentences.findIndex(item => item.id === payload.id);
      const newSentences = [...state.sentences];
      newSentences[editedTextIndex] = {
        value: payload.value,
        bold: payload.bold,
        italic: payload.italic,
        underline: payload.underline,
        id: payload.id,
        synonyms: payload.synonyms ? payload.synonyms : [],
      };

      return {
        ...state,
        sentences:
          editedTextIndex < 0
            ? [
                ...state.sentences,
                {
                  value: payload.value,
                  bold: payload.bold,
                  italic: payload.italic,
                  underline: payload.underline,
                  id: payload.id,
                  synonyms: payload.synonyms ? payload.synonyms : [],
                },
              ]
            : newSentences,
      };
    }

    default:
      return state;
  }
};
