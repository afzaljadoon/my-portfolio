import React from 'react';
// import project8 from '../Assets/project8.PNG';
// import project9 from "../Assets/project9.PNG";
// import project10 from "../Assets/project10.PNG";
// import project12 from "../Assets/project12.PNG";
// import project13 from "../Assets/project13.PNG";
// import project14 from  "../Assets/project14.PNG";

import { AiOutlineGithub } from 'react-icons/ai';
import Reveal from './Reveal';

const projects = [
    {
        // img: project8,
        title: "Project #1",
        description: "This is my final year project Investor & Enterprenur Recommender  System",

        links: {
            site: "https://huzaifa898.github.io/fyp",
            github: "https://github.com/huzaifa898/fyp",
        },
    },
    {
        // img: project9,
        title: "Project #2",
        description: "A fullstack application for Jobless people their they find their jobs",
        links: {
            github: "https://github.com/huzaifa898/jobs-seeker",
        },
    },
    {
        // img: project10,
        title: "Project #3",
        description: "A Client Project For a Company related to Business industry and constructions",
        links: {
            github: "https://github.com/huzaifa898/client-pro1",
        },
    },
    {
        // img: project12,
        title: "Project #4",
        description: "An application for biscuits agency who sell biscuits online",
        links: {
            github: "https://github.com/huzaifa898/client-pro2",
        },
    },
    {
        // img: project13,
        title: "Project #5",
        description: "A project for a freelancer friend who is a web developer",
        links: {
            github: "https://github.com/huzaifa898/aness",
        },
    },
    {
        // img: project14,
        title: "Project #6",
        description: "Another project for a freelancer friend who is a web developer",
        links: {
            github: "https://github.com/huzaifa898/my-task",
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