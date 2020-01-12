import React from 'react';
import Editor from './components/Editor/Editor';
import { RenderSentecesComponent } from './components/RenderSenteces';

const App = () => {
  return (
    <div>
      <Editor />
      <RenderSentecesComponent />
    </div>
  );
};

export default App;
