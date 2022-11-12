import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'

const MyProjects = ({ project: { title, tech_stack, description, link, technologies, img }, count }) => {
    const [isModal, setModal] = useState(false)


    return (
        <>

            <div className={`flex p-0 md-p-2 flex-col w-full items-center md:flex-row md:px-10`}>
                <>
                    <div className='w-full md:w-3/4 flex flex-col gap-4'>
                        {/* content here */}
                        <p className='text-4xl text-lighterGray'>{('0' + count).slice(-2)}</p>
                        <p className='text-xl font-bold text-emerald-900 mb-4 md:mb-1'>{title}</p>
                            <p className='text-md font-bold text-emerald-800 px-1 py-4 md:py-1'>Tech Stack:</p>
                        <p className='text-md font-semi-bold px-5 py-4 md:py-1'>{tech_stack}</p>
                        <p className='text-lg text-darkGrayishBlue leading-6 text-justify tracking-normal'>{description}</p>
                    </div>
                    <div className='w-full md:w-1/3'>
                        {/* image here`` */}
                        <figure className="pt-10">
                            <img className='w-96 md:ml-5 shadow-lg rounded-xl' src={img} alt={title} />
                        </figure>
                    </div>
                </>
            </div>
                            <div className="flex flex-row mt-8 justify-center">
                                <label className="btn mr-2 btn-sm btn-outline text-emerald-600 hover:bg-emerald-700 hover:border-emerald-400 hover:text-white" onClick={() => setModal(true)} htmlFor="my-modal-3" layoutId={title} >Packages & Tools</label>
                                <a href={link} target="_blank" className="ml-2 btn gap-2 btn-outline btn-sm hover:text-white hover:fill-white">View Source <svg className='ml-2' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg></a>
                
            </div>

            <AnimatePresence className="m-5">
                {isModal && <>
                    <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                    <motion.div id="my-modal-3" layoutId={title} className="modal" initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ type: "spring", duration: 0.2, }}>
                        <div className="modal-box pt-0 px-0 relative">
                            <div className='flex items-center justify-between px-1.5 pt-1.5 bg-emerald-600'>
                                <h3 className="text-lg text-emerald-200 p-2 font-bold">Packages & Tools</h3>
                                <label htmlFor="my-modal-3" onClick={() => setModal(false)} className="btn btn-sm btn-circle bg-emerald-600 border-0 text-xl text-white hover:bg-emerald-500 hover:text-emerald-900">✕</label>
                            </div>

                            <ul role="list" class="marker:text-emerald-700 list-disc pl-10 space-y-1 text-lg">
                                {technologies.map(d => <li className='text-emerald-800'>{d}</li>)}
                            </ul>

                        </div>
                    </motion.div>
                </>}
            </AnimatePresence>
            <div className="divider"></div>

        </>
    )
}

export default MyProjects;