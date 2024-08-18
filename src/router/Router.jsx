import { Navigate, Route, Routes } from "react-router-dom";
import { AppRouter } from "../app/router/AppRouter";
import { AppLayout } from "../layouts/AppLayout";

export const Router = () => {
    return (
        <AppLayout>
            <Routes>

                <Route path="/*" element={<AppRouter/>}/>

                <Route path="/*" element={<Navigate to="/"/>}/>
                
            </Routes>
        </AppLayout>
    );
};
