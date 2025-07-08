const contactos = [
    { id: 1, nombre: 'Pepe', email: 'pepe123@ppp.com', ciudad: 'Eibar' },
    { id: 2, nombre: 'Paco', email: 'paco123@ppp.com', ciudad: 'Bilbo' },
    { id: 3, nombre: 'Lupe', email: 'lupe123@ppp.com', ciudad: 'Eibar' }
];

function ListaContactos() {
    return (
        <dl>
            {contactos.map((cont) => (
                <div key={cont.id}>
                    <dt>{'Nombre: '+cont.nombre}</dt>
                    <dt>{'Email: '+cont.email}</dt>
                    <dd>{'Ciudad: '+cont.ciudad}</dd>
                    <br />
                </div>
            ))}
        </dl>
    );
}

export default ListaContactos;