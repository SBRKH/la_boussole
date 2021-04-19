import React from "react";
import {makeStyles, Paper} from "@material-ui/core";
import {MainAppBar} from "./MainAppBar";
import {MainRoute} from "./MainRoute";
import backgroundImage from "../static/bg.jpg";

const useStyle = makeStyles(theme => {
  return {
    app: {
      display: 'flex',
      height: '100vh',
      backgroundImage: `url(${backgroundImage})`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      overflow: 'hidden',
      position: 'relative',
    },
  };
});

export const Main: React.FC = () => {
  const classes = useStyle();
  return (
    <Paper className={classes.app}>
      <MainAppBar/>
      <MainRoute/>
    </Paper>
  );
}