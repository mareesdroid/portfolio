import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useRef, useEffect } from 'react';


const Proficiency = () => {
    let proficiencyContainer = useRef(null);
    const [isIntersecting, setIntersecting] = useState(false)

    useEffect(() => {
        if (proficiencyContainer) {
            proficiencyContainer.current.childNodes.forEach((e, i) => {
                e.removeAttribute('id');
               });
            const obs = new IntersectionObserver(
                function (entries) {
                  const ent = entries[0];
                  if (ent.isIntersecting === true) {

                    setTimeout(() => {
                        setIntersecting(true)
                      }, 500);
                  }
                },
                {
                  // In the viewport
                  root: null,
                  threshold: 0,
                  rootMargin: '-80px',
                }
              );
              obs.observe(proficiencyContainer.current);
        }
      }, [proficiencyContainer]);

    return (
        <div className="mt-28 px-6 py-2">
            <div className="md:container  mx-auto   flex flex-col md:flex-row">
                <div ref={proficiencyContainer} className="flex flex-col w-full">
                    <p className="text-lg mb-10 uppercase tracking-widest text-emerald-600 font-black">Proficiency</p>
                    {isIntersecting && <div className='grid grid-cols-2 md:grid-cols-4 flex-row flex-wrap gap-10 self-center'>
                    <motion.div className='flex flex-col items-center' initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.5}}>
                    <div className="radial-progress bg-emerald-50 text-emerald-600 border-4 border-emerald-50 font-black" style={{ "--value": "85", "--size": "6rem", "--thickness": "0.3rem" }}>95%</div>
                    <p className='text-center text-emerald-700 tracking-wide text-xl'>Frontend</p>
                    </motion.div>
                    <motion.div className='flex flex-col items-center' initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1}}>
                    <div className="radial-progress bg-emerald-50 text-emerald-600 border-4 border-emerald-50 font-black" style={{ "--value": "90", "--size": "6rem", "--thickness": "0.3rem" }}>90%</div>
                    <p className='text-center text-emerald-700 tracking-wide text-xl'>Backend</p>
                    </motion.div>
                    <motion.div className='flex flex-col items-center' initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1.5}}>
                    <div className="radial-progress bg-emerald-50 text-emerald-600 border-4 border-emerald-50 font-black" style={{ "--value": "60", "--size": "6rem", "--thickness": "0.3rem" }}>75%</div>
                    <p className='text-center text-emerald-700 tracking-wide text-xl'>Design</p>
                    </motion.div>
                    <motion.div className='flex flex-col items-center' initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 2}}>
                    <div className="radial-progress bg-emerald-50 text-emerald-600 border-4 border-emerald-50 font-black" style={{ "--value": "90", "--size": "6rem", "--thickness": "0.3rem" }}>93%</div>
                    <p className='text-center text-emerald-700 tracking-wide text-xl'>Mongo Query</p>
                    </motion.div>
                    </div>
}
                </div>
            </div>

        </div>
    )
}

export default Proficiency

