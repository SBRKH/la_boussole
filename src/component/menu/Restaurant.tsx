import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Typography
} from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(20),
    fontWeight: theme.typography.fontWeightRegular,
    color: theme.palette.primary.main,
  },
  accordion: {
    backgroundColor: "rgba(0, 0, 0, .75)",
    color: theme.palette.secondary.main,
  }
}));

export const Restaurant: React.FC = () => {
  const classes = useStyles();

  return (
    <Grid container justify={"center"}>
      <Typography variant={"h3"} color={"primary"}>Notre Carte</Typography>
      <Grid item xs={10}>
        <Accordion className={classes.accordion}>
          <AccordionSummary expandIcon={<ExpandMoreIcon color={"primary"}/>}>
            <Typography className={classes.heading}>Les Entrées</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              <ListItem>
                <ListItemText primary={"Burrata, tomate cœur de bœuf"} secondary={"9,50€"}
                              secondaryTypographyProps={{
                                color: "secondary"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"Guacamole crevette sauce cocktail"} secondary={"8,50€"}
                              secondaryTypographyProps={{
                                color: "secondary"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"Carpaccio saumon fumée (fumage maison), crème ciboulette, toast"}
                              secondary={"8,50€"}
                              secondaryTypographyProps={{
                                color: "secondary"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"Foie gras maison, toast, châtaignier de figues"} secondary={"12,50€"}
                              secondaryTypographyProps={{
                                color: "secondary"
                              }}/>
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>

        <Accordion className={classes.accordion}>
          <AccordionSummary expandIcon={<ExpandMoreIcon color={"primary"}/>}>
            <Typography className={classes.heading}>Les Salades</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              <ListItem>
                <ListItemText primary={"Salade croustillant chèvre, miel"}
                              secondary={"10,90€"}
                              secondaryTypographyProps={{
                                color: "secondary"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"Salade césar"}
                              secondary={"12,90€"}
                              secondaryTypographyProps={{
                                color: "secondary"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"Salade niçoise"}
                              secondary={"12,90€"}
                              secondaryTypographyProps={{
                                color: "secondary"
                              }}/>
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>

        <Accordion className={classes.accordion}>
          <AccordionSummary expandIcon={<ExpandMoreIcon color={"primary"}/>}>
            <Typography className={classes.heading}>Plats Chauds</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              <ListItem>
                <ListItemText
                  primary={"Hamburger Boussole (steak, galette de pomme de terre, tranches de cheddar, oignons confits, feuilles de laitue, tomates)"}
                  secondary={"17,90€"}
                  secondaryTypographyProps={{
                    color: "secondary"
                  }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"Côtelettes d'agneau risotto d'asperge jus d'agneau"}
                              secondary={"24,90€"}
                              secondaryTypographyProps={{
                                color: "secondary"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"Tournedos Rossini bœuf, foie gras, pomme grenaille, sauce vin rouge halal"}
                              secondary={"25,90€"}
                              secondaryTypographyProps={{
                                color: "secondary"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"Foie de veau, ratatouille, sauce aigre douce"}
                              secondary={"23,90€"}
                              secondaryTypographyProps={{
                                color: "secondary"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"Médaillon de veau purée pommes de terre maison, pleurote et sauce veau"}
                              secondary={"22,50€"}
                              secondaryTypographyProps={{
                                color: "secondary"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"Suprême de volaille riz basmati sauce volaille"}
                              secondary={"21,50€"}
                              secondaryTypographyProps={{
                                color: "secondary"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"Escalope milanaise spaghetti sauce tomates"}
                              secondary={"22,90€"}
                              secondaryTypographyProps={{
                                color: "secondary"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"Blanquette de veau riz basmati"}
                              secondary={"21,90€"}
                              secondaryTypographyProps={{
                                color: "secondary"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"Bœuf bourguignons penne"}
                              secondary={"21,90€"}
                              secondaryTypographyProps={{
                                color: "secondary"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText
                  primary={"Ballottine de poulet farcie aux champignons, purée pommes de terre ciboulette, sauce forestière"}
                  secondary={"22,90€"}
                  secondaryTypographyProps={{
                    color: "secondary"
                  }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"Souris d'agneau, gratin dauphinois, sauce au jus de viande"}
                              secondary={"25,90€"}
                              secondaryTypographyProps={{
                                color: "secondary"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"Plateau roast-beef cheddar fondue frite maison"}
                              secondary={"21,90€"}
                              secondaryTypographyProps={{
                                color: "secondary"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"Supplément de garnitures"}
                              secondary={"3,90€"}
                              secondaryTypographyProps={{
                                color: "secondary"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"Frites maison"}/>
              </ListItem>
              <ListItem>
                <ListItemText primary={"Purée pommes de terre / Patate douce"}/>
              </ListItem>
              <ListItem>
                <ListItemText primary={"Haricots verts"}/>
              </ListItem>
              <ListItem>
                <ListItemText primary={"Riz basmati Pomme grenaille"}/>
              </ListItem>
              <ListItem>
                <ListItemText primary={"Supplément sauce"}
                              secondary={"2,50€"}
                              secondaryTypographyProps={{
                                color: "secondary"
                              }}/>
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>

        <Accordion className={classes.accordion}>
          <AccordionSummary expandIcon={<ExpandMoreIcon color={"primary"}/>}>
            <Typography className={classes.heading}>Les Viandes</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              <ListItem>
                <ListItemText primary={"Magret de canard, sauce exotique"}
                              secondary={"23,90€"}
                              secondaryTypographyProps={{
                                color: "secondary"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"Rumsteck de bœuf, sauce champignon"}
                              secondary={"22,90€"}
                              secondaryTypographyProps={{
                                color: "secondary"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"Demi-Poulet cuit à la braise, salade, sauce verte"}
                              secondary={"17,90€"}
                              secondaryTypographyProps={{
                                color: "secondary"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"Côte de bœuf maturée, sauce viande Black Angus (minimum 800g)"}
                              secondary={"49,90€"}
                              secondaryTypographyProps={{
                                color: "secondary"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"Entrecôte, sauce béarnaise"}
                              secondary={"23,90€"}
                              secondaryTypographyProps={{
                                color: "secondary"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"Faux filet, sauce au poivre"}
                              secondary={"22,90€"}
                              secondaryTypographyProps={{
                                color: "secondary"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"Garnitures au choix"}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"Frites maison"}/>
              </ListItem>
              <ListItem>
                <ListItemText primary={"Purée pommes de terre"}/>
              </ListItem>
              <ListItem>
                <ListItemText primary={"Haricots verts"}/>
              </ListItem>
              <ListItem>
                <ListItemText primary={"Riz basmati"}/>
              </ListItem>
              <ListItem>
                <ListItemText primary={"Pomme grenaille"}/>
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>

        <Accordion className={classes.accordion}>
          <AccordionSummary expandIcon={<ExpandMoreIcon color={"primary"}/>}>
            <Typography className={classes.heading}>Les Pâtes</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              <ListItem>
                <ListItemText primary={"Lasagnes bolognaises parmesan, salade verte"}
                              secondary={"15,90€"}
                              secondaryTypographyProps={{
                                color: "secondary"
                              }}/>
              </ListItem>
              <ListItem>
                <ListItemText primary={"Tagliatelles aux saumons fumée, crème parmesan"}
                              secondary={"16,90€"}
                              secondaryTypographyProps={{
                                color: "secondary"
                              }}/>
              </ListItem>
              <ListItem>
                <ListItemText primary={"Tagliatelles poulet sauce forestière, champignons, parmesan"}
                              secondary={"16,90€"}
                              secondaryTypographyProps={{
                                color: "secondary"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"Spaghetti à la truffe fraiche"}
                              secondary={"17,90€"}
                              secondaryTypographyProps={{
                                color: "secondary"
                              }}/>
              </ListItem>

            </List>
          </AccordionDetails>
        </Accordion>

        <Accordion className={classes.accordion}>
          <AccordionSummary expandIcon={<ExpandMoreIcon color={"primary"}/>}>
            <Typography className={classes.heading}>Menu Enfant</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              <ListItem>
                <ListItemText primary={"Nuggets, frites, boissons (grenadine ou jus de fruits) et glace"}
                              secondary={"10,90€"}
                              secondaryTypographyProps={{
                                color: "secondary"
                              }}/>
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>

        <Accordion className={classes.accordion}>
          <AccordionSummary expandIcon={<ExpandMoreIcon color={"primary"}/>}>
            <Typography className={classes.heading}>Les Desserts</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              <ListItem>
                <ListItemText primary={"Tarte au citron"}
                              secondary={"6,50€"}
                              secondaryTypographyProps={{
                                color: "secondary"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"Fondant au chocolat, glace vanille"}
                              secondary={"7,50€"}
                              secondaryTypographyProps={{
                                color: "secondary"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"Crème brûlée"}
                              secondary={"7,50€"}
                              secondaryTypographyProps={{
                                color: "secondary"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"Crumble pomme poire"}
                              secondary={"6,50€"}
                              secondaryTypographyProps={{
                                color: "secondary"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"Tiramisu"}
                              secondary={"6,50€"}
                              secondaryTypographyProps={{
                                color: "secondary"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"Panacotta fruit rouge"}
                              secondary={"7,50€"}
                              secondaryTypographyProps={{
                                color: "secondary"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"Cheesecake coulis fruits rouges"}
                              secondary={"7,50€"}
                              secondaryTypographyProps={{
                                color: "secondary"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"Mousse au chocolat"}
                              secondary={"7,50€"}
                              secondaryTypographyProps={{
                                color: "secondary"
                              }}/>
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>

        <Accordion className={classes.accordion}>
          <AccordionSummary expandIcon={<ExpandMoreIcon color={"primary"}/>}>
            <Typography className={classes.heading}>Les Glaces</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              <ListItem>
                <ListItemText primary={"Nos Glaces :"}
                              secondary={"Vanille, Café, Pistache, Fraise, Menthe-Chocolat"}
                              secondaryTypographyProps={{
                                color: "secondary"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"Nos Crèmes Glacées :"}
                              secondary={"Chocolat au lait, Spéculos, Caramel fleur de sel, Noix de coco, Praliné"}
                              secondaryTypographyProps={{
                                color: "secondary"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"Nos Sorbets :"}
                              secondary={
                                <List>
                                  <ListItem><ListItemText primary={"1 Boule 3,50€"}/></ListItem>
                                  <ListItem><ListItemText primary={"2 Boules 6,00€"}/></ListItem>
                                  <ListItem><ListItemText primary={"3 Boules 9,00€"}/></ListItem>
                                </List>
                              }
                              secondaryTypographyProps={{
                                color: "secondary"
                              }}/>
              </ListItem>
              <ListItem>
                <ListItemText primary={"Supplément chantilly ou arôme"}
                              secondary={"1,50€"}
                              secondaryTypographyProps={{
                                color: "secondary"
                              }}/>
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>

        <Accordion className={classes.accordion}>
          <AccordionSummary expandIcon={<ExpandMoreIcon color={"primary"}/>}>
            <Typography className={classes.heading}>Les Boissons Froides</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              <ListItem>
                <ListItemText primary={"Coca-cola 33cl"}
                              secondary={"3,90 €"}
                              secondaryTypographyProps={{
                                color: "secondary"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"Coca-cola zéro 33cl"}
                              secondary={"3,90 €"}
                              secondaryTypographyProps={{
                                color: "secondary"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"Sprite 33cl"}
                              secondary={"3,90 €"}
                              secondaryTypographyProps={{
                                color: "secondary"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"Orangina 25cl"}
                              secondary={"3,50 €"}
                              secondaryTypographyProps={{
                                color: "secondary"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"Fanta Orange 33cl"}
                              secondary={"3,90 €"}
                              secondaryTypographyProps={{
                                color: "secondary"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"Fuze Tea pêche 25l"}
                              secondary={"3,50 €"}
                              secondaryTypographyProps={{
                                color: "secondary"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"Oasis Tropical 25cl"}
                              secondary={"3,50 €"}
                              secondaryTypographyProps={{
                                color: "secondary"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"Schweppes Agrumes 25cl"}
                              secondary={"3,50 €"}
                              secondaryTypographyProps={{
                                color: "secondary"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"Perrier 33cl"}
                              secondary={"3,90 €"}
                              secondaryTypographyProps={{
                                color: "secondary"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"San Pellegrino 50cl"}
                              secondary={"4,90 €"}
                              secondaryTypographyProps={{
                                color: "secondary"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"San Pellegrino 100cl"}
                              secondary={"5,90 €"}
                              secondaryTypographyProps={{
                                color: "secondary"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"Evian 50cl"}
                              secondary={"4,90 €"}
                              secondaryTypographyProps={{
                                color: "secondary"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"Evian 100cl"}
                              secondary={"5,90 €"}
                              secondaryTypographyProps={{
                                color: "secondary"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"Limonade 25cl"}
                              secondary={"2,90 €"}
                              secondaryTypographyProps={{
                                color: "secondary"
                              }}/>
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>

        <Accordion className={classes.accordion}>
          <AccordionSummary expandIcon={<ExpandMoreIcon color={"primary"}/>}>
            <Typography className={classes.heading}>Les Boissons Chaudes</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              <ListItem>
                <ListItemText primary={"Café expresso"}
                              secondary={"1,70€"}
                              secondaryTypographyProps={{
                                color: "secondary"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"Café noisette"}
                              secondary={"1,90€"}
                              secondaryTypographyProps={{
                                color: "secondary"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"Café allongé"}
                              secondary={"2,10€"}
                              secondaryTypographyProps={{
                                color: "secondary"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"Décaféiné expresso"}
                              secondary={"1,60€"}
                              secondaryTypographyProps={{
                                color: "secondary"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"Décaféiné allongé"}
                              secondary={"1,60€"}
                              secondaryTypographyProps={{
                                color: "secondary"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"Chocolat chaud"}
                              secondary={"2,80€"}
                              secondaryTypographyProps={{
                                color: "secondary"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"Thé infusions"}
                              secondary={"3,20€"}
                              secondaryTypographyProps={{
                                color: "secondary"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"Café gourmand (trois mignardises)"}
                              secondary={"8,90€"}
                              secondaryTypographyProps={{
                                color: "secondary"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"Thé gourmand (trois mignardises)"}
                              secondary={"8,90€"}
                              secondaryTypographyProps={{
                                color: "secondary"
                              }}/>
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>
      </Grid>
    </Grid>
  );
}