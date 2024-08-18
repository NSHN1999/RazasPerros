import PropTypes from "prop-types";
import { Search } from "@mui/icons-material";
import { Grid, Icon, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { getRazasByName } from "../helpers/getRazasByName";

export const InputTextFiltrado = ({ razas, setRazasFilter }) => {

    const [ valorInput, setValorInput ] = useState("");

    const onInputChange = ({target}) => {
        const valor = target.value;
        setValorInput(valor);
        setRazasFilter(getRazasByName(valor, razas));
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        setValorInput("")
    };

    useEffect(() => {
        if(valorInput.length < 1) setRazasFilter(razas);
    });

    return (
        <Grid
            onSubmit={onFormSubmit}
            component='form'
            container
            direction='row'
            alignItems='center'
            justifyContent='end'
            paddingX={2}
        >
            <Icon sx={{width: 50, height: 50, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <Search fontSize="large"/>
            </Icon>
            <TextField
                onChange={onInputChange}
                value={valorInput}
                label="Buscar raza"
            />
        </Grid>
    );
};

InputTextFiltrado.propTypes = {
    razas: PropTypes.array.isRequired,
    setRazasFilter: PropTypes.func.isRequired,
};