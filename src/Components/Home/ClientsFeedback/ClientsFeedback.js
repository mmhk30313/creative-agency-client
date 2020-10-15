import React, { useState } from 'react';
import './ClientsFeedback.css';
import Client from './Client';
import { useEffect } from 'react';

const ClientsFeedback = () => {
    const [clients, setClients] = useState([]);
    useEffect(() =>{
        // fetch(`http://localhost:5000/clientComments`)
        fetch(`https://creative-agency-mmhk30313.herokuapp.com/clientComments`)
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            setClients(data);
        })
    },[])
    return (
        <section className=''>
            <h3 className='my-5 text-center'>Clients <span style={{color: '#7AB259'}}>Feedback</span></h3>
            <div className="row my-5 justify-content-center">
                {
                    clients.map((client) => <Client key={client._id} client={client}/>)
                }
            </div>
        </section>
    );
};

export default ClientsFeedback;