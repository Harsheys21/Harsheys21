import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import DownloadButton from "./DownloadButton";
import useMediaQuery from '@mui/material/useMediaQuery';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Home = ({ aboutRef }) => {
    const isSmallScreen = useMediaQuery('(max-width:600px)');

    return (
        <Box sx={{ paddingTop: "10%", paddingBottom: isSmallScreen ? "5vh": "0vh", margin: "auto", width: "80%", boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
            <Box sx={{ display: 'flex', flexDirection: isSmallScreen ? 'column' : 'row', height: "60vh" }}>
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", width: isSmallScreen ? "100%" : "50%" }}>
                    <Typography variant="h1" textAlign="center" fontWeight="medium">
                        Harsh <br /> Jha
                    </Typography>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", width: isSmallScreen ? "100%" : "50%" }}>
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: isSmallScreen ? "auto" : "50%" }}>
                        <Typography variant="h5" textAlign="center">
                            Welcome to my personal website! Here,
                            you'll discover insights into my identity,
                            my professional endeavors, and a
                            showcase of the projects I've tackled.
                        </Typography>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "center", marginTop: isSmallScreen ? "5%" : "15%" }}>
                        <DownloadButton />
                    </Box>
                </Box>
            </Box>
            {!isSmallScreen && (
                <Box sx={{ display: 'flex', justifyContent: "center", marginTop: "5%" }} >
                    <Button variant="h6" onClick={() => aboutRef.current.scrollIntoView({ behavior: 'smooth' })}>
                        <ExpandMoreIcon sx={{ fontSize: 100 }} />
                    </Button>
                </Box>
            )}
        </Box>
    );
}

export default Home;
