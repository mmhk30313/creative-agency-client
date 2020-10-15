import React from 'react';

const Client = ({client}) => {
    return (
        <div className='col-md-3 my-2 mx-2 p-2 card'>
            <div className="row p-2 justify-content-sm-center">
                <img className='col-md-4 img-fluid col-sm-5 m-auto' style={{width: '100%', borderRadius: '50px'}} src={client.img} alt=""/>
                <div className='col-md-8 center-text mt-3'>
                    <h5>{client.name}</h5>
                    <h6>{client.company_designation}</h6>
                </div>
            </div>
            <p className='text-secondary center-text mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sunt dolore necessitatibus. Ab, quam? Rerum.</p>
        </div>
    );
};

export default Client;