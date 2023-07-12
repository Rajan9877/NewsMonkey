import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
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
          <Route exact path="/" element={<News category="" pagesize="6"/>} />
          <Route exact path="/business" element={<News key="business" category='business' pagesize="6"/>}/>
          <Route exact path="/entertainment" element={<News key="entertainment" category='entertainment' pagesize="6"/>}/>
          <Route exact path="/general" key="general" element={<News key="general" category='general' pagesize="6"/>}/>
          <Route exact path="/health" key="health" element={<News key="health" category='health' pagesize="6"/>}/>
          <Route exact path="/science" key="science" element={<News key="science" category='science' pagesize="6"/>}/>
          <Route exact path="/sports" key="sports" element={<News key="sports" category='sports' pagesize="6"/>}/>
          <Route exact path="/technology" key="technology" element={<News key="technology" category='technology' pagesize="6"/>}/>
    </Routes>
    <Footer/>
    </div>
    </Router>
    </>
  );
}

export default App;
