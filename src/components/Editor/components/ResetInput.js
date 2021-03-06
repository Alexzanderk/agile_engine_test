import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { resetEditorValues } from '../../../store/editor/editor.actions';

import './styles/resetInput.sass';

const ResetInput = ({ resetEditorValues }) => {
  return (
    <button onClick={resetEditorValues} className="btn_reset">
      <FontAwesomeIcon icon={faTimes} />
    </button>
  );
};

const mapDispatchToProps = { resetEditorValues };

export const ResetInputComponent = connect(null, mapDispatchToProps)(ResetInput);
