import React from 'react';
import project8 from '../image/project8.png' 
import project9 from '../image/project9.png'
import project10 from '../image/project10.png'
import project11 from '../image/project11.png'
import project12 from '../image/project12.png'
import project13 from '../image/project13.png'

import { AiOutlineGithub } from 'react-icons/ai';
import Reveal from './Reveal';

const projects = [
    {
        img: project8,
        title: "Project #1",
        description: " Blockchain Voting System: Secure and Transparent Elections",

        links: {
            site: "https://afzaljadoon.github.io/myfyp",
            github: "https://github.com/afzaljadoon/myfyp",
        },
    },
    {
        img: project9,
        title: "Project #2",
        description: "Netflix Clone: Interface for Browsing and Streaming Shows",
        links: {
            github: "https://github.com/afzaljadoon/Netflix_clone",
        },
    },
    {
        img: project10,
        title: "Project #3",
        description: "A loan calculator for monthly payments based on amount, interest, and term.",
        links: {
            github: "https://github.com/afzaljadoon/loan_calculator",
        },
    },
    {
        img: project12,
        title: "Project #4",
        description: "An app for adding, viewing, and managing a personalized book collection.",
        links: {
            github: "https://github.com/afzaljadoon/Booklist",
        },
    },
    {
        img: project13,
        title: "Project #5",
        description: "Movie List: Add Title, Director, and Release Year",
        links: {
            github: "https://github.com/huzaifa898/aness",
        },
    },
    {
        img: project11,
        title: "Project #6",
        description: "A GitHub user finder displaying user profile, avatar, and repositories.",
        links: {
            github: "https://github.com/afzaljadoon/Github_User",
        },
    },
];

const Portfolio = () => {
    return (
        <div className='max-w-[1200px] mx-auto px-4 md:px-6 md:my-20' id="portfolio">
            <h2 className='text-3xl font-serif text-gray-200 mb-8 text-center'>Projects</h2>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center font-serif'>
                {projects.map((project, index) => (
                    <Reveal key={index}>
                        <div className='bg-gray-800 p-4 rounded-lg shadow-lg w-full max-w-[350px] flex flex-col'>
                            <div className='mb-4'>
                                <img
                                    src={project.img}
                                    alt={project.title}
                                    className='w-full h-48 object-cover rounded-lg shadow-lg'
                                />
                            </div>
                            <div className='flex flex-col justify-between flex-grow'>
                                <h3 className='text-2xl font-semibold text-gray-200 mb-2'>{project.title}</h3>
                                <p className='text-gray-300 mb-4'>{project.description}</p>
                                <div className='flex space-x-4 mt-auto'>
                                    <a href={project.links.github}
                                        className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300'>
                                        <AiOutlineGithub size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;