import React from 'react'
import UseStyles from '../../Styles/Styles';
import { LocationOnOutlined, BusinessCenterOutlined } from '@material-ui/icons';

const Address = (props) => {
    const classes = UseStyles();
    const cost = props.accepted === 'true' ? '$' + props.priceval + ' Lead Invitation' : ''
    return (
        <div className={classes.root}>
            <div className={classes.Iconstyle}>
                <LocationOnOutlined></LocationOnOutlined>
                {props.subval} {props.zipval} &nbsp; &nbsp;
        <BusinessCenterOutlined></BusinessCenterOutlined>
                {props.catval} &nbsp; &nbsp;
        Job ID :{props.idval} &nbsp; &nbsp;
        {cost}
            </div>
        </div>
    )
}

export default Address;