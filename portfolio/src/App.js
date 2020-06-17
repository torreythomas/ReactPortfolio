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
