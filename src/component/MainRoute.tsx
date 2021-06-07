import clsx from "clsx";
import React from "react";
import {makeStyles, Typography} from "@material-ui/core";
import { Route, Switch } from 'react-router-dom';
import {Contact} from "./Contact";
import {History} from "./History";
import {Event} from "./Event";
import {Photos} from "./goldenBook/Photos";
import {Restaurant} from "./menu/Restaurant";
import {Pizzeria} from "./menu/Pizzeria";
import {Videos} from "./goldenBook/Videos";
import {Brunch} from "./Brunch";

const useStyle = makeStyles(theme => {
  return {
    main: {
      margin: 20,
      flexGrow: 1,
      overflowX: 'auto',
      [theme.breakpoints.down('md')]: {
        paddingBottom: 320,
      },
      [theme.breakpoints.up('md')]: {
        paddingBottom: 120,
      },
    },
    appbar: {
      paddingTop: 70,
    },
  };
});

export const MainRoute: React.FC = () => {
  const classes = useStyle();

  return (
    <main className={clsx(classes.main, classes.appbar)}>
      <Switch>
        <Route exact path={"/"} component={() => <Typography>Home</Typography>} />
        <Route path={"/contact"} component={Contact} />
        <Route path={"/history"} component={History} />
        <Route path={"/food/restaurant"} component={Restaurant} />
        <Route path={"/food/pizzeria"} component={Pizzeria} />
        <Route path={"/brunch"} component={Brunch} />
        <Route path={"/rooms"} component={() => <Typography>Contact</Typography>} />
        <Route path={"/events"} component={Event} />
        <Route path={"/photos"} component={Photos} />
        <Route path={"/videos"} component={Videos} />
      </Switch>
    </main>
  );
}