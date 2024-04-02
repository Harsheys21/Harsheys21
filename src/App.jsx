import { useRef } from 'react';
import NavBar from "./components/Navbar";
import './App.css';
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { ThemeProvider, createTheme } from '@mui/material/styles';

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

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavBar
          homeRef={homeRef}
          aboutRef={aboutRef}
          experienceRef={experienceRef}
          projectsRef={projectsRef}
          skillsRef={skillsRef}
        />
        <div ref={homeRef}><Home aboutRef={aboutRef} /></div>
        <div ref={aboutRef}><About /></div>
        <div ref={experienceRef}><Experience /></div>
        <div ref={skillsRef}><Skills /></div>
        <div ref={projectsRef}><Projects /></div>
      </ThemeProvider>
    </>
  );
}

export default App;
