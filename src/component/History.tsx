import React, {FC} from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText, makeStyles,
  Typography
} from "@material-ui/core";
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: "hidden"
  },
  card: {
    backgroundColor: "rgba(0, 0, 0, .75)",
    color: theme.palette.secondary.main,
  }
}));

export const History: FC = () => {
  const classes = useStyles();

  return (
    <Grid container justify={"center"} className={classes.root}>
      <Grid item xs={10}>
        <Card className={classes.card}>
          <CardHeader title={"Notre Histoire"} />
          <CardContent>
            <Typography>Pour dénicher l’origine de La Boussole il faut revenir sur l’Antiquité et se demander pourquoi cette invention s’est étalée sur plusieurs siècles.</Typography>
            <Typography>Le perfectionnement de cette invention nous a en effet permis de nouvelles découvertes et nous pouvons donc appréhender le monde peu importe le temps ou l’horaire indiqué nous sommes assuré de ne jamais perdre le Nord !</Typography>
            <Typography>Aux quatre coins du monde vous pouvez désormais voyager avec nous en laissant de côté votre cuisine juste le temps d’une dégustation de nos recettes savoureuses offertes d’ailleurs en prenant la direction de La Boussole 🧭</Typography>
            <Typography>Arrivant de l'Ancienne Perse, le Chef Abbas saura vous impressionnez de toutes les façons avec un large choix : Entrée chaude ou froide ? Plat du jour où Pizza au feu de bois ? Viande ou Poisson ? Dessert ou Café gourmand ? Tant de questions auxquelles nous nous ferons un plaisir de répondre.</Typography>
            <Typography>En montant à bord de notre navire et en observant La Boussole à plat on peut s’apercevoir que :</Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <ArrowRightAltIcon color={"secondary"}/>
                </ListItemIcon>
                <ListItemText primary={"Les vents soufflant du Nord s'inviteront à travers des parfums subtils et des arômes authentiques avec notre technique de fumage maison."} />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <ArrowRightAltIcon color={"secondary"}/>
                </ListItemIcon>
                <ListItemText primary={"A l'Ouest de la Boussole il faudra forcement traverser la ''Route des Épices'' donc à l'aide de vos papilles préparez-vous aux associations du Chef Haute en Saveurs !"} />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <ArrowRightAltIcon color={"secondary"}/>
                </ListItemIcon>
                <ListItemText primary={"En allant vers l’Est, nous naviguerons avec nos viandes maturées et sur la route du Soleil les couleurs de nos légumes s'accompagneront pour sublimer vos assiettes et votre palais !"} />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <ArrowRightAltIcon color={"secondary"}/>
                </ListItemIcon>
                <ListItemText primary={"Finissons au Sud avec nos desserts culte de la cuisine française, au pied du Salève dans un lieu noble et chaleureux ! Après ce tour du Monde, vous vous retrouverez toujours au bon endroit grâce à la Boussole et les savoir-faire du Chef et sa cuisine bistronomique reprenant les classiques de France avec nos viandes Halal. Nous sommes impatients de vous régaler !"} />
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}