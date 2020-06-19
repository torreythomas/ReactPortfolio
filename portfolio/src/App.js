import React from 'react';
import './App.css';
import 'tachyons';

function App() {
  return (
    <div className="App">
      <div className="social-media-links">
       <a href="https://www.linkedin.com/in/torrey-thomas-aa545a186/"><i class="fab  fa-linkedin"></i> </a>
       <a href="https://github.com/torreythomas"> <i class="fab grow top-bar  fa-github-square"></i></a>
        <a href='https://medium.com/@torreythms'><i class="fab grow top-bar fa-medium"></i></a>
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
<div className="open-to-opportunities">
  <p className="op-text"> Open to new opportunities </p>
</div>
<div className="triangle">

</div>
 <ul>
   <li className="nav-item item-1"> <a href="#about"> Me</a></li>
   <li className="nav-item item-2"><a href="#projects"> What I've Done</a></li>
   <li className="nav-item item-3"> <a href="#footer"> Let's Talk</a></li>
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

<div className="john-quote">
  <p>"Torrey came into our program as one of the <br/>youngest students I've ever taught and consistently outperformed what I was expecting".
  <p><strong className="bolder rec">"He has my highest recommendation". </strong></p> </p>
  <p className="john"> - John Serrao, General Assembly Instructor</p>
</div>


<div id="projects">
  <div className='service-wrapper'>
  <a href="https://fathomless-plateau-83900.herokuapp.com/countries" className="service-link">
  <div className="project project1"></div>
  <div className='service-wrapper-inner'>
    <h2> Countries API</h2>
    <div className="description">
      <p className="project-description"> A restful api able to retrieve various countries.</p>
    </div>
  </div>
  </a>
  </div>

  <div className='service-wrapper'>
  <a href="https://refulgence.netlify.app/" className="service-link">
  <div className="project project2"></div>
  <div className='service-wrapper-inner'>
    <h2> Refulgence</h2>
    <div className="description">
      <p className="project-description"> A learning revitalization application</p>
    </div>
  </div>
  </a>
  </div>
  <div className='service-wrapper'>
  <a href="https://smgfoundation.netlify.app/" className="service-link">
  <div className="project project3"></div>
  <div className='service-wrapper-inner'>
    <h2> See More Good</h2>
    <div className="description">
      <p className="project-description"> The official See More Good foundation page.</p>
    </div>
  </div>
  </a>
  </div>

  <div className='service-wrapper'>
  <a href="https://torreythomas.github.io/Hangman/" className="service-link">
  <div className="project project4"></div>
  <div className='service-wrapper-inner'>
    <h2> Hangman</h2>
    <div className="description">
      <p className="project-description"> A halloween-themed hangman application. </p>
    </div>
  </div>
  </a>
  </div>
</div>


<div className="resume-download-container">
  <a href="https://drive.google.com/file/d/1tTXeUxEvOrJFE6Z5RfzHmtk9qYCXhvnt/view" className="resume-button" download >Resumé</a>
  </div>

<div id="footer">
<h2> Like what you see? Let's connect! </h2>
<div className="call-or-email">
<a href="mailto:torreythms@gmail.com"><i className="fas ce fa-envelope-square"></i></a>
<a href="tel:7174216943"><i className="fas ce fa-phone-square-alt"></i></a>
</div>
</div>

<p className="end-text-centered"> This portfolio was created from scratch by Torrey Thomas</p>
    </div>
  );
}

export default App;
