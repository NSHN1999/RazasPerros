import { Link as RouterLink } from "react-router-dom";
import { FormatListBulleted, GitHub, Menu, Pets, Shuffle } from "@mui/icons-material";
import { AppBar, Drawer, Grid, Icon, IconButton, Link, List, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { useState } from "react";

export const NavBar = () => {

    const [ open, setOpen ] = useState(false);

    const handleDrawer = () => {
        setOpen(!open);
    };

    return (
        <AppBar position="fixed">
            <Grid
                container
                display='flex'
                direction='row'
                alignItems='center'
                sx={{
                    height: 60,
                    pl: 2,
                    pr: 2,
                }}
            >
                <Grid 
                    item
                    sx={{ mr: 2, display: {sm: 'none'}}}    
                >
                    <IconButton onClick={handleDrawer} color="inherit">
                        <Menu/>
                    </IconButton>

                    <Drawer open={open} onClose={() => handleDrawer(false)}>
                        <List sx={{minWidth: 300, width:300, height: '100vh',backgroundColor: 'primary.main'}}>
                            <ListItemButton onClick={() => handleDrawer(false)}>
                                <Link 
                                    display='flex' 
                                    flexDirection='row'
                                    alignItems='center' 
                                    component={RouterLink} 
                                    to='/lista-de-razas' 
                                    sx={{mr: 2, height: 40}} underline="none"
                                >
                                    <ListItemIcon sx={{color: 'white'}}>
                                        <FormatListBulleted/>
                                    </ListItemIcon>
                                    <ListItemText sx={{color: 'white'}} primary='Listado de Razas'/>
                                </Link>
                            </ListItemButton>
                            <ListItemButton onClick={() => handleDrawer(false)}>
                                <Link 
                                    display='flex' 
                                    flexDirection='row'
                                    alignItems='center' 
                                    component={RouterLink} 
                                    to='/raza-aleatoria' 
                                    sx={{mr: 2, height: 40}} underline="none"
                                >
                                    <ListItemIcon sx={{color: 'white'}}>
                                        <Shuffle/>
                                    </ListItemIcon>
                                    <ListItemText sx={{color: 'white'}} primary='Raza aleatoria'/>
                                </Link>
                            </ListItemButton>
                        </List>
                    </Drawer>
                </Grid>

                <Grid
                    flexGrow={1}
                    sx={{display: 'flex', alignItems: 'center'}}
                >
                    <Typography variant="h5">Dog App</Typography>
                    <Icon color="inherit" sx={{display: 'flex', alignItems:'center', justifyContent: 'center'}}>
                        <Pets fontSize="small"/>
                    </Icon>
                </Grid>

                <Grid
                    item
                    sx={{display: {xs: 'none', sm: 'block'}}}
                >
                    <Link
                        color='inherit' 
                        underline='hover'
                        component={RouterLink} 
                        to='/lista-de-razas'
                        sx={{px: 2}}
                    >
                        Lista de razas
                    </Link>
                    <Link 
                        color='inherit' 
                        underline='hover'
                        component={RouterLink} 
                        to='/raza-aleatoria'
                        sx={{px: 2}}
                    >
                        Raza aleatoria
                    </Link>
                </Grid>
                <Grid 
                    marginX={2}
                >   
                    <Link component='a' href="https://github.com/NSHN1999/RazasPerros">
                        <IconButton>
                            <GitHub fontSize="large" sx={{color: 'white'}}/>
                        </IconButton>
                    </Link>
                </Grid>
            </Grid>
        </AppBar>
    );
};
