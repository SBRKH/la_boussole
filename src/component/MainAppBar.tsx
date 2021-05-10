import React, {useState} from "react";
import {AppBar, Button, IconButton, makeStyles, Menu, MenuItem, Toolbar, Typography} from "@material-ui/core";
import {useHistory} from 'react-router-dom';
import i18n from "../i18n/i18nconfig.js";
import frFlag from '../static/fr_flag.svg';
import enFlag from '../static/en_flag.svg';

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  menu: {
    display: 'flex',
  },
  buttonTitle: {
    ...theme.typography.body1,
    textTransform: "capitalize",
    color: theme.palette.secondary.main,
    //textShadow: `${theme.palette.primary.main} 1px 0 10px`,
  }
}));

const fr = 'fr';
const en = 'en';
type lngType = typeof fr | typeof en;

export const MainAppBar: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();
  const [seeMenu, setSeeMenu] = useState<any>(null);
  const [seeGoldenReview, setSeeGoldenReview] = useState<any>(null);
  const [seeLanguages, setSeeLanguages] = useState<any>(null);

  function handleClickMenu(event: any) {
    setSeeMenu(event.currentTarget);
  }

  function handleCloseMenu() {
    setSeeMenu(false);
  }

  function handleClickGoldenkMenu(event: any) {
    setSeeGoldenReview(event.currentTarget);
  }

  function handleCloseGolden() {
    setSeeGoldenReview(false);
  }

  function handleClickLanguages(event: any) {
    setSeeLanguages(event.currentTarget);
  }

  function handleCloseLanguages() {
    setSeeLanguages(false);
  }

  function handleClickHome() {
    history.push("/");
  }

  function handleClickHistory() {
    history.push("/history");
  }

  function handleClickMenuRestaurant() {
    history.push("/food/restaurant");
  }

  function handleClickMenuPizzeria() {
    history.push("/food/pizzeria");
  }

  function handleClickBrunch() {
    history.push("/brunch");
  }

  function handleClickRooms() {
    history.push("/rooms");
  }

  function handleClickEvent() {
    history.push("/events");
  }

  function handleClickPhotos() {
    history.push("/photos");
  }

  function handleClickVideos() {
    history.push("/videos");
  }

  function handleClickContact() {
    history.push("/contact");
  }

  function changeLanguage(lng: lngType) {
    i18n.changeLanguage(lng);
    handleCloseLanguages();
  }

  return (
    <AppBar position={'fixed'} color={"transparent"}>
      <Toolbar>
        <Typography variant={"h5"} color={"primary"}>La Boussole</Typography>
        <div className={classes.grow}/>
        <MenuItem className={classes.buttonTitle} onClick={handleClickHome}>{i18n.t('menu.home')}</MenuItem>
        <MenuItem className={classes.buttonTitle} onClick={handleClickHistory}>{i18n.t('menu.history')}</MenuItem>

        <Button className={classes.buttonTitle} onClick={handleClickMenu}>{i18n.t('menu.menu')}</Button>
        <Menu anchorEl={seeMenu} keepMounted open={Boolean(seeMenu)} onClose={handleCloseMenu}>
          <MenuItem  onClick={handleClickMenuRestaurant}>{i18n.t('menu.restaurant')}</MenuItem>
          <MenuItem onClick={handleClickMenuPizzeria}>{i18n.t('menu.pizzeria')}</MenuItem>
        </Menu>

        <MenuItem className={classes.buttonTitle} onClick={handleClickBrunch}>{i18n.t('menu.brunchs')}</MenuItem>
        <MenuItem className={classes.buttonTitle} onClick={handleClickRooms}>{i18n.t('menu.rooms')}</MenuItem>
        <MenuItem className={classes.buttonTitle} onClick={handleClickEvent}>{i18n.t('menu.events')}</MenuItem>

        <Button className={classes.buttonTitle} onClick={handleClickGoldenkMenu}>{i18n.t('menu.guestBook')}</Button>
        <Menu anchorEl={seeGoldenReview} keepMounted open={Boolean(seeGoldenReview)} onClose={handleCloseGolden}>
          <MenuItem onClick={handleClickPhotos}>{i18n.t('menu.photos')}</MenuItem>
          <MenuItem onClick={handleClickVideos}>{i18n.t('menu.videos')}</MenuItem>
        </Menu>

        <MenuItem className={classes.buttonTitle} onClick={handleClickContact}>{i18n.t('menu.contact')}</MenuItem>

        <IconButton onClick={handleClickLanguages} color={"inherit"}>
          <img
            src={i18n.language === fr ? frFlag : enFlag}
            alt={'pictogram flag'}
            width={'20'}
            height={'auto'}
          />
        </IconButton>
        <Menu anchorEl={seeLanguages} keepMounted open={Boolean(seeLanguages)} onClose={handleCloseLanguages}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}>
          <MenuItem onClick={() => changeLanguage(fr)}>
            <img
              src={frFlag}
              alt={'pictogram flag'}
              width={'20'}
              height={'auto'}
            />
          </MenuItem>
          <MenuItem onClick={() => changeLanguage(en)}>
            <img
              src={enFlag}
              alt={'pictogram flag'}
              width={'20'}
              height={'auto'}
            />
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  )
}