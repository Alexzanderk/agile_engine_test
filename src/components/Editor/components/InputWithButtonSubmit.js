import React from 'react';
import { connect } from 'react-redux';
import { v4 } from 'uuid';
import { handleChangeValue, handleSaveText, resetEditorValues } from '../../../store/editor/editor.actions';
import { editorSelector } from '../../../store/editor/editor.selector';

import './styles/input.sass';

const InputWithButtonSubmit = props => {
  const { value, bold, italic, underline, id, handleChangeValue, handleSaveText, resetEditorValues } = props;

  const submit = () => {
    if (!id) {
      let createId = v4();
      handleSaveText({ value, bold, italic, underline, id: createId });
      resetEditorValues();
      return;
    }

    handleSaveText({ value, bold, italic, underline, id });
    resetEditorValues();
  };

  const handleSubmit = () => value && submit();

  const handleKeyPress = event => {
    if (event.key === 'Enter' && value) {
      submit();
    }
  };

  return (
    <span className='input__container'>
      <input className="input" value={value} placeholder='Enter text here' onKeyPress={handleKeyPress} onChange={handleChangeValue} />
      <button className='btn__submit' onClick={handleSubmit}>Submit</button>
    </span>
  );
};

const mapStateToProps = state => ({
  value: editorSelector.editorValue(state),
  bold: editorSelector.getBold(state),
  italic: editorSelector.getItalic(state),
  underline: editorSelector.getUnderline(state),
  id: editorSelector.getId(state),
});

const mapDispatchToProps = {
  handleChangeValue,
  handleSaveText,
  resetEditorValues,
};

export const InputWithButtonSubmitComponent = connect(mapStateToProps, mapDispatchToProps)(InputWithButtonSubmit);
