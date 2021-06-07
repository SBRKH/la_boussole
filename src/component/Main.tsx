import React from "react";
import {makeStyles, Paper} from "@material-ui/core";
import {MainAppBar} from "./MainAppBar";
import {MainRoute} from "./MainRoute";
import backgroundImage from "../static/bg4.png";
import {MainFooter} from "./MainFooter";

const useStyle = makeStyles(theme => {
  return {
    app: {
      height: '100vh',
      backgroundImage: `url(${backgroundImage})`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      overflowX: 'hidden',
    }
  };
});

export const Main: React.FC = () => {
  const classes = useStyle();
  return (
    <Paper className={classes.app}>
      <MainAppBar/>
      <MainRoute/>
      <MainFooter/>
    </Paper>
  );
}