
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg"
import meter2 from "../assets/img/meter2.svg"
import ColorSharp from "../assets/img/color-sharp.png"

export const Skills = ()=>{


    const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

return(
<section className="skill" id = "skills">
        <Container>
            <Row>
                <Col>
                <div className="skill-box">
<h2>Skills</h2>
<p>Lorem, ipsum dolor sa consequatur? Aliquid recusandae, natus culpa soluta, harum excepturi animi voluptates placeat quam dolorem atque os.</p>
                <Carousel responsive={responsive} infinite={true} className="skill-slider">
  <div className="item text-center">
    <img src={meter1} alt="" />
    <h5 className="">Bootstrap</h5>
  </div>
  <div className="item text-center">
    <img src={meter2} alt="" />
    <h5>ReactJs</h5>
  </div>
 <div className="item text-center">
    <img src={meter1} alt="" />
    <h5>Javascript</h5>
  </div>
 
  
  
  
</Carousel>
                </div>
                </Col>
            </Row>
        </Container>
        <img src={ColorSharp} alt="" className="background-image-left" />

</section>
);
}