import "./bibliography.css"; 

const bibliographyData = [
  {
    title: "Dar (la) muerte",
    author: "Jacques Derrida",
  },
  {
    title: "Fedón",
    author: "Platón",
  },
  {
    title: "El Banquete",
    author: "Platón",
  },
  {
    title: "Ética a Nicómaco",
    author: "Aristóteles",
  },
  {
    title: "Confesiones",
    author: "San Agustín",
  },
  {
    title: "Fundamentación de la metafísica de las costumbres",
    author: "Immanuel Kant",
  },
  {
    title: "El existencialismo es un humanismo",
    author: "Jean-Paul Sartre",
  },
];

export const myBibliography = () => {
  return (
    <div>
      {bibliographyData.map((book, index) => (
        <div key={index} className="card">
          <h2>{book.title}</h2>
          <p>{book.author}</p>
        </div>
      ))}
    </div>
  );
};

export default myBibliography;
