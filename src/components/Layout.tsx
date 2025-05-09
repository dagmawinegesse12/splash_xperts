import type { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Hero from './Hero';
import Services from './Service';
import ReservationForm from './ReservationForm';
import Contact from './Contact';
import Gallery from './Gallery';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="">

      <Navbar />
      <Hero/>
      <Services/>
      <section id="reservation">

      <ReservationForm/>
      {/* <Gallery/> */}
      </section>
      <Contact/>
      </section>
      {/* <section id="reservation" className="py-12 bg-blue-50">
        <ReservationForm />
      
    {/* //   <main className="flex-grow">{children}</main> */}
     
      <Footer />
    </div>
  );
};

export default Layout;
