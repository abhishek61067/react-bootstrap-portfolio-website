import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "E:/6sem/final_project/Front_end/portfolio_react_bootstrap/src/assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import React from "react";


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="">
          <Col sm={6} className="mt-4">
            <img src={logo} alt="Logo" />
          </Col>
          <Col sm={6} className="text-sm-end text-center mt-4">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/abhishek-bhattarai/"><img href="#" src={navIcon1} alt=""/></a>
                <a href="https://www.facebook.com/abhishek.bhattarai.21067/"><img href="#" src={navIcon2} alt=""/></a>
              

            </div>
            <a href="tel:9861288967" className="d-block mt-3 text-decoration-none text-white">  
                 Contact No: 9861288967

                
                            
</a>
                          <p>Copyright 2023. All rights reserved</p>

          </Col>
        </Row>
      </Container>
    </footer>
  );
};
