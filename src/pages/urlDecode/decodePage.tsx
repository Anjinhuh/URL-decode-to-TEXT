import React, {useState} from 'react';
import './app.css'
import api from '../../services/api'



function DecodePage(){
    const [text,setText] = useState<String>()
    const [textAlter, setAlterText] = useState('...')
     function sbtText(){
      api.post('/enviaTextoDecode', {
        texto: text,
      }).then(res =>{
        setAlterText(res.data)
      }).catch(err =>{
        console.log(err)
      })
    }
    return(

    
      <div className="App">

      <section className="lista-itens">
        <div className="div-item">
          <a href='https://www.easyurldecoder.online/'>URL DECODE</a>
        </div>

        <div className="div-item">
            <a href='https://www.easyurldecoder.online/encode'>URL ENCODE</a>
        </div>

        <div className="div-item">
            <a href='https://www.easyurldecoder.online/explanation'>URL CHARACTERS</a>
        </div>
      </section>
        
        <div className="organize-div">
          <main className="content-div">
            <div className="div-title">
              <p>URL Decode</p>
            </div>
            <div className="div-text-btn">
              <textarea name="input" id="input" onChange={(e) => setText(e.target.value)} placeholder='Insira seu texto aqui'></textarea>
              <button onClick={sbtText}>Decode</button>
              <textarea  value={String(textAlter)} id='resultado-text' disabled={true}></textarea>
            </div>
           
            
          </main>
        </div>
        
      </div>
    )
}

export default DecodePage