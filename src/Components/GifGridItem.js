import React from 'react';

export const GifGridItem = ({title, image}) => {


    return  (
        
        <div className='card'>
            <p className='title'> {title} </p>
            <img className='card-img' src={image} alt={title}/>
        </div>
    )
};
