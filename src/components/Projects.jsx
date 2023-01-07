import {Container, Row, Col, TabContainer} from "react-bootstrap";
import {Nav, Tab} from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";



export const Projects = ()=>{
    const projects = [
        {
      title: "Anonymous Confession Web App",
      description: "Built with React, nodejs and express",
      imgUrl: projImg1,
    },
    {
      title: "Budget Calculator",
      description: "Built in react",
      imgUrl: projImg2,
    },
    {
      title: "Weather App with real time data",
      description: "Built with react and tailwind",
      imgUrl: projImg3,
    },
    
    ];



return (
    <section className="project" id="project">
        <Container>
            <Row>
                <Col>
                <h2>Projects</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus qui consequuntur corporis atque error porro tempora, ex accusantium reiciendis iusto quis quod eum.</p>
                 
                 <TabContainer id="projects-tab" defaultActiveKey={"first"}>
                 <Nav variant="pills" className="nav-pills justify-content-center align-items-center" id = "pills-tab">
            <Nav.Item>
              <Nav.Link eventKey="first">Tab 1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Tab 2</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third">Tab 3</Nav.Link>
            </Nav.Item>
          </Nav>

           <Tab.Content>
            <Tab.Pane eventKey="first">
                <p>React Projects</p>
                <Row>
                    {
                        projects.map((project, index)=>{
                            return(
                                <ProjectCard key={index} {...project}   />

                            );
                        })
                    }
                </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
                <p>Bootstrap projects</p>
            </Tab.Pane>
            <Tab.Pane eventKey="third">
                                <p>Tailwind projects</p>

            </Tab.Pane>
          </Tab.Content>
          </TabContainer>
                </Col>
            </Row>
        </Container>
        <img src={colorSharp2} className="background-image-right" alt="" />

    </section>

);
}                  