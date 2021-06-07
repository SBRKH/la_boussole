import {Card, CardContent, CardHeader, CardMedia, Grid, makeStyles, Typography} from "@material-ui/core";
import React from "react";
import brunchImage from "./../static/brunch.png";

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: "hidden"
  },
  card: {
    backgroundColor: "rgba(0, 0, 0, .75)",
    color: theme.palette.secondary.main,
  },
  bold: {
    fontWeight: "bold"
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  title: {
    textAlign: "center"
  }
}));

export const Brunch: React.FC = () => {
  const classes = useStyles();

  return (
    <Grid container justify={"center"} className={classes.root}>
      <Grid item xs={10}>
        <Card className={classes.card}>
          <CardHeader title={"NOS BRUNCHS"} className={classes.title}/>
          <CardContent>
            <Typography align={"center"}>Désormais, il est possible de venir "bruncher" chez La Boussole.</Typography>
            <Typography align={"center"}>Nous vous proposons un menu à volonté tous les dimanches de 11h à 16h.</Typography>
            <Typography align={"center"}>Idéal pour vous retrouver autour d'un brunch avec vos amies, familles.... Vue sur le Salève.</Typography>
            <Typography align={"center"} className={classes.bold}>Plats et gourmandises garantis !</Typography>
            <CardMedia
              className={classes.media}
              image={brunchImage}
              title={"Brunch photo"}
            />
            <Typography align={"center"} variant={"h3"}>NOS TARIFS</Typography>
            <Typography align={"center"}>Adulte : 24,80€</Typography>
            <Typography align={"center"}>Enfant (3-7ans) : 9,80€</Typography>
            <Typography align={"center"}>Enfant (8-12ans) : 11,80€</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}