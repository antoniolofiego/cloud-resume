import React from 'react';

const Project = ({ item, i }) => {
    return (
        <article className='mt-4 mb-8' key={`${item.name}-${i}`}>
            <h2 className='font-bold text-xl'>{item.name}</h2>
            <h3 className='font-semibold text-lg pb-4'>{item.company}</h3>

            <p className='pb-2'>{item.description}</p>
            <div className='flex'>
                <a
                    className='text-white bg-blue-500 hover:bg-blue-700 font-bold font why py-1 px-4 mr-2 my-2 rounded-full hover:border-none items-center'
                    href={item.link}
                    target='_blank'
                    rel='noopener noreferrer'>
                    GitHub Link
                </a>
            </div>
        </article>
    );
};

export default Project;
