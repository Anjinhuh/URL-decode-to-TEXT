import React from 'react';
import './App.css'

function App() {
  return (
    <div className="App">
      <p>URL Decode</p>
      <div className="input-receive-text">
        <textarea name="input" id="input" placeholder="Digite ou cole seu texto aqui"></textarea>
      </div>

      <div className="btn-sbt-txt">
        <button className="btn">Decode</button>
      </div>

      <div className='text-result'>
      <textarea disabled={true}></textarea>
      </div>
    </div>
  );
}

export default App;
