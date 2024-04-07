import { Box, Typography } from "@mui/material";
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import React from 'react';
import AI from "./Projects/AI"
import Data from "./Projects/data"
import ML from "./Projects/ML"
import Systems from "./Projects/systems"
import Webdev from "./Projects/webdev"

// Projects

// 1. ** Artificial Intelligence **:
// - Evolving - Mario - Levels: question mark
// - HTN - Planning -for-Minecraft: checklist
// - Navmesh - Pathfinding: map
// - Planet - Wars -with-Behavior - Trees: rocket
// - Monte - Carlo - Tree - Search -for-Ultimate - Tic - TacToe: close

// 2. ** Machine Learning **:
// - Facial Gaming: brain
//     - Transfer - Learning - Challenge: landscape

// 3. ** Web Development **:
// - Study - Link: school
//     - Petals - Website: celebration
//         - ShoppingCart: addshopping
//             - Soteria: directionsrun
//                 - Dojo - Blog: book
//                     - Job - Search: work

// 4. ** Systems Programming **:
// - Multi - Threaded - HTTP - Server: http
//     - HTTP - Server: https

// 5. ** Data Science and Analysis **:
// - HO1: BarCHart
//     - HO3: CleaningServices
//         - HO4: homerepair
//             - HO5: Science


const Skills = () => {

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Box sx={{ paddingTop: "25%", margin: "auto", boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', display: 'flex', flexDirection: 'row', width: "80%", height: "100vh" }}>
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
                                <AI></AI>
                            </TabPanel>
                            <TabPanel value="2">
                                <ML></ML>
                            </TabPanel>
                            <TabPanel value="3">
                                <Webdev></Webdev>
                            </TabPanel>
                            <TabPanel value="4">
                                <Systems></Systems>
                            </TabPanel>
                            <TabPanel value="5">
                                <Data></Data>
                            </TabPanel>
                        </TabContext>
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default Skills;