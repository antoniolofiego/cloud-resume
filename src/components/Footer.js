import React from 'react';
import Social from './Social';

const Footer = ({ data }) => {
    return (
        <footer className='my-10'>
            <div className='lg:flex lg:justify-between content-center mx-auto max-w-7xl lg:py-6 py-4 lg:border-t-2'>
                <div className='items-center flex mb-5 lg:mb-0 justify-center tracking-widest text-sm ml-2'>
                    <span className='inline-block mr-1'>
                        © {new Date().getFullYear()} | Made with
                    </span>
                    <span role='img' aria-label='love'>
                        ❤️
                    </span>
                    <span className='inline-block mr-1'>by</span>
                    <span className='font-bold'>Antonio Lo Fiego</span>
                </div>
                <div className='flex justify-center'>
                    {data &&
                        data.map((social, i) => <Social social={social} />)}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
