import React from 'react';
import { Button } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

const DownloadButton = () => {
    const handleDownload = () => {
        const resumeUrl = '/assets/resume.pdf';
        console.log("Resume URL:", resumeUrl); // Log the resume URL
        const link = document.createElement('a');
        link.href = resumeUrl;
        link.setAttribute('download', 'resume.pdf');

        // Attach event listener to handle errors
        link.addEventListener('error', () => {
            console.error('Error loading PDF document.');
        });

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <Button sx={{ borderRadius: '20px' }}  onClick={handleDownload} size="large" variant='outlined' startIcon={<DownloadIcon />}>
            Download Resume
        </Button>
    );
};

export default DownloadButton;
