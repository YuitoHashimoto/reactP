import './App.css';
import React from 'react';
import {Article, TextInput, Counter, ToggleBtn} from './components/index'

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
      <Article
        title = {"state応用編"}
        content = {"counterつくる"}
      />
      <Counter />
      <Article
        title = {"state応用編"}
        content = {"切替ボタンつくる"}
      />
      <ToggleBtn />
    </>
  );
}

export default App;