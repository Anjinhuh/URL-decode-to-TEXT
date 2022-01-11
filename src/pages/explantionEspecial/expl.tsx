import React from 'react'



function ExplanationEspecialCharacters(){
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
            <div className="div-text-btn">
            </div>
           
            
          </main>
        </div>
        
      </div>
    )
}


export default ExplanationEspecialCharacters