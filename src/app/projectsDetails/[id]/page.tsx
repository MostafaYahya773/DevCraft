'use client';
import { useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { projectsData } from '@/app/data/projects';

export default function ProjectPage() {
  const params = useParams();
  const projectId = Number(params.id); // ناخد الـ id من URL ونحولها لرقم

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const project = projectsData.find((p) => p.id === projectId);

  if (!project) {
    return <p className="text-slate-700 text-center mt-6">Project not found</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6  rounded-xl shadow-lg py-20 ">
      <div className="mb-6">
        <div className="mb-4 overflow-hidden rounded-lg shadow-md">
          <Image
            src={project.images[activeImageIndex]}
            alt={`${project.name} - Image ${activeImageIndex + 1}`}
            width={800}
            height={500}
            className="w-full  object-cover rounded-lg"
          />
        </div>

        <div className="flex gap-3  flex-wrap">
          {project.images.map((image, index) => (
            <button
              key={index}
              onClick={() => setActiveImageIndex(index)}
              className={`overflow-hidden rounded-md transition-all duration-300 `}
            >
              <Image
                src={image}
                alt={`Thumbnail ${index + 1}`}
                width={80}
                height={56}
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h2 className="text-3xl font-bold text-[#D3F900] mb-2">
          {project.name}
        </h2>
        <p className="text-gray-200 leading-relaxed">{project.description}</p>
      </div>

      {project.link && (
        <div className="mt-4">
          <Link
            href={project.link}
            target="_blank"
            className=" flex items-center gap-2 px-6 py-2 w-fit bg-[#D3F900] text-slate-700 rounded-lg "
          >
            <span className="font-medium">View Project</span>
          </Link>
        </div>
      )}
    </div>
  );
}
