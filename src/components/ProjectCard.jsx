import {Col} from "react-bootstrap";
import React from "react";


export const ProjectCard = ({title, description, imgUrl})=>{

    return(
        <Col sm={6} md = {4} >
            <div className="proj-container">
            <div className="proj-imgbx">
                <img src={imgUrl} alt="" />
                <div className="proj-txtx">
                        <h4>{title}</h4>
                        <span>{description}</span>
                </div>
            </div>
                <div className="text-center">
                        <h4>{title}</h4>
                        <span>{description}</span>
                </div>
            </div>
        </Col>
    );
}