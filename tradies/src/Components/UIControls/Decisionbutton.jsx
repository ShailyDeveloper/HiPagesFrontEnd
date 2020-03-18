import React from 'react';
import UseStyles from "../../Styles/Styles"
import { Button } from '@material-ui/core';

const Decision = (props) => {
  const classes = UseStyles();
  const colour = props.class === 'true' ? classes.buttoncolorprimary : classes.buttoncolorsecondary
  return (
    <Button variant="contained" className={colour}
      onClick={props.acceptfuntion}>
      <b>{props.decision}</b>
    </Button>
  )
}

export default Decision;