import React from 'react';
import { MdLocationCity } from 'react-icons/md';
import { FiExternalLink } from 'react-icons/fi';
import { AiOutlineMail } from 'react-icons/ai';

const Contact = ({ field, value }) => (
    <div className='my-1'>
        {field === 'email' && (
            <div className='flex items-center'>
                <AiOutlineMail className='contact-icon' />
                <a
                    className='text-xl hover:text-blue-600'
                    href={`mailto:${value}`}
                    title='Email me'>
                    {value}
                </a>
            </div>
        )}
        {field === 'website' && (
            <div className='flex items-center'>
                <FiExternalLink className='contact-icon' />
                <a
                    className='text-xl hover:text-blue-600'
                    target='_blank'
                    href={value}
                    rel='noopener noreferrer'
                    title='My website'>
                    Personal Site
                </a>
            </div>
        )}
        {field === 'location' && (
            <div className='flex items-center'>
                <MdLocationCity className='contact-icon' />
                <span className='text-xl'>{value}</span>
            </div>
        )}
    </div>
);

export default Contact;
