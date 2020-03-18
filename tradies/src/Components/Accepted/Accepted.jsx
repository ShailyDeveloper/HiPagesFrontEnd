import React from 'react'
import Namedate from '../UIControls/Namedate'
import Address from '../UIControls/Address'
import Jobdesc from '../UIControls/Jobdesc'
import Usestyles from '../../Styles/Styles';


const Accepted = (props) => {
  const classes = Usestyles();
  return (
    <React.Fragment>
      <div className={classes.pagesize}>
        <Namedate
          nameval={props.name}
          dateval={props.Date}
          timeval={props.time}>
        </Namedate>
        <Address accepted='true'
          subval={props.Suburb}
          zipval={props.Zipcode}
          catval={props.Category}
          priceval={props.Price}
          idval={props.ID}
        ></Address>
        <Jobdesc
          showcontact='true'
          descval={props.Description}
          phoneval={props.phone}
          emailval={props.email}
        ></Jobdesc>
      </div>
    </React.Fragment>
  )
}

export default Accepted