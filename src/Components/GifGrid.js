import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';

import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    

    const { data } = useFetchGifs(category);
    
    return (
        <>

            
            {data.map( img => 
                <GifGridItem 
                    key={img.id}
                    {...img}
                />
            )}
        </>
    )
};
