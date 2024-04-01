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
        img: '/assets/ui/Bootstrap.png',
        title: 'Amplify',
    },
    {
        img: '/assets/ui/Figma.png',
        title: 'HTML',
    },
    {
        img: '/assets/ui/Material.png',
        title: 'JS',
    }
];
