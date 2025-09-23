import Image from 'next/image';

const images = [
  '/gallery/gallery2.png',
  '/gallery/gallery6.png',
  '/gallery/gallery3.jpg',
  '/gallery/gallery4.png',
  '/gallery/gallery7.png',
  '/gallery/gallery5.png',
  '/gallery/gallery8.png',
];

export default function Gallery() {
  return (
    <div
      id="gallery"
      className="w-full py-20  text-white space-y-12 overflow-hidden"
    >
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-slide">
          {images.concat(images).map((src, i) => (
            <div
              key={`row1-${i}`}
              className="w-1/2 md:w-1/4 flex-shrink-0 px-2"
            >
              <Image
                src={src}
                alt={`slide-${i}`}
                width={400}
                height={300}
                className="rounded-xl shadow-lg object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="flex animate-slide-reverse">
          {images.concat(images).map((src, i) => (
            <div
              key={`row2-${i}`}
              className="w-1/2 md:w-1/4 flex-shrink-0 px-2"
            >
              <Image
                src={src}
                alt={`slide-${i}`}
                width={400}
                height={300}
                className="rounded-xl shadow-lg object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
