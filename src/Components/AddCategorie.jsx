import React, { useState } from 'react'

export const AddCategorie = ( {onNewCategory} ) => {
    const [inputValue, setinputValue] = useState('');
 

    const handleInputChange = (event) =>{
        setinputValue(event.target.value);
    }
    const handleSubmit = (event) =>{
        event.preventDefault();

        if( inputValue.trim().length <= 1) return  console.log('El input no puede estar vacio');;

        onNewCategory( inputValue.trim() );
        setinputValue('');
            
    }
  return (

    <form onSubmit={handleSubmit}>
        <input type="text"
        placeholder='Buscar gifs'
        value={inputValue}
        onChange={ handleInputChange}
        />
    </form>
  )

}