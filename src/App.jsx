import { Router } from "./router/Router";
import { AppTheme } from "./theme";

export const App = () => {
    return (
        <AppTheme>
            <Router/>
        </AppTheme>
    );
};
