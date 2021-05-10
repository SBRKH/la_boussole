import './App.css';
import React from "react";
import {BrowserRouter} from "react-router-dom";
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core";
import {Main} from "./component/Main";

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
      }
    },
    "MuiInputLabel": {
      root: {
        color: "rgba(250, 250, 250, 1)",
      }
    },
    MuiOutlinedInput: {
      root: {
        "& $notchedOutline": {
          borderColor: "rgba(250, 250, 250, 1)",
          color: "rgba(250, 250, 250, 1)",
        },
        "&:hover $notchedOutline": {
          borderColor: "rgba(250, 250, 250, 1)",
          color: "rgba(250, 250, 250, 1)",
        },
      }
    },
  },
});

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <MuiThemeProvider theme={muiTheme}>
        <Main/>
      </MuiThemeProvider>
    </BrowserRouter>
  );
};
