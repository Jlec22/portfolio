
import './App.css'
import {AnimatedBackground} from 'animated-backgrounds'
import ImageGrid from './components/ImageGrid'
import ScrollDownButton from "./components/ScrollDownButton";
import HoverText from "./components/HoverText";
import ProjectCard from './components/ProjectCard';
import RecipeRecommender from './assets/RecipeRecommender.png'
import Chip8 from './assets/Chip8.png'
import Planet from './assets/Planet.png'

function App() {
  return (
    <div className="main_container">
      <div id="home" className="title_section">
        <div className="title_background">
          <AnimatedBackground 
            animationName="particleNetwork" 
            theme="portfolio"
            style={{ opacity: 0.3 }}
          />
        </div>

        <div className="title_content">
          <h1>Hello, I'm Jack</h1>
          <h1>I'm a student at the Milwaukee School of Engineering</h1>
          <ScrollDownButton targetId="about" text="View My Work" />
        </div>
      </div>
      
      <div className="navigation_bar">
        <HoverText text="Home" onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })} />
        <HoverText text="About" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} />
        <HoverText text="Projects" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} />
        <HoverText text="Contact" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} />
      </div>

      <div className="about_section">
        <section id="about">
          <h1 style={{fontSize: 40, paddingBottom: 40}}>About Me</h1>
          <p style={{width: 400, paddingBottom: 100}}>I’m a Computer Science student at MSOE who enjoys building 
            software both independently and as part of a team. I’ve worked on a variety of 
            programming projects through school and personal work, and I’ve been actively involved 
            in co-curricular activities throughout high school and college. 
            I have experience with C#, Java, Python, C++, and React, and I’m always looking to learn 
            new technologies and improve my skills through hands-on projects.</p>

            <ImageGrid />
        </section>

        <section id="projects">
          <h1 style={{fontSize: 40, paddingBottom: 40, paddingTop: 50}}>Projects</h1>
            <ProjectCard
              title="Semantic Recipe Search Engine"
              description="A semantic search system that allows users to retrieve recipes using natural language queries."
              imageUrl={RecipeRecommender}
              githubUrl="https://github.com/Jlec22/RecipeRecommendation"
              imagePosition="right"
            />

            <ProjectCard
              title="Chip8 Emulator"
              description="Developed a Chip-8 emulator in C++, recreating classic 8-bit gaming with accurate CPU, graphics, and input emulation."
              imageUrl={Chip8}
              githubUrl="https://github.com/Jlec22/Chip8-Emulator/tree/master"
              imagePosition="left"
            />

            <ProjectCard
              title="Procedural Planet"
              description="A Unity project that procedurally generates a 3D planet with noise-based terrain and altitude-driven surface coloring using C# and HLSL."
              imageUrl={Planet}
              githubUrl="https://github.com/Jlec22/PlanetDemo"
              imagePosition="right"
            />
        </section>

        <section id="contact" style={{paddingBottom: 100}}>
          <h1 style={{fontSize: 40, paddingBottom: 40, paddingTop: 100}}>Contact</h1>
          <p>Email: 1jlec06@gmail.com</p>
          <p>Handshake: https://msoe.joinhandshake.com/profiles/jack-lecloux</p>
          <p>Linkedin: www.linkedin.com/in/jack-lecloux-415568330</p>
        </section>

      </div>
      
    </div>
  );
}

export default App;

