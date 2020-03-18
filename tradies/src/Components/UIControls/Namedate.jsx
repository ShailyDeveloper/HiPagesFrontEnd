import React from 'react';
import UseStyles from '../../Styles/Styles';
import { Avatar } from '@material-ui/core';

const Namedate = (props) => {
    const classes = UseStyles();
    return (
        <div className={classes.displaystyle} >
            <div>
                <Avatar className={classes.orange}>{props.nameval[0].toUpperCase()}</Avatar>
            </div>
            <div>
                <b>{props.nameval}</b>
                <br></br>
                {props.dateval} @{props.timeval}
            </div>
        </div>
    )
}

export default Namedate;