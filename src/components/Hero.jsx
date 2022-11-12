import React, { useEffect, useRef, useState } from 'react'
import { motion, MotionConfig } from 'framer-motion'
import loader from '../assets/images/loader.svg'
import heroImg from '../assets/images/hero.webp'
import { usePortfolio, usePortfolioUpdate } from "../MyContext";

const Hero = () => {
  const hero = useRef(null)
  const [isImageLoaded, setIsImageLoaded] = useState(false)  
  const {header: {nav}} = usePortfolio() 
  const updatePortfolio = usePortfolioUpdate()
  const {refs: {projectRef}} = usePortfolio()

  useEffect(() => {
    if(hero?.current){
      updatePortfolio({
        hero
      }, 'header')
      updatePortfolio({homeRef: hero}, 'refs')

    }
  }, [hero])


  return (
    <>
      <div ref={hero} className={`hero relative ${nav && '-z-10'} h-full flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0`}>
      <MotionConfig transition={{ type: "spring", bounce: 0.25, damping: 10, duration: 0.7 }}>
        <motion.div initial={{x: "-2%" }}
        animate={{  x: "0%" }} className='flex md:p-2  items-center	 flex-col space-y-12 md:w-1/2'>
          <motion.h1 className="max-w-xl  text-2xl font-bold text-center md:text-4xl lg:text-4.5xl md:text-center">
            Hi There,<br />I'm Mareeswaran.
          </motion.h1>
          <p className="w-full text-xl  wordCarousel text-base font-bold text-center md:text-2xl md:text-base">
            I'm into <div>
        <ul class="flip5">
            <li className='my-stack font-bold text-md md:text-2xl text-emerald-500'>Frontend Development</li>
            <li className='my-stack font-bold text-md md:text-2xl text-emerald-500'>Backend Development</li>
            <li className='my-stack font-bold text-md md:text-2xl text-emerald-500'>MERN Stack Development</li>
            <li className='my-stack font-bold text-md md:text-2xl text-emerald-500'>Serverless API Development</li>
            <li className='my-stack font-bold text-md md:text-2xl text-emerald-500'>Blockchain Contract integration</li>
        </ul>
    </div>
          </p>
          <p className="max-w-xl text-justify mx-auto	 text-md tracking-wide text-darkGrayishBlue leading-8 indent-0.5">
          I have 4.5 years of experience in web development using MERN Stack. As a team player, my roles involved in both frontend & backend frameworks. I'm also done personal projects with AWS, Spring boot, Android framework with core Java, Alexa skill build, Google cloud script. Currently, I'm learning Next JS.
          </p>
          {/* <div className="max-w-xl flex justify-center md:justify-center ">
            <motion.button onClick={executeScroll} whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }} transition={{ type: "spring", bounce: 0.25, damping: 10, duration: 0.1, }}  className='p-3 px-6 pt-2 text-white bg-emerald-800 rounded-full baseline hover:bg-emerald-100 hover:text-black'>My Works</motion.button>
          </div> */}
      <p className='text-emerald-500 text-center my-4'>Scroll down to explore more! &darr;</p>

        </motion.div>
        </MotionConfig>
        {/* image */}
        {!isImageLoaded && <motion.img className='md:absolute p-2 md:left-3/4 ' initial={{ x: "2%" }} width={100} src={loader} animate={{ x: '0%' }} transition={{ type: "spring", bounce: 0.25, damping: 10, duration: 0.7, }} />}
        <motion.img
          initial={{ x: "2%" }}
          animate={{ x: isImageLoaded ? '0%' : '5%' }} transition={{ type: "spring", delay: 0.5, bounce: 0.25, damping: 10, duration: 0.7, }}
          style={{ maxWidth: '100%' }}
          onLoad={() => setIsImageLoaded(true)}
          //animate={{ x: "calc(100vw - 50%)" }}
           className='md:w-1/2 p-2 sm:-z-10' src={heroImg} alt="" />

      </div>

    </>
  )
}

export default Hero;