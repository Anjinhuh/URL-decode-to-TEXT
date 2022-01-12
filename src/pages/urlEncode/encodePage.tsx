import React, {useState} from 'react';
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

      <section className="lista-itens">
        <div className="div-item">
          <a href='http://localhost:3000/decode'>URL DECODE</a>
        </div>

        <div className="div-item">
            <a href='http://localhost:3000/encode'>URL ENCODE</a>
        </div>

        <div className="div-item">
            <a href='http://localhost:3000/explanation'>URL CHARACTERS</a>
        </div>
      </section>
      
      <div className="organize-div">
        <main className="content-div">
          <div className="div-title">
            <p>URL Encode</p>
          </div>
          <div className="div-text-btn">
            <textarea name="input" id="input" onChange={(e) => setText(e.target.value)} placeholder='Insira seu texto aqui'></textarea>
            <button onClick={sbtText}>Encode</button>
            <textarea  value={String(textAlter)} id='resultado-text' disabled={true}></textarea>
          </div>
         
          
        </main>
      </div>
      
    </div>
    )
}

export default DecodePage