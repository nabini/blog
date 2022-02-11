import { createTheme } from "@material-ui/core";
import { blue } from '@material-ui/core/colors';

export const theme = createTheme({
    palatte:{
        primary:{
            main: blue[500],
        },
    },

    myButton:{
        backgroundColor: "green",
        color:'white',
        border:  "1px solid black",
    }
});