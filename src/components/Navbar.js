import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
function showDark(){
  if(props.dark === "light"){
    props.setDark("dark");
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  }else{
    props.setDark("light");
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  }
}
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.dark} bg-${props.dark} fixed-top`}>
      <NavLink className="navbar-brand mx-2" to="/">NewsMonkey</NavLink>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink exact className="nav-link" to="/" activeclassname="active">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about" activeclassname="active">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/business" activeclassname="active">Business</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/entertainment" activeclassname="active">Entertainment</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/general" activeclassname="active">General</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/health" activeclassname="active">Health</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/science" activeclassname="active">Science</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/sports" activeclassname="active">Sports</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/technology" activeclassname="active">Technology</NavLink>
          </li>
        </ul>
      </div>
      <div className="form-check form-switch mx-2">
  <input className="form-check-input" onClick={showDark} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" style={props.dark=="light" ? {color: "#343a40"}: {color: "white"}} htmlFor="flexSwitchCheckDefault">{props.dark=="light"?"Enable " : "Disable "} Dark Mode</label>
</div>
    </nav>
  );
};

export default Navbar;
