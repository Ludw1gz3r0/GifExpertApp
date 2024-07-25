
// import { getGifs } from '../helpers/getGifs';
import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ( {category, onDeleteCategory }) => {

    const {images, isLoading } = useFetchGifs( category ); 

    console.log(isLoading);

    const handleOnClick = () =>{
        onDeleteCategory(category);
    }

  return (
    <>
        <h3>{category}</h3>
        <button onClick={handleOnClick}>Delete Category</button>
        {
            isLoading && (<h2>Cargando...</h2>)
        }
   
        <div className='card-grid' >
            {
            images.map(( image )=> (
                <GifItem key ={image.id}
                {...image} />
            ))
            }

        </div>

       
    </>
  )
}
