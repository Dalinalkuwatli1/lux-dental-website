'use client';

import React from 'react';
import { BookingProvider, useBooking } from '../booking/BookingContext';
import Navbar from './Navbar';
import Footer from './Footer';
import Modal from '../ui/Modal';
import BookingForm from '../booking/BookingForm';

const BookingModalContainer: React.FC = () => {
  const { isOpen, closeBooking, selectedService, selectedDoctor } = useBooking();
  return (
    <Modal isOpen={isOpen} onClose={closeBooking} title="Schedule an Appointment">
      <BookingForm 
        preselectedService={selectedService} 
        preselectedDoctor={selectedDoctor} 
        onSuccess={closeBooking}
      />
    </Modal>
  );
};

export const ClientLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <BookingProvider>
      <div className="flex flex-col min-h-screen bg-cream/30">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <BookingModalContainer />
      </div>
    </BookingProvider>
  );
};

export default ClientLayout;
