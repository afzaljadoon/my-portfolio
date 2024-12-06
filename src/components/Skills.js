import React from "react";
import {
  DiHtml5,
  DiCss3,
  DiSass,
  DiBootstrap,
  DiJavascript1,
  DiReact,
} from "react-icons/di";
import Reveal from "./Reveal";

const skills = [
  {
    category: 'Frontend',
    technologies: [
      { name: 'HTML', icon: <DiHtml5 className='text-orange-600' /> },
      { name: 'CSS', icon: <DiCss3 className='text-blue-600' /> },
      { name: 'Sass', icon: <DiSass className='text-pink-600' /> },
      { name: 'Bootstrap', icon: <DiBootstrap className='text-purple-600' /> },
      { name: 'JavaScript', icon: <DiJavascript1 className='text-yellow-500' /> },
      { name: 'React', icon: <DiReact className='text-blue-500' /> },
    ],
  },
];

const Skills = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 md:px-6 py-20" id="skills">
      <Reveal>
        <h2 className="text-3xl font-bold text-gray-200 mb-8 text-center font-serif">Skills</h2>
        <p className="text-center mb-12 text-gray-400 font-serif">
          I worked on various frontend and fullstack projects. Check them <a href="https://github.com/huzaifa898" className="underline text-blue-500 hover:text-blue-400">here</a>.
        </p>

        {/* Centering the skill card */}
        <div className="flex justify-center w-full">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-[#1a1a2e] p-8 rounded-lg shadow-lg w-full max-w-[600px] flex flex-col items-center border border-[#16213e] hover:border-[#0f3460] transition duration-300"
            >
              <h3 className="text-2xl font-semibold text-gray-200 mb-6 text-center">{skill.category}</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full">
                {skill.technologies.map((tech, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center justify-center p-4 bg-[#0f3460] rounded-lg shadow-md hover:bg-[#e94560] transition duration-300"
                  >
                    <span className="text-5xl mb-2">{tech.icon}</span>
                    <span className="text-lg font-medium text-gray-300">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
}

export default Skills;