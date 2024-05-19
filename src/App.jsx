import { useRef } from 'react';
import NavBar from "./components/Navbar";
import './App.css';
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact"
import Admin from "./components/Admin"
import ProjectDetails from './components/ProjectDetails';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar2 from './components/NavBar2';

const theme = createTheme({
  typography: {
    h5: {
      fontWeight: "bold",
    },
    h1: {
      fontWeight: "bold",
      textTransform: "uppercase"
    }
  },
  palette: {
    mode: "dark",
    primary: {
      main: '#FFB347',
    },
    secondary: {
      main: '#4794ff',
    }
  },
});

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={
              <>
                <NavBar
                  homeRef={homeRef}
                  aboutRef={aboutRef}
                  experienceRef={experienceRef}
                  projectsRef={projectsRef}
                  skillsRef={skillsRef}
                  contactRef={contactRef}
                />
                <div ref={homeRef}><Home aboutRef={aboutRef} /></div>
                <div ref={aboutRef}><About contactRef={contactRef} /></div>
                <div ref={experienceRef}><Experience /></div>
                <div ref={skillsRef}><Skills /></div>
                <div ref={projectsRef}><Projects/></div>
                <div ref={contactRef}><Contact /></div>
              </>
            } />
            <Route path="/admin/*" element={<Admin />}/>
            <Route path="/project/:slug" element={
              <>
                <Navbar2/>
                <ProjectDetails />
              </>
            } />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
