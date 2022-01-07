import React, {useState} from 'react';
import './App.css'
import api from '../../services/api'

function DecodePage(){
    const [text,setText] = useState<String>()
  const [textAlter, setAlterText] = useState('...')

  function sbtText(){
    api.post('/enviaTextoEncode', {
      texto: text
    }).then(res =>{
      setAlterText(res.data)
    }).catch(err =>{
      throw err
    })
  }
    return(
        <div className="App">
        <div className="head-cases">
  
          <div className="case-div">
           <p>URL Decode</p>
          </div>
  
          <div className="case-div">
           <p>URL Encode</p>
          </div>
  
          <div className="case-div">
           <p>URL Decode</p>
          </div>
  
          <div className="case-div">
           <p>URL Decode</p>
          </div>
  
          <div className="case-div">
           <p>URL Decode</p>
          </div>
  
          
          
        </div>
        <div className="area-util">
          <div className="input-receive-text">
            <textarea name="input" id="input" onChange={(e) => setText(e.target.value)} placeholder="Digite ou cole seu texto aqui"></textarea>
          </div>
  
          <div className="btn-sbt-txt">
            <button className="btn" onClick={sbtText}>Encode</button>
          </div>
  
          <div className='text-result'>
            <textarea value={String(textAlter)} id='resultado-text' disabled={true}></textarea>
          </div>
        </div>
       
      </div>
    )
}

export default DecodePage