import React from "react";

function Frases({ frase, autor }) {
  return (
    <React.Fragment>
      <h3>{frase}</h3>
      <cite>{autor}</cite>
    </React.Fragment>
  );
}

export default Frases;