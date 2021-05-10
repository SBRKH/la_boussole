import clsx from "clsx";
import React from "react";
import {makeStyles, Typography} from "@material-ui/core";
import { Route, Switch } from 'react-router-dom';
import {Contact} from "./Contact";
import {History} from "./History";
import {Event} from "./Event";

const useStyle = makeStyles(theme => {
  return {
    main: {
      flexGrow: 1,
      overflow: 'auto',
    },
    mainConnect: {
      padding: '0 10vw',
    },
    appbar: {
      paddingTop: 70,
    },
  };
});

export const MainRoute: React.FC = () => {
  const classes = useStyle();

  return (
    <main className={clsx(classes.main, classes.appbar, classes.mainConnect)}>
      <Switch>
        <Route exact path={"/"} component={() => <Typography>Home</Typography>} />
        <Route path={"/contact"} component={Contact} />
        <Route path={"/history"} component={History} />
        <Route path={"/food/restaurant"} component={() => <Typography>Contact</Typography>} />
        <Route path={"/food/pizzeria"} component={() => <Typography>Contact</Typography>} />
        <Route path={"/brunch"} component={() => <Typography>Contact</Typography>} />
        <Route path={"/rooms"} component={() => <Typography>Contact</Typography>} />
        <Route path={"/events"} component={Event} />
        <Route path={"/photos"} component={() => <Typography>Contact</Typography>} />
        <Route path={"/videos"} component={() => <Typography>Contact</Typography>} />
      </Switch>
    </main>
  );
}