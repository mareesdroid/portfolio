import React from "react";
import { motion, AnimatePresence } from 'framer-motion'
import { usePortfolio, usePortfolioUpdate } from "../MyContext";
import projects from "../assets/data/projects";

const Modal = () => {
    const { project: { isModal, id, title } } = usePortfolio()
    const updatePortFolio = usePortfolioUpdate()
    // project.find(d => d.id === id).title
    console.log('id: ', id)
    return (
        <AnimatePresence className="m-5">
            {isModal && (<>
                    <input type="checkbox" id="my-modal-1" className="modal-toggle" />
                <motion.div
                    layoutId={id + title}
                    id="my-modal-1"
                    className='modal-box pt-0 px-0 relative'
                    key="modal"
                    onClick={() => updatePortFolio({ isModal: false }, 'project')}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", bounce: 10, damping: 10, mass: 0.1, duration: 0.5, }}
                >
                    <div className='bg-emerald-500 rounded-t-xl text-emerald-50 text-lg  p-3'>
                        {title}
                    </div>
                    {/* 
                    {title === 'Modules Worked' ?
                        <div className='flex flex-row  p-5'>
                            {
                                Object.keys(projects.find(d => d.id === id).modules).map(d => <div className='flex-1'>
                                        <p className='text-xl '>{d}:</p>
                                        <ul role="list" class="marker:text-emerald-900 list-disc pl-5 space-y-1 text-sm">
                                            {projects.find(d => d.id === id).modules[d].map(d => <li>{d}</li>)}
                                        </ul>
                                    </div>
                                )
                            }
                        </div>
                        : <div className='flex flex-row  p-5'>
                            {
                                <div className='flex-1'>
                                        <ul role="list" class="marker:text-emerald-900 list-disc pl-5 space-y-1 text-sm">
                                            {projects.find(d => d.id === id).technologies.map(d => <li>{d}</li>)}
                                        </ul>
                                    </div>
                                
                            }
                        </div>
                    } */}

                </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}

export default Modal