import { useState } from "react";
import { AddCategorie } from "./Components/AddCategorie";
import { GifGrid } from "./Components/GifGrid";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Jujutsu Kaisen']);

    const onAddCategory = ( newCategory ) =>{
       
        if(categories.includes(newCategory.replace(/\b\w/g, l => l.toUpperCase()))) return console.log('YA EXISTE ESE VALOR');
        setCategories([newCategory.replace(/\b\w/g, l => l.toUpperCase()),...categories ]);
    };

     const deleteCategory = ( category ) =>{
        const newArray = categories.filter(categoria => categoria != category);
        setCategories(newArray);
    }

  return (
    <>
    <h1>GifExpertApp</h1>

    <AddCategorie
        onNewCategory = { onAddCategory }
     />

    {/* Listado de Gif*/}

        {categories.map((category) => (
        
                <GifGrid key = {category} category = {category} onDeleteCategory = {deleteCategory}/>
            )
          
        )}

    </>
  );
};
