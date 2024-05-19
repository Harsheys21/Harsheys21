import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

function ScrollTop(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector(
            '#back-to-top-anchor',
        );

        if (anchor) {
            anchor.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    return (
        <Fade in={trigger}>
            <Box
                onClick={handleClick}
                role="presentation"
                sx={{ position: 'fixed', bottom: 16, right: 16 }}
            >
                {children}
            </Box>
        </Fade>
    );
}

ScrollTop.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};

export default function BackToTop(props) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [drawerOpen, setDrawerOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    const renderButtons = () => (
        <>
            <ListItem button onClick={() => props.homeRef.current.scrollIntoView({ behavior: 'smooth' })}>
                <ListItemText primary="HOME" />
            </ListItem>
            <ListItem button onClick={() => props.aboutRef.current.scrollIntoView({ behavior: 'smooth' })}>
                <ListItemText primary="ABOUT" />
            </ListItem>
            <ListItem button onClick={() => props.experienceRef.current.scrollIntoView({ behavior: 'smooth' })}>
                <ListItemText primary="EXPERIENCE" />
            </ListItem>
            <ListItem button onClick={() => props.skillsRef.current.scrollIntoView({ behavior: 'smooth' })}>
                <ListItemText primary="SKILLS" />
            </ListItem>
            <ListItem button onClick={() => props.projectsRef.current.scrollIntoView({ behavior: 'smooth' })}>
                <ListItemText primary="PROJECTS" />
            </ListItem>
            <ListItem button onClick={() => props.contactRef.current.scrollIntoView({ behavior: 'smooth' })}>
                <ListItemText primary="CONTACT" />
            </ListItem>
        </>
    );

    return (
        <>
            <AppBar>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    {isMobile ? (
                        <>
                            <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
                                <MenuIcon />
                            </IconButton>
                            <Drawer
                                anchor="left"
                                open={drawerOpen}
                                onClose={handleDrawerToggle}
                            >
                                <Box
                                    sx={{ width: 250 }}
                                    role="presentation"
                                    onClick={handleDrawerToggle}
                                    onKeyDown={handleDrawerToggle}
                                >
                                    <List>
                                        {renderButtons()}
                                    </List>
                                    <Divider />
                                </Box>
                            </Drawer>
                        </>
                    ) : (
                        <Box sx={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
                            {renderButtons()}
                        </Box>
                    )}
                </Toolbar>
            </AppBar>
            <Toolbar id="back-to-top-anchor" />
            <ScrollTop {...props}>
                <Fab size="small" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop>
        </>
    );
}

BackToTop.propTypes = {
    homeRef: PropTypes.object.isRequired,
    aboutRef: PropTypes.object.isRequired,
    experienceRef: PropTypes.object.isRequired,
    skillsRef: PropTypes.object.isRequired,
    projectsRef: PropTypes.object.isRequired,
    contactRef: PropTypes.object.isRequired,
    window: PropTypes.func,
};
