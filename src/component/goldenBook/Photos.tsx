import React from "react";
import {makeStyles} from "@material-ui/core";
import image from '../../static/book/Photo 1.png';
import image2 from '../../static/book/Photo 2.png';
import image3 from '../../static/book/Photo 3.png';
import image4 from '../../static/book/Photo 4.png';
import image5 from '../../static/book/Photo 5.png';
import image6 from '../../static/book/Photo 6.png';
import image7 from '../../static/book/Photo 7.png';
import image8 from '../../static/book/Photo 8.png';
import image9 from '../../static/book/Photo 9.png';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    //backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
    overflow: "scroll"
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
      <Carousel plugins={['arrows']}>
        {tileData.map((tile) => (
          <img src={tile.img} alt={tile.title} width={"100%"}/>
        ))}
      </Carousel>
    </div>
  );
}