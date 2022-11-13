import React, { useRef } from "react";
import { motion, AnimatePresence } from 'framer-motion'
import menu from '../../assets/images/menu.svg'
import { usePortfolioUpdate } from "../../MyContext";
import { useState } from "react";
import { useEffect } from "react";

const ProjectImg = ({ pattern, project: { id, tech_stack, image, role, technologies, modules, link }}) => {
    const contentRef = useRef(null)
    const updatePortfolio = usePortfolioUpdate()
    const [title, setTitle] = useState(null)
    const [isModal, setModal] = useState(false)

    useEffect(() => {
        console.log('1666666', isModal)
        console.log('1666666', title)
    }, [isModal, title])

    return (<>
        <div className={`w-full md:w-1/2 relative ${pattern === 'left' && 'md:mr-20'}`}>
            <motion.img onClick={() => {
                window.open(link, '_blank')
            }} className='shadow-xl items-center rounded-lg hover:cursor-pointer' style={{ width: '100%' }} src={image} alt='img' />
            <div ref={contentRef} className={`tech-content md:absolute rounded-lg md:top-10 ${pattern === 'right' ? 'md:-left-14 lg:-left-28' : 'md:-right-14 lg:-right-28'} md:w-30 md:h-34 lg:w-60 lg:h-68 tech-card bg-white p-5 md:p-3 lg:p-5 shadow-3xl`}>
                <div className='flex flex-col'>
                    <h1 className='text-xl md:text-lg text-emerald-700'>Tech Stack</h1>
                    <p className='text-lg md:text-sm'>{tech_stack}</p>
                </div>
                <div className='flex flex-col'>
                    <h1 className='text-xl md:text-lg text-emerald-700'>My Role</h1>
                    <ul role="list" class="marker:text-emerald-600 list-disc pt-2 pb-2 pl-8 md:pl-5 space-y-1 text-lg md:text-sm">
                        {role.split(",").map(d => <li>{d}</li>)}
                    </ul>
                </div>
                <div className='flex gap-x-2'>
                    <h1 className='text-lg text-emerald-700'>Modules Worked</h1>
                    <motion.label htmlFor="my-modal-1">
                    <motion.img layoutId={id + 'Modules Worked'} className='hover:cursor-pointer menu ml-2 md:ml-0' onClick={() => {
                        setModal(true)
                        setTitle('Modules Worked')
                        updatePortfolio({
                            id: id,
                            title: 'Modules Worked',
                            isModal: true,
                        }
                            , 'project')
                    }} src={menu} alt="menu" />
                    </motion.label>
                </div>
                <div className='flex gap-x-2'>
                    <h1 className='text-lg text-emerald-700'>Packages & Tools</h1>
                    <motion.label htmlFor="my-modal-1" layoutId={id + 'Packages & Tools'} >
                        <img className='hover:cursor-pointer ml-2 md:ml-0' onClick={() => {
                        setModal(true)
                        setTitle('Packages & Tools')
                        updatePortfolio({
                            id: id,
                            title: 'Packages & Tools',
                            isModal: true
                        }
                            , 'project')
                    }} src={menu} alt="menu" />
                    </motion.label>

                </div>
            </div>
        </div>
        <AnimatePresence className="m-5">
                {isModal && title && <>
                    <input type="checkbox" id="my-modal-1" className="modal-toggle" />
                    <motion.div id="my-modal-1" layoutId={id + title} className="modal" initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ type: "spring", duration: 0.2, }}>
                        <div className="modal-box pt-0 px-0 relative">
                            <div className='flex items-center justify-between px-1.5 pt-1.5 bg-emerald-600'>
                                <h3 className="text-md lg:text-lg text-white p-2 font-bold">{title}</h3>
                                <label htmlFor="my-modal-1" onClick={() => setModal(false)} className="btn btn-sm btn-circle bg-emerald-600 border-0 text-xl text-white hover:bg-emerald-500 hover:text-emerald-900">✕</label>
                            </div>

                            {title === 'Modules Worked' ?
                        <div className='grid grid-cols-2 md:grid-cols-3  p-5'>
                            {
                                Object.keys(modules).map(d => <div className={Object.keys(modules).length === 1 ? 'w-screen' : 'flex-1'}>
                                        <p className='text-lg lg:text-xl'>{d}:</p>
                                        <ul role="list" class="marker:text-emerald-900 list-disc pl-5 space-y-1 text-sm">
                                            {modules[d].map(d => <li>{d}</li>)}
                                        </ul>
                                    </div>
                                )
                            }
                        </div>
                        : <div className='flex flex-row  p-5'>
                            {
                                <div className='flex-1'>
                                        <ul role="list" class="marker:text-emerald-900 list-disc pl-5 space-y-1 text-sm">
                                            {technologies.map(d => <li>{d}</li>)}
                                        </ul>
                                    </div>
                                
                            }
                        </div>
                    }

                        </div>
                    </motion.div>
                </>}
            </AnimatePresence>
</>
    )

}

export default ProjectImg