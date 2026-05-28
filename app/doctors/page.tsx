'use client';

import React from 'react';
import Link from 'next/link';
import { doctors } from '../../data/doctors';
import { useBooking } from '../../components/booking/BookingContext';
import { useAppContext } from '../../context/AppContext';
import { translations } from '../../data/translations';
import { ArrowRight, Award, Users, Calendar, Sparkles } from 'lucide-react';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import PremiumImage from '../../components/ui/PremiumImage';

export default function DoctorsPage() {
  const { openBooking } = useBooking();
  const { locale } = useAppContext();
  const t = translations[locale];

  // Helper to format doctor schedule into friendly working days string
  const getDoctorWorkingDays = (schedule: Record<string, string[]>) => {
    const days = Object.keys(schedule).map(
      d => d.charAt(0).toUpperCase() + d.slice(1)
    );
    if (days.length === 0) return locale === 'en' ? 'By Appointment' : 'بموعد مسبق';
    if (days.length === 2) return days.join(locale === 'en' ? ' & ' : ' و ');
    return `${days.slice(0, -2).join(locale === 'en' ? ', ' : '، ')}${days.length > 2 ? (locale === 'en' ? ', ' : '، ') : ''}${days.slice(-2).join(locale === 'en' ? ' & ' : ' و ')}`;
  };

  return (
    <div className="pt-36 pb-20 sm:pt-40 sm:pb-28 max-w-7xl mx-auto px-6 sm:px-8 space-y-16 animate-fade-in">

      {/* Editorial Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-semibold tracking-widest text-gold uppercase block">
          {locale === 'en' ? 'Medical Board' : 'المجلس الطبي'}
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-charcoal dark:text-white">
          {locale === 'en' ? 'Boutique Clinical Directors' : 'المدراء الطبيون للمركز'}
        </h1>
        <p className="text-sm sm:text-base text-neutral-500 dark:text-neutral-400 leading-relaxed">
          {locale === 'en' ?
            'Meet our board-certified dental directors. Every clinician possesses extensive post-graduate credentials and operates with a conservative, bio-compatible dental mindset.' :
            'تعرف على المدراء المعتمدين لدينا. يتمتع كل طبيب بمؤهلات دراسات عليا شاملة ويعمل بعقلية محافظة وبيولوجية.'}
        </p>
      </div>

      {/* Doctors Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {doctors.map((doctor) => (
          <Card key={doctor.slug} variant="default" className="flex flex-col h-full group border border-transparent dark:border-neutral-800">

            {/* Doctor Image Header */}
            <div className="relative aspect-[4/3] overflow-hidden w-full bg-neutral-100 dark:bg-neutral-800 border-b border-neutral-100/50 dark:border-neutral-800">
              <PremiumImage
                src={doctor.image}
                alt={doctor.name.en}
                type="doctor"
                slug={doctor.slug}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute bottom-4 left-4 bg-white/95 dark:bg-[#081110]/95 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold text-primary dark:text-[#00f2fe] shadow-soft tracking-wider uppercase border border-white/50 dark:border-[#00f2fe]/20">
                {doctor.specialization[locale as keyof typeof doctor.specialization]}
              </span>
            </div>

            {/* Content Details */}
            <div className="p-8 flex-1 flex flex-col justify-between">

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-charcoal dark:text-white group-hover:text-primary dark:group-hover:text-[#00f2fe] transition-colors">
                    {doctor.name[locale as keyof typeof doctor.name]}
                  </h3>
                  <span className="text-xs font-medium text-gold uppercase tracking-wider block mt-1">
                    {locale === 'en' ? 'Boutique Clinical Director' : 'المدير الطبي'}
                  </span>
                </div>

                <p className="text-sm text-neutral-600 dark:text-white/70 leading-relaxed font-light">
                  {doctor.bio[locale as keyof typeof doctor.bio]}
                </p>

                {/* Available Hours highlight */}
                <div className="pt-2">
                  <span className="text-[10px] font-bold text-neutral-400 dark:text-white/55 uppercase tracking-widest block mb-1">
                    {locale === 'en' ? 'Weekly Clinic Days' : 'أيام العيادة الأسبوعية'}
                  </span>
                  <span className="text-xs font-semibold text-primary dark:text-[#00f2fe] bg-primary-light dark:bg-[#00f2fe]/10 px-2.5 py-1 rounded-full inline-block">
                    {getDoctorWorkingDays(doctor.schedule)}
                  </span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex items-center justify-between pt-6 border-t border-neutral-100 dark:border-neutral-800 mt-6">
                <Link
                  href={`/doctors/${doctor.slug}`}
                  className="text-xs font-semibold tracking-wider text-charcoal dark:text-white hover:text-primary dark:hover:text-[#00f2fe] flex items-center gap-1 focus:outline-none"
                >
                  {t.doctors.read_bio} <ArrowRight className={`w-3.5 h-3.5 transition-transform ${locale === 'ar' ? 'rotate-180 group-hover:-translate-x-0.5' : 'group-hover:translate-x-0.5'}`} />
                </Link>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => openBooking('', doctor.slug)}
                  className="text-xs font-semibold uppercase tracking-wider !px-3 !py-1.5"
                >
                  {t.doctors.schedule}
                </Button>
              </div>

            </div>
          </Card>
        ))}
      </div>

    </div>
  );
}
