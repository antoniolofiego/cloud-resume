import React from 'react';

import Header from '../components/Header';
import Experience from '../components/Experience';
import ProjectGroup from '../components/ProjectGroup';

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
        <Experience data={resume.experience} />
        <ProjectGroup data={resume.projects} />
    </div>
);

export default IndexPage;
