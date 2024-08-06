import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Philosophers from "./components/philosophers.tsx"

function App() {
  return (
    <>
      <h3>Una vida bien vivida</h3>
      <BrowserRouter>
        <div
          style={{
            backgroundColor: "#f0f0f0",
            padding: "10px",
            marginBottom: "20px",
          }}
        >
          <Link to="/" style={{ marginRight: "10px" }}>
            Introducción
          </Link>
          <Link to="/philosophers" style={{ marginRight: "10px" }}>
            Filósofos
          </Link>
          <Link to="/bibliography" style={{ marginRight: "10px" }}>
            Bibliografía
          </Link>
        </div>

        <Routes>
          <Route path="/" element={<p>Home!</p>} />
          <Route path="/philosophers" element={<Philosophers />} />
          <Route path="/bibliography" element={<p>Bibliografía</p>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
