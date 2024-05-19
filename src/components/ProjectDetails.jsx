import { useParams } from 'react-router-dom';
import { Box, Typography, CircularProgress, Grid, Container } from '@mui/material';
import { useEffect, useState } from 'react';
import { getProject } from '../../sanity/sanity.utils';
import imageUrlBuilder from '@sanity/image-url';
import { createClient } from "next-sanity";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import GitHubIcon from '@mui/icons-material/GitHub';
import StorageIcon from '@mui/icons-material/Storage';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { useMediaQuery } from '@mui/material';


const ProjectDetails = () => {
    const { slug } = useParams();

    const client = createClient({
        projectId: "vilmgree",
        dataset: "production",
        apiVersion: "2023-11-05",
    });

    const builder = imageUrlBuilder(client);

    function urlFor(source) {
        return builder.image(source);
    }

    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getProject(slug);
                setProject(result[0]);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, [slug]);

    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

    if (loading) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
                <CircularProgress />
            </Box>
        );
    }

    return (
        <Container maxWidth="md" sx={{ paddingTop: '10vh', textAlign: 'center' }}>
            {project && (
                <Grid container spacing={4} justifyContent="center" alignItems="center">
                    <Grid item xs={12}>
                        <Typography variant="h2" fontWeight="medium">{project.name}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Box display="flex" justifyContent="space-evenly" flexWrap="wrap" gap={2}>
                            <Typography variant="subtitle1" display="flex" alignItems="center">
                                <CalendarMonthIcon sx={{ marginRight: 1 }} /> {project.start_date} - {project.end_date}
                            </Typography>
                            <Typography variant="subtitle1" display="flex" alignItems="center">
                                <GitHubIcon sx={{ marginRight: 1 }} /> {project.github ? <a target="_blank" rel="noopener noreferrer" href={project.github} style={{ textDecoration: 'none', color: 'inherit' }}>View Source Code</a> : "Not Available"}
                            </Typography>
                            <Typography variant="subtitle1" display="flex" alignItems="center">
                                <StorageIcon sx={{ marginRight: 1 }} /> {project.deployment ? <a target="_blank" rel="noopener noreferrer" href={project.deployment} style={{ textDecoration: 'none', color: 'inherit' }}>View App Live</a> : "Not Available"}
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h4" textAlign="left">Overview</Typography>
                        <Typography variant="body1" textAlign="left" paragraph>{project.description[0].children[0].text}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <img
                            style={{ maxWidth: "100%", height: "auto", borderRadius: '8px' }}
                            src={urlFor(project.detailImage).url()}
                            alt={project.name}
                            loading="lazy"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h4" textAlign="left">Tech Stack</Typography>
                        <ImageList cols={isSmallScreen ? 1 : Math.min(project.tech.length, 4)} gap={16} rowHeight={164}>
                            {project.tech.map((skill) => (
                                <ImageListItem key={skill.name}>
                                    <img
                                        style={{ objectFit: "contain", height: "10rem", width: "auto" }}
                                        src={urlFor(skill.image).fit("fillmax").url()}
                                        loading="lazy"
                                        alt={skill.name}
                                    />
                                    <ImageListItemBar title={skill.name} />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </Grid>
                </Grid>
            )}
        </Container>
    );
}

export default ProjectDetails;
