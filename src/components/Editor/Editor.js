import React from 'react';
import { InputWithButtonSubmitComponent } from './components/InputWithButtonSubmit';
import { EditorControlsComponent } from './components/EditorControlls';
import { ResetInputComponent } from './components/ResetInput';

import './styles/editor.sass';

const Editor = () => {
  return (
    <div className="editor">
      <EditorControlsComponent />
      <InputWithButtonSubmitComponent />
      <ResetInputComponent />
    </div>
  );
};

export default Editor;
