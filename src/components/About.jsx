import { Box, Typography, Button } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import { getAbout } from "../../sanity/sanity.utils";
import { useEffect, useState } from "react";
import useMediaQuery from '@mui/material/useMediaQuery';

const About = ({ contactRef }) => {
    const isSmallScreen = useMediaQuery('(max-width:600px)');

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getAbout(); // Assuming getData returns some data
                setData(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();

        // Cleanup function if needed
        return () => {
            // Cleanup logic
        };
    }, []);

    return (
        <Box sx={{ paddingTop: "10%", margin: "auto", boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', width: "80%", paddingBottom: isSmallScreen ? "50vh" : "0vh" }}>
            <Box sx={{ display: 'flex', flexDirection: isSmallScreen ? 'column' : 'row', height: "75vh" }}>
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: isSmallScreen ? "100%" : "50%" }}>
                    <Typography fontWeight="bold" variant="h4" mb={2}> Education </Typography>
                    {data.map((school, index) => (
                        <Box key={index} sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
                            <Typography variant="subtitle1" fontWeight="bold">{school.college}</Typography>
                            <Typography variant="subtitle1" fontWeight="bold">Major: </Typography>
                            <Typography variant="caption" fontWeight="bold">{school.major}</Typography>
                            <Typography variant="subtitle1" fontWeight="bold">GPA: </Typography>
                            <Typography variant="caption" fontWeight="bold">{school.gpa}</Typography>
                            <Typography variant="subtitle1" fontWeight="bold">Awards: </Typography>
                            <ul>
                                {school.awards.map((award, idx) => (
                                    <li key={idx}>
                                        <Typography variant="caption" fontWeight="bold">{award}</Typography>
                                    </li>
                                ))}
                            </ul>
                            <Typography variant="subtitle1" fontWeight="bold">Classes Taken:</Typography>
                            <ul>
                                {school.classes.map((course, idx) => (
                                    <li key={idx} >
                                        <Typography variant="caption" fontWeight="bold">{course}</Typography>
                                    </li>
                                ))}
                            </ul>
                        </Box>
                    ))}
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: isSmallScreen ? "100%" : "50%" }}>
                    <Typography variant="h4" fontWeight="bold" mb={2}> About me</Typography>
                    <Typography variant="subtitle1" fontWeight="bold" mb={6} align="center">
                        I'm Harsh Jha, a software engineer based in San Jose, California, specializing in
                        backend development, data structures, and algorithms. Proficient in Python, C++, and Java,
                        I excel in project planning and management using SCRUM methodologies. I'm passionate about
                        exploring the potential of Machine Learning and AI, actively seeking opportunities to deepen
                        my knowledge through courses and hackathons. Check out my portfolio for a glimpse into my projects
                        and experience.
                    </Typography>
                    {!isSmallScreen && (
                        <Button sx={{ borderRadius: '20px' }} size="large" variant='outlined' startIcon={<EmailIcon />} onClick={() => contactRef.current.scrollIntoView({ behavior: 'smooth' })}>
                            Contact Me
                        </Button>
                    )}
                </Box>
            </Box>
        </Box>
    );
}

export default About;
