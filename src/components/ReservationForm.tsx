import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { useEffect, useState } from 'react';

type FormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  notes: string;
};

const SERVICES = [
  'Exterior Wash',
  'Interior Detailing',
  'Premium Full Detail',
];

const ReservationForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    mode: 'onChange',
  });

  const [submitted, setSubmitted] = useState(false);

  // Auto-fill service from URL hash
  useEffect(() => {
    const updateServiceFromHash = () => {
      const hash = window.location.hash;
      const service = new URLSearchParams(hash.split('?')[1])?.get('service');
      if (service && SERVICES.includes(service)) {
        setValue('service', service);
      }
    };
  
    // Initial check
    updateServiceFromHash();
  
    // Listen to hash changes (e.g., when "Book Now" is clicked)
    window.addEventListener('hashchange', updateServiceFromHash);
  
    return () => {
      window.removeEventListener('hashchange', updateServiceFromHash);
    };
  }, [setValue]);

  const onSubmit = async (data: FormData) => {
    try {
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        data,
        'YOUR_PUBLIC_KEY'
      );
      setSubmitted(true);
      reset();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white p-6 sm:p-10 rounded-2xl shadow-2xl max-w-3xl w-full mx-auto"
    >
      {submitted ? (
        <motion.p
          className="text-center text-green-600 text-lg font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          ✅ Your reservation has been submitted successfully!
        </motion.p>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <h2 className="text-2xl font-bold text-blue-800 text-center">
            Reserve Your Service
          </h2>

          {/* Name */}
          <div className="flex flex-col">
            <label className="text-sm mb-1 text-gray-700">Full Name</label>
            <input
              {...register('name', { required: 'Name is required' })}
              className={`rounded-md px-4 py-2 border bg-white text-black  ${
                errors.name
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-gray-300 focus:ring-blue-500'
              } focus:outline-none focus:ring-2`}
              placeholder="John Doe"
            />
            {errors.name && (
              <span className="text-sm text-red-500 mt-1">
                {errors.name.message}
              </span>
            )}
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="text-sm mb-1 text-gray-700">Email</label>
            <input
              type="email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Enter a valid email address',
                },
              })}
              className={`rounded-md px-4 py-2 border bg-white text-black  ${
                errors.email
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-gray-300 focus:ring-blue-500'
              } focus:outline-none focus:ring-2`}
              placeholder="you@example.com"
            />
            {errors.email && (
              <span className="text-sm text-red-500 mt-1">
                {errors.email.message}
              </span>
            )}
          </div>

          {/* Phone */}
          <div className="flex flex-col">
            <label className="text-sm mb-1 text-gray-700">Phone</label>
            <input
              {...register('phone', {
                required: 'Phone is required',
                minLength: {
                  value: 10,
                  message: 'Enter a valid phone number',
                },
              })}
              className={`rounded-md px-4 py-2 border bg-white text-black  ${
                errors.phone
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-gray-300 focus:ring-blue-500'
              } focus:outline-none focus:ring-2`}
              placeholder="(555) 123-4567"
            />
            {errors.phone && (
              <span className="text-sm text-red-500 mt-1">
                {errors.phone.message}
              </span>
            )}
          </div>

          {/* Service Dropdown */}
          <div className="flex flex-col">
            <label className="text-sm mb-1 text-gray-700">Service</label>
            <select
              {...register('service', { required: 'Please select a service' })}
              className={`rounded-md px-4 py-2 border bg-white text-black  ${
                errors.service
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-gray-300 focus:ring-blue-500'
              } focus:outline-none focus:ring-2`}
            >
              <option value="">Select a service</option>
              {SERVICES.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
            {errors.service && (
              <span className="text-sm text-red-500 mt-1">
                {errors.service.message}
              </span>
            )}
          </div>

          {/* Date */}
          <div className="flex flex-col">
            <label className="text-sm mb-1 text-gray-700">Preferred Date</label>
            <input
              type="date"
              {...register('date', { required: 'Please select a date' })}
              className={`rounded-md px-4 py-2 border bg-white text-black  ${
                errors.date
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-gray-300 focus:ring-blue-500'
              } focus:outline-none focus:ring-2`}
            />
            {errors.date && (
              <span className="text-sm text-red-500 mt-1">
                {errors.date.message}
              </span>
            )}
          </div>

          {/* Time */}
          <div className="flex flex-col">
            <label className="text-sm mb-1 text-gray-700">Preferred Time</label>
            <input
              type="time"
              {...register('time', { required: 'Please select a time' })}
              className={`rounded-md px-4 py-2 border bg-white text-black  ${
                errors.time
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-gray-300 focus:ring-blue-500'
              } focus:outline-none focus:ring-2`}
            />
            {errors.time && (
              <span className="text-sm text-red-500 mt-1">
                {errors.time.message}
              </span>
            )}
          </div>

          {/* Notes */}
          <div className="flex flex-col">
            <label className="text-sm mb-1 text-gray-700">Additional Notes</label>
            <textarea
              {...register('notes')}
              rows={3}
              placeholder="Anything you'd like us to know?"
              className="rounded-md px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-black"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md w-full transition disabled:opacity-50"
          >
            {isSubmitting ? 'Sending...' : 'Submit Reservation'}
          </button>
        </form>
      )}
    </motion.div>
  );
};

export default ReservationForm;
