import React from 'react'
import { useLayoutEffect, useEffect, useRef } from 'react';
import projects from '../assets/data/projects';
import personalProject from '../assets/data/personalProjects';
import { motion, AnimatePresence } from 'framer-motion'
import { useLocation } from 'react-router-dom'

import Modal from '../components/Modal';
import MyProjects from '../components/MyProjects';
import Project from '../components/Project/Project';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { usePortfolioUpdate } from '../MyContext';
import { useState } from 'react';

const Projects = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    }, [window]);
    const updatePortFolio = usePortfolioUpdate()
    let workRef = useRef(null);
    let personalRef = useRef(null);
    const location = useLocation()
    useEffect(() => {
       
    }, [location, personalRef])

    useLayoutEffect(() => {
        console.log('122222', location.hash)
        if(location.hash === '#personal'){
            var headerOffset = 145;
              var elementPosition = personalRef.current.getBoundingClientRect().top;
            var offsetPosition = elementPosition ;
            
                let scrollOpt = { top: offsetPosition }
                personalRef.current.scrollIntoView({ behavior: 'smooth', ...scrollOpt })
        }
    }, [location, personalRef])


    useEffect(() => {
        if (workRef.current) {
            updatePortFolio({ workRef }, 'refs')
        }
    }, [workRef])
    useEffect(() => {
        if (personalRef.current) {
            updatePortFolio({ personalRef }, 'refs')
        }
    }, [personalRef])

    return(
<>
<Navbar />

{ location && <motion.div initial={{x: `${location.hash === '#personal' ? 0 : 500}`, opacity:0}} animate={{ x: 0, opacity: 1 }}
  transition={{ delay: 0.1 }} className='container max-w-screen-xl mt-5 px-6'>
                <p ref={workRef} className='text-lg mb-10 uppercase tracking-widest text-emerald-600 font-black'>My Works</p>
                {/* Project 1 */}
                {projects && projects.map((d, i) => <Project project={d} pattern={i % 2 == 0 ? "left" : "right"} count={++i} />)}
                <p ref={personalRef} className='text-lg mb-10 uppercase tracking-widest text-emerald-600 font-black'>My Personal Projects</p>
                {/* Project 1 */}
                <div className='flex flex-col'>
                {personalProject && personalProject.map((d, i) => <MyProjects project={d} count={++i} />)}
                </div>
               
                {/* <Modal /> */}
            </motion.div> }
        <Footer />

        </>
    )
}

export default Projects;