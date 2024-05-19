import { Box, Typography } from "@mui/material";
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import React from 'react';
import { projectCategories, projectPreview } from "../../sanity/sanity.utils";
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import imageUrlBuilder from '@sanity/image-url';
import { createClient } from "next-sanity";
import useMediaQuery from '@mui/material/useMediaQuery';

const Projects = () => {
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
    const [data, setData] = useState([]);
    const [projects, setProjects] = useState([]);
    const isSmallScreen = useMediaQuery('(max-width:600px)');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await projectCategories();
                const result_two = await projectPreview();
                setData(result);
                setValue(result[0]);

                const groupedProjects = result_two.reduce((acc, project) => {
                    const { category, name, previewImage, slug } = project;
                    if (!acc[category]) {
                        acc[category] = [];
                    }
                    acc[category].push({ name, previewImage, slug });
                    return acc;
                }, {});

                setProjects(groupedProjects);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();

        return () => {
            // Cleanup logic
        };
    }, []);

    return (
        <Box sx={{ paddingTop: "5%", paddingBottom: "10%", margin: "auto", boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', display: 'flex', flexDirection: 'column', width: "80%" }}>
            <Box sx={{ display: "flex", flex: 2, flexDirection: "column", alignItems: "center", width: "100%" }}>
                <Typography variant="h4" fontWeight="bold">Projects</Typography>

                <Box sx={{ width: '100%', typography: 'body1' }}>
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider', overflow: 'auto' }}>
                            <TabList
                                onChange={handleChange}
                                aria-label="lab API tabs example"
                                variant="scrollable"
                                scrollButtons="auto"
                            >
                                {data.map((project) => (
                                    <Tab label={project} value={project} key={project} />
                                ))}
                            </TabList>
                        </Box>

                        {Object.entries(projects).map(([category, p]) => (
                            <TabPanel value={category} key={category}>
                                <ImageList cols={isSmallScreen ? 1 : p.length} rowHeight={isSmallScreen ? 'auto' : 164}>
                                    {p.map((item) => (
                                        <Link key={item.slug} to={`/project/${item.slug}`}>
                                            <ImageListItem>
                                                <img
                                                    style={{ objectFit: "contain", height: isSmallScreen ? 'auto' : "10rem" }}
                                                    src={urlFor(item.previewImage).fit("fillmax").width(200).height(200).url()}
                                                    loading="lazy"
                                                    alt={item.name}
                                                />
                                                <ImageListItemBar title={item.name} />
                                            </ImageListItem>
                                        </Link>
                                    ))}
                                </ImageList>
                            </TabPanel>
                        ))}
                    </TabContext>
                </Box>
            </Box>
        </Box>
    );
};

export default Projects;
