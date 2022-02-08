import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GiftGrid } from './components/GiftGrid';

const GiftExpertApp = () => {

    // const categorias = ['Goku', 'Charmeleon', 'Naruto'];
    const [categorias, setCategorias] = useState(['Wartortle']);

    // const handleAdd = () => {
    //     setCategorias(
    //         ['Ok lets go', ...categorias]
    //         //[...categorias, 'Ok lets go']
    //         //setCategorias(categ => [...categ, 'Nueva Categoria']); //Tambien sirve, serCategorias tiene un callback con el primer argumento es el valor del estado anterior y el segundo el nuevo estado arreglo 
    //     );
    //     console.log(categorias);
    // }

    return(
        <>
            <h2>Gift Expert App!</h2>
            <AddCategory setCategorias={setCategorias}/>
            <hr/>

            

            <ol>
                {
                    categorias.map(categoria => (
                        <GiftGrid
                        key={categoria}
                        categoria={categoria}/>
                    ))
                }
            </ol>
        </>
    );

}

export default GiftExpertApp;