import React from 'react';
import {
    AiFillLinkedin,
    AiOutlineTwitter,
    AiOutlineGithub,
} from 'react-icons/ai';

const Social = ({ social }) => {
    return (
        <>
            {social.service === 'linkedin' && (
                <a
                    href={social.url}
                    target='_blank'
                    key={social.service}
                    rel='noreferrer'
                    className='mr-4'>
                    <AiFillLinkedin size={32} />
                </a>
            )}
            {social.service === 'twitter' && (
                <a
                    href={social.url}
                    target='_blank'
                    key={social.service}
                    rel='noreferrer'
                    className='mr-4'>
                    <AiOutlineTwitter size={32} />
                </a>
            )}
            {social.service === 'github' && (
                <a
                    href={social.url}
                    target='_blank'
                    key={social.service}
                    rel='noreferrer'
                    className='mr-4'>
                    <AiOutlineGithub size={32} />
                </a>
            )}
        </>
    );
};

export default Social;
