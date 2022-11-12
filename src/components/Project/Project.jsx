import React, { useState } from 'react'
import ProjectImg from './ProjectImg'
import ProjectContent from './ProjectContent'
import { useEffect } from 'react';
import { useRef } from 'react';
import { usePortfolioUpdate } from '../../MyContext';


const Project = ({ pattern, count, project }) => {
    // const { title, role } = project;

    const updatePortFolio = usePortfolioUpdate()
    let projectRef = useRef(null);
    useEffect(() => {
        if (projectRef.current) {
            updatePortFolio({ projectRef }, 'refs')
        }
    }, [projectRef])

    useEffect(() => {
        console.log('tttt', project)
    }, [project])

    // const getContent = () => {
    //     let content = {
    //         modules: '',
    //         packages: ''
    //     }
    //     switch (title) {
    //         case 'NFT Moon Metaverse':
    //             content = {
    //                 modules: <div className='flex flex-row  p-5'>
    //                     <div className='flex-1'>
    //                         <p className='text-xl '>Frontend:</p>
    //                         <ul role="list" class="marker:text-emerald-900 list-disc pl-5 space-y-1 text-sm">
    //                             {role.split(',').map(d => <li>{d}</li>)}
    //                         </ul>
    //                     </div>
    //                     <div className='flex-1'>
    //                         <p className='text-xl '>Backend:</p>
    //                         <ul role="list" class="marker:text-emerald-900 list-disc pl-5 space-y-1 text-sm">
    //                             <li>All modules</li>
    //                         </ul>
    //                     </div>
    //                 </div>,
    //                 packages: <div className='flex flex-row  p-5'>
    //                     <div className='flex-1'>
    //                         <p className='text-xl '>Frontend:</p>
    //                         <ul role="list" class="marker:text-emerald-900 list-disc pl-5 space-y-1 text-sm">
    //                             <li>Redux</li>
    //                             <li>Metamask</li>
    //                             <li>Ethers</li>
    //                         </ul>
    //                     </div>
    //                     <div className='flex-1'>
    //                         <p className='text-xl '>Backend:</p>
    //                         <ul role="list" class="marker:text-emerald-900 list-disc pl-5 space-y-1 text-sm">
    //                             <li>Web3</li>
    //                             <li>Express</li>
    //                         </ul>
    //                     </div>
    //                 </div>

    //             }
    //             break;
    //         case 'MEVR Diamond':
    //             content = {
    //                 modules: <div className='flex flex-row p-5'>
    //                     <div className='flex-1'>
    //                         <p className='text-xl '>Frontend:</p>
    //                         <ul role="list" class="marker:text-emerald-900 list-disc pl-5 space-y-1 text-sm">
    //                             <li>Wallet Connect</li>
    //                             <li>Redux setup</li>
    //                             <li>Helpers setup</li>
    //                             <li>Unity Listener setup</li>
    //                             <li>Web socket setup</li>
    //                         </ul>
    //                     </div>
    //                     <div className='flex-1'>
    //                         <p className='text-xl '>Backend:</p>
    //                         <ul role="list" class="marker:text-emerald-900 list-disc pl-5 space-y-1 text-sm">
    //                             <li>All modules</li>
    //                         </ul>
    //                     </div>
    //                 </div>,
    //                 packages: <div className='flex flex-row  p-5'>
    //                     <div className='flex-1'>
    //                         <p className='text-xl '>Frontend:</p>
    //                         <ul role="list" class="marker:text-emerald-900 list-disc pl-5 space-y-1 text-sm">
    //                             <li>Redux</li>
    //                             <li>Metamask</li>
    //                             <li>Ethers</li>
    //                             <li>Binance chain wallet</li>
    //                             <li>Wallet connect</li>
    //                         </ul>
    //                     </div>
    //                     <div className='flex-1'>
    //                         <p className='text-xl '>Backend:</p>
    //                         <ul role="list" class="marker:text-emerald-900 list-disc pl-5 space-y-1 text-sm">
    //                             <li>Web3</li>
    //                             <li>Express</li>
    //                             <li>Mongoose js</li>
    //                         </ul>
    //                     </div>
    //                 </div>
    //             }
    //             break;
    //         case 'HUT Money':
    //             content = {
    //                 modules: <div className='flex flex-row  p-5'>
    //                     <div className='flex-1'>
    //                         <p className='text-xl '>Frontend:</p>
    //                         <ul role="list" class="marker:text-emerald-900 list-disc pl-5 space-y-1 text-sm">
    //                             <li>All modules</li>
    //                         </ul>
    //                     </div>
    //                     <div className='flex-1'>
    //                         <p className='text-xl '>Backend:</p>
    //                         <ul role="list" class="marker:text-emerald-900 list-disc pl-5 space-y-1 text-sm">
    //                             <li>Schema setup</li>
    //                             <li>Coin integration</li>
    //                         </ul>
    //                     </div>
    //                 </div>,
    //                 packages: <div className='flex flex-row  p-5'>
    //                     <div className='flex-1'>
    //                         <p className='text-xl '>Frontend:</p>
    //                         <ul role="list" class="marker:text-emerald-900 list-disc pl-5 space-y-1 text-sm">
    //                             <li>Redux</li>
    //                             <li>Metamask</li>
    //                             <li>Ethers</li>
    //                             <li>Binance chain wallet</li>
    //                             <li>Wallet connect</li>
    //                         </ul>
    //                     </div>
    //                     <div className='flex-1'>
    //                         <p className='text-xl '>Backend:</p>
    //                         <ul role="list" class="marker:text-emerald-900 list-disc pl-5 space-y-1 text-sm">
    //                             <li>Web3</li>
    //                             <li>Express</li>
    //                             <li>Mongoose js</li>
    //                         </ul>
    //                     </div>
    //                 </div>
    //             }
    //             break;
    //     }

    //     return content;
    // }

    return (
        <div className={`flex ${pattern === 'left' ? 'flex-col-reverse' : 'flex-col'} items-center  md:flex-row mb-20`}>
            {project && pattern === 'left' ? <>
            {(() => {
                console.log(project, 'sssss')
            })()}
                <ProjectImg count={count} pattern={pattern} project={ project } />
                <ProjectContent count={count} project={project} pattern={pattern} />
            </> : <>
            <ProjectContent count={count} project={project} pattern={pattern} />
            <ProjectImg count={count} pattern={pattern} project={ project } />
            </>}
        </div>



    )

}

export default Project;