'use client';

import React from 'react';
import Link from 'next/link';
import { services } from '../../data/services';
import { useBooking } from '../../components/booking/BookingContext';
import { useAppContext } from '../../context/AppContext';
import { translations } from '../../data/translations';
import { ArrowRight, Sparkles, Award, ShieldCheck, Smile, Heart, Activity } from 'lucide-react';
import SectionHeader from '../../components/ui/SectionHeader';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import PremiumImage from '../../components/ui/PremiumImage';

export default function ServicesPage() {
  const { openBooking } = useBooking();
  const { locale } = useAppContext();
  const t = translations[locale];

  const getServiceIcon = (slug: string) => {
    switch (slug) {
      case 'cleaning': return <Smile className="w-5 h-5 text-primary dark:text-[#00f2fe]" />;
      case 'whitening': return <Sparkles className="w-5 h-5 text-primary dark:text-[#00f2fe]" />;
      case 'implants': return <ShieldCheck className="w-5 h-5 text-primary dark:text-[#00f2fe]" />;
      case 'braces': return <Activity className="w-5 h-5 text-primary dark:text-[#00f2fe]" />;
      case 'root-canal': return <Heart className="w-5 h-5 text-primary dark:text-[#00f2fe]" />;
      case 'cosmetic': return <Award className="w-5 h-5 text-primary dark:text-[#00f2fe]" />;
      default: return <Smile className="w-5 h-5 text-primary dark:text-[#00f2fe]" />;
    }
  };

  return (
    <div className="pt-36 pb-20 sm:pt-40 sm:pb-28 max-w-7xl mx-auto px-6 sm:px-8 space-y-16 animate-fade-in">

      {/* Editorial Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-semibold tracking-widest text-gold uppercase block">
          {locale === 'en' ? 'Clinical Portfolio' : 'الملف السريري'}
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-charcoal dark:text-white">
          {locale === 'en' ? 'Luxury Oral Healthcare & Artistry' : 'الرعاية الصحية الفاخرة والفن'}
        </h1>
        <p className="text-sm sm:text-base text-neutral-500 dark:text-neutral-400 leading-relaxed">
          {locale === 'en' ?
            'Explore our range of premium dental treatments. We fuse conservative biological principles with advanced micro-clinical technology to protect and craft your ideal smile.' :
            'اكتشف مجموعتنا من العلاجات السنية المتميزة. ندمج المبادئ البيولوجية المحافظة مع التكنولوجيا السريرية الدقيقة لحماية وصنع ابتسامتك المثالية.'}
        </p>
      </div>

      {/* Services Comprehensive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <Card key={service.slug} variant="default" className="flex flex-col h-full group border border-transparent dark:border-neutral-800">
            {/* Premium Header Image */}
            <div className="relative aspect-[16/10] overflow-hidden w-full bg-neutral-100 dark:bg-neutral-800">
              <PremiumImage
                src={service.image}
                alt={service.title[locale as keyof typeof service.title]}
                type="service"
                slug={service.slug}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Floating Icon badge on image */}
              <div className="absolute bottom-4 left-4 w-9 h-9 rounded-xl bg-white/90 dark:bg-[#081110]/90 backdrop-blur-sm flex items-center justify-center shadow-soft border border-white/50 dark:border-[#00f2fe]/20">
                {getServiceIcon(service.slug)}
              </div>
            </div>

            <div className="p-8 flex-1 flex flex-col justify-between">

              <div className="space-y-4">
                {/* Label */}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-semibold text-primary dark:text-[#00f2fe] bg-primary-light dark:bg-[#00f2fe]/10 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    {locale === 'en' ? 'Biological Standard' : 'المعيار البيولوجي'}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-charcoal dark:text-white group-hover:text-primary dark:group-hover:text-[#00f2fe] transition-colors">
                  {service.title[locale as keyof typeof service.title]}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-white/70 leading-relaxed font-light">
                  {service.description[locale as keyof typeof service.description]}
                </p>

                {/* Bullet benefits */}
                <div className="space-y-2 pt-2">
                  <span className="text-[10px] font-bold text-neutral-400 dark:text-white/55 uppercase tracking-widest block">{t.services.benefits}</span>
                  <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-xs text-neutral-600 dark:text-white/70 font-medium">
                    {service.benefits[locale as keyof typeof service.benefits].map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex items-center justify-between pt-8 border-t border-neutral-100 dark:border-neutral-800 mt-8">
                <Link
                  href={`/services/${service.slug}`}
                  className="text-xs font-semibold tracking-wider text-charcoal dark:text-white hover:text-primary dark:hover:text-[#00f2fe] flex items-center gap-1 focus:outline-none"
                >
                  {t.services.view_details} <ArrowRight className={`w-3.5 h-3.5 transition-transform ${locale === 'ar' ? 'rotate-180 group-hover:-translate-x-0.5' : 'group-hover:translate-x-0.5'}`} />
                </Link>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => openBooking(service.slug)}
                  className="text-xs font-semibold uppercase tracking-wider !px-3 !py-1.5"
                >
                  {t.services.book_now}
                </Button>
              </div>

            </div>
          </Card>
        ))}
      </div>

    </div>
  );
}
