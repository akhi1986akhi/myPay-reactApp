import React from 'react'

import img from './images/contactus-img-01.webp'
export default function Contact() {

    const [userData, setUserData] = React.useState(
        {
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            address: '',
            message: ''
        }
    );

    let name, value;
    const postUserData = (event) => {
        name = event.target.name;
        value = event.target.value;

        setUserData({ ...userData, [name]: value })
    }

    // connect with fire base
    const submitData = async (event) => {
        event.preventDefault();
        const { firstName, lastName, phone, email, address, message, } = userData

        if(firstName && lastName && phone && email && address && message){

            const res = fetch('https://mypay-54010-default-rtdb.firebaseio.com/userDataRecords.json',
                {
                    method: "POST",
                    Headers: {
                        "Cntent-Type": "application/json"
                    },
                    body:JSON.stringify({firstName, lastName, phone, email, address, message,})
                }
            );
            if(res){
    
                setUserData({
                    firstName: '',
                    lastName: '',
                    phone: '',
                    email: '',
                    address: '',
                    message: ''
                })
                alert("Data Saved Successfully");
            }
        }else{
            alert("Please Fill Data!")
        }





    }

    return (
        <>
            <section className='contact-us-section pt-5'>
                <div className='container'>
                    <div class="row pt-5">
                        <div className="col-sm-12 col-lg-10 col-xl-10 mx-auto pt-5">

                            <div className='row'>
                                <div className='col-sm-12 col-lg-5 col-xl-5 contact-left-side'>
                                    <h1 className='main-heading'>
                                        Contact With Our<br /> Sales Team
                                    </h1>
                                    <p className='main-hero-para'>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                    </p>
                                    <figures>
                                        <img src={img} alt="contactus" className='img-fluid' />
                                    </figures>
                                </div>

                                <div className='col-sm-12 col-lg-7 col-xl-7 contact-right-side'>

                                    <form className='p-5 bg-body-secondary rounded-3 shadow'>
                                        <div className='row g-5'>
                                            <div className='col-xl-6 col-lg-6 col-sm-12'>
                                                <input type='text' className="form-control p-3 rounded-pill" placeholder='First Name' name="firstName" value={userData.firstName} onChange={postUserData}></input>
                                            </div>
                                            <div className='col-xl-6 col-lg-6 col-sm-12'>
                                                <input type='text' className="form-control p-3 rounded-pill" placeholder='Last Name' name='lastName' value={userData.lastName} onChange={postUserData}></input>
                                            </div>


                                            <div className='col-xl-6 col-lg-6 col-sm-12'>
                                                <input type='text' className="form-control p-3 rounded-pill" placeholder='Contact No.' name='phone' value={userData.phone} onChange={postUserData}></input>
                                            </div>
                                            <div className='col-xl-6 col-lg-6 col-sm-12'>
                                                <input type='email' className="form-control p-3 rounded-pill" placeholder='E-mail' name="email" value={userData.email} onChange={postUserData}></input>
                                            </div>


                                            <div className='col-xl-12 col-lg-12 col-sm-12'>
                                                <input type='text' className="form-control p-3 rounded-pill" placeholder='Add Address' name="address" value={userData.address} onChange={postUserData}></input>
                                            </div>
                                            <div className='col-xl-12 col-lg-12 col-sm-12'>
                                                <textarea type='text' className="form-control p-3 rounded-pill" rows="3" placeholder='Write here your message' name='message' value={userData.message} onChange={postUserData}></textarea>


                                            </div>

                                            <div className='col-xl-12 col-lg-12 col-sm-12'>
                                                <button className='btn btn-success btn-style' onClick={submitData} >Submit</button>
                                            </div>

                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
