import React, { useState } from 'react'
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import Footer from './components/Footer';
import About from './components/About';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const App = () => {
  const [progress, setProgress] = useState(0);
  const [dark, setDark] = useState("light");
  const [query, setQuery] = useState('');
  const [search, setSearch] = useState(false);
  return (
    <>
    <Router>
    <div>
    <LoadingBar
        color='#f11946'
        height='2px'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
    <Navbar search = {search} setSearch = {setSearch} query = {query} setQuery = {setQuery} dark = {dark} setDark = {setDark}/>
    <Routes>
          <Route exact path="/" element={<News query = {query} search = {search} setProgress={setProgress} category="" key="" pagesize="6" dark = {dark} setDark = {setDark}/>} />
          <Route exact path="/about" element={<About query = {query} search = {search} setProgress={setProgress} />} />
          <Route exact path="/business" element={<News query = {query} search = {search} setProgress={setProgress} key="business" category='business' pagesize="6" dark = {dark} setDark = {setDark}/>}/>
          <Route exact path="/entertainment" element={<News query = {query} search = {search} setProgress={setProgress} key="entertainment" category='entertainment' pagesize="6" dark = {dark} setDark = {setDark}/>}/>
          <Route exact path="/general" element={<News query = {query} search = {search} setProgress={setProgress} key="general" category='general' pagesize="6" dark = {dark} setDark = {setDark}/>}/>
          <Route exact path="/health" element={<News query = {query} search = {search} setProgress={setProgress} key="health" category='health' pagesize="6" dark = {dark} setDark = {setDark}/>}/>
          <Route exact path="/science" element={<News query = {query} search = {search} setProgress={setProgress} key="science" category='science' pagesize="6" dark = {dark} setDark = {setDark}/>}/>
          <Route exact path="/sports" element={<News query = {query} search = {search} setProgress={setProgress} key="sports" category='sports' pagesize="6" dark = {dark} setDark = {setDark}/>}/>
          <Route exact path="/technology" element={<News query = {query} search = {search} setProgress={setProgress} key="technology" category='technology' pagesize="6" dark = {dark} setDark = {setDark}/>}/>
    </Routes>
    <Footer/>
    </div>
    </Router>
    </>
  );
}

export default App;
