function Notificacion({ texto, tipo }) {
    let color;
    if (tipo === 'info'){
        color = 'yellow';
    } else if (tipo === 'exito'){
        color = 'green';
    }  else if (tipo === 'error'){
      color = 'red';
    }

  return (
    <>
      <h4 style={{ color: color || 'black' }}>
        <b>{texto}</b>
      </h4>
    </>
  );
}

export default Notificacion;