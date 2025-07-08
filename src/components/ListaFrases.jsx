import Frases from "./Frases";

const frases = [
  { id: 1, frase: 'Recuerda que no puedes fallar en ser tú mismo', autor: '(Wayne Dyer)' },
  { id: 2, frase: 'Siempre es temprano para rendirse', autor: '(Jorge Álvarez Camacho)' },
  { id: 3, frase: 'Sólo una cosa convierte en imposible un sueño: el miedo a fracasar', autor: '(Paulo Coelho)' },
  { id: 4, frase: 'Lo que haces hoy puede mejorar todos tus mañanas', autor: '(Ralph Marston)' }
];
const tab = '\u00A0';

function ListaFrases() {
  return (
    <section>
      {frases.map((ing) => (
        <div key={ing.id} className="lista">
          <Frases frase={ing.frase + tab} autor={ing.autor} />
        </div>
      ))}
    </section>
  );
}

export default ListaFrases;