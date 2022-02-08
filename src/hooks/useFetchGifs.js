//Los hooks son funciones

import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifts";

export const useFetchGifs = (categoria) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {

        getGifs(categoria)
            .then(imgs => {

                setState({
                    data: imgs,
                    loading: false
                });

            })

    }, [categoria])

    return state; // {data: [], loading: true}

}