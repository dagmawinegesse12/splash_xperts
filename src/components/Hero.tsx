const Hero = () => {
    return (
      <section
      className="relative min-h-screen flex items-center justify-center text-white"
      style={{
          backgroundImage: `url('/hero.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />
  
        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Seattle’s Premier Car Detailing Service
          </h1>
          <p className="text-lg md:text-xl mb-6 text-gray-200">
            Restore your vehicle’s shine with expert interior and exterior detailing.
          </p>
          <a
            href="#reservation"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition"
          >
            Book Now
          </a>
        </div>
      </section>
    );
  };
  
  export default Hero;
  