import React from 'react';
import AnimatedBox from './AnimationBox';
import { Box } from '../interfaces/interfaces';
import Image from 'next/image';
export default function OurTeam() {
  const Team: Box[] = [
    {
      img: '/ourTeam/team.png',
      title: 'Mostafa Yahya',
      posation: 'Frontend',
      id: 1,
    },
    {
      img: '/ourTeam/team.png',
      title: 'Yousef Mohamed',
      posation: 'ui/ux designer',
      id: 2,
    },
    {
      img: '/ourTeam/team.png',
      title: 'Nesma Atef',
      posation: 'Frontend',
      id: 3,
    },

    {
      img: '/ourTeam/team.png',
      title: 'Yousef Mahmoud',
      posation: 'socail medai',
      id: 4,
    },
    {
      img: '/ourTeam/team.png',
      title: 'Ahmed',
      posation: 'Backend',
      id: 5,
    },
  ];
  return (
    <section
      id="team"
      className="w-full min-h-screen p-8 md:p-10 lg:p-20 flex flex-col items-center gap-20"
    >
      <div className="title flex flex-col items-center">
        <h2 className="lg:text-4xl md:text-2xl font-bold text-white">
          Our Team
        </h2>
        <p className="text-primary mt-3 text-center">
          Together we build, together we grow
        </p>
      </div>
      <AnimatedBox className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Team.map((member) => (
          <div key={member.id} className="p-5 rounded-2xl flex flex-col gap-4">
            <Image
              src={member.img}
              alt="service img"
              width={300}
              height={300}
              className="rounded-lg mx-auto "
            />
            <h3 className="text-white font-bold text-center">{member.title}</h3>
            <p className="text-primary text-center">{member.posation}</p>
          </div>
        ))}
      </AnimatedBox>
    </section>
  );
}
