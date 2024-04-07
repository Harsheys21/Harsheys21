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

export default function BackToTop(props) {
    return (
        <>
            <AppBar >
                <Toolbar sx={{ display: "flex", justifyContent: "space-around" }}>
                    <Button variant="h6" onClick={() => props.homeRef.current.scrollIntoView({ behavior: 'smooth' })}>
                        HOME
                    </Button>
                    <Button variant="h6" onClick={() => props.aboutRef.current.scrollIntoView({ behavior: 'smooth' })}>
                        ABOUT
                    </Button>
                    <Button variant="h6" onClick={() => props.experienceRef.current.scrollIntoView({ behavior: 'smooth' })}>
                        EXPERIENCE
                    </Button>
                    <Button variant="h6" onClick={() => props.skillsRef.current.scrollIntoView({ behavior: 'smooth' })}>
                        SKILLS
                    </Button>
                    {/* <Button variant="h6" onClick={() => props.projectsRef.current.scrollIntoView({ behavior: 'smooth' })}>
                        PROJECTS
                    </Button> */}
                    <Button variant="h6" onClick={() => props.contactRef.current.scrollIntoView({ behavior: 'smooth' })}>
                        CONTACT
                    </Button>
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
