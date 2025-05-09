import { useEffect } from 'react';

const services = [
  {
    title: 'Exterior Wash',
    description:
      'Hand wash, wax, and shine. We remove dirt, grime, and water spots with precision.',
    image: '/exWash.png',
    price: 'Starting at $49',
  },
  {
    title: 'Interior Detailing',
    description:
      'Deep vacuuming, upholstery cleaning, and odor removal to refresh your cabin.',
    image: '/intWash.png',
    price: 'Starting at $69',
  },
  {
    title: 'Premium Full Detail',
    description:
      'Complete inside-out detailing for a showroom finish — your car will thank you.',
    image: '/premWash.png',
    price: 'Starting at $129',
  },
];

const Services = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).AOS) {
      (window as any).AOS.refresh();
    }
  }, []);

  const scrollToReservation = (service: string) => {
    const el = document.getElementById('reservation');
    if (el) {
      // Update hash without reloading
      window.history.replaceState(null, '', `#reservation?service=${encodeURIComponent(service)}`);

      // Smooth scroll
      el.scrollIntoView({ behavior: 'smooth' });

      // Trigger hashchange for ReservationForm to react
      window.dispatchEvent(new HashChangeEvent('hashchange'));
    }
  };

  return (
    <section id="services" className=" py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white-800 mb-6">
          Our Services
        </h2>
        <p className="text-white-600 mb-12 max-w-2xl mx-auto">
          Whether it’s a quick wash or a full detail, we offer top-tier packages to keep your car spotless.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.title}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-blue-700 mb-1">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-500 mb-2 italic">{service.price}</p>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <button
                  onClick={() => scrollToReservation(service.title)}
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition text-sm font-medium"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
