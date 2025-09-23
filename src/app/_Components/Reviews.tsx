'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
import StarRating from './StarRating';
import Link from 'next/link';
import AnimatedBox from './AnimationBox';

export default function Reviews() {
  const comments = [
    {
      id: 1,
      name: 'Mostafa Yahya',
      avatar: '/ourTeam/team.png',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel odio, quaerat similique eligendi repudiandae neque iusto dolor sunt dolore voluptatem.',
      rate: 5,
    },
    {
      id: 2,
      name: 'Yousef Mohamed',
      avatar: '/ourTeam/team.png',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel odio, quaerat similique eligendi repudiandae neque iusto dolor sunt dolore voluptatem.',
      rate: 5,
    },
    {
      id: 3,
      name: 'Ahmed Osama',
      avatar: '/ourTeam/team.png',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel odio, quaerat similique eligendi repudiandae neque iusto dolor sunt dolore voluptatem.',
      rate: 4,
    },
    {
      id: 4,
      name: 'Nesma Atef',
      avatar: '/ourTeam/team.png',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel odio, quaerat similique eligendi repudiandae neque iusto dolor sunt dolore voluptatem.',
      rate: 4,
    },
    {
      id: 5,
      name: 'Yousef Mahmoud',
      avatar: '/ourTeam/team.png',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel odio, quaerat similique eligendi repudiandae neque iusto dolor sunt dolore voluptatem.',
      rate: 3,
    },
  ];
  return (
    <section className="flex flex-col gap-16 p-5 md:p-10 ">
      <div className="title flex flex-col items-center gap-2">
        <h2 className="text-white lg:text-4xl md:text-2xl text-center">
          Customers Review
        </h2>
        <p className="text-primary text-center text-sm">
          Discover our customers experiences with DevCraft
        </p>
      </div>
      <AnimatedBox className="  gap-4">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2000 }}
          loop={true}
          speed={1400}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="rounded-2xl shadow-lg h-full"
        >
          {comments.map((comment) => (
            <SwiperSlide
              key={comment.id}
              className="bg-slate-700 w-full rounded-2xl h-full"
            >
              <div className="grid grid-rows-[auto_1fr] gap-10 items-center justify-start p-5 h-full">
                <div className="flex gap-5 items-center ">
                  <Image
                    src={comment.avatar}
                    alt="Avatar"
                    width={64}
                    height={64}
                    className="object-cover rounded-md "
                  />
                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-semibold text-primary">
                      {comment.name}
                    </h3>
                    <StarRating rate={comment?.rate} />
                  </div>
                </div>
                <div className="flex flex-col gap-20">
                  <p className="text-white">{comment.text}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </AnimatedBox>
    </section>
  );
}
