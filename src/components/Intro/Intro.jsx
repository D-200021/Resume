import React from 'react';
import './intro.css';
import bg from "../../assets/image.png"
import dlImg from "../../assets/download.png"
import { Link } from "react-scroll"
import btnImg from "../../assets/hireme.png"
import { SolutionConfigurator } from '../../SolutionConfigurator';

const Intro = () => {
    const intro = SolutionConfigurator.getConfig("Intro");

    const handleDownload = () => {
        const resumeUrl = intro.resumeUrl; // Replace with the actual path to your resume file
        const link = document.createElement('a');
        link.href = resumeUrl;
        link.download = 'Dhruv Sheth.pdf'; // Specify the file name for download
        link.click();
    };



    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">{intro.name}</span> <br /> {intro.desgination}</span>
                <p className="introPara">{intro.intro1}<br /> {intro.intro2}</p>
                <div>
                    <Link><button className="btn"><img src={btnImg} alt="Hire Me !" className='btnImg' />Hire Me!</button></Link>
                    &nbsp;
                    &nbsp;
                    <Link><button className="btn" onClick={handleDownload}><img src={dlImg} alt="Hire Me !" className='btnImg' />Download Resume</button></Link>
                </div>
            </div>
            <img src={bg} alt="" className="bg" />
        </section>
    )
}

export default Intro
