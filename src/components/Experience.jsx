import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import Timeline from "./Timeline";

const Experience = () => {
    // Media queries for different screen sizes
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery((theme) => theme.breakpoints.between("sm", "md"));

    return (
        <Box
            sx={{
                paddingBottom: "10%",
                paddingBottom: isMobile ? "50%" : isTablet ? "20%": "10%",
                margin: "auto",
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                display: 'flex',
                flexDirection: 'column',
                width: isMobile ? "95%" : isTablet ? "90%" : "80%",
                paddingLeft: isMobile || isTablet ? "5%" : "auto",
                paddingRight: isMobile || isTablet ? "5%" : "auto",
                alignItems: "center", // Center the content including the header
            }}
        >
            <Typography variant="h4" fontWeight="bold" sx={{ textAlign: "center" }}>
                Experience
            </Typography>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "100%",
                    mt: 4, // Add some margin-top to separate the header from the content
                }}
            >
                <Timeline />
            </Box>
        </Box>
    );
};

export default Experience;
