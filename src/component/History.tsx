import React, {FC} from "react";
import {Card, CardContent, CardHeader, Grid, makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: "hidden"
  },
  card: {
    backgroundColor: ("rgba(0, 0, 0, .75)"),
    color: theme.palette.secondary.main,
  },
  bold: {
    fontWeight: "bold",
    fontFamily: 'Monotype-Corsiva',
  }
}));

export const History: FC = () => {
  const classes = useStyles();

  return (
    <Grid container justify={"center"} className={classes.root}>
      <Grid item xs={10}>
        <Card className={classes.card}>
          <CardHeader title={"NOTRE HISTOIRE"}/>
          <CardContent>
            <Typography className={classes.bold} align={"center"}>Pour dénicher l’origine de La Boussole il faut revenir sur l’antiquité et se demander pourquoi cette invention s’est étalée sur plusieurs siècles. Le perfectionnement de cette invention nous a en effet permis de nouvelles découvertes et nous pouvons donc appréhender le monde peu importe le temps ou l’horaire indiqué nous sommes assurés de ne jamais perdre le Nord !</Typography>
            <br />
            <Typography align={"center"}>Aux quatre coins du monde vous pouvez désormais voyager avec nous en laissant de côté votre cuisine juste le temps d’une dégustation de nos recettes savoureuses offerte d’ailleurs en prenant la direction de La Boussole.</Typography>
            <br />
            <Typography align={"center"}>Notre Chef dotée de plus de dix ans d’expérience saura vous impressionner et ravir vos papilles.</Typography>
            <br />
            <Typography align={"center"}>En montant à bord de notre navire et en observant La Boussole à plat on peut s’apercevoir que :</Typography>
            <br />
            <Typography align={"center"}>Les vents soufflant du Nord s'invitent à travers des parfums subtils et des arômes authentiques avec notre technique de fumage maison.</Typography>
            <br />
            <Typography align={"center"}>À l'Ouest de La Boussole il faudra traverser la « Route des Épices » donc à l'aide de vos papilles préparez-vous aux associations du Chef Haute en Saveurs !</Typography>
            <br />
            <Typography align={"center"}>En allant vers l’Est, nous naviguerons avec nos viandes maturées et sur la route du Soleil les couleurs de nos légumes s'accompagnent pour sublimer vos assiettes et votre palais !</Typography>
            <br />
            <Typography>Finissons au Sud avec nos desserts culte de la cuisine française, au pied du Salève dans un lieu noble et chaleureux !</Typography>
            <br />
            <Typography align={"center"}>Après ce tour du Monde, vous vous retrouverez toujours au bon endroit grâce à                 La Boussole et les savoir-faire du Chef et sa cuisine bistronomique reprenant les classiques de France avec nos viandes Halal.</Typography>
            <br />
            <Typography align={"center"} className={classes.bold}>Nous sommes impatients de vous régaler !</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}