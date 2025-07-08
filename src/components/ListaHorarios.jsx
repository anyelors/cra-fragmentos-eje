import React from "react";
import horarios from "./Horarios";

function ListaHorarios() {
    return (
        <dl>
            {horarios.map((item) => (
                <React.Fragment key={item.id}>
                    <p><b>Ciudad:</b> {item.ciudad}</p>
                    <p><b>Horario:</b> {item.horario.map(dd => dd.dia + ' ' + dd.hora).join(' | ')}</p>
                </React.Fragment>
            ))}
        </dl>
    );
}

export default ListaHorarios;