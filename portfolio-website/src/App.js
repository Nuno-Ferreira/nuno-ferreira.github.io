import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/NavBar';
import Home from "./pages";
import About from "./pages/about";
import Projects from "./pages/projects";
import Footer from './components/Footer';

function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
    </Routes>
    <Footer />
</Router>
  );
}

export default App;
