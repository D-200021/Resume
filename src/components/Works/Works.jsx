import React from 'react';
import './works.css';
import Button from '../Button';
import { SolutionConfigurator } from '../../SolutionConfigurator';

const Works = () => {
    const gitHubUrl = SolutionConfigurator.getConfig("Project.GitHub");
    const projectData = SolutionConfigurator.getConfig("Project.Data");
    return (
        <section id="works">
            <h2 className="workstitle">My Project</h2>
            <span className="workDesc">This are the some of my project in career</span>
            <div className='skillBars'>
                {
                    projectData.map((data, index) => {
                        return (
                            <div className='skillBar' key={index}>
                                <img src={data.img} alt="data.name" className="skillBarImg" />
                                <div className='skillBarText'>
                                    <h2>Project Name:- {data.name}</h2>
                                    <h5>Tech Stack:- {data.tech}</h5>
                                    <p> Description:- {data.desc}</p>
                                    <Button url={data.github} btnName={"Github Link"} />
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            {/* <span className="workDesc">As a Software Engineer at Vistaar Systems.Pvt.Ltd, I led the development and optimization of solutions using React JS / Ext JS and Sencha Architect, driving a 10% increase in business opportunities. Spearheading SmartPricing projects, I achieved a remarkable 13% revenue growth and 20% pricing accuracy improvement through innovative use of Ext JS/React, Node JS, JSON, and JavaScript. Additionally, I served as Team Leader for the AI Radio App, innovating inclusive features like FM control and weather updates, enhancing user experience for the visually impaired.</span> */}
            {/* <div className='worksImgs'>
                <img src={p1} alt="p1" className="workImg" />
                <img src={p2} alt="p2" className="workImg" />
                <img src={p3} alt="p3" className="workImg" />
                <img src={p4} alt="p4" className="workImg" />
                <img src={p5} alt="p5" className="workImg" />
                <img src={p6} alt="p6" className="workImg" />
            </div> */}
            <Button url={gitHubUrl[0].url} btnName={"See More"} />
        </section>
    )
}

export default Works
