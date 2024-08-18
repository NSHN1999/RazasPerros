import PropTypes from "react";
import { Icon, List } from "@mui/material";
import { ListItemRaza } from "./ListItemRaza";
import { useFetch } from "../helpers";
import { useEffect, useState } from "react";
import { Autorenew } from "@mui/icons-material";
import { InputTextFiltrado } from "./InputTextFiltrado";

export const ListRazas = ({ handleListImage }) => {

    const { data, loading } = useFetch(`https://dog.ceo/api/breeds/list/all`);
    const [ razas, setRazas ] = useState([]);
    const [ razasFilter, setRazasFilter ] = useState([]);

    useEffect(() => {
        if(!loading){
            const razas = Object.entries(data.message)
            const razasYSubRazas = razas.map((raza) => ({
                nombre: raza[0],
                subRaza: raza[1],
            }))
            setRazas(razasYSubRazas);
        };
    },[loading]);

    return (
        <>
        <InputTextFiltrado
            razas={razas}
            setRazasFilter={setRazasFilter}
        />
        <List
            className="scrollbar-none"
            sx={{
                height: 350,
                width: '90%',
                p: 0,
                my: 1,
                overflowY:'scroll',
                borderRadius: 2,
                backgroundColor: '#fff',
                color: '#457b9d'
            }}
        >   
            {
                loading && 
                <Icon 
                    className="icon-loading"
                    sx={{
                    minWidth: '100%', 
                    minHeight: '100%', 
                    display: 'flex', 
                    justifyContent:'center', 
                    alignItems: 'center',
                }}>
                    <Autorenew sx={{height: 50, width: 50}}/>
                </Icon>
            }
            {
                razasFilter.map((raza) => (
                    <ListItemRaza 
                        key={raza.nombre} 
                        raza={raza.nombre}
                        subRazas={raza.subRaza}
                        handleListImage={handleListImage}
                    />
                ))
            }
        </List>
        </>
    );
};