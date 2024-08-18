import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const theme = createTheme({
    palette: {
        primary:{
            main: "#264653",
        },
        secondary: {
            main: "#283618"
        },
        error: {
            main: red.A400,
        },
    },
});