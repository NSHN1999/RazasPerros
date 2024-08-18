import PropTypes from "prop-types";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Collapse, Icon, IconButton, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { useState } from "react";

export const ListItemRaza = ({ raza, subRazas, handleListImage }) => {

    const [ openSubRazas, setOpenSubRazas ] = useState(false);

    const handleOpen = () => {
        setOpenSubRazas(!openSubRazas)
    };

    return (
        <>
        <ListItem sx={{p: 0.5}}>
            {
                ( subRazas.length > 0 ) 
                ? 
                <IconButton sx={{color: '#457b9d'}} onClick={handleOpen}>
                    {(!openSubRazas) ? <ExpandMore/> : <ExpandLess/>}
                </IconButton> 
                : 
                <Icon sx={{
                    width: 40, 
                    height: 40, 
                    padding: 1, 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                }}/>
            }
            
            <ListItemButton
                sx={{borderRadius: 10, color: '#FFF', backgroundColor: 'primary.main', ":hover":{color: 'primary.main', backgroundColor: '#669bbc'}}}
                onClick={() => handleListImage(raza)}
            >
                <ListItemText primary={raza[0].toUpperCase() + raza.slice(1)}/>
            </ListItemButton>
        </ListItem>
        <Collapse in={openSubRazas} timeout='auto' >
            <List sx={{pt: 0, px: 0.5, pb: 0.5}} >
                {
                    subRazas.map((subRaza) => (
                        <ListItemButton 
                            sx={{ml:10, mt: 0.5, borderRadius: 10, backgroundColor:'#669bbc', color: '#FFF', ':hover': {color: '#457b9d', backgroundColor: '#a2d2ff'}}} key={subRaza}
                            onClick={() => handleListImage(raza + ' ' + subRaza)}
                        >
                            <ListItemText primary={raza[0].toUpperCase() + raza.slice(1) + ' ' + subRaza[0].toUpperCase() + subRaza.slice(1)}/>
                        </ListItemButton>
                    ))
                }
            </List>
        </Collapse>
        </>
    );
};

ListItemRaza.propTypes = {
    raza: PropTypes.string.isRequired,
    subRazas: PropTypes.array.isRequired,
    handleListImage: PropTypes.func.isRequired,
}
