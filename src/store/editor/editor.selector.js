export const editorSelector = {
  editorValue(state) {
    return state.editor.value;
  },

  getBold(state) {
    return state.editor.bold;
  },

  getItalic(state) {
    return state.editor.italic;
  },

  getUnderline(state) {
    return state.editor.underline;
  },

  getId(state) {
    return state.editor.id;
  },

  getSynonyms(state) {
    return state.editor.synonyms;
  },
};
