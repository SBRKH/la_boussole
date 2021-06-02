import React from "react";
import {GridList, GridListTile, makeStyles} from "@material-ui/core";
import image from '../../static/book/Photo 1.png';
import image2 from '../../static/book/Photo 2.png';
import image3 from '../../static/book/Photo 3.png';
import image4 from '../../static/book/Photo 4.png';
import image5 from '../../static/book/Photo 5.png';
import image6 from '../../static/book/Photo 6.png';
import image7 from '../../static/book/Photo 7.png';
import image8 from '../../static/book/Photo 8.png';
import image9 from '../../static/book/Photo 9.png';

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
    img: image,
    title: 'Image',
    author: 'author',
    cols: 2,
  },
  {
    img: image2,
    title: 'Image',
    author: 'author',
    cols: 2,
  },
  {
    img: image3,
    title: 'Image',
    author: 'author',
    cols: 2,
  },
  {
    img: image4,
    title: 'Image',
    author: 'author',
    cols: 2,
  },
  {
    img: image5,
    title: 'Image',
    author: 'author',
    cols: 2,
  },
  {
    img: image6,
    title: 'Image',
    author: 'author',
    cols: 2,
  },
  {
    img: image7,
    title: 'Image',
    author: 'author',
    cols: 2,
  },
  {
    img: image8,
    title: 'Image',
    author: 'author',
    cols: 2,
  },
  {
    img: image9,
    title: 'Image',
    author: 'author',
    cols: 2,
  },
];

export const Photos: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={350} className={classes.gridList} cols={5}>
        {tileData.map((tile) => (
          <GridListTile key={tile.img} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}