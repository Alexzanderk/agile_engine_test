import React from 'react';
import { connect } from 'react-redux';
import { loaderSelector } from '../store/loader/loader.selector';
import { synonymsSelector } from '../store/synonyms/synonyms.selector';
import { updateText } from '../store/list/list.actions';

import './styles/synonyms.sass';

const Synonyms = ({ isLoading, id, synonyms, updateText }) => {
  const setSynonymToValue = index => {
    updateText(id, synonyms[index].word);
  };

  if (isLoading) {
    return <div className="synonyms__list">Loading...</div>;
  }

  if (!Array.isArray(synonyms || (synonyms && synonyms.length < 1))) {
    return <div className="synonyms__list">No Synonyms, need to select word</div>;
  }

  return (
    <ul className="synonyms__list">
      {synonyms.map(({ word }, index) => (
        <li onDoubleClick={() => setSynonymToValue(index)} key={index}>
          {word}
        </li>
      ))}
    </ul>
  );
};
const mapStateToProps = state => ({
  isLoading: loaderSelector.getIsLoading(state),
  synonyms: synonymsSelector.getSynonyms(state),
  id: synonymsSelector.getId(state),
});

const mapDispatchToProps = {
  updateText,
};

export const SynonymsComponent = connect(mapStateToProps, mapDispatchToProps)(Synonyms);
