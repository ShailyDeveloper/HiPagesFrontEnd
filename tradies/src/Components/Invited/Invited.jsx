import React from 'react'
import Namedate from '../UIControls/Namedate'
import Address from '../UIControls/Address'
import Jobdesc from '../UIControls/Jobdesc'
import Decision from '../UIControls/Decisionbutton'
import Usestyles from '../../Styles/Styles';


const Invited = (props) => {
  const classes = Usestyles();
  return (
    <React.Fragment>
      <div className={classes.pagesize}>
        <Namedate
          nameval={props.name}
          dateval={props.Date}
          timeval={props.time}>
        </Namedate>
        <Address
          subval={props.Suburb}
          zipval={props.Zipcode}
          catval={props.Category}
          priceval={props.Price}
          idval={props.ID}>
        </Address>
        <Jobdesc
          showcontact='false'
          descval={props.Description}
        ></Jobdesc>
        <div className={classes.root}>
          <Decision class='true' decision='Accept' acceptfuntion={() => props.accpethandler(props.val, "A")}></Decision>
          <Decision class='false' decision='Decline' acceptfuntion={() => props.accpethandler(props.val, "D")}></Decision>
      ${props.Price} Lead Invitation
      </div>
      </div>
    </React.Fragment>
  )
}

export default Invited