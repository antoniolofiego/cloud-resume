import React from 'react';

const Job = ({ item, i }) => {
    return (
        <article className='mt-4' key={`${item.company}-${i}`}>
            <div className='flex justify-between items-center'>
                <span className='font-bold text-xl'>{item.role}</span>
                <span>{item.location}</span>
            </div>
            <div className='flex justify-between items-center'>
                <span className='font-semibold text-lg'>{item.company}</span>
                <span>
                    {item.start} - {item.end || 'PRESENT'}
                </span>
            </div>
            <ul>
                <li
                    className={
                        'list-none ' + item.description_cont
                            ? 'pt-4 pb-2'
                            : 'py-4'
                    }>
                    {item.description}
                </li>
                {item.description_cont && (
                    <li className='list-none pb-2'>{item.description_cont}</li>
                )}
            </ul>
            <div className='mb-8'>
                {item.technology &&
                    item.technology.map((value, index) => {
                        return (
                            <button
                                id={`${value + index}`}
                                class='border-2 hover:bg-gray-300 font-bold py-1 px-4 mr-2 my-2 rounded-full hover:border-none items-center shadow-md focus:outline-none focus:bg-gray-300'>
                                {value}
                            </button>
                        );
                    })}
            </div>
        </article>
    );
};

export default Job;
