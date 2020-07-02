import React from 'react';

import Project from './Project';

const ProjectGroup = ({ data }) => {
    return (
        <div className='content-center mx-auto max-w-4xl pb-6'>
            <div className='mx-10'>
                <span className='section-header'>Projects</span>
                {data && data.map((item, i) => <Project item={item} i={i} />)}
            </div>
        </div>
    );
};

export default ProjectGroup;
