import {useState, useEffect} from "react";
import {Container, Row, Col} from "react-bootstrap";
import ContactImg from "../assets/img/contact-img.svg";
import React from "react";

let i = 1; 
    let  i_iterator = ()=>{
        i++;
        console.log(i);
    }

// setInterval(i_iterator, 500)


export const Contact = ()=>{
    const formInitialDetails = {
        firstName : "",
        lastName : "",
        email : "",
        phone : "",
        message : "",
    };
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [formDetails, setFormDetails] =  useState(formInitialDetails);
    const [buttonText, setButtonText]  = useState("Send");
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value)=>{
        setFormDetails({
            // if suppose: message is changed, only message will be replaced and remaining would 
            // have a default value when ...formDetails is given
        ...formDetails,
        [category]: value
      })
    }

    const handleSubmit = async(e)=>{
e.preventDefault();

// setInterval(()=>{
    // setButtonText(i%2==0?"Sending..":"Sending...");
    setButtonText("Sending...");
// }, 500);

let response = await fetch("http://localhost:5000/contact",{
    method: "POST",
    headers:{
        "Content-Type": "Application/json;charset=utf-8",

    },
    body: JSON.stringify(formDetails),
}
);
setButtonText("Sent");
// if await is not used, result will be null 
let result = await response.json();
setFormDetails(formInitialDetails);
if (result.code == 200) {
      setStatus({ success: true, message: 'Message sent successfully'});
    } else {
      setStatus({ success: false, message: 'Something went wrong, please try again later.'});
    }

    }

    return(
<section className="contact" id="connect">
<Container>
    <Row className="align-items-center" >
        <Col md={6}>
            <img src={ContactImg} alt="contact-img" />
        </Col>
        <Col md={6}>
            <h2>Get in Touch</h2>
            <form action="" onSubmit={handleSubmit}>
            <Row>
                <Col sm={6} className="px-1">
                    <input type="text" placeholder="First Name" onChange={(e)=> onFormUpdate("firstName",e.target.value) } />
                </Col>
                <Col sm={6} className="px-1">
                    <input type="text"  placeholder="Last Name" onChange={(e)=> onFormUpdate("lastName",e.target.value)} />
                </Col>
                <Col sm={6} className="px-1">
                    <input type="email"  placeholder="Email" onChange={(e)=> onFormUpdate("email",e.target.value)} />
                </Col>
                <Col sm={6} className="px-1">
                    <input type="tel"  placeholder="Phone" onChange={(e)=> onFormUpdate("phone",e.target.value)} />
                </Col>
                <Col sm={6} className="px-1">
                    <textarea row="6"  placeholder="Message" onChange={(e)=> onFormUpdate("message",e.target.value)} />
                </Col>
            </Row>
            <Row className="flex-column">
                <Col>
                 <button type={"submit"}>
                        <span>{buttonText}</span>
                </button>
                </Col>
                {
                    status.message &&
                      <Col>
                 <p className={status.success? "success  fs-6 text-success border-success border rounded-1 mt-4 p-2": "danger  fs-6 text-danger border-danger border rounded-1 mt-4 p-2"} >{status.message}</p>
                </Col>
                }
              
               
            </Row>
            </form>
        </Col>
    </Row>
</Container>
</section>
    );


} 