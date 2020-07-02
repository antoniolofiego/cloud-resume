import React from 'react';

import Job from './Job';

const Experience = ({ data }) => {
    return (
        <div className='content-center mx-auto max-w-7xl pb-6'>
            <div className='mx-10'>
                <span className='text-2xl text-blue-700 py-2 pr-5 border-b-2 border-blue-200 w-40'>
                    Experience
                </span>
                {data && data.map((item, i) => <Job item={item} i={i} />)}
            </div>
        </div>
    );
};

export default Experience;
