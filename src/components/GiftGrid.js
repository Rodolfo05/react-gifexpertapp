import React from 'react';
import { getGifs } from '../helpers/getGifts';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GiftGrid = ({ categoria }) => {

    // const [imagenes, setImagenes] = useState([]);
    const {data:imagenes, loading} = useFetchGifs(categoria);

    // //useEffect permite ejecutar codigo de manera condicional
    // useEffect(() => {
    //     getGifs(categoria)
    //         .then(setImagenes)
    // }, [categoria]) //con [] useEffect solo se dispara una vez


    // getGifs();

    return (
        <>
            <h3 className='animate__animated animate__fadeIn'>{categoria}</h3>

            {loading && <p className='animate__animated animate__flash'>Loading...</p>}

            <div className='card-grid'>

                {
                    imagenes.map(img => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </div>
        </>
    )
};
