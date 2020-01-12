import React from 'react';
import { connect } from 'react-redux';
import { listSelector } from '../store/list/list.selectors';
import { handleDoubleClickText } from '../store/list/list.actions';
import { showSynonyms } from '../store/synonyms/synonyms.action';

import './styles/renderSenteces.sass';

const getClassname = ({ bold, italic, underline }) =>
  `${bold ? 'bold' : ''} ${italic ? 'italic' : ''} ${underline ? 'underline' : ''}`;

const RenderSenteces = ({ listSentences, handleDoubleClickText, showSynonyms }) => {
  const handleDoubleClick = index => {
    return handleDoubleClickText(index);
  };

  const handleSelect = () => {
    showSynonyms(window.getSelection().toString());
  };

  if (listSentences.length < 1) {
    return <div>No text here</div>;
  }

  return listSentences.map((item, index) => (
    <ul key={item.id}>
      <li
        onMouseUp={handleSelect}
        onDoubleClick={() => handleDoubleClick(index)}
        className={`${getClassname(item)} list__item`}
      >
        {item.value}
      </li>
    </ul>
  ));
};

const mapStateToProps = state => ({
  listSentences: listSelector.listSentences(state),
});

const mapDispatchToProps = {
  handleDoubleClickText,
  showSynonyms,
};

export const RenderSentecesComponent = connect(mapStateToProps, mapDispatchToProps)(RenderSenteces);
