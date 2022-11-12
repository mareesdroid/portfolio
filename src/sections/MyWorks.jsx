import React, { useEffect, useRef } from 'react'
import Project from '../components/Project/Project'
import Modal from '../components/Modal'
import { usePortfolio, usePortfolioUpdate } from '../MyContext'
import { Link } from 'react-router-dom'
import projects from '../assets/data/projects'

const MyWorks = ({ count }) => {
    const updatePortFolio = usePortfolioUpdate()
    let projectRef = useRef(null);
    useEffect(() => {
        if (projectRef.current) {
            updatePortFolio({ projectRef }, 'refs')
        }
    }, [projectRef])




    return (
        <>
            <div ref={projectRef} className='container max-w-screen-xl mt-28 px-6'>
                <p className='text-lg mb-10 uppercase tracking-widest text-emerald-600 font-black'>My Works</p>
                {/* Project 1 */}
                {projects.slice(0, count).map((d, i) => <Project project={d} pattern={i % 2 == 0 ? "left" : "right"} count={++i} />)}

                {/* <Project  title={'HUT Money'} count={'03'} content={'User can deposit & withdraw'} techStack="React JS, Node JS, MongoDB" pattern="left" img={hut} /> */}

                <div className="flex justify-center md:justify-center ">
                    <Link to="/view-projects" className='btn btn-outline text-emerald-700 p-3 px-6 pt-2 font-black baseline rounded-full hover:bg-emerald-900 hover:text-emerald-100'>Browse all &rarr;</Link>
                </div>
                {/* <Modal /> */}
            </div>
        </>
    )
}

export default MyWorks;
