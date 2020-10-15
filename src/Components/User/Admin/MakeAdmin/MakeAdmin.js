import React from 'react';

const MakeAdmin = () => {
    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log('Admin Added');
        const admin = {
            title: 'Admin',
            email: evt.target.email.value,
            img: 'https://img.freepik.com/free-vector/male-businessman-character-sitting-office-workplace-computer-monitor-desk_80328-218.jpg?size=626&ext=jpg'
        }
        fetch('https://creative-agency-mmhk30313.herokuapp.com/addAdmin', {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(admin)
        })
        .then(data => {
            console.log(data);
        })
    }
    return (
        <div>
            <div className="card w-75 border-info p-3">
                   <h4 className='font-weight-normal my-3'>Email</h4>
                   <small className='text-secondary text-font-italic'>Helping Purpose: abc@gmail.com</small>
                   <form onSubmit={handleSubmit} className='w-100 mb-5'>
                       <div className="form-group w-100 form-inline justify-content-start">
                            <input type="text" className='form-control w-50 mr-3' name='email' placeholder="Enter Your Email" required/>
                            <input type="submit" className="btn btn-success" value="Login"/>
                       </div>
                   </form>
               </div>
        </div>
    );
};

export default MakeAdmin;