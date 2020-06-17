import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="social-media-links">
        <i class="fab top-bar fa-linkedin"></i> 
        <i class="fab top-bar  fa-github-square"></i>
        <i class="fab top-bar fa-medium"></i>
        </div>
      <div className="container">
      <div id="home">
<h1 className="torrey"><span className="closing-tag"><i class="fas fa-chevron-left"></i></span>Torrey </h1>
    <h1 className="thomas "> Thomas<span className="closing-tag">/<i class="fas fa-chevron-right"></i></span> <p className="web-dev"> id="Web Developer"<span class="blinking-cursor">|</span> </p> </h1>
</div>
<div className="navigation-bar">
 <ul>
   <li className="nav-item item-1"> Me </li>
   <li className="nav-item item-2"> What I've Made</li>
   <li className="nav-item item-3"> Let's Talk</li>
   </ul>
</div>
</div>
    </div>
  );
}

export default App;
