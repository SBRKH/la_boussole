import React from "react";
import {GridList, GridListTile, makeStyles} from "@material-ui/core";

import v1 from "./../../static/book/v1.mp4";
import v2 from "./../../static/book/v2.mp4";
import v3 from "./../../static/book/v3.mp4";
import v4 from "./../../static/book/v4.mp4";
import v5 from "./../../static/book/v5.mp4";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    //backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: "80wh",
    height: "80vh",
  },
}));

const tileData = [
  {
    img: v1,
    title: 'Image',
    author: 'author',
    cols: 5,
  },
  {
    img: v2,
    title: 'Image',
    author: 'author',
    cols: 5,
  },
  {
    img: v3,
    title: 'Image',
    author: 'author',
    cols: 5,
  },
  {
    img: v4,
    title: 'Image',
    author: 'author',
    cols: 5,
  },
  {
    img: v5,
    title: 'Image',
    author: 'author',
    cols: 5,
  }
];

export const Videos: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={350} className={classes.gridList} cols={10}>
        {tileData.map((tile) => (
          <GridListTile key={tile.img} cols={tile.cols || 1}>
            <iframe
              width={"100%"}
              height={"100%"}
              src={tile.img}
              frameBorder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}