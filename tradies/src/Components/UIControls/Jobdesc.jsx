import React from "react";
import UseStyles from "../../Styles/Styles";
import { Phone, MailOutlineOutlined } from "@material-ui/icons";
const Jobdesc = props => {
    const classes = UseStyles();

    let jobdescdetails =
        props.showcontact === "true" ? (
            <React.Fragment>
                <div className={classes.Iconstyle}>
                    <Phone></Phone>
                    <b className={classes.fontcolor}>{props.phoneval} </b>{" "}
          &nbsp;&nbsp;&nbsp;&nbsp;
          <MailOutlineOutlined></MailOutlineOutlined>
                    <b className={classes.fontcolor}>{props.emailval}</b>
                </div>
                <div>{props.descval}</div>
            </React.Fragment>
        ) : (
                <div>{props.descval}</div>
            );

    return <div className={classes.root}>{jobdescdetails}</div>;
};

export default Jobdesc;
