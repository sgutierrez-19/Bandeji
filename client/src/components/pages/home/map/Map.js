import React, { Fragment } from 'react';
import { useStyles } from './map.style';

export default function Map() {
  const classes = useStyles();

  return (
    <Fragment>
      <div className={classes.image}></div>
    </Fragment>
  );
}
