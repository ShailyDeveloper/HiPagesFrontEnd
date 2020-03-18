import React from 'react';
import UseStyles from '../../Styles/Gridstyle';
import { NavLink } from 'react-router-dom';


const CenteredGrid = () => {
  const classes = UseStyles();
  return (
    <div className={classes.pagestyle}>
      <div className={classes.root}>
        <NavLink exact to='/' className={classes.linkstyle} activeClassName={classes.activelink}>
          <h2>Invited</h2>
        </NavLink>
      </div>
      <div className={classes.root}>
        <NavLink exact to='/Accepted' className={classes.linkstyle} activeClassName={classes.activelink}>
          <div>
            <h2>Accepted</h2>
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default CenteredGrid;