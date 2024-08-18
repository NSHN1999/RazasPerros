
export const getRazasByName = ( name = '', razas ) => {

    name = name.toLocaleLowerCase().trim();

    if( name.length === 0 ) return razas;

    return razas.filter(
        raza => raza.nombre.toLocaleLowerCase().includes(name)
    );
};
