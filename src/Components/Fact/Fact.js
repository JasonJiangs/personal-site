import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import JHUSoccer1 from '../../Assets/image/jhusoccer1.jpg';
import bro1 from '../../Assets/image/bro1.jpg'
import bro2 from '../../Assets/image/bro2.jpg'
import bro3 from '../../Assets/image/bro3.jpg'
import lasoccer from '../../Assets/image/lasoccer.jpg'
import universal from '../../Assets/image/universal.jpg'
import wkusoccer1 from '../../Assets/image/wkusoccer1.jpg'


const Fact = () => {
    const itemData = [
        {
            img: JHUSoccer1,
            title: 'jhusoccer1',
            rows: 2,
            cols: 2,
        },
        {
            img: lasoccer,
            title: 'lasoccer',
            rows: 2,
            cols: 2,
        },
        {
            img: wkusoccer1,
            title: 'wkusoccer1',
            rows: 2,
            cols: 2,
        },
        {
            img: universal,
            title: 'universal',
            rows: 2,
            cols: 2,
        },
        {
            img: bro1,
            title: 'bro1',
            rows: 1.5,
        },
        {
            img: bro2,
            title: 'bro2',
            rows: 1.5,
        },
        {
            img: bro3,
            title: 'bro3',
            rows: 1.5,
        },
        // {
        //     img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
        //     title: 'Basketball',
        // },
        // {
        //     img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
        //     title: 'Fern',
        // },
        // {
        //     img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
        //     title: 'Mushrooms',
        //     rows: 2,
        //     cols: 2,
        // },
        // {
        //     img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
        //     title: 'Tomato basil',
        // },
        // {
        //     img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
        //     title: 'Sea star',
        // },
        // {
        //     img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
        //     title: 'Bike',
        //     cols: 2,
        // },
    ];

    function srcset(image, size, rows = 1, cols = 1) {
        return {
            src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
            srcSet: `${image}?w=${size * cols}&h=${
                size * rows
            }&fit=crop&auto=format&dpr=2 2x`,
        };
    }


    return (
        <div>
            <div style={{margin:"1%"}}>
                <ImageList
                    sx={{ width: "100%", height: '450px' }}
                    variant="quilted"
                    cols={8}
                    rowHeight={121}
                >
                    {itemData.map((item) => (
                        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                            <img
                                {...srcset(item.img, 121, item.rows, item.cols)}
                                alt={item.title}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </div>
            <h3 style={{textAlign:"center"}}>To be developed</h3>
        </div>
    );
};

export default Fact;