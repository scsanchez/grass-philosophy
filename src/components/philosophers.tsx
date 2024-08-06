import "./philosophers.css" 

const philosophersData = [
  {
    name: "Sócrates",
    image: "public/images/aristoteles.webp",
    description: "Filósofo griego considerado como uno de los más grandes de la filosofía occidental."
  },
  {
    name: "Platón",
    image: "public/images/aristoteles.webp",
    description: "Discípulo de Sócrates y maestro de Aristóteles, fundador de la Academia de Atenas."
  },
  {
    name: "Aristóteles",
    image: "public/images/aristoteles.webp",
    description: "Filósofo y científico griego, discípulo de Platón y maestro de Alejandro Magno."
  }
];

export const myPhilosophers = () => {
  return (
    <div>
      {philosophersData.map((philosopher, index) => (
        <div key={index} className="card">
          <img src={philosopher.image} alt={philosopher.name} />
          <h2>{philosopher.name}</h2>
          <p>{philosopher.description}</p>
        </div>
      ))}
    </div>
  );
};

export default myPhilosophers;