import './App.css';
import React from 'react';
import {Article,TextInput} from './components/index'

function App() {
  return (
    <>
      <Article
        title = {"props, stateチュートリアル"}
        content = {"useStateつかってみた"}
      />
      <Article
        title = {"state応用編"}
        content = {"onChange"}
      />
      <TextInput/>
    </>
  );
}

export default App;