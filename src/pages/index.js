import React from 'react';

import Header from '../components/Header';

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
    </div>
);

export default IndexPage;
