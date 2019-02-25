import React, { useState, useEffect } from 'react';
import axios from 'axios'

function Frase({data}) {

  const {quote, author} = data


  return (
    <div className="frase">
      <h1>{quote}</h1>
      <p>- {author}</p>
    </div>
  )
}


function App() {

  const [frase, setFrase] = useState({})

  const consultarAPI = async () => {
    const resultado = await axios('https://breaking-bad-quotes.herokuapp.com/v1/quotes');

    setFrase(resultado.data[0]);
  }

  useEffect( 
    () => {
      consultarAPI();
    }, []
  )

  return (
    <div className="contenedor">
      <Frase 
        data={frase}
      />
      <button
        onClick={consultarAPI}
      >Generar nueva frase</button>
    </div>
  )
}

export default App;
