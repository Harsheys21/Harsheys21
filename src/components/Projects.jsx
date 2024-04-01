import { Box, Typography } from "@mui/material";
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import React from 'react';
import Frontend from "./Frontend"
import Backend from "./Backend"
import UI from "./UI"
import Machine from "./Machine"
import Database from "./Database"

const Skills = () => {

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Box sx={{ margin: "10%", marginBottom: 0, display: 'flex', flexDirection: 'row', width: "80%", height: "60vh" }}>
                <Box sx={{ display: "flex", flex: 2, flexDirection: "column", alignItems: "center", width: "50%" }}>
                    <Typography variant="h4" fontWeight="bold">Projects</Typography>

                    <Box sx={{ width: '100%', typography: 'body1' }}>
                        <TabContext value={value}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <TabList onChange={handleChange} aria-label="lab API tabs example">
                                    <Tab label="Artifical Intelligence" value="1" />
                                    <Tab label="Machine Learning" value="2" />
                                    <Tab label="Web Development" value="3" />
                                    <Tab label="Systems Programming" value="4" />
                                    <Tab label="Data Science and Analysis" value="5" />
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