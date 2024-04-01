import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function StandardImageList() {
    return (
        <ImageList cols={3} rowWidth={0}>
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
        img: './src/assets/backend/Amplify.png',
        title: 'Amplify',
    },
    {
        img: './src/assets/backend/Lambda.png',
        title: 'HTML',
    },
    {
        img: './src/assets/backend/Node.png',
        title: 'JS',
    },
];