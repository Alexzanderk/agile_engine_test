import React from 'react';
import { connect } from 'react-redux';
import { listSelector } from '../store/list/list.selectors';
import { handleSelectText } from '../store/list/list.actions';

import './styles/renderSenteces.sass';

const getClassname = ({ bold, italic, underline }) =>
  `${bold ? 'bold' : ''} ${italic ? 'italic' : ''} ${underline ? 'underline' : ''}`;

const RenderSenteces = ({ listSentences, handleSelectText }) => {
  const handleSelect = index => {
    return handleSelectText(index);
  };

  if (listSentences.length < 1) {
    return <div>No text here</div>;
  }

  return listSentences.map((item, index) => (
    <ul key={item.id}>
      <li onDoubleClick={() => handleSelect(index)} className={`${getClassname(item)} list__item`}>
        {item.value}
      </li>
    </ul>
  ));
};

const mapStateToProps = state => ({
  listSentences: listSelector.listSentences(state),
});

const mapDispatchToProps = {
  handleSelectText,
};

export const RenderSentecesComponent = connect(mapStateToProps, mapDispatchToProps)(RenderSenteces);
