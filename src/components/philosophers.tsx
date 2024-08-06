import "./philosophers.css";

const philosophersData = [
  {
    name: "Sócrates",
    image: "images/socrate.webp",
    description:
      "Filósofo griego considerado como uno de los más grandes de la filosofía occidental.",
    centralIdea: "La vida no examinada no merece ser vivida.",
  },
  {
    name: "Aristóteles",
    image: "images/aristoteles.webp",
    description:
      "Filósofo y científico griego, discípulo de Platón y maestro de Alejandro Magno.",
    centralIdea: "La eudaimonía: la vida virtuosa y la búsqueda del bien.",
  },
  {
    name: "San Agustín",
    image: "images/san_agustin.webp",
    description:
      "Filósofo y teólogo cristiano, autor de las 'Confesiones', que examinan la búsqueda de Dios y la verdadera felicidad.",
    centralIdea: "La búsqueda de Dios y la verdadera felicidad.",
  },
  {
    name: "Kant",
    image: "images/kant.webp",
    description:
      "Filósofo alemán conocido por su trabajo sobre ética y la teoría del conocimiento.",
    centralIdea:
      "El imperativo categórico: la moralidad basada en principios universales.",
  },
  {
    name: "Jean-Paul Sartre",
    image: "images/sartre.webp",
    description: "Filósofo francés y figura central del existencialismo.",
    centralIdea:
      "El existencialismo y la libertad: responsabilidad individual y autenticidad.",
  },
  {
    name: "Judith Butler",
    image: "images/judith_butler.webp",
    description:
      "Filósofa y teórica feminista conocida por su trabajo en teoría de género y filosofía política.",
    centralIdea:
      "Llorabilidad: la teoría sobre la pérdida y el reconocimiento de la vulnerabilidad.",
  },
];

export const myPhilosophers = () => {
  return (
    <div>
      {philosophersData.map((philosopher, index) => (
        <div key={index} className="card">
          <img src={philosopher.image} alt={philosopher.name} />
          <h2>{philosopher.name}</h2>
          <p>{philosopher.centralIdea}</p>
        </div>
      ))}
    </div>
  );
};

export default myPhilosophers;
