import './App.css';
import React from "react";
import {BrowserRouter} from "react-router-dom";
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core";
import {Main} from "./component/Main";
import DateFnsUtils from "@date-io/date-fns";
import {MuiPickersUtilsProvider} from "@material-ui/pickers";
import {fr} from "date-fns/locale";

const muiTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#F2D2BD',
    },
    secondary: {
      main: '#fff',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  overrides: {
    MuiInputBase: {
      input: {
        color: "rgba(250, 250, 250, 1)",
        textShadow: "-1px -1px 1px rgba(255,255,255,.1), 1px 1px 1px rgba(0,0,0,.5)",
      }
    },
    "MuiInputLabel": {
      root: {
        color: "rgba(250, 250, 250, 1)",
        textShadow: "-1px -1px 1px rgba(255,255,255,.1), 1px 1px 1px rgba(0,0,0,.5)",
      }
    },
    MuiOutlinedInput: {
      root: {
        "& $notchedOutline": {
          borderColor: "rgba(250, 250, 250, 1)",
          color: "rgba(250, 250, 250, 1)",
          textShadow: "-1px -1px 1px rgba(255,255,255,.1), 1px 1px 1px rgba(0,0,0,.5)",
        },
        "&:hover $notchedOutline": {
          borderColor: "rgba(250, 250, 250, 1)",
          color: "rgba(250, 250, 250, 1)",
          textShadow: "-1px -1px 1px rgba(255,255,255,.1), 1px 1px 1px rgba(0,0,0,.5)",
        },
      }
    },
  },
});

export const App: React.FC = () => {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={fr}>
      <BrowserRouter>
        <MuiThemeProvider theme={muiTheme}>
          <Main/>
        </MuiThemeProvider>
      </BrowserRouter>
    </MuiPickersUtilsProvider>
  );
};
