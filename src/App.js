import React from 'react';
import Editor from './components/Editor/Editor';
import { RenderSentecesComponent } from './components/RenderSenteces';
import { SynonymsComponent } from './components/Synonyms';

import './app.sass'

const App = () => {
  return (
    <div className="container">
      <div className='text__container'>
        <Editor />
        <RenderSentecesComponent />
      </div>
      <SynonymsComponent />
    </div>
  );
};

export default App;
