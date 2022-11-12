import React, { useRef, useEffect, useState} from 'react'
import { motion } from "framer-motion";
import { useMediaQuery } from 'react-responsive'
import { usePortfolioUpdate } from '../MyContext';


const Experience = () => {
    let timelineContainer = useRef(null);
    let [isInterSecting, setInterSecting] = useState(false)
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 984px)' })
    const updatePortfolio = usePortfolioUpdate()
 

    useEffect(() => {
        if (timelineContainer) {

            const obs = new IntersectionObserver(
                function (entries) {

                    const ent = entries[0];
                    if (ent.isIntersecting === true) {
                        setInterSecting(true)
                    }
                },
                {
                    // In the viewport
                    root: null,
                    threshold: 0,
                  rootMargin: isTabletOrMobile ? '-100px' :"-200px",
                }
            );
            obs.observe(timelineContainer.current);
        updatePortfolio({experienceRef: timelineContainer}, 'refs')

        }
    }, [timelineContainer]);

    const draw = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: (i) => {
            const delay = 1;
            return {
                pathLength: 1,
                opacity: 1,
                transition: {
                    pathLength: { delay, type: "spring", duration: 3, bounce: 0 },
                    opacity: { delay, duration: 0.5 }
                }
            };
        }
    };


    return (
        <>
            <div ref={timelineContainer} className="container mt-28">
                <p className="text-lg mb-10 uppercase tracking-widest text-emerald-600 font-black">Experience</p>

                 {isInterSecting && <div className='roadmap h-96 w-full'>
                    <div className="h-full w-full">
                        <div className='relative h-full w-full'>
                        {
                                    isTabletOrMobile ?
                            <div className='absolute rounded-lg left-1/2'>
                                 <motion.svg
                                    className='stroke-emerald-500 stroke-max w-full'
                                    width="5px"
                                    height="400px"
                                    viewBox="2000 0 2000px 2000"
                                    initial="hidden"
                                    animate="visible"
                                >
                                    <motion.line
                                        x1="0"
                                        y1="0"
                                        x2="0"
                                        y2="400px"
                                        variants={draw}
                                        custom={2}
                                    />
                                </motion.svg> 
                                </div>
                                :                             <div className='w-full absolute rounded-lg top-2/4'>
                                <motion.svg
                                    className='stroke-emerald-500 stroke-max'
                                    width="100%"
                                    height="5px"
                                    viewBox="2000 0 2000px 2000"
                                    initial="hidden"
                                    animate="visible"
                                >
                                    <motion.line
                                        x1="0"
                                        y1="0"
                                        x2="100%"
                                        y2="0"
                                        variants={draw}
                                        custom={2}
                                    />
                                </motion.svg>
                                </div>
                                }
                                
                            

                            { isTabletOrMobile ? <div className='absolute rounded-lg right-1/2 top-1/4'>
                                <motion.svg
                                    className='stroke-emerald-500 stroke-max h-full'
                                    width="100%"
                                    height="5px"
                                    viewBox="2000 0 2000px 2000"
                                    initial="hidden"
                                    animate="visible"
                                >
                                    <motion.line
                                        x1="0"
                                        y1="0"
                                        x2="100%"
                                        y2="0"
                                        variants={draw}
                                        custom={2}
                                    />
                                </motion.svg>
                            </div> : <div className='absolute z-0 rounded-lg top-2/4 left-2/4'>
                                <motion.svg
                                    className='stroke-emerald-500 z-0 stroke-max h-full'
                                    width="50%"
                                    height="50%"
                                    viewBox="50% 0 50% 50%"
                                    initial="hidden"
                                    animate="visible"
                                >
                                    <motion.line
                                        x1="0"
                                        y1="0"
                                        x2="0"
                                        y2="100%"
                                        variants={draw}
                                        custom={2}
                                    />
                                </motion.svg>
                            </div> }

                            { isTabletOrMobile ? <div className='absolute rounded-lg top-2/4 left-2/4'>
                                <motion.svg
                                    className='stroke-emerald-500 stroke-max h-full'
                                    width="100%"
                                    height="5px"
                                    viewBox="2000 0 2000px 2000"
                                    initial="hidden"
                                    animate="visible"
                                >
                                    <motion.line
                                        x1="0"
                                        y1="0"
                                        x2="100%"
                                        y2="0"
                                        variants={draw}
                                        custom={2}
                                    />
                                </motion.svg>
                            </div> : <div className='absolute rounded-lg bottom-2/4 left-3/4'>
                                <motion.svg
                                    className='stroke-emerald-500 stroke-max h-full'
                                    width="50%"
                                    height="100%"
                                    viewBox="100% 0 100% 100%"
                                    initial="hidden"
                                    animate="visible"
                                >
                                    <motion.line
                                        x1="0"
                                        y1="100%"
                                        x2="0"
                                        y2="0"
                                        variants={draw}
                                        custom={2}
                                    />
                                </motion.svg>
                            </div> }

                            { isTabletOrMobile  ? <div className='absolute rounded-lg right-1/2 top-3/4'>
                                <motion.svg
                                    className='stroke-emerald-500 stroke-max h-full'
                                    width="100%"
                                    height="5px"
                                    viewBox="2000 0 2000px 2000"
                                    initial="hidden"
                                    animate="visible"
                                >
                                    <motion.line
                                        x1="0"
                                        y1="0"
                                        x2="100%"
                                        y2="0"
                                        variants={draw}
                                        custom={2}
                                    />
                                </motion.svg>
                            </div> : <div className='absolute rounded-lg bottom-2/4 left-1/4'>
                                <motion.svg
                                    className='stroke-emerald-500 stroke-max h-full'
                                    width="50%"
                                    height="100%"
                                    viewBox="100% 0 100% 100%"
                                    initial="hidden"
                                    animate="visible"
                                >
                                    <motion.line
                                        x1="0"
                                        y1="100%"
                                        x2="0"
                                        y2="0"
                                        variants={draw}
                                        custom={2}
                                    />
                                </motion.svg>
                            </div> }
                            
                            {/* <div className="time-line h-1 w-full rounded-lg bg-emerald-600 absolute top-2/4"></div> */}
                            <div className="dot h-[18px] w-[18px] bg-emerald-700 absolute rounded-full top-3/4 lg:top-2/4  left-1/2 lg:left-3/4 transform -translate-x-1/2 -translate-y-1/2">
                            </div>
                             <div className="dot h-[18px] w-[18px] bg-emerald-700 absolute rounded-full top-2/4 left-2/4 transform -translate-x-1/2 -translate-y-1/2"></div>
                            <div className="dot h-[18px] w-[18px] bg-emerald-700 absolute rounded-full top-1/4 lg:top-1/2 left-2/4 lg:left-1/4 transform -translate-x-1/2 -translate-y-1/2"></div> 

                            <div className={`${isTabletOrMobile ? 'absolute m-2 lg:bg:white lg:mb-5 lg:shadow-md flex gap-1 lg:gap-2 flex-col w-52 pl-5 pr-5 lg:p-5 items-center text-center m-1 top-1/4 mt-5 left-1/4 transform -translate-x-1/2' : 'card-c absolute bg:white pb-5 mb-5 shadow-md gap-2 flex flex-col w-92 p-5 items-center left-1/4 rounded-lg transform -translate-x-1/2'}`}>
                            <p className="text-sm sm:text-center lg:text-lg font-light">Benchmark Business Software, Chennai.</p>
                                <p className="text-sm sm:text-left lg:text-md tracking-widest text-emerald-800 font-black"><q>Web Developer</q></p>
                                <p className="text-sm sm:text-left lg:text-sm font-light">2018 - 2020</p>
                            </div>

                            <div className={`${isTabletOrMobile ? 'absolute m-2 lg:bg:white lg:mb-5 lg:shadow-md flex gap-1 lg:gap-2 flex-col w-52 pl-5 pr-5 lg:p-5 items-center text-center m-1 mt-5 left-3/4 top-1/2 transform -translate-x-1/2' : 'card-c absolute bg:white pb-5 mb-5 shadow-md gap-2 flex flex-col w-92 p-5 items-center left-2/4 top-3/4 rounded-lg transform -translate-x-1/2'}`}>
                                <p className="text-sm sm:text-center lg:text-lg font-light">Intellectyx Data Science, Coimbatore.</p>
                                <p className="text-sm sm:text-center lg:text-md tracking-widest text-emerald-800 font-black"><q>IT Analyst</q></p>
                                <p className="text-sm sm:text-center lg:text-sm font-light">2020</p>
                            </div>
                            <div className={`${isTabletOrMobile ? 'absolute m-2 lg:bg:white lg:mb-5 lg:shadow-md flex gap-1 lg:gap-2 flex-col w-52 pl-5 pr-5 lg:p-5 items-center mt-5 text-center m-1 left-1/4 top-3/4 transform -translate-x-1/2' : 'card-c absolute bg:white pb-5 mb-5 shadow-md gap-2 flex flex-col w-92 p-5 items-center left-3/4 rounded-lg transform -translate-x-1/2'}`}>
                                <p className="text-sm sm:text-center lg:text-lg font-light">Osiz Technologies, Madurai.</p>
                                <p className="text-sm sm:text-center lg:text-md tracking-widest text-emerald-800 font-black"><q>Senior Programmer</q></p>
                                <p className="text-sm sm:text-center lg:text-sm font-light">2020 - 2022</p>
                            </div>




                            {/* <div className="absolute lg:bg:white lg:mb-5 lg:shadow-md flex gap-1 lg:gap-2 flex-col w-52 pl-5 pr-5 lg:p-5 items-center top-1/4 mt-5 left-1/4 transform -translate-x-1/2">
                                <p className="text-sm text-center lg:text-lg font-light">Benchmark Business Software, Chennai.</p>
                                <p className="text-sm text-left lg:text-md tracking-widest text-emerald-800 font-black"><q>Web Developer</q></p>
                                <p className="text-sm text-left lg:text-sm font-light">2018 - 2020</p>
                            </div>

                            <div className="absolute lg:bg:white lg:mb-5 lg:shadow-md flex gap-1 lg:gap-2 flex-col w-52 pl-5 pr-5 lg:p-5 items-center mt-5 left-3/4 top-1/2 transform -translate-x-1/2">
                                <p className="text-sm text-center lg:text-lg font-light">Intellectyx Data Science, Coimbatore.</p>
                                <p className="text-sm text-center lg:text-md tracking-widest text-emerald-800 font-black"><q>IT Analyst</q></p>
                                <p className="text-sm text-left lg:text-sm font-light">2020</p>
                            </div>
                            <div className="absolute lg:bg:white lg:mb-5 lg:shadow-md flex gap-1 lg:gap-2 flex-col w-52 pl-5 pr-5 lg:p-5 items-center mt-5 left-1/4 top-3/4 transform -translate-x-1/2">
                                <p className="text-sm text-center lg:text-lg font-light">Osiz Technologies, Madurai.</p>
                                <p className="text-sm text-center lg:text-md tracking-widest text-emerald-800 font-black"><q>Senior Programmer</q></p>
                                <p className="text-sm text-left lg:text-sm font-light">2020 - 2022</p>
                            </div> */}

                        </div>
                    </div>
                </div>
}
            </div>
        </>
    )
}

export default Experience;