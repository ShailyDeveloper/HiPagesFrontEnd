import React, { Component } from 'react';
import Invited from '../../Components/Invited/Invited';
import axios from 'axios';
import dateFormat from 'dateformat';
//import emailjs from 'emailjs-com';

class Invite extends Component {
    state = {
        jobs: []
    }
    componentDidMount() {
        axios.get("http://localhost:6538/api/Custs?status=N")
            .then(Response => {
                this.setState({ jobs: Response.data });
            }
            ).catch(error =>
                console.log(error));
    }
    fnupdateState = (value) => {
        const newStateVal = this.state.jobs
        delete newStateVal[value];
        this.setState(
            { jobs: newStateVal }
        )

    }

    fnsendEmail = () => {
        /*var templateParams = {
            name: 'James',
            notes: 'Check this out!'
        };

        emailjs.send('celineeline@gmail.com','template_JdrUY4Y6',templateParams,'user_70ItZgbBSXd4YZnyeiUuf')
        .then(function(response){
        console.log('Success',response.status,response.text);
        },function(error){
            console.log('FAILED',error);
        });*/
        console.log('Send Email');

    }
    fnHandleAccept = (val, statusval) => {

        let finalPrice = null
        const newState = this.state.jobs
        if (newState[val].price > 499) {
            finalPrice = newState[val].price - ((newState[val].price * 10) / 100)
        }
        else {
            finalPrice = newState[val].price
        }
        newState[val].price = finalPrice
        newState[val].status = statusval

        this.setState(
            { jobs: newState }
        )


        axios.put("http://localhost:6538/api/Custs/" + this.state.jobs[val].id, this.state.jobs[val])
            .then(Response => {
                if (Response.status === 204 && this.state.jobs[val].status === "A") {
                    alert('Job Accepted');
                    this.fnsendEmail();
                    this.fnupdateState(val);
                }
                else if (this.state.jobs[val].status === "D") {
                    alert('Job Declined')
                    this.fnupdateState(val)
                }
            }
            ).catch(error =>
                console.log(error))

    }


    render() {


        return (
            this.state.jobs.map((dataval, index) => (
                <Invited
                    accpethandler={(val, statusval) => this.fnHandleAccept(val, statusval)}
                    key={dataval.id}
                    val={index}
                    name={dataval.firstName}
                    Date={dateFormat(dataval.date, "mmmm d")}
                    Suburb={dataval.suburb}
                    Category={dataval.category}
                    ID={dataval.id}
                    Description={dataval.description}
                    Price={dataval.price}
                    Zipcode={dataval.zipcode}
                    time={dataval.time}
                ></Invited>
            ))
        )
    }
}

export default Invite;