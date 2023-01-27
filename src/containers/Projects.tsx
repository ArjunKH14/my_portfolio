import React from "react";
import { FiArrowRightCircle } from "react-icons/fi";

import { AiOutlineGithub } from "react-icons/ai";

import { BiWorld } from "react-icons/bi";

const projects = [
    {
        name: "Aws",
        description: "Hello AWS",
    },
    {
        name: "Cloud Computing",
        description: " Cloud Computing",
    },
    {
        name: "Web Computing",
        description: " Web Computing",
    },
    {
        name: "Visual Analytics",
        description: " Visual Analytics",
    },
    {
        name: "Machine Learning",
        description: " Machine Learning",
    },
];

function Projects() {
    return (
        <section className=" h-full w-full">
            <div className="flex flex-col flex-1 flex-wrap">
                <div  className="pl-10">
                    <h3 className="text-5xl py-1 font-semibold text-purple-800">
                        {" "}
                        /cd Projects{" "}
                    </h3>
                </div>

                <div  id="Projects" className="flex gap-10 justify-between flex-wrap p-10 ">
                    {projects.map((project) => (
                        <div className=" bg-cardbg border flex flex-col justify-between border-gray-900  rounded-[40px] p-5 flex-wrap text-slate-300 mt-3 lg:h-25v lg:w-40v w-30v h-25v min-w-max" key={project.name}>
                            <div>
                                <h3 className="text-xl lg:text-2xl font-medium flex justify-between ">
                                    <span>
                                        {" "}
                                        <span className="text-pink-400">/</span> {project.name}{" "}
                                    </span>
                                    <div className="self-center text-4xl">
                                        <FiArrowRightCircle />
                                    </div>
                                </h3>
                                <p className="py-2 text-2xl lg:text-3xl">{project.description}</p>
                            </div>

                            <div className="flex justify-between">
                                <div className="flex flex-col items-center"> <AiOutlineGithub size={30}/> <span> GitHub</span> </div>
                                <div className="flex flex-col items-center"> <BiWorld size={30}/> <span> Live</span> </div>
                            
                                
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
