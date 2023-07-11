import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import About from './components/About';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
    <div>
    <Navbar/>
    <Routes>
          <Route exact path="/" element={<News/>}/>
          <Route exact path="/about" element={<About/>}/>
    </Routes>
    <Footer/>
    </div>
    </Router>
    </>
  );
}

export default App;
