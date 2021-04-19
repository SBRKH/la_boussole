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
    MuiOutlinedInput: {
      root: {
        "& $notchedOutline": {
          borderColor: "#fff",
          color: "#fff"
        },
        "&:hover $notchedOutline": {
          borderColor: "#fff",
          color: "#fff"
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
