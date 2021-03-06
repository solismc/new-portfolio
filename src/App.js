import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
  <div className="App">
      <section class="navbar">
        <ul>
          <li>Home</li>
          <li>About me</li>
          <li>Projects</li>
        </ul>
      </section>
      
    
  <section class="section-header">
    <section class="bubble-box-container">
      <section>
      <img class="headshot" src="/images/Manuel-Headshot.jpeg" alt="Manuel Solis" width="200" height="200"/>
      <section class="bubble-box">
        <h2>Manuel Solis</h2>
        <h3 class="bubble-box-span">Full-Stack Dev | Marketing Guru | Mentor</h3>
      </section>
      </section>
    </section>
    </section>
    <section class="quote">
      <h2> "If you think you can or you can't, either way you are right" - H. Ford</h2>
    </section>
    <section class="section-projects">
      <section class="section-projects-images">
      <a class="button" href="/brand.html">
            <img class="square" src="/images/branding.jpg" alt="Branding" height="140" width="auto"/>
          </a>
          <a href="/leadership.html">
            <img class="square" src="/images/leadership.jpg" alt="leadership" height="150" width= "auto"/>
          </a>
          <a href="/projects.html">
            <img class="square" src="/images/code.png" alt="Bomb Sniffer" height="135" width= "180"/>
          </a>
      </section>
    </section>
    <section class="section-header-react"></section>
  </div>
  );
}

export default App;
