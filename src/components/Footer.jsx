import React from "react";
import signature from '../assets/images/Signature.svg'
import facebook from '../assets/images/facebook.svg'
import linkedin from '../assets/images/linkedin.svg'
import github from '../assets/images/github.svg'
import fcc from '../assets/images/fcc.svg'

const Footer = () => {
    return (
        <div className="footer border-t-2 border-lighterGray mt-5">
        <div className="container items-center">
            <div className="p-10 justify-self-center">
            <div className="grid grid-cols-1 md:grid-rows-1 md:grid-cols-2 content-between md:w-screen gap-4 items-center md:flex-row place-content-between">
                <div className="sm:w-full sm:text-center items-center w-full flex flex-col md:items-start gap-1">
                    <img className='h-12 w-100 mb-2 md:mb-1' src={signature} alt='logo' />
                    <div className="grid grid-rows-1 grid-cols-3  gap-4">
                    <a href="https://www.facebook.com/mareesdroid/" target="_blank">
                    <img className="w-6 h-6 opacity-75 hover:opacity-100" src={facebook} alt='fb' />
                    </a>
                    <a href="https://www.linkedin.com/in/mareeswaran-a-1b9829113/" target="_blank">

                    <img className="w-6 h-6 opacity-75 hover:opacity-100" src={linkedin} alt='fb' />
                    </a>
                    <a href="https://github.com/mareesdroid/" target="_blank">
                        <img className="w-6 h-6 opacity-75 hover:opacity-100" src={github} alt='fb' />
                        </a>
                    </div>
            </div>

                <div class="md:space-y-1 text-md md:gap-2 grid w-full grid-cols-2 gap-2 justify-items-center md:grid-cols-1 md:justify-items-start md:text-md">
                        {/* <a href="https://www.freecodecamp.org/mareesdroid" target="_blank" className="text-emerald-800 hover:text-emerald-600 hover:cursor-pointer">Online Certifications</a> */}
                        <a href="/view-projects" className="text-emerald-800 hover:text-emerald-600 hover:cursor-pointer">Projects</a>
                        <a href="https://marees-portfolio.s3.us-east-2.amazonaws.com/Marees+Resume.pdf" target="_blank" className="text-emerald-800 hover:text-emerald-600 hover:cursor-pointer">Resume</a>
            </div>
        </div>
        </div>
        <p class="copyright text-sm text-emerald-900 text-center m-2 md:text-left">
                    Copyright &copy; <span class="year">2022</span> by Mareeswaran A.
                    All rights reserved.
                </p>
                </div>
        </div>
    )
}

export default Footer;