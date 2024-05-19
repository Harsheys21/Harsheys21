import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Typography } from '@mui/material';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import { getExperience } from "../../sanity/sanity.utils";
import { useState, useEffect } from 'react';

export default function BasicTimeline() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getExperience(); // Assuming getData returns some data
                setData(result);
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
        <>
            {data.map((experience, index) => (
                <div key={index}>
                    <Timeline>
                        <TimelineItem>
                            <TimelineOppositeContent>
                                <Typography variant="subtitle1" fontWeight="bold">
                                    {experience.start_date} - {experience.end_date}
                                </Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot color='primary' />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Typography variant="subtitle1" fontWeight="bold">
                                    {experience.title}
                                </Typography>
                                <Typography variant='subtitle2'>
                                    {experience.company}
                                </Typography>
                                <Typography variant='subtitle2'>
                                    {experience.location}
                                </Typography>
                                <ul>
                                    {experience.description.map((point, idx) => (
                                        <li key={idx}>
                                            <Typography variant='caption' fontWeight="bold">
                                                {point}
                                            </Typography>
                                        </li>
                                    ))}
                                </ul>
                            </TimelineContent>
                        </TimelineItem>
                    </Timeline>
                </div>
            ))}
        </>
    );
}
