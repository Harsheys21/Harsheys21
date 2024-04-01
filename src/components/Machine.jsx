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
        img: './src/assets/ai/Keras.png',
        title: 'Amplify',
    },
    {
        img: './src/assets/ai/NumPy.png',
        title: 'HTML',
    },
    {
        img: './src/assets/ai/Pytorch.png',
        title: 'JS',
    },
    {
        img: './src/assets/ai/Scikit-learn.png',
        title: 'React',
    },
    {
        img: './src/assets/ai/TensorFlow.png',
        title: 'React',
    }
];