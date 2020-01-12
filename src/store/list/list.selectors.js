export const listSelector = {
  listSentences(state) {
    return state.list.sentences;
  },
  getSelectedText(state, index) {
    console.log('Selector');
    console.log(state);
    return state.list.sentences[index];
  },
};
