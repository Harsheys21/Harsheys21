import { Box, Typography } from "@mui/material";
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import React from 'react';
import Frontend from "./Skills/Frontend"
import Backend from "./Skills/Backend"
import UI from "./Skills/UI"
import Machine from "./Skills/Machine"
import Database from "./Skills/Database"

const Skills = () => {

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Box sx={{ paddingBottom: "10%", paddingTop: "10%", margin: "auto", boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', display: 'flex', flexDirection: 'row', width: "80%" }}>
                <Box sx={{ display: "flex", flex: 2, flexDirection: "column", alignItems: "center", width: "50%"}}>
                    <Typography variant="h4" fontWeight="bold">My Skills</Typography>
                    <Typography variant="subtitle1" fontWeight="bold" align="center">
                        Specializing in full-stack development, I excel in creating web applications with tools like React and Firebase. I also have a knack for implementing machine learning algorithms using TensorFlow and PyTorch.
                    </Typography>
                    
                    <Box sx={{ width: '100%', typography: 'body1' }}>
                        <TabContext value={value}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <TabList onChange={handleChange} aria-label="lab API tabs example">
                                    <Tab label="Front-end" value="1" />
                                    <Tab label="Back-end" value="2" />
                                    <Tab label="UI/UX" value="3" />
                                    <Tab label="Machine Learning" value="4" />
                                    <Tab label="Databases" value="5" />
                                </TabList>
                            </Box>
                            <TabPanel value="1">
                                <Frontend></Frontend>
                            </TabPanel>
                            <TabPanel value="2">
                                <Backend></Backend>
                            </TabPanel>
                            <TabPanel value="3">
                                <UI></UI>
                            </TabPanel>
                            <TabPanel value="4">
                                <Machine></Machine>
                            </TabPanel>
                            <TabPanel value="5">
                                <Database></Database>
                            </TabPanel>
                        </TabContext>
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default Skills;