import { Navigate, Route, Routes } from "react-router-dom";
import { ListadoDeRazasView, RazaAleatoriaView } from "../views";

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="listado-de-razas" element={<ListadoDeRazasView/>}/>

            <Route path="raza-aleatoria" element={<RazaAleatoriaView/>}/>

            <Route path="/*" element={<Navigate to="/listado-de-razas"/>}/>
        </Routes>
    );
};
