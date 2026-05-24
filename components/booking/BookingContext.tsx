'use client';

import React, { createContext, useContext, useState } from 'react';

interface BookingContextType {
  isOpen: boolean;
  selectedService: string;
  selectedDoctor: string;
  openBooking: (serviceSlug?: string, doctorSlug?: string) => void;
  closeBooking: () => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState('');

  const openBooking = (serviceSlug = '', doctorSlug = '') => {
    setSelectedService(serviceSlug);
    setSelectedDoctor(doctorSlug);
    setIsOpen(true);
  };

  const closeBooking = () => {
    setIsOpen(false);
    setSelectedService('');
    setSelectedDoctor('');
  };

  return (
    <BookingContext.Provider
      value={{
        isOpen,
        selectedService,
        selectedDoctor,
        openBooking,
        closeBooking,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};
