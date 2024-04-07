import { Box, Typography, Button } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
const About = ({ contactRef }) => {
    return (
        <Box sx={{paddingTop: "10%", margin: "auto", boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', width: "80%"}}>
            <Box sx={{display: 'flex', flexDirection: 'row', height: "75vh" }}>
                <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", width: "50%"}}>
                    <Typography fontWeight="bold" variant="h4" mb={2}> Education </Typography>
                    <Typography variant="subtitle1" fontWeight="bold">University of California - Santa Cruz</Typography>
                    <Typography variant="subtitle1" fontWeight="bold">Major: </Typography>
                    <Typography variant="caption" fontWeight="bold">Computer Science B.S. (2021-2024)</Typography>
                    <Typography variant="subtitle1" fontWeight="bold">GPA: </Typography>
                    <Typography variant="caption" fontWeight="bold">3.85</Typography>
                    <Typography variant="subtitle1" fontWeight="bold">Awards: </Typography>
                    <Typography variant="caption" fontWeight="bold">Dean’s Honor List, College Scholars Program</Typography>
                    <Typography variant="subtitle1" fontWeight="bold">Classes Taken:</Typography>
                    <Typography variant="caption" fontWeight="bold">Data Structures</Typography>
                    <Typography variant="caption" fontWeight="bold">Computer Systems Design</Typography>
                    <Typography variant="caption" fontWeight="bold">Machine and Deep Learning</Typography>
                    <Typography variant="caption" fontWeight="bold">Database Systems</Typography>
                    <Typography variant="caption" fontWeight="bold">Natural Language Processing</Typography>
                    <Typography variant="caption" fontWeight="bold">Software Engineering</Typography>
                </Box>
                <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", width: "50%"}}>
                    <Typography variant="h4" fontWeight="bold" mb={2}> About me</Typography>
                    <Typography variant="subtitle1" fontWeight="bold" mb={6} align="center">
                        I'm Harsh Jha, a software engineer based in San Jose, California, specializing in 
                        backend development, data structures, and algorithms. Proficient in Python, C++, and Java, 
                        I excel in project planning and management using SCRUM methodologies. I'm passionate about 
                        exploring the potential of Machine Learning and AI, actively seeking opportunities to deepen 
                        my knowledge through courses and hackathons. Check out my portfolio for a glimpse into my projects 
                        and experience.
                    </Typography>
                    <Button sx={{ borderRadius: '20px' }} size="large" variant='outlined' startIcon={<EmailIcon />} onClick={() => contactRef.current.scrollIntoView({ behavior: 'smooth' })}>
                        Contact Me
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}

export default About;