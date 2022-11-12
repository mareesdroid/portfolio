import React from 'react';

const ProjectContent = ({ project: { title, description }, count, pattern }) => {
    console.log('222222', pattern)
    return (
        <div className={`project-content w-full md:w-1/2 ${pattern === 'left' ? 'md:ml-5 lg:ml-20 xl:ml-40' : 'md:mr-40 lg:mr-40 xl:mr-40'}`}>
            <p className='text-5xl text-lighterGray'>{('0' + count).slice(-2)}</p>
            <p className='text-xl font-bold'>{title}</p>
            <p className='text-lg text-darkGrayishBlue leading-6 text-justify tracking-normal'>
                {description}
            </p>
        </div>
    )
}

export default ProjectContent;