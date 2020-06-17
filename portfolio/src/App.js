import React from 'react';
import './App.css';
import 'tachyons';

function App() {
  return (
    <div className="App">
      <div className="social-media-links">
        <i class="fab grow top-bar  fa-linkedin"></i> 
        <i class="fab grow top-bar  fa-github-square"></i>
        <i class="fab grow top-bar fa-medium"></i>
        </div>
        <div className="codenumbers">
  <p>1</p><p>2</p><p>3</p><p>4</p><p>5</p><p>6</p><p>7</p><p>8</p><p>9</p><p>10</p><p>11</p><p>12</p><p>13</p><p>14</p><p>15</p><p>16</p><p>17</p><p>18</p><p>19</p><p>20</p> <p>21</p><p>22</p><p>23</p><p>24</p><p>25</p>
</div>
      <div className="container">
      <div id="home">
<h1 className="torrey "><span className="closing-tag"><i class="fas fa-chevron-left"></i></span>Torrey </h1>
    <h1 className="thomas "> Thomas<span className="closing-tag">/<i class="fas fa-chevron-right"></i></span> <p className="web-dev"> id="Web-Developer"<span class="blinking-cursor">|</span> </p> </h1>
</div>
<div className="navigation-bar">
 <ul>
   <li className="nav-item item-1"> <a href="#about"> Me</a></li>
   <li className="nav-item item-2"><a href="#projects"> What I've Done</a></li>
   <li className="nav-item item-3"> Let's Talk</li>
   </ul>
</div>
</div>
<div id="about">
  <div className="photo"> </div>
  <div className="about-text-container">
  <h1 className="introduction"> Helloooooo! </h1>
  <p className="text"> Torrey is a <strong className="bolder"> front-end web developer</strong> who moved to D.C to <br/> 
  find his passion and purpose. He's young, driven, and a hufflepuff. (No matter how many times he retakes the quiz.)
   </p>
   <p className="text"> His focus is on creating <strong className="bolder"> functional and robust code.</strong> </p>

   <p className="text"> When he's not coding he's usually <strong className="bolder"> making music, </strong> <br/>
   playing video games, or hanging out with his brother. 
   </p>
  </div>
</div>
<div id="projects">
<div className="project project1"></div>
<div className="project project2"></div>
<div className="project project3"></div>
<div className="project project4"></div>
</div>
    </div>
  );
}

export default App;
