import React from "react";
import "./Skills.css";
import UIDesign from "../../assets/ui-design.png";
import WebDesign from "../../assets/website-design.png";
import AppDesign from "../../assets/app-design.png"

const Skills=()=>{
    return(
        <section id="skills">
            <span className="skillTitle">What I Do </span>
            <span className="skillDesc">I am skilled and passionate Web Devoloper with experience in creating visually appealing and user-friendly websites.I have a strong understanding of design and keen eye for detail.I am proficient in HTML,CSS and JavaScript ,as well as having a strong command in ReactJS and currently working on NodeJS.</span>
            <div className="skillBars">
            <div className="skillBar">
                <img src={UIDesign} alt= "UIDesign" className="skillBarImg"/>
                <div className="skillBarText">
                    <h2>UI/UX Design</h2>
                    <p>Have Experience and worked with many MNCs</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={WebDesign} alt= "WebDesign" className="skillBarImg"/>
                <div className="skillBarText">
                    <h2 className="">Website Design</h2>
                    <p className="">Have worked on many companies with their respective complex websites.</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={AppDesign} alt= "AppDesign" className="skillBarImg"/>
                <div className="skillBarText">
                    <h2>App Design</h2>
                    <p>Have build many Applications from the scratch.</p>
                </div>
            </div>
            </div>

        </section>
    )
}

export default Skills;