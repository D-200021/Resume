import React from 'react'
import './skill.css'
import { SolutionConfigurator } from '../../SolutionConfigurator';
const Skills = () => {
    const pageTilte = SolutionConfigurator.getConfig("Skills.pageTitle")
    const PageDesc = SolutionConfigurator.getConfig("Skills.workDesc")
    const SkillData = SolutionConfigurator.getConfig("Skills.Data")
    return (
        <div>
            <section id="skills">
                <span className="skillTitle">{pageTilte.pageName}</span>
                <span className="skillDesc">{PageDesc.desc}</span>
                <div className='skillBars'>
                    {
                        SkillData.map((data) => {
                            return (
                                <div className='skillBar' key={data.name}>
                                    <img src={data.img} alt={data.name} className="skillBarImg" />
                                    <div className='skillBarText'>
                                        <h2>{data.name}</h2>
                                        {/* <p>{data.desc}</p> */}
                                    </div>
                                </div>)
                        })
                    }
                </div>
            </section>
        </div>
    )
}

export default Skills
