import React from "react";
import {Divider, Grid, makeStyles, Typography} from "@material-ui/core";
import PhoneIcon from '@material-ui/icons/Phone';
import HomeIcon from '@material-ui/icons/Home';
import instasvg from "./../static/instagram.svg";
import fbsvg from "./../static/facebook.svg";
import snapsvg from "./../static/snapchat.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    height: 120,
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#2d3436",
  },
  iconText: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  iconTextVertically: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  divider: {
    margin: 10
  },
  main: {
    backgroundColor: "#636e72"
  },
  second: {
    backgroundColor: "#2d3436"
  }
}));

export const MainFooter: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid spacing={2} container className={classes.main}>
        <Grid item xs={3}>
          <Typography color={"secondary"} align={"center"}>La Boussole</Typography>
          <Typography color={"secondary"} align={"center"}>Restaurant Bistronomique</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography color={"secondary"}>
            Ouvert du Mardi au Samedi de 11h45 à 14h30 et de 18h45 à 22h30
          </Typography>
          <Typography color={"secondary"}>
            Le Dimanche de 11h à 16h (Brunch) et de 19h à 22h00 (Restaurant)
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography color={"secondary"} className={classes.iconText}><PhoneIcon/> 04 50 31 18 10</Typography>
          <Typography color={"secondary"} className={classes.iconText}><HomeIcon/> 11 Rue René Cassin, 74240
            Gaillard</Typography>
        </Grid>
      </Grid>

      <Divider className={classes.divider} />

      <Grid container spacing={2} className={classes.second}>
        <Grid item xs={3}/>
        <Grid item xs={2}>
          <Typography color={"secondary"} align={"center"}>
            © 2021 La Boussole tous droits réservés
          </Typography>
        </Grid>
        <Grid container item xs={6}>
          <Grid item xs={2}>
            <Typography color={"secondary"} className={classes.iconTextVertically}>
              <img src={snapsvg} style={{height: 20}} alt={"logo"}/>
              laboussole74
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <img src={fbsvg} style={{height: 20}} alt={"logo"}/>
          </Grid>
          <Grid item xs={2}>
            <img src={instasvg} style={{height: 20}} alt={"logo"}/>
          </Grid>
        </Grid>
        <Grid item xs={1}/>
      </Grid>
    </div>
  );
}