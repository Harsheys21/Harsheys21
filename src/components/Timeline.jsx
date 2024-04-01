import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Typography } from '@mui/material';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

export default function BasicTimeline() {
    return (
        <Timeline>
            <TimelineItem>
                <TimelineOppositeContent>
                    <Typography variant="subtitle1" fontWeight="bold">
                        Jan 2024 - Jun 2024
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color='primary'/>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography variant="subtitle1" fontWeight="bold">
                        Full Stack Developer
                    </Typography>
                    <Typography variant='subtitle2'>
                        Santa Cruz Police Department
                    </Typography>
                    <Typography variant='subtitle2'>
                        Santa Cruz, CA
                    </Typography>
                    <ul>
                        <li>
                            <Typography variant='caption' fontWeight="bold">
                                Developed a self-reporting platform for officers, improving data collection and statistics
                            </Typography>
                        </li>
                        <li>    
                            <Typography variant='caption' fontWeight="bold">
                                Developed an intuitive UI displaying maps, graphs, trends, and search options
                            </Typography>
                        </li>
                        <li>
                            <Typography variant='caption' fontWeight="bold">
                                Added features such as location search and heat maps
                            </Typography>
                        </li>
                        <li>
                            <Typography variant='caption' fontWeight="bold">
                                Utilized Machine Learning algorithms to categorize and predict crimes
                            </Typography>
                        </li>
                    </ul>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent>
                    <Typography variant="subtitle1" fontWeight="bold">
                        Jul 2023 - Aug 2023
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color='primary'/>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography variant="subtitle1" fontWeight="bold">
                        Front End Developer
                    </Typography>
                    <Typography variant="subtitle2">
                        Petals Events & Decor LLC
                    </Typography>
                    <Typography variant="subtitle2">
                        San Jose, CA
                    </Typography>
                    <ul>
                        <li>
                            <Typography variant='caption' fontWeight="bold">
                                Redesigned the website using React to allow for faster load time
                            </Typography>
                        </li>
                        <li>
                            <Typography variant='caption' fontWeight="bold">
                                Revamped the contact page to significantly expedite email delivery and ensure consistent performance
                            </Typography>
                        </li>
                        <li>
                            <Typography variant='caption' fontWeight="bold">
                                Streamlined UI with cleaner, more professional color palette for enhanced readability and simplified accessibility
                            </Typography>
                        </li>
                    </ul>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent>
                    <Typography variant="subtitle1" fontWeight="bold">
                        Jan 2023 - Feb 2024
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color='primary'/>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography variant="subtitle1" fontWeight="bold">
                        Community Lead
                    </Typography>
                    <Typography variant="subtitle2">
                        Association for Computing Machinery
                    </Typography>
                    <Typography variant="subtitle2">
                        Santa Cruz, CA
                    </Typography>
                    <ul>
                        <li>
                            <Typography variant='caption' fontWeight="bold">
                                ACM, a student-run organization, cultivates an inclusive community for computer science enthusiasts to learn, network, and support one another
                            </Typography>
                        </li>
                        <li>
                            <Typography variant='caption' fontWeight="bold">
                                Increased quarterly events by 80% with diverse events (Google STEP workshop, movie nights, etc.)
                            </Typography>
                        </li>
                        <li>
                            <Typography variant='caption' fontWeight="bold">
                                Created partnerships with UCSC colleges, improving ACM's finances and visibility
                            </Typography>
                        </li>
                    </ul>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent>
                    <Typography variant="subtitle1" fontWeight="bold">
                        Jul 2022 - Aug 2022
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color='primary'/>
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent>
                    <Typography variant="subtitle1" fontWeight="bold">
                        Front End Developer
                    </Typography>
                    <Typography variant="subtitle2">
                        Petals Events & Decor LLC
                    </Typography>
                    <Typography variant="subtitle2">
                        San Jose, CA
                    </Typography>
                    <ul>
                        <li>
                            <Typography variant='caption' fontWeight="bold">
                                Petals specializes in diverse event planning & decor, covering events from birthdays to weddings
                            </Typography>
                        </li>
                        <li>
                            <Typography variant='caption' fontWeight="bold">
                                Developed Petals' responsive website prioritizing services, events, & seamless navigation
                            </Typography>
                        </li>
                        <li>
                            <Typography variant='caption' fontWeight="bold">
                                Implemented advanced strategies for enhanced client communication & website efficiency
                            </Typography>
                        </li>
                        <li>
                            <Typography variant='caption' fontWeight="bold">
                                Achieved successful engagement with over 100 clients within 6 months
                            </Typography>
                        </li>
                    </ul>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent>
                    <Typography variant="subtitle1" fontWeight="bold">
                        Oct 2021 - Mar 2022
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color='primary'/>
                </TimelineSeparator>
                <TimelineContent>
                    <Typography variant="subtitle1" fontWeight="bold">
                        Front End Developer
                    </Typography>
                    <Typography variant="subtitle2">
                        2022 GDSC Solution Challenge
                    </Typography>
                    <Typography variant="subtitle2">
                        Santa Cruz, CA
                    </Typography>
                    <ul>
                        <li>
                            <Typography variant='caption' fontWeight="bold">
                                Collaborated on a GDSC Solution Challenge project for UN Sustainable Development Goals, with a focus on Sustainable cities, communities, and good health
                            </Typography>
                        </li>
                        <li>
                            <Typography variant='caption' fontWeight="bold">
                                Created the Soteria website to address safety concerns in Santa Cruz, providing users with safe travel routes
                            </Typography>
                        </li>
                        <li>
                            <Typography variant='caption' fontWeight="bold">
                                Utilized Javascript for parsing JSON file and integrating mapping
                                libraries like Mapbox GL JS and Google Maps Geolocation API to create interactive and precise maps
                            </Typography>
                        </li>
                    </ul>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    );
}