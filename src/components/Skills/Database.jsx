import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function StandardImageList() {
    return (
        <ImageList cols={4} rowWidth={0}>
            {itemData.map((item) => (
                <ImageListItem key={item.img}>
                    <img
                        style={{ objectFit: "contain", height: "10rem" }}
                        src={item.img}
                        alt={item.title}
                        loading="lazy"
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
}

const itemData = [
    {
        img: '/assets/database/DynamoDB.png',
        title: 'Amplify',
    },
    {
        img: '/assets/database/Firebase.png',
        title: 'HTML',
    },
    {
        img: '/assets/database/Neo4j.png',
        title: 'JS',
    },
    {
        img: '/assets/database/PostgreSQL.png',
        title: 'React',
    }
];