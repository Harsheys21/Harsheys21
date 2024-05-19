import React, { useState, useEffect } from 'react';
import { getData } from "../sanity/sanity.utils";

const Testing = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getData(); // Assuming getData returns some data
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
    }, []); // Empty dependency array means this effect runs only once on component mount

    return (
        <>
            {data.map((project) => (
                console.log(project)
            ))}
        </>
    );
};

export default Testing;
