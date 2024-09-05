import { createContext, useRef, useState, useEffect } from 'react';
import Header from "./components/Header/Header";
import Overview from "./components/Overview/Overview";
import ProjectsArea from "./components/ProjectsArea/ProjectsArea";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";

export const ThemeContext = createContext();

function App() {
  // Carregar o tema do localStorage ou definir o padrão como 'dark'
  const savedTheme = localStorage.getItem('theme') || 'dark';
  const [theme, setTheme] = useState(savedTheme);
  const aboutRef = useRef(null);
  const overviewRef = useRef(null);
  const projectsRef = useRef(null);

  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToOverview = () => {
    overviewRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    projectsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme); // Salvar o tema no localStorage
  };

  useEffect(() => {
    document.body.className = theme === 'dark' ? 'dark-theme' : 'light-theme';
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Header 
        scrollToAbout={scrollToAbout} 
        scrollToOverview={scrollToOverview} 
        scrollToProjects={scrollToProjects}
        toggleTheme={toggleTheme} 
      />
      <div ref={overviewRef}>
        <Overview />
      </div>
      <div ref={projectsRef}>
        <ProjectsArea />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <Footer/>
    </ThemeContext.Provider>
  );
}

export default App;
