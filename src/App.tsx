import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Philosophers from "./components/philosophers.tsx";
import Bibliography from "./components/bibliography.tsx";
import Footer from "./components/footer.tsx";
import Description from "./components/description.tsx";

function App() {
  return (
    <>
      <div>
        {" "}
        <h1 className="logo">Una vida bien vivida</h1>
        <BrowserRouter>
          <div
            style={{
              backgroundColor: "aliceblue",
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "16px",
              margin: "8px",
              textAlign: "center",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
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
            <Route path="/" element={<Description />} />
            <Route path="/philosophers" element={<Philosophers />} />
            <Route path="/bibliography" element={<Bibliography />} />
          </Routes>
        </BrowserRouter>
      </div>

      <Footer />
    </>
  );
}

export default App;
