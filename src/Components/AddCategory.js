import React, { useState } from 'react';

export const AddCategory = ({categories}) => {

    const [inputValue, setInputValue] = useState('');

    return (
        <form onSubmit={ e => {
            e.preventDefault();
            if (inputValue.trim().length > 0 ) {
                categories(cats => [inputValue, ...cats])
                setInputValue('');
            }
        } }>
            <input
                type='text'
                value={inputValue}
                onChange={ e => {
                    setInputValue(e.target.value)
                } }
            />
        </form>
    )
};
