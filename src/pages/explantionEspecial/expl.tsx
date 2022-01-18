import React, { useEffect, useState } from 'react'
import './explanation.css'

import api from '../../services/api'




function ExplanationEspecialCharacters(){
  let [arrFirst, setArrFirst] = useState([])
  let [arrSecond, setArrSecond] = useState([])

useEffect(() =>{
  api.get('/retornaCodigos').then((x) =>{
    setArrFirst(x.data.arr)
    setArrSecond(x.data.arr2)
  })
}, []) 
    
    
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
              <p>URL Caracteres</p>
            </div>

            <div className="explanation-content">

            <div className="fix-visual">
              <div className="codigoNormal">

                  <p>Codigo Normal</p>
                  {arrSecond.map((e) => 
                  <div  className='box-codes'>
                    <p>{e['codigo']}</p>
                  </div>
                  )}

                </div>
                <div className="CodigoAlterado">

                  <p>Codigo Alterado</p>
                  {arrSecond.map((e) => 
                  <div className='box-codes'>
                    <p>{e['codePoor']}</p>
                  </div>
                  )}

                </div>
            </div>

            <div className="fix-visual">
              <div className="codigoNormal">

                  <p>Codigo Normal</p>
                  {arrFirst.map((e) => 
                  <div className='box-codes'>
                    <p>{e['codigo']}</p>
                  </div>
                  )}

                </div>
                <div className="CodigoAlterado">

                  <p>Codigo Alterado</p>
                  {arrFirst.map((e) => 
                  <div  className='box-codes'>
                    <p>{e['codePoor']}</p>
                  </div>
                  )}

                </div>
            </div>
              
            </div>
           
            
          </main>
        </div>
        
      </div>
    )
}


export default ExplanationEspecialCharacters