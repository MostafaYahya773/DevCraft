import React from 'react';
import { Whyus } from '../interfaces/interfaces';
import AnimatedBox from './AnimationBox';
export default function WhyUs() {
  const whyUs: Whyus[] = [
    {
      title: 'Expert Team',
      description:
        'Our team consists of highly skilled professionals with years of experience, ensuring every project is executed with precision and quality.',
    },
    {
      title: 'Tailored Solutions',
      description:
        'We provide customized solutions that fit your specific needs and goals, because every client is unique.',
    },
    {
      title: 'Cutting-Edge Technology',
      description:
        'We use the latest tools and technologies to deliver modern, efficient, and reliable solutions.',
    },
    {
      title: 'Quality & Reliability',
      description:
        'We adhere to the highest standards of quality, delivering projects on time and ensuring consistent results.',
    },
    {
      title: 'Excellent Support',
      description:
        'Our dedicated support team is always ready to assist you before, during, and after your project to guarantee complete satisfaction.',
    },
  ];
  return (
    <section className="flex flex-col items-center gap-5 p-5 md:p-10">
      <div className="title flex flex-col items-center">
        <h2 className="lg:text-4xl md:text-2xl font-bold text-white">
          Why Choose Us
        </h2>
        <p className="text-primary mt-3 text-center">
          We offer a diverse range of work that reflects our expertise and
          professionalism in delivering the best software and design solutions.
        </p>
      </div>
      <AnimatedBox className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {whyUs.map((item) => (
          <div
            key={item.title}
            className="group p-5 rounded-2xl flex flex-col bg-slate-950 gap-4 h-full hoverAnimation"
          >
            <h3 className="text-2xl font-bold text-primary">{item.title}</h3>
            <p className="text-white">{item.description}</p>
          </div>
        ))}
      </AnimatedBox>
    </section>
  );
}
