import React from 'react';

import Contact from './Contact';

const Header = ({ name, role, contacts }) => (
    <header className='my-10'>
        <div className='lg:flex lg:justify-between items-center content-center mx-auto max-w-7xl lg:py-6 py-4 lg:border-b-2'>
            <div className='flex flex-col lg:flex-row items-center'>
                <div className='mx-10'>
                    <img
                        className='object-cover object-center h-32 w-32 rounded-full mx-auto overflow-hidden border-4 border-col-grey shadow-lg'
                        src='./profile.jpg'
                        alt='Antonio Lo Fiego'
                    />
                </div>
                <div className=''>
                    <h1 className='text-center tracking-wider lg:text-left text-4xl text-blue-700 max-w-7xl'>
                        {name}
                    </h1>
                    <h2 className='text-center lg:text-left text-2xl text-grey-'>
                        {role}
                    </h2>
                </div>
            </div>
            <div className='my-5 lg:my-0'>
                <a
                    href='https://www.youracclaim.com/badges/f3973229-ab07-4804-a1cb-e83d746920f8/linked_in'
                    target='_blank'
                    rel='noreferrer'>
                    <img
                        className='h-24 w-24 mx-auto'
                        src='./aws_ccp.png'
                        alt='AWS Certified Cloud Practitioner'
                    />
                </a>
            </div>
            <div className='flex flex-col mx-10 lg:my-0 lg:justify-center items-center lg:items-start'>
                {contacts &&
                    Object.keys(contacts).map((key) => (
                        <Contact key={key} field={key} value={contacts[key]} />
                    ))}
            </div>
        </div>
    </header>
);

export default Header;
