import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBold, faUnderline, faItalic } from '@fortawesome/free-solid-svg-icons';
import { editorSelector } from '../../../store/editor/editor.selector';
import { toggleBold, toggleItalic, toggleUnderline } from '../../../store/editor/editor.actions';

import './editorControlls.sass';

const EditorControls = ({ bold, italic, underline, toggleBold, toggleItalic, toggleUnderline }) => {
  return (
    <div>
      <button onClick={toggleBold} className={bold ? 'btn btn__clicked' : 'btn'}>
        <FontAwesomeIcon className="btn_controlls" icon={faBold} />
      </button>
      <button onClick={toggleItalic} className={italic ? 'btn btn__clicked' : 'btn'}>
        <FontAwesomeIcon className="btn_controlls" icon={faItalic} />
      </button>
      <button onClick={toggleUnderline} className={underline ? 'btn btn__clicked' : 'btn'}>
        <FontAwesomeIcon className="btn_controlls" icon={faUnderline} />
      </button>
    </div>
  );
};

const mapStateToProps = state => ({
  bold: editorSelector.getBold(state),
  italic: editorSelector.getItalic(state),
  underline: editorSelector.getUnderline(state),
});

const mapDispatchToProps = {
  toggleBold,
  toggleItalic,
  toggleUnderline,
};

export const EditorControlsComponent = connect(mapStateToProps, mapDispatchToProps)(EditorControls);
