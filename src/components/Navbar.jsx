import React, { useEffect, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import signature from '../assets/images/Signature.svg'
import { usePortfolio, usePortfolioUpdate } from '../MyContext'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'


const Navbar = () => {
    const { header: { hero }, refs: { homeRef, projectRef, skillRef, educationRef, experienceRef, contactRef, workRef, personalRef } } = usePortfolio()
    const navBar = useRef(null)
    const iconRef = useRef(null)
    const menuRef = useRef(null)
    const location = useLocation()
    const navigate = useNavigate()
    const [nav, setNav] = useState(false)
    const updatePortFolio = usePortfolioUpdate()

    useEffect(() => {
        updatePortFolio({nav},'header')
    }, [nav])


    const executeScroll = (e) => {
        let ref = null
        let scrollOpt = { block: 'center' }
        switch (e.target.name) {
            case 'home':
                ref = homeRef
                scrollOpt = { block: 'start' }
                break;
            case 'projects':
                ref = projectRef
                scrollOpt = { block: 'start' }
                break;
            case 'skills':
                console.log(skillRef)
                ref = skillRef
                break;
            case 'education':
                ref = educationRef
                break;
            case 'experience':
                ref = experienceRef
                break;
            case 'contact':
                ref = contactRef
                break;
            case 'works':
                ref = workRef
                scrollOpt = { block: 'start' }
                break;
            case 'personal':
                ref = personalRef
                scrollOpt = { block: 'start' }
                break;
        }
        console.log(ref)
        ref.current.scrollIntoView({ behavior: 'smooth', ...scrollOpt })
    }

    const handleMenuClick = () => {
        iconRef.current.classList.toggle('open')
        // menuRef.current.classList.toggle('flex')
        // menuRef.current.classList.toggle('hidden')
        setNav(!nav)
    }

    useEffect(() => {
        try {

            var prevScrollpos = window.pageYOffset;
            window.onscroll = function () {
                console.log('scrolling')
                var currentScrollPos = window.pageYOffset;
                console.log('scrolling', currentScrollPos)
                console.log('scrolling', currentScrollPos)
                console.log(document.getElementById("navbar"))

                if(currentScrollPos == 0){
                    navBar.current?.classList.remove('sticky')
                }

                if (prevScrollpos > currentScrollPos) {
                    //   document.getElementById("navbar").style.top = "0";
                    console.log('bottom')
                    if (currentScrollPos > 80){
                        navBar.current?.classList.add('sticky')
                }

                } else {
                    console.log('top')
                    navBar.current?.classList.remove('sticky')
                    iconRef.current.classList.remove('open')

                    //   document.getElementById("navbar").style.top = "-10";
                    setNav(false)
                }
                prevScrollpos = currentScrollPos;
            }

        } catch (e) {
            console.log('35555', navBar)
        }
    }, [hero, navBar])



    return (
        <nav id="navbar" ref={navBar} className={`backdrop-blur-lg mx-auto shadow-md`}>
            <div className='container mx-auto drop-shadow-md flex items-center justify-between p-1'>
                <div className='pt-2'>
                    <img className='h-12 hover:cursor-pointer' onClick={() => navigate('/')} src={signature} alt='logo' />
                </div>
                {
                    location.pathname === '/' ? <>
                        <div className='hidden lg:flex space-x-6'>
                            <a name='home' onClick={executeScroll} className="hover:text-emerald-600 text-lg hover:cursor-pointer">Home</a>
                            <a name='projects' onClick={executeScroll} className="hover:text-emerald-600 text-lg hover:cursor-pointer">Projects</a>
                            <a name='skills' onClick={executeScroll} className="hover:text-emerald-600 text-lg hover:cursor-pointer">Skills</a>
                            <a name='personal' onClick={()=>navigate('/view-projects#personal')} className="hover:text-emerald-600 text-lg hover:cursor-pointer">Personal Projects</a>
                            <a name='education' onClick={executeScroll} className="hover:text-emerald-600 text-lg hover:cursor-pointer">Education</a>
                            <a name='experience' onClick={executeScroll} className="hover:text-emerald-600 text-lg hover:cursor-pointer">Experience</a>
                            <a name='contact' onClick={executeScroll} className="hover:text-emerald-600 text-lg hover:cursor-pointer">Contact</a>
                        </div>
                        {/* <div className=""> */}
                            {/* <div  id="menu" className="absolute flex-col z-50 items-center self-end hidden py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"> */}

                           {nav &&  <div id="nav-menu" className='relative w-screen'> 
                                <motion.div initial={{ x: '150%', y:'-250%' }}
                                animate={{ x: '0%', y:'0%' }}
                                transition={{ type: "spring", duration: 1, }} className='absolute z-50 glass bg-emerald-400 -top-10 -right-10'>
                                <ul ref={menuRef} className="relative z-50 lg:hidden menu menu-compact w-56 p-2 rounded-box">
                                <li><a name='home' onClick={(e) => {
                                    handleMenuClick()
                                    executeScroll(e)
                                }} className="text-white font-semi-bold leading-6 text-lg tracking-wide hover:cursor-pointer">Home</a></li>
                                <li><a name='projects' onClick={(e) => {
                                    handleMenuClick()
                                    executeScroll(e)
                                }} className="text-white font-semi-bold leading-6 text-lg tracking-wide hover:cursor-pointer">Projects</a></li>
                                <li><a name='personal' onClick={(e) => {
                                    handleMenuClick()
                                    navigate('/view-projects#personal')
                                }} className="text-white font-semi-bold leading-6 text-lg tracking-wide hover:cursor-pointer">Personal Projects</a></li>
                                <li><a name='skills' onClick={(e) => {
                                    handleMenuClick()
                                    executeScroll(e)
                                }} className="text-white font-semi-bold leading-6 text-lg tracking-wide hover:cursor-pointer">Skills</a></li>
                                <li><a name='education' onClick={(e) => {
                                    handleMenuClick()
                                    executeScroll(e)
                                }} className="text-white font-semi-bold leading-6 text-lg tracking-wide hover:cursor-pointer">Education</a></li>
                                <li><a name='experience' onClick={(e) => {
                                    handleMenuClick()
                                    executeScroll(e)
                                }} className="text-white font-semi-bold leading-6 text-lg tracking-wide hover:cursor-pointer">Experience</a></li>
                                <li><a name='contact' onClick={(e) => {
                                    handleMenuClick()
                                    executeScroll(e)
                                }} className="text-white font-semi-bold leading-6 text-lg tracking-wide hover:cursor-pointer">Contact</a></li>
                                </ul>
                            </motion.div>
                                </div>
}
                            {/* <a name='home' onClick={(e) => {
                                    handleMenuClick()
                                    executeScroll(e)
                                }} className="hover:text-emerald-600 text-lg hover:cursor-pointer">Home</a>
                                <a name='projects' onClick={(e) => {
                                    handleMenuClick()
                                    executeScroll(e)
                                }} className="hover:text-emerald-600 text-lg hover:cursor-pointer">Projects</a>
                                <a name='skills' onClick={(e) => {
                                    handleMenuClick()
                                    executeScroll(e)
                                }} className="hover:text-emerald-600 text-lg hover:cursor-pointer">Skills</a>
                                <a name='education' onClick={(e) => {
                                    handleMenuClick()
                                    executeScroll(e)
                                }} className="hover:text-emerald-600 text-lg hover:cursor-pointer">Education</a>
                                <a name='experience' onClick={(e) => {
                                    handleMenuClick()
                                    executeScroll(e)
                                }} className="hover:text-emerald-600 text-lg hover:cursor-pointer">Experience</a>
                                <a name='contact' onClick={(e) => {
                                    handleMenuClick()
                                    executeScroll(e)
                                }} className="hover:text-emerald-600 text-lg hover:cursor-pointer">Contact</a>
                            </div> */}
                        {/* </div> */}
                    </>
                        :
                        <>
                            <div className='hidden lg:flex space-x-6'>
                                <a name='home' onClick={() => navigate('/')} className="hover:text-emerald-600 text-lg hover:cursor-pointer">Home</a>
                                <a name='works' onClick={executeScroll} className="hover:text-emerald-600 text-lg hover:cursor-pointer">My Works</a>
                                <a name='personal' onClick={executeScroll} className="hover:text-emerald-600 text-lg hover:cursor-pointer">Personal Projects</a>

                            </div>
                            {nav &&  <div id="nav-menu" className='relative w-screen'> 
                                <motion.div initial={{ x: '150%', y:'-250%' }}
                                animate={{ x: '0%', y:'0%' }}
                                transition={{ type: "spring", duration: 1, }} className='absolute z-50 glass bg-emerald-400 -top-10 -right-10'> 
                                <ul ref={menuRef} className="relative z-50 lg:hidden menu menu-compact w-56 p-2 rounded-box">
                                <li><a name='home' onClick={() => {
                                    handleMenuClick()
                                    navigate('/')
                                }} className="text-white font-semi-bold leading-6 text-lg tracking-wide hover:cursor-pointer">Home</a></li>
                                <li><a name='works' onClick={(e) => {
                                    handleMenuClick()
                                    executeScroll(e)
                                }} className="text-white font-semi-bold leading-6 text-lg tracking-wide hover:cursor-pointer">My Works</a></li>
                                <li><a name='personal' onClick={(e) => {
                                    handleMenuClick()
                                    executeScroll(e)
                                }} className="text-white font-semi-bold leading-6 text-lg tracking-wide hover:cursor-pointer">Personal Projects</a></li>
                                </ul>
                            </motion.div>
</div>
}
                            
                        </>
                }
                <button id="menu-btn" ref={iconRef} onClick={handleMenuClick} className="block hamburger lg:hidden focus:outline-none">
                    <span className="hamburger-top"></span>
                    <span className="hamburger-middle"></span>
                    <span className="hamburger-bottom"></span>
                </button>
            </div>
        </nav>
    )
}


export default Navbar;