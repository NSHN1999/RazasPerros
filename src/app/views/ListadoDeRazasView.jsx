import { Typography } from "@mui/material";
import { ListRazas, GaleriaImagenes } from "../components";
import { useState } from "react";

export const ListadoDeRazasView = () => {

    const [ razasImages, setRazaImage ] = useState('affenpinscher');

    const handleListImage = ( raza ) => {
        raza = raza.replace(' ', '/')
        setRazaImage(raza);
    };

    return (
        <>
            <Typography sx={{pb: 3}} variant="h4">Listado de Razas</Typography>
            <ListRazas 
                handleListImage={ handleListImage }
            />
            <GaleriaImagenes 
                razasImages={razasImages}
            />
        </>
    );
};
