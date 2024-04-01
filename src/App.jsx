import { useState } from 'react'
import NavBar from "./components/Navbar"
import './App.css'
import Home from "./components/Home"
import About from "./components/About"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
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

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavBar />
        <Home />
        <About />
        <Experience />
        <Skills />
        {/* <Projects /> */}
      </ThemeProvider> 
    </>
  )
}

export default App
