
import {useState, useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import {ArrowRightCircle} from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import React from "react";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { isVisible } from "@testing-library/user-event/dist/utils/misc/isVisible";



// import 'animate.css';

export const Banner = () => {
    const [loopNum, setLoopNum] =   useState(0);
    const [isDeleting, setIsDeleting] = useState(false);    
    const toRotate = ["Front End Developer", "Web designer"];
    const  [text, setText] = useState("");
    const period = 1000;
    const [delta, setDelta] = useState(100 - Math.random());

    useEffect(()=>{
let ticker = setInterval(()=>{
    tick();
}, delta);
return ()=>{clearInterval(ticker)};
    }, [text])
    const tick= ()=>{
let i = loopNum % toRotate.length;
let fullText = toRotate[i];
let updatedText = isDeleting ? fullText.substring(0, text.length-1): fullText.substring(0, text.length+1) 

setText(updatedText);
if(isDeleting){
  setDelta(prevDelta => prevDelta/2);
}
if(!isDeleting && updatedText === fullText){
  setIsDeleting(true);
  setDelta(period);

}
else if (isDeleting && updatedText === ""){
  setIsDeleting(false);
  // to increase the loopnum after one element has been finished deleting
  setLoopNum(loopNum+1);
  setDelta(200);
}
    }



  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
            {

              ({isVisible}) =>

            
              <div className={ isVisible? "animate__animated animate__lightSpeedInLeft":"" }>

            <span className="tagline">Welcome to my portfolio</span>
            <h1>
              {`Hi i am a`} <span class="wrap">{text}</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              nostrum ratione quae id, molestias, suscipit dolor consectetur
              tempora dolorem quisquam tempore officiis at blanditiis ut fuga
              omnis vero consequuntur. Nihil!
            </p>
            <button onClick={()=>console.log("connecyyt")}>Lets Connect <ArrowRightCircle size={25}></ArrowRightCircle></button>
            </div>
            }
          
            </TrackVisibility>

          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
            {

              ({isVisible}) =>

            
              <div className={ isVisible? "animate__animated animate__fadeInRight":"" }>

          <img src={headerImg} alt="header img" />
          </div>
            }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
