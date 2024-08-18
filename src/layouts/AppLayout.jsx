import PropTypes from 'prop-types'
import { Box, Grid } from "@mui/material";
import { NavBar } from "../app/components/NavBar";

export const AppLayout = ({ children }) => {

    return (
        <Box>
            <NavBar/>
            <Grid
                container
                justifyContent="center"
                sx={{
                    minHeight: '100vh',
                    px:{xs: 5, sm: 10, md: 20, lg: 30}, 
                    pt: 10,
                    pb: 5
                }}
            >
                { children }
            </Grid>
        </Box>
    );
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
}
