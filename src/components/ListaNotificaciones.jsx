import React from "react";
import Notificacion from "./Notificaciones";

const notificacion = [
  { id: 1, texto: 'Contraseña Incorecta', tipo: 'error' },
  { id: 2, texto: 'Cliente Creado', tipo: 'info' },
  { id: 3, texto: 'Generar Informe', tipo: 'exito' },
  { id: 4, texto: 'Sesión Caducada', tipo: 'error' }

];

function ListaNotificaciones() {
  return (
    <React.Fragment>
      {notificacion.map((n) => (
        <div key={n.id} className="lista">
          <Notificacion texto={n.texto} tipo={n.tipo} />
        </div>
      ))}
    </React.Fragment>
  );
}

export default ListaNotificaciones;