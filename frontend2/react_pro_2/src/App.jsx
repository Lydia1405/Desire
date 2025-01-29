import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Portfolio</h1>
        <div className="right-bar">
          <nav className="navbar">
            <a href="#home" onclick="showSection('home')">Home</a>
            <a href="#about" onclick="showSection('about')">About Me</a>
            <a href="#skills" onclick="showSection('skills')">Skills</a>
            <a href="#events" onclick="showSection('events')">Event Participations</a>
            <a href="#contact" onclick="showSection('contact')">Contact</a>
          </nav>
        </div>
      </header>

      <section id="home" className="section">
        <h2>HOME</h2>
        <h1>WELCOME TO MY PORTFOLIO!</h1>
      </section>

      <section id="about" className="section">
        <h2>ABOUT ME</h2>
        <p>I am currently a student at Sri Krishna College of Engineering and Technology, pursuing a degree 
          in Electronics and Communication Engineering (ECE). My academic journey is driven by a passion for
          exploring the dynamic and evolving world of electronics and communication systems. I have a deep
          interest in programming languages and web development, and I love solving complex problems through 
          innovative solutions.Throughout my time at college, I have engaged in various projects and activities
          that have helped me develop a strong foundation in both hardware and software aspects of ECE. I have 
          participated in coding competitions and hackathons, which have not only enhanced my technical skills 
          but also fostered my problem-solving abilities and creativity.In addition to my academic pursuits, I
           am dedicated to continuous learning and personal growth. I enjoy experimenting with different programming 
           languages and frameworks, and I have developed several web applications that showcase my skills in 
           front-end and back-end development. My curiosity and enthusiasm for technology drive me to stay 
           updated with the latest industry trends and advancements.My goal is to contribute to the field of 
           Electronics and Communication Engineering by leveraging my knowledge and skills to create innovative 
           solutions that can positively impact society. I am eager to collaborate with like-minded individuals, 
           learn from diverse experiences, and apply my expertise to real-world challenges. As I continue my 
           academic and professional journey, I strive to make meaningful contributions and leave a lasting 
           impact in the world of technology.</p>
      </section>

      <section id="skills" className="section">
        <h2>SKILLS</h2>
              <li>Web Development</li>
              <li>Programming skills(C++,Java,Python)</li>
              <li>Internet of Things</li>
              <li>Data Structures and Algorithms</li>
      </section>

      <section id="events" className="section">
        <h2>EVENT PARTICIPATIONS</h2>
        <div class="pro">
          <div class="one">
            <h3>PROJECTS</h3>
          <li>Bus Management System</li>
          <li>Automatic Gate Opening(IOT)</li>
          <li>Seizure Detection & Rescue(IOT)</li>
          </div>
          <div class="two">
            <h3>EVENTS ATTENDED</h3>
            <li>IOT workshop</li>
            <li>IEEE Xtreeme Coding Contest</li>
            <li>TCS codevita</li>
            <li>ServiceNow Contest</li>
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <h2>CONTACTS</h2>
        <p><i className="fas fa-envelope"></i> Email: 727723euec098@skcet.ac.in</p>
        <p><i className="fas fa-phone"></i> Phone: 6369756534</p>
        <p><i className="fab fa-linkedin"></i> <a href="https://www.linkedin.com/in/lydia-jemimah-d-4ba32b290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" >LinkedIn</a></p>
      </section>

      <footer>
        <p>&copy; 2025 Lydia Jemimah D. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

