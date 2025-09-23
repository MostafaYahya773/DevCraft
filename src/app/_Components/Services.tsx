'use client';

import Image from 'next/image';
import { Box } from '../interfaces/interfaces';
import AnimatedBox from './AnimationBox';
export default function Services() {
  const services: Box[] = [
    {
      id: 1,
      img: '/services/customWebsite.png',
    },
    {
      id: 2,
      img: '/services/mobileApp.png',
    },
    {
      id: 3,
      img: '/services/automation.png',
    },
    {
      id: 4,
      img: '/services/uiDesign.png',
    },
    {
      id: 5,
      img: '/services/upgradeWebsite.png',
    },
    {
      id: 6,
      img: '/services/supportServices.png',
    },
    {
      id: 7,
      img: '/services/aibot.png',
    },
    {
      id: 8,
      img: '/services/devops.png',
    },
  ];
  return (
    <section
      id="services"
      className="w-full min-h-screen p-8 md:p-10 lg:p-20 flex flex-col items-center gap-20"
    >
      <div className="title flex flex-col items-center">
        <h2 className="lg:text-4xl md:text-2xl font-bold text-white">
          Discover the services we offer
        </h2>
        <p className="text-primary mt-3 text-center">
          Innovative programming and design tailored to your needs.
        </p>
      </div>
      <AnimatedBox className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="p-5 rounded-2xl flex flex-col gap-4 "
          >
            <Image
              src={service.img}
              alt="service img"
              width={500}
              height={500}
              className="rounded-lg mx-auto hoverAnimation"
            />
          </div>
        ))}
      </AnimatedBox>
    </section>
  );
}
