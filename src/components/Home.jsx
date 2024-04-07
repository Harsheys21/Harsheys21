import Box from '@mui/material/Box';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {Typography, Button} from '@mui/material';
import DownloadButton from "./DownloadButton"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const Home = ({ aboutRef }) => {
    return (
        <>
            <Box sx={{
                paddingTop: "10%", margin: "auto", display: 'flex', flexDirection: 'row', width: "80%", height: "60vh", boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'}}>
                <Box sx={{display: "flex", justifyContent: "center", width: "50%", alignItems: "center" }}>
                    <Typography variant="h1" textAlign="center" fontWeight="medium">
                        Harsh <br /> Jha
                    </Typography>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", width: "50%" }}>
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "50%" }}>
                        <Typography variant="h5">
                            Welcome to my personal website! Here, 
                            you'll discover insights into my identity, 
                            my professional endeavors, and a 
                            showcase of the projects I've tackled.
                        </Typography>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "center", marginTop: "15%"}}>
                        <DownloadButton/>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: "center"}} >
                <Button variant="h6" onClick={() => aboutRef.current.scrollIntoView({ behavior: 'smooth' })}>
                    <ExpandMoreIcon sx={{ fontSize: 100 }} />
                </Button>
            </Box>
        </>
    );
}

export default Home;
