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

export const Pizzeria: React.FC = () => {
  const classes = useStyles();

  return (
    <Grid container justify={"center"}>
      <Typography variant={"h3"} color={"primary"}>NOTRE CARTE</Typography>
      <Grid item xs={10}>
        <Accordion className={classes.accordion}>
          <AccordionSummary expandIcon={<ExpandMoreIcon color={"primary"}/>}>
            <Typography align={"center"} className={classes.heading}>Nos Pizzas (BASE CRÈME FRAÎCHE) 🍕</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List className={classes.listContent}>
              <ListItem>
                <ListItemText primary={
                  <ListItemText
                    primary={"TARTUFO"}
                    secondary={"Crème fraiche, truffe, roquette, mozzarella, huile à la truffe"}
                    secondaryTypographyProps={{
                      color: "secondary",
                      align: "center"
                    }}
                  />}
                              primaryTypographyProps={{
                                align: "center"
                              }}
                              secondary={"15,00€"}
                              secondaryTypographyProps={{
                                color: "secondary",
                                align: "center"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={
                  <ListItemText
                    primary={"SAVOYARD"}
                    secondary={"Crème fraiche, mozzarella, lardons, tartiflette, pomme de terre"}
                    secondaryTypographyProps={{
                      color: "secondary",
                      align: "center"
                    }}
                  />
                }
                              primaryTypographyProps={{
                                align: "center"
                              }}
                              secondary={"14,00€"}
                              secondaryTypographyProps={{
                                color: "secondary",
                                align: "center"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={
                  <ListItemText
                    primary={"SALMONE"}
                    secondary={"Crème fraiche, saumon fumé, mozzarella, parmesan, aneth"}
                    secondaryTypographyProps={{
                      color: "secondary",
                      align: "center"
                    }}
                  />
                }
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
                <ListItemText primary={
                  <ListItemText
                    primary={"QUATRE FROMAGES"}
                    secondary={"Crème fraiche, mozzarella, gorgonzola, reblochon, parmesan"}
                    secondaryTypographyProps={{
                      color: "secondary",
                      align: "center"
                    }}
                  />
                }
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
                <ListItemText primary={
                  <ListItemText
                    primary={"CHEF"}
                    secondary={"Crème fraiche, mozzarella, poulet curry, champignons de Paris, oignons, ananas"}
                    secondaryTypographyProps={{
                      color: "secondary",
                      align: "center"
                    }}
                  />
                }
                              primaryTypographyProps={{
                                align: "center"
                              }}
                              secondary={"13,00€"}
                              secondaryTypographyProps={{
                                color: "secondary",
                                align: "center"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={
                  <ListItemText
                    primary={"FORESTIÈRE"}
                    secondary={"Crème fraiche, mozzarella, poulet, pomme de terre, champignons"}
                    secondaryTypographyProps={{
                      color: "secondary",
                      align: "center"
                    }}
                  />
                }
                              primaryTypographyProps={{
                                align: "center"
                              }}
                              secondary={"13,00€"}
                              secondaryTypographyProps={{
                                color: "secondary",
                                align: "center"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"INGRÉDIENTS SUPPLÉMENTAIRES"}
                              primaryTypographyProps={{
                                align: "center"
                              }}
                              secondary={"2,00€"}
                              secondaryTypographyProps={{
                                color: "secondary",
                                align: "center"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"TRUFFE"}
                              primaryTypographyProps={{
                                align: "center"
                              }}
                              secondary={"5,00€"}
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
            <Typography align={"center"} className={classes.heading}>Nos Pizzas (A LA SAUCE TOMATE) 🍕</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List className={classes.listContent}>
              <ListItem>
                <ListItemText primary={
                  <ListItemText
                    primary={"MARGHERITA"}
                    secondary={"Sauce tomate, mozzarella, origan"}
                    secondaryTypographyProps={{
                      color: "secondary",
                      align: "center"
                    }}
                  />}
                              primaryTypographyProps={{
                                align: "center"
                              }}
                              secondary={"8,00€"}
                              secondaryTypographyProps={{
                                color: "secondary",
                                align: "center"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={
                  <ListItemText
                    primary={"SICILIENNE"}
                    secondary={"Mozzarella, anchois, câpres, olives, origan, basilic"}
                    secondaryTypographyProps={{
                      color: "secondary",
                      align: "center"
                    }}
                  />}
                              primaryTypographyProps={{
                                align: "center"
                              }}
                              secondary={"11,00€"}
                              secondaryTypographyProps={{
                                color: "secondary",
                                align: "center"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={
                  <ListItemText
                    primary={"CALZONE"}
                    secondary={"Mozzarella, jambon, oeuf (blanc translucide et jaune d'oeuf)"}
                    secondaryTypographyProps={{
                      color: "secondary",
                      align: "center"
                    }}
                  />}
                              primaryTypographyProps={{
                                align: "center"
                              }}
                              secondary={"11,00€"}
                              secondaryTypographyProps={{
                                color: "secondary",
                                align: "center"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={
                  <ListItemText
                    primary={"VÉGÉTARIENNE"}
                    secondary={"Mozzarella, courgettes, aubergines, poivrons, artichaut, oignons, champignons"}
                    secondaryTypographyProps={{
                      color: "secondary",
                      align: "center"
                    }}
                  />}
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
                <ListItemText primary={
                  <ListItemText
                    primary={"TUNNA"}
                    secondary={"Mozzarella, câpres, oignons, thon, olives"}
                    secondaryTypographyProps={{
                      color: "secondary",
                      align: "center"
                    }}
                  />}
                              primaryTypographyProps={{
                                align: "center"
                              }}
                              secondary={"11,50€"}
                              secondaryTypographyProps={{
                                color: "secondary",
                                align: "center"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={
                  <ListItemText
                    primary={"ORIENTALE"}
                    secondary={"Mozzarella, merguez, oeufs, poivrons, oignons"}
                    secondaryTypographyProps={{
                      color: "secondary",
                      align: "center"
                    }}
                  />}
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
                <ListItemText primary={
                  <ListItemText
                    primary={"CHÈVRE-MIEL"}
                    secondary={"Mozzarella, chèvre, noix, miel, tomate cerise, herbes de provence"}
                    secondaryTypographyProps={{
                      color: "secondary",
                      align: "center"
                    }}
                  />}
                              primaryTypographyProps={{
                                align: "center"
                              }}
                              secondary={"11,00€"}
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
            <Typography align={"center"} className={classes.heading}>Nos Desserts 🍰</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List className={classes.listContent}>
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
            <Typography align={"center"} className={classes.heading}>Nos Glaces 🍨</Typography>
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
                                  <ListItem><ListItemText primary={"1 Boule 3,50€"} primaryTypographyProps={{
                                    align: "center"
                                  }}/></ListItem>
                                  <ListItem><ListItemText primary={"2 Boules 6,00€"} primaryTypographyProps={{
                                    align: "center"
                                  }}/></ListItem>
                                  <ListItem><ListItemText primary={"3 Boules 9,00€"} primaryTypographyProps={{
                                    align: "center"
                                  }}/></ListItem>
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
            <Typography align={"center"} className={classes.heading}>Nos Boissons Froides 🧊</Typography>
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
            <Typography align={"center"} className={classes.heading}>Nos Boissons Chaudes ☕️</Typography>
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

        {/*<Accordion className={classes.accordion}>
          <AccordionSummary expandIcon={<ExpandMoreIcon color={"primary"}/>}>
            <Typography align={"center"} className={classes.heading}>Nos Cocktails 🍹</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List className={classes.listContent}>
              <ListItem>
                <ListItemText primary={"La Boussole"}
                              primaryTypographyProps={{
                                align: "center"
                              }}
                              secondary={
                                <List>
                                  <ListItem><ListItemText primary={"Tranche d’ananas, sirop de pèche, tranche de mangue, sucre de canne et limonade"} primaryTypographyProps={{
                                    align: "center"
                                  }}/></ListItem>
                                  <ListItem><ListItemText primary={"7,50€"} primaryTypographyProps={{
                                    align: "center"
                                  }}/></ListItem>
                                </List>
                              }
                              secondaryTypographyProps={{
                                color: "secondary",
                                align: "center"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"Virgin Mojito"}
                              primaryTypographyProps={{
                                align: "center"
                              }}
                              secondary={
                                <List>
                                  <ListItem><ListItemText primary={"Gousse de menthe, citron vert, sucre de canne et limonade"} primaryTypographyProps={{
                                    align: "center"
                                  }}/></ListItem>
                                  <ListItem><ListItemText primary={"7,50€"} primaryTypographyProps={{
                                    align: "center"
                                  }}/></ListItem>
                                </List>
                              }
                              secondaryTypographyProps={{
                                color: "secondary",
                                align: "center"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"Iceland"}
                              primaryTypographyProps={{
                                align: "center"
                              }}
                              secondary={
                                <List>
                                  <ListItem><ListItemText primary={"Fraise, feuille de menthe, sucre de canne et limonade"} primaryTypographyProps={{
                                    align: "center"
                                  }}/></ListItem>
                                  <ListItem><ListItemText primary={"7,50€"} primaryTypographyProps={{
                                    align: "center"
                                  }}/></ListItem>
                                </List>
                              }
                              secondaryTypographyProps={{
                                color: "secondary",
                                align: "center"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"Virgin Colada"}
                              primaryTypographyProps={{
                                align: "center"
                              }}
                              secondary={
                                <List>
                                  <ListItem><ListItemText primary={"Ananas, lait de coco, sucre de canne, crème de coco et glaçon"} primaryTypographyProps={{
                                    align: "center"
                                  }}/></ListItem>
                                  <ListItem><ListItemText primary={"7,50€"} primaryTypographyProps={{
                                    align: "center"
                                  }}/></ListItem>
                                </List>
                              }
                              secondaryTypographyProps={{
                                color: "secondary",
                                align: "center"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"Bora Bora"}
                              primaryTypographyProps={{
                                align: "center"
                              }}
                              secondary={
                                <List>
                                  <ListItem><ListItemText primary={"Passion, ananas, citron et sirop de fraise"} primaryTypographyProps={{
                                    align: "center"
                                  }}/></ListItem>
                                  <ListItem><ListItemText primary={"7,50€"} primaryTypographyProps={{
                                    align: "center"
                                  }}/></ListItem>
                                </List>
                              }
                              secondaryTypographyProps={{
                                color: "secondary",
                                align: "center"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"Love Passion"}
                              primaryTypographyProps={{
                                align: "center"
                              }}
                              secondary={
                                <List>
                                  <ListItem><ListItemText primary={"Litchi, passion et sucre de canne"} primaryTypographyProps={{
                                    align: "center"
                                  }}/></ListItem>
                                  <ListItem><ListItemText primary={"7,50€"} primaryTypographyProps={{
                                    align: "center"
                                  }}/></ListItem>
                                </List>
                              }
                              secondaryTypographyProps={{
                                color: "secondary",
                                align: "center"
                              }}/>
              </ListItem>

              <ListItem>
                <ListItemText primary={"Yellow Bear"}
                              primaryTypographyProps={{
                                align: "center"
                              }}
                              secondary={
                                <List>
                                  <ListItem><ListItemText primary={"Passion, citron pressé et limonade au citron"} primaryTypographyProps={{
                                    align: "center"
                                  }}/></ListItem>
                                  <ListItem><ListItemText primary={"7,50€"} primaryTypographyProps={{
                                    align: "center"
                                  }}/></ListItem>
                                </List>
                              }
                              secondaryTypographyProps={{
                                color: "secondary",
                                align: "center"
                              }}/>
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>*/}

      </Grid>
    </Grid>
  );
}