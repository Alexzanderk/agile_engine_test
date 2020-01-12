export const synonymsSelector = {
  getSynonyms(state) {
    return state.synonyms.synonyms;
  },

  getId(state) {
    return state.synonyms.id;
  },
};
