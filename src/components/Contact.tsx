import { useForm } from 'react-hook-form';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

type ContactForm = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactForm>({ mode: 'onChange' });

  const [sent, setSent] = useState(false);

  const onSubmit = async (data: ContactForm) => {
    try {
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        data,
        'YOUR_PUBLIC_KEY'
      );
      setSent(true);
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section id="contact" className=" py-16 px-6 md:px-12">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white-800 mb-6">
          Contact Us
        </h2>
        <p className="text-white-600 mb-10 max-w-xl mx-auto">
          Have a question or want to book directly? Reach out — we're happy to help!
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-left mb-12">
          <div className="bg-white rounded-xl shadow p-6" data-aos="fade-up">
            <h3 className="text-lg font-semibold text-blue-700 mb-2">Phone</h3>
            <p className="text-gray-700">(555) 123-4567</p>
          </div>

          <div className="bg-white rounded-xl shadow p-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-lg font-semibold text-blue-700 mb-2">Email</h3>
            <p className="text-gray-700">info@seattlecarspa.com</p>
          </div>

          <div className="bg-white rounded-xl shadow p-6" data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-lg font-semibold text-blue-700 mb-2">Location</h3>
            <p className="text-gray-700">123 Car Spa Blvd, Seattle, WA 98101</p>
          </div>
        </div>

        {/* ✅ Message Form */}
        <div className="bg-white rounded-xl shadow-xl max-w-2xl mx-auto p-6" data-aos="fade-up" data-aos-delay="300">
          {sent ? (
            <p className="text-green-600 font-medium text-center">
              ✅ Message sent! We'll get back to you soon.
            </p>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <input
                  {...register('name', { required: 'Name is required' })}
                  placeholder="Your Name"
                  className={`w-full border px-4 py-2 rounded ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
                {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>}
              </div>

              <div>
                <input
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: 'Invalid email address',
                    },
                  })}
                  placeholder="you@example.com"
                  className={`w-full border px-4 py-2 rounded ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
                {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>}
              </div>

              <div>
                <textarea
                  {...register('message', { required: 'Message is required' })}
                  placeholder="Your message..."
                  rows={4}
                  className={`w-full border px-4 py-2 rounded ${
                    errors.message ? 'border-red-500' : 'border-gray-300'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
                {errors.message && <p className="text-sm text-red-500 mt-1">{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
