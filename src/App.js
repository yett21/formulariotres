import React, { useState } from "react";
import { marked } from "marked";
import formato from "./formato"


const App = () => {

  const [inputValues, setInputValues] = useState({

    texto1: "",

    texto2: "",

    texto3: "",

  });



  const handleChange = (e) => {

    const { name, value } = e.target;

    setInputValues({ ...inputValues, [name]: value });

  };




  const generatePDF = () => {

    // pasar a md

    const markdownContent = formato(inputValues.texto1,inputValues.texto2, inputValues.texto3);



    // Cpasar de md a HTML

    const htmlContent = marked(markdownContent);



    // Crear el PDF

  

    const blob = new Blob([markdownContent], { type: 'text/html' });    
    const url = URL.createObjectURL(blob);    
    const link = document.createElement('a');    
    link.href = url;    
    link.download = 'document.html';    
    link.click();    
    URL.revokeObjectURL(url);

  };



  return (

    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>

      <h1>formulario</h1>

      <div style={{ marginBottom: "10px" }}>

        <label>texto 1: </label>

        <input

          type="text"

          name="texto1"

          value={inputValues.texto1}

          onChange={handleChange}

        />

      </div>

      <div style={{ marginBottom: "10px" }}>

        <label>texto 2: </label>

        <input

          type="text"

          name="texto2"

          value={inputValues.texto2}

          onChange={handleChange}

        />

      </div>

      <div style={{ marginBottom: "10px" }}>

        <label>texto 3: </label>

        <input

          type="text"

          name="texto3"

          value={inputValues.texto3}

          onChange={handleChange}

        />

      </div>

      <button onClick={generatePDF} style={{ padding: "10px 20px", marginRight: "10px" }}>

        generar PDF

      </button>


    </div>

  );

};



export default App;