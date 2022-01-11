import React, { useEffect } from 'react'
import './explanation.css'
import api from '../../services/api'




function ExplanationEspecialCharacters(){
  useEffect(() =>{
    api.get('/retornaCodigos').then(x =>{
      console.log(x)

    })
})
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
            <a href='http://localhost:3000'>URL HTML</a>
        </div>

        <div className="div-item">
            <a href='http://localhost:3000'>URL CHARACTERS</a>
        </div>
      </section>
        
        <div className="organize-div">
          <main className="content-div">
            <div className="div-title">
              <p>URL Caracteres</p>
            </div>

            <div className="explanation-content">
              
              <div className="codigoNormal">
                  <p>Codigo Normal</p>
                  <p>%</p>
              </div>

              <div className="CodigoAlterado">
                  <p>Codigo Alterado</p>
                  <p>%25</p>
              </div>

            </div>
           
            
          </main>
        </div>
        
      </div>
    )
}


export default ExplanationEspecialCharacters