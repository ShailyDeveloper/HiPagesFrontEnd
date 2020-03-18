import React, { Component } from 'react';
import Accepted from '../../Components/Accepted/Accepted';
import dateFormat from 'dateformat';
import axios from 'axios'

class Accept extends Component {
    state = {
        jobs: []
    }
    componentDidMount() {
        axios.get("http://localhost:6538/api/Custs?status=A")
            .then(Response => {
                this.setState({
                    jobs: Response.data,
                    loading: false
                });
            }
            ).catch(error => {
                this.setState({
                    loading: false
                });
                console.log(error)
            });
    }



    render() {

        return (
            this.state.jobs.map(dataval => (
                <Accepted
                    key={dataval.id}
                    name={dataval.firstName + ' ' + dataval.lastName}
                    Date={dateFormat(dataval.date, "mmmm d yyyy")}
                    Suburb={dataval.suburb}
                    Category={dataval.category}
                    ID={dataval.id}
                    Description={dataval.description}
                    Price={dataval.price}
                    Zipcode={dataval.zipcode}
                    time={dataval.time}
                    phone={dataval.phone}
                    email={dataval.email}>
                </Accepted>
            ))
        )

    }
}

export default Accept;