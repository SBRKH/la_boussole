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
    textAlign: "center",
    width: "100%"
  },
  accordion: {
    backgroundColor: "rgba(0, 0, 0, .75)",
    color: theme.palette.secondary.main,
  },
  listContent: {
    width: "100%",
  },
}));

export const Restaurant: React.FC = () => {
  const classes = useStyles();

  return (
    <Grid container justify={"center"}>
      <Typography variant={"h3"} color={"primary"}>Notre Carte</Typography>
      <Grid item xs={10}>
        <Accordion className={classes.accordion}>
          <AccordionSummary expandIcon={<ExpandMoreIcon color={"primary"}/>}>
            <Typography align={"center"} className={classes.heading}>Les Entrées 🧆</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List className={classes.listContent}>
              <ListItem>
                <ListItemText primary={"Burrata, tomate cœur de bœuf"}
                              primaryTypographyProps={{
                                align: "center"
                              }}
                              secondary={"9,50€"}
                              secondaryTypographyProps={{
                                color: "secondary",
                                align: "center"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"Guacamole crevette sauce cocktail"}
                              primaryTypographyProps={{
                                align: "center"
                              }}
                              secondary={"8,50€"}
                              secondaryTypographyProps={{
                                color: "secondary",
                                align: "center"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"Tartare de saumon"}
                              primaryTypographyProps={{
                                align: "center"
                              }}
                              secondary={"12,50€"}
                              secondaryTypographyProps={{
                                color: "secondary",
                                align: "center"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"Carpaccio saumon fumée (fumage maison), crème ciboulette, toast"}
                              primaryTypographyProps={{
                                align: "center"
                              }}
                              secondary={"8,50€"}
                              secondaryTypographyProps={{
                                color: "secondary",
                                align: "center"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"Foie gras maison, toast, châtaignier de figues"}
                              primaryTypographyProps={{
                                align: "center"
                              }}
                              secondary={"12,50€"}
                              secondaryTypographyProps={{
                                color: "secondary",
                                align: "center"
                              }}/>
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>

        <Accordion className={classes.accordion}>
          <AccordionSummary expandIcon={<ExpandMoreIcon color={"primary"}/>}>
            <Typography align={"center"} className={classes.heading}>Les Salades 🥗</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List className={classes.listContent}>
              <ListItem>
                <ListItemText primary={"Salade croustillant chèvre, miel"}
                              primaryTypographyProps={{
                                align: "center"
                              }}
                              secondary={"10,90€"}
                              secondaryTypographyProps={{
                                color: "secondary",
                                align: "center"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"Salade césar"}
                              primaryTypographyProps={{
                                align: "center"
                              }}
                              secondary={"12,90€"}
                              secondaryTypographyProps={{
                                color: "secondary",
                                align: "center"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"Salade niçoise"}
                              primaryTypographyProps={{
                                align: "center"
                              }}
                              secondary={"12,90€"}
                              secondaryTypographyProps={{
                                color: "secondary",
                                align: "center"
                              }}/>
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>

        <Accordion className={classes.accordion}>
          <AccordionSummary expandIcon={<ExpandMoreIcon color={"primary"}/>}>
            <Typography align={"center"} className={classes.heading}>Plats Chauds 🥘</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List className={classes.listContent}>
              <ListItem>
                <ListItemText
                  primary={"Hamburger Boussole (steak, galette de pomme de terre, tranches de cheddar, oignons confits, feuilles de laitue, tomates)"}
                  primaryTypographyProps={{
                    align: "center"
                  }}
                  secondary={"17,90€"}
                  secondaryTypographyProps={{
                    color: "secondary",
                    align: "center"
                  }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"Côtelettes d'agneau risotto d'asperge jus d'agneau"}
                              primaryTypographyProps={{
                                align: "center"
                              }}
                              secondary={"24,90€"}
                              secondaryTypographyProps={{
                                color: "secondary",
                                align: "center"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"Tournedos Rossini bœuf, foie gras, pomme grenaille, sauce vin rouge halal"}
                              primaryTypographyProps={{
                                align: "center"
                              }}
                              secondary={"25,90€"}
                              secondaryTypographyProps={{
                                color: "secondary",
                                align: "center"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"Foie de veau, ratatouille, sauce aigre douce"}
                              primaryTypographyProps={{
                                align: "center"
                              }}
                              secondary={"23,90€"}
                              secondaryTypographyProps={{
                                color: "secondary",
                                align: "center"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"Médaillon de veau purée pommes de terre maison, pleurote et sauce veau"}
                              primaryTypographyProps={{
                                align: "center"
                              }}
                              secondary={"22,50€"}
                              secondaryTypographyProps={{
                                color: "secondary",
                                align: "center"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"Suprême de volaille riz basmati sauce volaille"}
                              primaryTypographyProps={{
                                align: "center"
                              }}
                              secondary={"21,50€"}
                              secondaryTypographyProps={{
                                color: "secondary",
                                align: "center"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"Escalope milanaise spaghetti sauce tomates"}
                              primaryTypographyProps={{
                                align: "center"
                              }}
                              secondary={"22,90€"}
                              secondaryTypographyProps={{
                                color: "secondary",
                                align: "center"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"Blanquette de veau riz basmati"}
                              primaryTypographyProps={{
                                align: "center"
                              }}
                              secondary={"21,90€"}
                              secondaryTypographyProps={{
                                color: "secondary",
                                align: "center"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"Bœuf bourguignons penne"}
                              primaryTypographyProps={{
                                align: "center"
                              }}
                              secondary={"21,90€"}
                              secondaryTypographyProps={{
                                color: "secondary",
                                align: "center"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText
                  primary={"Ballottine de poulet farcie aux champignons, purée pommes de terre ciboulette, sauce forestière"}
                  primaryTypographyProps={{
                    align: "center"
                  }}
                  secondary={"22,90€"}
                  secondaryTypographyProps={{
                    color: "secondary",
                    align: "center"
                  }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"Souris d'agneau, gratin dauphinois, sauce au jus de viande"}
                              primaryTypographyProps={{
                                align: "center"
                              }}
                              secondary={"25,90€"}
                              secondaryTypographyProps={{
                                color: "secondary",
                                align: "center"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"Plateau roast-beef cheddar fondue frite maison"}
                              primaryTypographyProps={{
                                align: "center"
                              }}
                              secondary={"21,90€"}
                              secondaryTypographyProps={{
                                color: "secondary",
                                align: "center"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"Supplément de garnitures"}
                              primaryTypographyProps={{
                                align: "center"
                              }}
                              secondary={"3,90€"}
                              secondaryTypographyProps={{
                                color: "secondary",
                                align: "center"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"Frites maison"}
                              primaryTypographyProps={{
                                align: "center"
                              }}/>
              </ListItem>
              <ListItem>
                <ListItemText primary={"Purée pommes de terre / Patate douce"}
                              primaryTypographyProps={{
                                align: "center"
                              }}/>
              </ListItem>
              <ListItem>
                <ListItemText primary={"Haricots verts"}
                              primaryTypographyProps={{
                                align: "center"
                              }}/>
              </ListItem>
              <ListItem>
                <ListItemText primary={"Riz basmati Pomme grenaille"}
                              primaryTypographyProps={{
                                align: "center"
                              }}/>
              </ListItem>
              <ListItem>
                <ListItemText primary={"Supplément sauce"}
                              primaryTypographyProps={{
                                align: "center"
                              }}
                              secondary={"2,50€"}
                              secondaryTypographyProps={{
                                color: "secondary",
                                align: "center"
                              }}/>
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>

        <Accordion className={classes.accordion}>
          <AccordionSummary expandIcon={<ExpandMoreIcon color={"primary"}/>}>
            <Typography align={"center"} className={classes.heading}>Les Viandes 🥩</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List className={classes.listContent}>
              <ListItem>
                <ListItemText primary={"Magret de canard, sauce exotique"}
                              primaryTypographyProps={{
                                align: "center"
                              }}
                              secondary={"23,90€"}
                              secondaryTypographyProps={{
                                color: "secondary",
                                align: "center"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"Rumsteck de bœuf, sauce champignon"}
                              primaryTypographyProps={{
                                align: "center"
                              }}
                              secondary={"22,90€"}
                              secondaryTypographyProps={{
                                color: "secondary",
                                align: "center"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"Demi-Poulet cuit à la braise, salade, sauce verte"}
                              primaryTypographyProps={{
                                align: "center"
                              }}
                              secondary={"17,90€"}
                              secondaryTypographyProps={{
                                color: "secondary",
                                align: "center"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"Côte de bœuf maturée, sauce viande Black Angus (minimum 800g)"}
                              primaryTypographyProps={{
                                align: "center"
                              }}
                              secondary={"49,90€"}
                              secondaryTypographyProps={{
                                color: "secondary",
                                align: "center"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"Entrecôte, sauce béarnaise"}
                              primaryTypographyProps={{
                                align: "center"
                              }}
                              secondary={"23,90€"}
                              secondaryTypographyProps={{
                                color: "secondary",
                                align: "center"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"Faux filet, sauce au poivre"}
                              primaryTypographyProps={{
                                align: "center"
                              }}
                              secondary={"22,90€"}
                              secondaryTypographyProps={{
                                color: "secondary",
                                align: "center"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"Garnitures au choix"}
                              primaryTypographyProps={{
                                align: "center"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"Frites maison"}
                              primaryTypographyProps={{
                                align: "center"
                              }}/>
              </ListItem>
              <ListItem>
                <ListItemText primary={"Purée pommes de terre"}
                              primaryTypographyProps={{
                                align: "center"
                              }}/>
              </ListItem>
              <ListItem>
                <ListItemText primary={"Haricots verts"}
                              primaryTypographyProps={{
                                align: "center"
                              }}/>
              </ListItem>
              <ListItem>
                <ListItemText primary={"Riz basmati"}
                              primaryTypographyProps={{
                                align: "center"
                              }}/>
              </ListItem>
              <ListItem>
                <ListItemText primary={"Pomme grenaille"}
                              primaryTypographyProps={{
                                align: "center"
                              }}/>
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>

        <Accordion className={classes.accordion}>
          <AccordionSummary expandIcon={<ExpandMoreIcon color={"primary"}/>}>
            <Typography align={"center"} className={classes.heading}>Les Pâtes 🍝</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List className={classes.listContent}>
              <ListItem>
                <ListItemText primary={"Lasagnes bolognaises parmesan, salade verte"}
                              primaryTypographyProps={{
                                align: "center"
                              }}
                              secondary={"15,90€"}
                              secondaryTypographyProps={{
                                color: "secondary",
                                align: "center"
                              }}/>
              </ListItem>
              <ListItem>
                <ListItemText primary={"Tagliatelles aux saumons fumée, crème parmesan"}
                              primaryTypographyProps={{
                                align: "center"
                              }}
                              secondary={"16,90€"}
                              secondaryTypographyProps={{
                                color: "secondary",
                                align: "center"
                              }}/>
              </ListItem>
              <ListItem>
                <ListItemText primary={"Tagliatelles poulet sauce forestière, champignons, parmesan"}
                              primaryTypographyProps={{
                                align: "center"
                              }}
                              secondary={"16,90€"}
                              secondaryTypographyProps={{
                                color: "secondary",
                                align: "center"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"Spaghetti à la truffe fraiche"}
                              primaryTypographyProps={{
                                align: "center"
                              }}
                              secondary={"17,90€"}
                              secondaryTypographyProps={{
                                color: "secondary",
                                align: "center"
                              }}/>
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>

        <Accordion className={classes.accordion}>
          <AccordionSummary expandIcon={<ExpandMoreIcon color={"primary"}/>}>
            <Typography align={"center"} className={classes.heading}>Menu Enfant 🍼</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List className={classes.listContent}>
              <ListItem>
                <ListItemText primary={"Nuggets, frites, boissons (grenadine ou jus de fruits) et glace"}
                              primaryTypographyProps={{
                                align: "center"
                              }}
                              secondary={"10,90€"}
                              secondaryTypographyProps={{
                                color: "secondary",
                                align: "center"
                              }}/>
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>

        <Accordion className={classes.accordion}>
          <AccordionSummary expandIcon={<ExpandMoreIcon color={"primary"}/>}>
            <Typography align={"center"} className={classes.heading}>Les Desserts 🍰</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List className={classes.listContent}>
              <ListItem>
                <ListItemText primary={"Tarte au citron"}
                              primaryTypographyProps={{
                                align: "center"
                              }}
                              secondary={"6,50€"}
                              secondaryTypographyProps={{
                                color: "secondary",
                                align: "center"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"Fondant au chocolat, glace vanille"}
                              primaryTypographyProps={{
                                align: "center"
                              }}
                              secondary={"7,50€"}
                              secondaryTypographyProps={{
                                color: "secondary",
                                align: "center"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"Crème brûlée"}
                              primaryTypographyProps={{
                                align: "center"
                              }}
                              secondary={"7,50€"}
                              secondaryTypographyProps={{
                                color: "secondary",
                                align: "center"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"Crumble pomme poire"}
                              primaryTypographyProps={{
                                align: "center"
                              }}
                              secondary={"6,50€"}
                              secondaryTypographyProps={{
                                color: "secondary",
                                align: "center"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"Tiramisu"}
                              primaryTypographyProps={{
                                align: "center"
                              }}
                              secondary={"6,50€"}
                              secondaryTypographyProps={{
                                color: "secondary",
                                align: "center"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"Panacotta fruit rouge"}
                              primaryTypographyProps={{
                                align: "center"
                              }}
                              secondary={"7,50€"}
                              secondaryTypographyProps={{
                                color: "secondary",
                                align: "center"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"Cheesecake coulis fruits rouges"}
                              primaryTypographyProps={{
                                align: "center"
                              }}
                              secondary={"7,50€"}
                              secondaryTypographyProps={{
                                color: "secondary",
                                align: "center"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"Mousse au chocolat"}
                              primaryTypographyProps={{
                                align: "center"
                              }}
                              secondary={"7,50€"}
                              secondaryTypographyProps={{
                                color: "secondary",
                                align: "center"
                              }}/>
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>

        <Accordion className={classes.accordion}>
          <AccordionSummary expandIcon={<ExpandMoreIcon color={"primary"}/>}>
            <Typography align={"center"} className={classes.heading}>Les Glaces 🍨</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List className={classes.listContent}>
              <ListItem>
                <ListItemText primary={"Nos Glaces :"}
                              primaryTypographyProps={{
                                align: "center"
                              }}
                              secondary={"Vanille, Café, Pistache, Fraise, Menthe-Chocolat"}
                              secondaryTypographyProps={{
                                color: "secondary",
                                align: "center"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"Nos Crèmes Glacées :"}
                              primaryTypographyProps={{
                                align: "center"
                              }}
                              secondary={"Chocolat au lait, Spéculos, Caramel fleur de sel, Noix de coco, Praliné"}
                              secondaryTypographyProps={{
                                color: "secondary",
                                align: "center"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"Nos Sorbets :"}
                              primaryTypographyProps={{
                                align: "center"
                              }}
                              secondary={
                                <List>
                                  <ListItem><ListItemText primary={"1 Boule 3,50€"}/></ListItem>
                                  <ListItem><ListItemText primary={"2 Boules 6,00€"}/></ListItem>
                                  <ListItem><ListItemText primary={"3 Boules 9,00€"}/></ListItem>
                                </List>
                              }
                              secondaryTypographyProps={{
                                color: "secondary",
                                align: "center"
                              }}/>
              </ListItem>
              <ListItem>
                <ListItemText primary={"Supplément chantilly ou arôme"}
                              primaryTypographyProps={{
                                align: "center"
                              }}
                              secondary={"1,50€"}
                              secondaryTypographyProps={{
                                color: "secondary",
                                align: "center"
                              }}/>
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>

        <Accordion className={classes.accordion}>
          <AccordionSummary expandIcon={<ExpandMoreIcon color={"primary"}/>}>
            <Typography align={"center"} className={classes.heading}>Les Boissons Froides 🧊</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List className={classes.listContent}>
              <ListItem>
                <ListItemText primary={"Coca-cola 33cl"}
                              primaryTypographyProps={{
                                align: "center"
                              }}
                              secondary={"3,90 €"}
                              secondaryTypographyProps={{
                                color: "secondary",
                                align: "center"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"Coca-cola zéro 33cl"}
                              primaryTypographyProps={{
                                align: "center"
                              }}
                              secondary={"3,90 €"}
                              secondaryTypographyProps={{
                                color: "secondary",
                                align: "center"
                              }}/>
              </ListItem>
              <ListItem>
                <ListItemText primary={"Coca-cola cherry 33cl"}
                              primaryTypographyProps={{
                                align: "center"
                              }}
                              secondary={"3,90 €"}
                              secondaryTypographyProps={{
                                color: "secondary",
                                align: "center"
                              }}/>
              </ListItem>
              <ListItem>
                <ListItemText primary={"Sprite 33cl"}
                              primaryTypographyProps={{
                                align: "center"
                              }}
                              secondary={"3,90 €"}
                              secondaryTypographyProps={{
                                color: "secondary",
                                align: "center"
                              }}/>
              </ListItem>
              <ListItem>
                <ListItemText primary={"Tropico 33cl"}
                              primaryTypographyProps={{
                                align: "center"
                              }}
                              secondary={"3,90 €"}
                              secondaryTypographyProps={{
                                color: "secondary",
                                align: "center"
                              }}/>
              </ListItem>
              <ListItem>
                <ListItemText primary={"Orangina 25cl"}
                              primaryTypographyProps={{
                                align: "center"
                              }}
                              secondary={"3,50 €"}
                              secondaryTypographyProps={{
                                color: "secondary",
                                align: "center"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"Fanta Orange 33cl"}
                              primaryTypographyProps={{
                                align: "center"
                              }}
                              secondary={"3,90 €"}
                              secondaryTypographyProps={{
                                color: "secondary",
                                align: "center"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"Fuze Tea pêche 25l"}
                              primaryTypographyProps={{
                                align: "center"
                              }}
                              secondary={"3,50 €"}
                              secondaryTypographyProps={{
                                color: "secondary",
                                align: "center"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"Oasis Tropical 25cl"}
                              primaryTypographyProps={{
                                align: "center"
                              }}
                              secondary={"3,50 €"}
                              secondaryTypographyProps={{
                                color: "secondary",
                                align: "center"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"Schweppes Agrumes 25cl"}
                              primaryTypographyProps={{
                                align: "center"
                              }}
                              secondary={"3,50 €"}
                              secondaryTypographyProps={{
                                color: "secondary",
                                align: "center"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"Perrier 33cl"}
                              primaryTypographyProps={{
                                align: "center"
                              }}
                              secondary={"3,90 €"}
                              secondaryTypographyProps={{
                                color: "secondary",
                                align: "center"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"San Pellegrino 50cl"}
                              primaryTypographyProps={{
                                align: "center"
                              }}
                              secondary={"4,90 €"}
                              secondaryTypographyProps={{
                                color: "secondary",
                                align: "center"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"San Pellegrino 100cl"}
                              primaryTypographyProps={{
                                align: "center"
                              }}
                              secondary={"5,90 €"}
                              secondaryTypographyProps={{
                                color: "secondary",
                                align: "center"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"Evian 50cl"}
                              primaryTypographyProps={{
                                align: "center"
                              }}
                              secondary={"4,90 €"}
                              secondaryTypographyProps={{
                                color: "secondary",
                                align: "center"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"Evian 100cl"}
                              primaryTypographyProps={{
                                align: "center"
                              }}
                              secondary={"5,90 €"}
                              secondaryTypographyProps={{
                                color: "secondary",
                                align: "center"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"Limonade 25cl"}
                              primaryTypographyProps={{
                                align: "center"
                              }}
                              secondary={"2,90 €"}
                              secondaryTypographyProps={{
                                color: "secondary",
                                align: "center"
                              }}/>
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>

        <Accordion className={classes.accordion}>
          <AccordionSummary expandIcon={<ExpandMoreIcon color={"primary"}/>}>
            <Typography align={"center"} className={classes.heading}>Les Boissons Chaudes ☕️</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List className={classes.listContent}>
              <ListItem>
                <ListItemText primary={"Café expresso"}
                              primaryTypographyProps={{
                                align: "center"
                              }}
                              secondary={"1,70€"}
                              secondaryTypographyProps={{
                                color: "secondary",
                                align: "center"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"Café noisette"}
                              primaryTypographyProps={{
                                align: "center"
                              }}
                              secondary={"1,90€"}
                              secondaryTypographyProps={{
                                color: "secondary",
                                align: "center"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"Café allongé"}
                              primaryTypographyProps={{
                                align: "center"
                              }}
                              secondary={"2,10€"}
                              secondaryTypographyProps={{
                                color: "secondary",
                                align: "center"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"Décaféiné expresso"}
                              primaryTypographyProps={{
                                align: "center"
                              }}
                              secondary={"1,60€"}
                              secondaryTypographyProps={{
                                color: "secondary",
                                align: "center"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"Décaféiné allongé"}
                              primaryTypographyProps={{
                                align: "center"
                              }}
                              secondary={"1,60€"}
                              secondaryTypographyProps={{
                                color: "secondary",
                                align: "center"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"Chocolat chaud"}
                              primaryTypographyProps={{
                                align: "center"
                              }}
                              secondary={"2,80€"}
                              secondaryTypographyProps={{
                                color: "secondary",
                                align: "center"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"Thé infusions"}
                              primaryTypographyProps={{
                                align: "center"
                              }}
                              secondary={"3,20€"}
                              secondaryTypographyProps={{
                                color: "secondary",
                                align: "center"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"Café gourmand (trois mignardises)"}
                              primaryTypographyProps={{
                                align: "center"
                              }}
                              secondary={"8,90€"}
                              secondaryTypographyProps={{
                                color: "secondary",
                                align: "center"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"Thé gourmand (trois mignardises)"}
                              primaryTypographyProps={{
                                align: "center"
                              }}
                              secondary={"8,90€"}
                              secondaryTypographyProps={{
                                color: "secondary",
                                align: "center"
                              }}/>
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>
      </Grid>
    </Grid>
  );
}