import { Box, Typography} from "@mui/material";
import Timeline from "./Timeline"

const Experience = () => {
    return (
        <>
            <Box sx={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', padding: "5%", margin: "5%", marginBottom: 0, display: 'flex', flexDirection: 'column', alignItems: "center", width: "80%" }}>
                <Typography variant="h4" fontWeight="bold">Experience</Typography>
                <Timeline />
            </Box>
        </>
    );
}

export default Experience;