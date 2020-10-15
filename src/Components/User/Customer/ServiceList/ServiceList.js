import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import ShowList from './ShowList';

const ServiceList = ({checkedEmail}) => {
    // const [loggedInUser]=useContext(UserContext);
    // console.log(checkedEmail);
    const [userServices, setUserServices] = useState([]);
    useEffect(() =>{
        // console.log(checkedEmail);
        fetch(`https://creative-agency-mmhk30313.herokuapp.com/clients/email?checkedEmail=${checkedEmail}`)
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            setUserServices(data);
        })
    },[]);
    return (
        <div className="text-center">
            {/* <h2>Service List: {userServices.length}</h2> */}
            <div className="row justify-content-center">
                {
                    userServices.map(service => <ShowList key={service._id} service={service} />)
                }
            </div>
        </div>
    );
};

export default ServiceList;