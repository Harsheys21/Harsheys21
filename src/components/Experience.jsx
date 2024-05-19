import { Box, Typography} from "@mui/material";
import Timeline from "./Timeline"

const Experience = () => {
    return (
        <>
            <Box sx={{ paddingBottom: "10%", paddingTop: "10%", margin: "auto", boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', display: 'flex', flexDirection: 'row', width: "80%" }}>
                <Box sx={{ display: "flex", flex: 2, flexDirection: "column", alignItems: "center", width: "50%" }}>
                    <Typography variant="h4" fontWeight="bold">Experience</Typography>
                    <Timeline />
                </Box>                    
            </Box>
        </>
    );
}

export default Experience;