
//https://dog.ceo/api/breeds/list/all  Trae todas las razas
//https://dog.ceo/api/breeds/image/random  Imagen aleatoria
//https://dog.ceo/api/breed/hound/images  Retorna un array de todas las imagenes de una raza (hound)
//https://dog.ceo/api/breed/hound/images/random  Retorna una(s) imagen aleatoria de una raza (hound)
//https://dog.ceo/api/breed/hound/list  Retorna un array de todas las subRazas de una raza (hound)
//https://dog.ceo/api/breed/hound/afghan/images Retorna un array de todas las imagenes de una subRaza (hound/afghan)
//https://dog.ceo/api/breed/hound/afghan/images/random  Retorna una imagen aleatoria de una subRaza (hound/afghan)

import { useEffect, useState } from "react";

export const useFetch = ( url ) => {

    const [ data , setData ] = useState(null);
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(url)
            .then((resp) => resp.json())
            .then((data) => setData(data))
            .finally(() => setLoading(false));
    },[]);

    return { data, loading };
};
