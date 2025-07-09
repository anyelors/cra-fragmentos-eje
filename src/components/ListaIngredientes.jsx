import React from "react";
import Ingrediente from "./Ingredientes";

const ingredientes = [
  { id: 1, nombre: 'Harina', cantidad: 250 },
  { id: 2, nombre: 'Miga de Pan', cantidad: 120 },
  { id: 3, nombre: 'Azucar', cantidad: 150 }
];
const tab = '\u00A0';

function ListaIngredientes() {
  return (
    <section>
      {ingredientes.map((ing) => (
        <React.Fragment key={ing.id} className="lista">
          <Ingrediente nombre={ing.nombre +':'+tab} cantidad={ing.cantidad} />
        </React.Fragment>
      ))}
    </section>
  );
}

export default ListaIngredientes;