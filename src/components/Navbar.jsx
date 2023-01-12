import React from "react";
import {Navbar, Container, Nav} from "react-bootstrap";  
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/img/logo.svg";
import navIcon1 from "E:/6sem/final_project/Front_end/portfolio_react_bootstrap/src/assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import "../App.css";

// functional component convention is Pascalcase
const NavBar = () => {

  
  const [activeLink, setActiveLink]= useState("home");

  // to detect if user has scrolled
  const [scrolled, setScrolled] = useState("false");

// to active the nav-link when clicked
  const onUpdateActiveLink  = (value)=>{
setActiveLink(value);
  }


useEffect(() => {
  const onScroll = ()=>{
    if(window.scrollY>50){
      setScrolled(true);
    }
    else{
      setScrolled(false);
    }
  }

  // to listen the scroll event
window.addEventListener("scroll", onScroll);
return () => {
    window.removeEventListener("scroll", onScroll);
}
  
}, [])

  return (
    // To change the stylings of navbar when it is scrolled 50 offset from top
    <Navbar expand="lg" className={scrolled?"scrolled":""}>
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink==="home"?"active navbar-link": "navbar-link"} onClick={()=> onUpdateActiveLink("home")}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink==="skills"?"active navbar-link": "navbar-link"} onClick={()=> onUpdateActiveLink("skills")}>Skills</Nav.Link>
            <Nav.Link href="#project" className={activeLink==="projects"?"active navbar-link": "navbar-link"} onClick={()=>onUpdateActiveLink("projects")}>Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/abhishek-bhattarai/"><img href="#" src={navIcon1} alt=""/></a>
                <a href="https://www.facebook.com/abhishek.bhattarai.21067/"><img href="#" src={navIcon2} alt=""/></a>
                {/* <a href="#"><img href="#" src={navIcon3} alt=""/></a> */}
            </div>
            <button className="connect text-capitalize" onClick={()=>{console.log(1)}}>lets connect</button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
};

export default NavBar;