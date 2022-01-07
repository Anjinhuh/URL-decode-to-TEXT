import React, {useEffect, useState} from 'react';
import './App.css'
import api from './services/api'


function App() {
  const [text,setText] = useState<String>()
  const [textAlter, setAlterText] = useState('...')

  function sbtText(){
    api.post('/enviaTexto', {
      texto: text
    }).then(res =>{
      setAlterText(res.data)
    }).catch(err =>{
      throw err
    })
  }
  

  return (
    <div className="App">
      <p>URL Decode</p>
      <div className="input-receive-text">
        <textarea name="input" id="input" onChange={(e) => setText(e.target.value)} placeholder="Digite ou cole seu texto aqui"></textarea>
      </div>

      <div className="btn-sbt-txt">
        <button className="btn" onClick={sbtText}>Decode</button>
      </div>

      <div className='text-result'>
      <textarea value={String(textAlter)} id='resultado-text' disabled={true}></textarea>
      </div>
    </div>
  );
}

export default App;
