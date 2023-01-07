import {useState, useEffect} from "react";
import {Container, Row, Col} from "react-bootstrap";
import ContactImg from "../assets/img/contact-img.svg";
let i = 1; 
    let  i_iterator = ()=>{
        i++;
        console.log(i);
    }

 setInterval(i_iterator, 500)


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
        setFormDetails({...formDetails, category:value})
    }

    const handleSubmit = async(e)=>{
e.preventDefault();

setInterval(()=>{
    setButtonText(i%2==0?"Sending..":"Sending...");
}, 500);

let response = await fetch("http://localhost:5000/contact",{
    method: "POST",
    headers:{
        "Content-Type": "Application/json;charset=utf-8",

    },
    body: JSON.stringify(formDetails),
}
);
setButtonText("Sent");
let result = response.json();
setFormDetails(formInitialDetails);
if(result.code == 200){
    setStatus({success: true, message: "Message sent successfully"})
}
else{
        setStatus({success: true, message: "Something went wrong. Please try again later"})

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
                    <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e)=> onFormUpdate("firstName",e.target.value) } />
                </Col>
                <Col sm={6} className="px-1">
                    <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e)=> onFormUpdate("lastName",e.target.value)} />
                </Col>
                <Col sm={6} className="px-1">
                    <input type="email" value={formDetails.email} placeholder="Email" onChange={(e)=> onFormUpdate("email",e.target.value)} />
                </Col>
                <Col sm={6} className="px-1">
                    <input type="tel" value={formDetails.phone} placeholder="Phone" onChange={(e)=> onFormUpdate("phone",e.target.value)} />
                </Col>
                <Col sm={6} className="px-1">
                    <textarea row="6" value={formDetails.message} placeholder="Message" onChange={(e)=> onFormUpdate("message",e.target.value)} />
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
                 <p className={status.success? "success": "danger"}>{status.message}</p>
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