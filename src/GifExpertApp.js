import React, { useState } from 'react';
import { AddCategory } from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid';

export const GifExpertApp = () => {

    const [category, setCategory] = useState([]);

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory categories={setCategory}/>
            <hr></hr>
                <div className='container'>
                {
                        category.map( category => 
                            <GifGrid
                                key={category}
                                category={category}
                        /> 
                        )
                    }
                </div>
        </>
    )
};
