'use client';
import React from 'react';
import AnimatedBox from './AnimationBox';
import { Box } from '../interfaces/interfaces';
import Image from 'next/image';
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function OurTeam() {
  const Team: Box[] = [
    {
      img: '/ourTeam/team.png',
      title: 'Mostafa Yahya',
      posation: 'Frontend',
      id: 1,
      socail: ['facebook', 'twitter', 'instagram', 'whatsapp'],
    },
    {
      img: '/ourTeam/team.png',
      title: 'Yousef Mohamed',
      posation: 'ui/ux designer',
      id: 2,
      socail: ['facebook', 'twitter', 'instagram', 'whatsapp'],
    },
    {
      img: '/ourTeam/team.png',
      title: 'Nesma Atef',
      posation: 'Frontend',
      id: 3,
      socail: ['facebook', 'twitter', 'instagram', 'whatsapp'],
    },
    {
      img: '/ourTeam/team.png',
      title: 'Yousef Mahmoud',
      posation: 'socail medai',
      id: 4,
      socail: ['facebook', 'twitter', 'instagram', 'whatsapp'],
    },
    {
      img: '/ourTeam/team.png',
      title: 'Ahmed',
      posation: 'Backend',
      id: 5,
      socail: ['facebook', 'twitter', 'instagram', 'whatsapp'],
    },
  ];

  // map icon with platform
  const getIcon = (platform: string) => {
    switch (platform) {
      case 'facebook':
        return <FaFacebook />;
      case 'twitter':
        return <FaTwitter />;
      case 'instagram':
        return <FaInstagram />;
      case 'whatsapp':
        return <FaWhatsapp />;
      default:
        return null;
    }
  };

  return (
    <section
      id="team"
      className="w-full min-h-screen md:p-15 flex flex-col items-center gap-16 p-5 lg:p-10"
    >
      <div className="title flex flex-col items-center">
        <h2 className="lg:text-4xl md:text-2xl font-bold text-white">
          Our Team
        </h2>
        <p className="text-primary mt-3 text-center">
          Together we build, together we grow
        </p>
      </div>

      <AnimatedBox className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {Team.map((member) => (
          <div
            key={member.id}
            className="p-5 rounded-2xl flex flex-col gap-4 bg-slate-800 relative group overflow-hidden"
          >
            <div className="relative">
              <Image
                src={member.img}
                alt={member?.title}
                width={300}
                height={300}
                className="rounded-lg mx-auto"
              />

              <div className="absolute inset-0 bg-black/50 flex items-center justify-center gap-4 text-white text-xl opacity-0 group-hover:opacity-100 transition-all duration-500">
                {member?.socail.map((platform, idx) => (
                  <a
                    key={idx}
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition"
                  >
                    {getIcon(platform)}
                  </a>
                ))}
              </div>
            </div>

            <h3 className="text-white font-bold text-center">{member.title}</h3>
            <p className="text-primary text-center">{member.posation}</p>
          </div>
        ))}
      </AnimatedBox>
    </section>
  );
}
