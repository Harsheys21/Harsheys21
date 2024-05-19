import { Box, Typography } from "@mui/material";
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { getSkills } from "../../sanity/sanity.utils";
import { useEffect, useState } from "react";
import imageUrlBuilder from '@sanity/image-url';
import { createClient } from "next-sanity";
import useMediaQuery from '@mui/material/useMediaQuery';

const Skills = () => {
    const client = createClient({
        projectId: "vilmgree",
        dataset: "production",
        apiVersion: "2023-11-05",
    });

    const builder = imageUrlBuilder(client);

    function urlFor(source) {
        return builder.image(source);
    }

    const [value, setValue] = React.useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [data, setData] = useState([]);
    const isSmallScreen = useMediaQuery('(max-width:600px)');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getSkills();
                setData(result);
                setValue(result[0]._id);
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
        <Box sx={{ paddingBottom: "5%", paddingTop: "5%", margin: "auto", boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', display: 'flex', flexDirection: 'column', width: "80%" }}>
            <Box sx={{ display: "flex", flex: 2, flexDirection: "column", alignItems: "center", width: "100%" }}>
                <Typography variant="h4" fontWeight="bold">My Skills</Typography>
                <Typography variant="subtitle1" fontWeight="bold" align="center">
                    Specializing in full-stack development, I excel in creating web applications with tools like React and Firebase. I also have a knack for implementing machine learning algorithms using TensorFlow and PyTorch.
                </Typography>

                <Box sx={{ width: '100%', typography: 'body1' }}>
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider', overflow: 'auto' }}>
                            <TabList
                                onChange={handleChange}
                                aria-label="lab API tabs example"
                                variant="scrollable"
                                scrollButtons="auto"
                            >
                                {data.map((skill) => (
                                    <Tab label={skill.name} value={skill._id} key={skill._id} />
                                ))}
                            </TabList>
                        </Box>

                        {data.map((skill) => (
                            <TabPanel value={skill._id} key={skill._id}>
                                <ImageList cols={isSmallScreen ? 1 : skill.images.length} rowHeight={isSmallScreen ? 'auto' : 164}>
                                    {skill.images.map((item) => (
                                        <ImageListItem key={item}>
                                            <img
                                                style={{ objectFit: "contain", height: "10rem" }}
                                                src={urlFor(item).url()}
                                                loading="lazy"
                                                alt={item.alt || ''}
                                            />
                                        </ImageListItem>
                                    ))}
                                </ImageList>
                            </TabPanel>
                        ))}
                    </TabContext>
                </Box>
            </Box>
        </Box>
    );
}

export default Skills;
