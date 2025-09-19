export default function Hero() {
  return (
    <div className="relative w-full h-screen flex flex-col md:flex-row items-center">
      
   
      <div className="md:w-1/2 h-full flex flex-col justify-center items-start px-8 md:px-16 bg-gradient-to-br from-dark via-dark/90 to-primary/60 text-white">
        <h1 className="text-4xl md:text-6xl font-heading leading-tight mb-6">
          Innovative <span className="text-accent">Software Solutions</span>
        </h1>
        <p className="text-base md:text-lg font-body mb-8 opacity-90">
          We build powerful <span className="font-semibold">Mobile Applications</span> 
          and <span className="font-semibold">Web Platforms</span> that help startups 
          and businesses scale faster and smarter.
        </p>
        <div className="flex gap-4">
          <button className="px-6 py-3 bg-accent text-dark font-semibold rounded-lg shadow-lg transition">
            Get Started
          </button>
        </div>
      </div>

      <div className="hidden md:block md:w-1/2 h-full relative">
        <img
          src="/hero.jpg"
          alt="Digital Startup Illustration"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
