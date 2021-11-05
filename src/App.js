import './App.css';
import React from 'react';
import {Article} from './components/index'

function App() {
  return (
    <>
      <Article
        title = {"初投稿"}
        content = {"こんにちは！初投稿です。"}
      />
    </>
  );
}

export default App;