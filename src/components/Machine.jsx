import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function StandardImageList() {
    return (
        <ImageList cols={5} rowWidth={0}>
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
        img: '/assets/ai/Keras.png',
        title: 'Amplify',
    },
    {
        img: '/assets/ai/NumPy.png',
        title: 'HTML',
    },
    {
        img: '/assets/ai/Pytorch.png',
        title: 'JS',
    },
    {
        img: '/assets/ai/Scikit-learn.png',
        title: 'React',
    },
    {
        img: '/assets/ai/TensorFlow.png',
        title: 'React',
    }
];
