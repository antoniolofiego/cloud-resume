import React from 'react';

const Skills = ({ data }) => {
    return (
        <div className='content-center mx-auto max-w-4xl pb-6'>
            <div className='mx-10'>
                <span className='section-header'>Technical Skills</span>
                {data.map((item, i) => (
                    <div className='mt-4 mb-6'>
                        <h3
                            className='text-lg tracking-wide font-bold mb-2'
                            id={item.title + i}>
                            {item.title}
                        </h3>
                        {item.subskills.map((skill, index) => (
                            <button
                                id={`${skill + index}`}
                                class='border-2 hover:bg-gray-300 font-bold py-1 px-4 mr-2 my-2 rounded-full hover:border-none items-center shadow-md focus:outline-none focus:bg-gray-300'>
                                {skill}
                            </button>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
