import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

// import web_mobile_Design from '../../../images/icons/service1.png'
// import graphicDesign from '../../../images/icons/service2.png'
// import webDevelopment from '../../../images/icons/service3.png'
import ServiceDetails from './ServiceDetails';
// const services = [
//     {
//         name: 'Web & Mobile design',
//         img: web_mobile_Design,
//         description: 'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.'
//     },
//     {
//         name: 'Graphic design',
//         img: graphicDesign,
//         description: 'Amazing flyers, social media posts and brand representations that would make your brand stand out.'
//     },
//     {
//         name: 'Wev development',
//         img: webDevelopment,
//         description: 'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.'
//     }
// ];

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch(`https://creative-agency-mmhk30313.herokuapp.com/services`)
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            setServices(data);
        })
        .catch(err => console.log(err))
    },[])
    return (
        <section className='text-center my-5'>
            <h2 className='my-5' style={{fontWeight: '600',fontFamily: 'Poppins'}}>Provide awesome <span style={{color: '#7AB259'}}>services</span></h2>
            <div className="row justify-content-center">
                {
                    services.map((service, idx) => <ServiceDetails key={idx} service={service}></ServiceDetails>)
                }
            </div>
        </section>
    );
};

export default Services;