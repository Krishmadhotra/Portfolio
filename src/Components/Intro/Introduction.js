import React from "react";
import "./introduction.css";
import img from"../../assets/myimage-PhotoRoom.png";
import btnImg from "../../assets/hireme.png";
import {Link} from  "react-scroll"

const Introduction=()=>{
    return(
        <header className="intro">
           <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Krish</span>
                <br/> 
                FrontEnd Developer</span>
                <p className="introPara">I'm skilled Front End Developer with experience in creating real life projects.</p>
                <Link><button className="btn"><img src={btnImg} alt ="hire me" className="btnImg"/>Hire Me</button></Link>
            </div>
            <img src={img} alt="profile" className="bg"/>
            {/* <img src="https://media-tir3-1.cdn.whatsapp.net/v/t61.24694-24/302118015_416783643905908_4467715208770514600_n.jpg?ccb=11-4&oh=01_AdTacbZ4egvyyQSlnAXQeA-48PkIEs6TIimVcNG8FviCLg&oe=653BE12B&_nc_sid=000000&_nc_cat=110" alt="profile" className="bg" /> */}

        </header>
    
    );
};

export default Introduction;