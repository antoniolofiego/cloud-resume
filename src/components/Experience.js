import React from 'react';

import Job from './Job';

const Experience = ({ data }) => {
    return (
        <div className='content-center mx-auto max-w-4xl pb-6'>
            <div className='mx-10'>
                <span className='section-header'>Experience</span>
                {data && data.map((item, i) => <Job item={item} i={i} />)}
            </div>
        </div>
    );
};

export default Experience;
