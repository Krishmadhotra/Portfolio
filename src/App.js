import React from "react";
import NavigationBar from "./Components/NavBar/NavigationBar";
import Introduction from "./Components/Intro/Introduction"
import Skills from "./Components/Skills/Skills";
import Portfolio from "./Components/Work/Portfolio";
import Contact from "./Components/Cont/Contact";
import Footer from "./Components/Footer/Footer";

const App=()=>{
    return (
        <div className="App">
            <NavigationBar />
            <Introduction />
            <Skills />
            <Portfolio />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;