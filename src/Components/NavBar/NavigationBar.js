import React,{useState} from "react";
import logo from "../../assets/logo.png"
import contactImg from "../../assets/contact.png"
import "./NavigationBar.css"
import {Link} from "react-scroll";
import menu from "../../assets/menu.png"

const NavigationBar=()=>{
    const [showMenu ,setShowMenu]=useState(false)
    return(
            <nav className="navbar">
                <img src={logo} alt="logo" className="logo"/>
                
                <div className="desktopMenu">
                <Link activeClass="active"  to="intro" sp={true} smooth={true} offset={-50} duration={500}
                className="desktopMenuListItem">Home</Link>
                <Link activeClass="active"  to="skills" sp={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">About</Link>
                <Link activeClass="active"  to="works" sp={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Portfolio</Link>
                <Link activeClass="active"  to="clients" sp={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Clients</Link>
                </div>

                <button className="desktopMenuButton" onClick ={()=>{
                    document.getElementById("contact").scrollIntoView({behavior:"smooth"})
                }}>
                    <img src={contactImg} alt="contactImg" className="desktopMenuImg" />Contact Me
                </button>

                <img src={menu} alt="menu" className="mobMenu" onClick={()=>setShowMenu(!showMenu)}/>
                
                <div className="navMenu" style={{display:showMenu?"flex":"none"}}>
                <Link activeClass="active"  to="intro" sp={true} smooth={true} offset={-50} duration={500}
                className="ListItem" onClick={()=>setShowMenu(false)}>Home</Link>
                <Link activeClass="active"  to="skills" sp={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>About</Link>
                <Link activeClass="active"  to="works" sp={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>Portfolio</Link>
                <Link activeClass="active"  to="clients" sp={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>Clients</Link>
                <Link activeClass="active"  to="contact" sp={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>Contact</Link>
                </div>
            </nav>
        )
   }

export default NavigationBar;