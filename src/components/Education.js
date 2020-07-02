import React from 'react';

const Education = ({ data }) => {
    return (
        <div className='content-center mx-auto max-w-4xl pb-6'>
            <div className='mx-10'>
                <span className='section-header'>Education</span>
                {data &&
                    data.map((educ, i) => (
                        <div className='mt-4 mb-8'>
                            <h3
                                className='text-lg tracking-wide font-bold'
                                id={educ.institution}>
                                {educ.institution}
                            </h3>
                            <div className='flex justify-between items-center mb-3'>
                                <div>
                                    <div className='font-semibold text-md'>
                                        {educ.degree}
                                    </div>
                                    <p>
                                        {educ.location} | {educ.class}
                                    </p>
                                </div>
                                <div>
                                    {educ.gpa && (
                                        <div className='font-semibold'>
                                            GPA: {educ.gpa}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div>
                                <h2 className='font-bold text-md'>
                                    Relevant coursework
                                </h2>
                                {educ.coursework.map((course, index) => (
                                    <button
                                        id={`${course + index}`}
                                        class='border-2 hover:bg-gray-300 font-bold py-1 px-4 mr-2 my-2 rounded-full hover:border-none items-center shadow-md focus:outline-none focus:bg-gray-300'>
                                        {course}
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Education;
