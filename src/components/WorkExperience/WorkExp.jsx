import React from 'react';
import './worksExp.css';
import { SolutionConfigurator } from '../../SolutionConfigurator';

const WorkExp = () => {
    const workExpsIntro = SolutionConfigurator.getConfig("workExp");
    const workExpsData = SolutionConfigurator.getConfig("workExp.Data")
    return (
        <section id="worksExp">
            <h2 className="workstitle">{workExpsIntro.title}</h2>
            <span className="workDesc">{workExpsIntro.titleDesc}</span>
            <div className='skillBars'>
                {
                    workExpsData.map((data, index) => {
                        return (
                            <div className='skillBar' key={data.name}>
                                <img src={data.img} alt="data.name" className="skillBarImg" />
                                <div className='skillBarText'>
                                    <h2>Company Name:- {data.name}</h2>
                                    <h5>Location:- {data.location}</h5>
                                    <h5>joining Date:- {data.date}</h5>
                                    {workExpsData[0].workRole.map((data, index) => {
                                        return (
                                            <ul>
                                                <li key={index}>{data.points}</li>
                                            </ul>
                                        )
                                    })}
                                    {/* <p> Description:- {data.desc}</p> */}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default WorkExp
