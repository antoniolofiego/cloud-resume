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
                    className='text-xl text-gray-900 hover:text-blue-600 focus:underline focus:text-blue-600 focus:outline-none'
                    href={`mailto:${value}`}
                    title='Email me'>
                    {value}
                </a>
            </div>
        )}
        {field === 'location' && (
            <div className='flex items-center'>
                <MdLocationCity className='contact-icon' />
                <span className='text-xl text-gray-900'>{value}</span>
            </div>
        )}
    </div>
);

export default Contact;
