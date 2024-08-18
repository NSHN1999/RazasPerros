import PropTypes from "prop-types";
import { ImageList, ImageListItem, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getImagesByRazas } from "../helpers/getImagesByRazas";

export const GaleriaImagenes = ({ razasImages }) => {

    const [ images, setImages ] = useState([]);

    let titulo = razasImages[0].toUpperCase() + razasImages.slice(1);

    const handleImages = async() => {
        const img = await getImagesByRazas(razasImages);
        setImages(img);
    };

    useEffect(() => {
        handleImages();
    },[razasImages]);

    return (
        <>
            <Typography sx={{mt: 3, fontWeight: 2}} variant='h4'>{titulo.replace('/', ' ')}</Typography>
            <ImageList
                className="scrollbar-none"
                sx={{width: '90%', height: 400}}
                cols={3}
                rowHeight={150}
            >
                {
                    images?.map((img) => (
                        <ImageListItem
                            key={img}
                            sx={{overflow: 'hidden'}}
                        >
                            <img src={img}/>
                        </ImageListItem>
                    ))
                }
            </ImageList>
        </>
    );
};

GaleriaImagenes.propTypes = {
    razasImages: PropTypes.string.isRequired,
};