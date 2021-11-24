import "./css/App.css";
import Header from "./components/Header";
import Todos from "./components/Todos";
import About from "./components/About";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <nav>
          <Link className="link" to="/">
            TODO List
          </Link>
          <Link className="link" to="/about">
            About
          </Link>
        </nav>
        <Header />
        <Routes>
          <Route path="/" element={<Todos />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
