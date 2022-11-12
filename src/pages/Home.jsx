import React from "react";

import Skills from '../components/Skills';

import ContactMe from '../components/ContacMe';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Hero from '../components/Hero';
import Proficiency from "../components/Proficiency";
import MyWorks from "../sections/MyWorks";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Certifications from "../components/Certifications";
// import Projects from "../sections/Projects";

const Home = () => {
return (<>
<Navbar />
<Hero />
        {/* <Projects count={3}/> */}
        <MyWorks count={3}/>
        <Skills />
        <Proficiency />
        <Education />
        <Experience />
        <Certifications />
        <ContactMe />
        <Footer />
</>)
}

export default Home