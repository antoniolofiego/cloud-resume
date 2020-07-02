import React from 'react';

import Header from '../components/Header';
import Experience from '../components/Experience';
import ProjectGroup from '../components/ProjectGroup';
import Skills from '../components/skills';

import SEO from '../components/SEO';
import '../styles.css';

import resume from '../../data/profile';

const IndexPage = () => (
    <div>
        <SEO title='Home' />
        <Header
            name={resume.fullname}
            role={resume.role}
            contacts={resume.contacts}
        />
        <div className='lg:grid lg:grid-col-8 lg:max-w-7xl lg:mx-auto'>
            <div className='lg:col-start-1 lg:col-end-6'>
                <Experience data={resume.experience} />
                <ProjectGroup data={resume.projects} />
            </div>
            <div className='lg:col-start-6 lg:col-end-9'>
                <Skills data={resume.skills} />
            </div>
        </div>
    </div>
);

export default IndexPage;
