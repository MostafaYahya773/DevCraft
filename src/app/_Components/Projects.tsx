import React from 'react';
import AnimatedBox from './AnimationBox';
import Image from 'next/image';
import Link from 'next/link';
import { projectsData } from '../data/projects';
export default function Projects() {
  return (
    <section
      id="projects"
      className="w-full min-h-screen p-5 md:p-10  flex flex-col items-center gap-4 lg:gap-10"
    >
      <div className="title flex flex-col items-center">
        <h2 className="lg:text-4xl md:text-2xl font-bold text-white">
          Discover our top projects across various fields
        </h2>
        <p className="text-primary mt-3 text-center">
          We offer a diverse range of work that reflects our expertise and
          professionalism in delivering the best software and design solutions.
        </p>
      </div>
      <AnimatedBox className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData?.map((project) => (
          <Link
            href={`/projectsDetails/${project.id}`}
            key={project.id}
            className="group p-5 rounded-2xl flex flex-col bg-slate-950 gap-4 hover:-translate-y-2 transition-all duration-300 ease-in-out h-full"
          >
            <Image
              src={project.images[0]}
              alt={project.name}
              width={500}
              height={500}
              className="rounded-lg mx-auto group-hover:scale-105 transition-all duration-300 ease-in-out"
            />
            <div className="projectDetails flex justify-between items-center">
              <h3 className="text-white font-semibold">{project.name}</h3>
              <span className="text-primary">{project.id}</span>
            </div>
          </Link>
        ))}
      </AnimatedBox>
    </section>
  );
}
