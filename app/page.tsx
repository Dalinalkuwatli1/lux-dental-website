'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  Award, 
  Star, 
  Users, 
  Calendar,
  Smile,
  Activity,
  Heart,
  Stethoscope,
  PhoneCall,
  CreditCard,
  CalendarClock
} from 'lucide-react';
import { services } from '../data/services';
import { doctors } from '../data/doctors';
import { reviews } from '../data/reviews';
import { useBooking } from '../components/booking/BookingContext';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Accordion from '../components/ui/Accordion';
import SectionHeader from '../components/ui/SectionHeader';
import PremiumImage from '../components/ui/PremiumImage';
import AISmileScanner from '../components/booking/AISmileScanner';
import HeroCinematicBg from '../components/ui/HeroCinematicBg';
import { useAppContext } from '../context/AppContext';
import { translations } from '../data/translations';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Home() {
  const { openBooking } = useBooking();
  const { locale } = useAppContext();
  const t = translations[locale];
  useScrollReveal();

  // FAQ items for the accordion
  const faqItems = [
    {
      title: "What should I expect during my first visit?",
      content: "Your initial visit includes a comprehensive oral examination, biological digital X-rays (if needed), a professional cleaning, and a detailed consultation with your doctor to discuss a customized long-term care plan.",
      icon: <Stethoscope className="w-5 h-5" />
    },
    {
      title: "Do you offer emergency dental services?",
      content: "Yes, we prioritize emergency situations. If you experience severe pain, trauma, or a broken crown/restoration, please call our direct emergency concierge immediately. We reserve daily emergency blocks for on-call patients.",
      icon: <PhoneCall className="w-5 h-5" />
    },
    {
      title: "Do you accept insurance or offer financing?",
      content: "We work with most major PPO insurance providers and submit claims on your behalf. For advanced cosmetic or restorative plans, we also offer luxury zero-interest financing options through CareCredit and custom monthly billing plans.",
      icon: <CreditCard className="w-5 h-5" />
    },
    {
      title: "How often should I schedule a professional teeth cleaning?",
      content: "For optimal biological oral health, we recommend a professional clinical cleaning and exam every 6 months. Patients with active periodontal history may benefit from visits every 3-4 months.",
      icon: <CalendarClock className="w-5 h-5" />
    }
  ];

  // Helper to map services to lucide icons
  const getServiceIcon = (slug: string) => {
    switch (slug) {
      case 'cleaning': return <Smile className="w-5 h-5 text-primary dark:text-[#0ea5e9]" />;
      case 'whitening': return <Sparkles className="w-5 h-5 text-primary dark:text-[#00f2fe]" />;
      case 'implants': return <ShieldCheck className="w-5 h-5 text-primary dark:text-[#9ca3af]" />;
      case 'braces': return <Activity className="w-5 h-5 text-primary dark:text-[#a855f7]" />;
      case 'root-canal': return <Heart className="w-5 h-5 text-primary dark:text-[#ef4444]" />;
      case 'cosmetic': return <Award className="w-5 h-5 text-primary dark:text-[#e2c792]" />;
      default: return <Smile className="w-5 h-5 text-primary dark:text-[#00f2fe]" />;
    }
  };

  const getServiceGlow = (slug: string) => {
    switch (slug) {
      case 'cleaning': return 'rgba(14, 165, 233, 0.2)';
      case 'whitening': return 'rgba(0, 242, 254, 0.25)';
      case 'implants': return 'rgba(156, 163, 175, 0.2)';
      case 'braces': return 'rgba(168, 85, 247, 0.2)';
      case 'root-canal': return 'rgba(239, 68, 68, 0.15)';
      case 'cosmetic': return 'rgba(226, 199, 146, 0.25)';
      default: return 'rgba(0, 242, 254, 0.15)';
    }
  };

  return (
    <div className="space-y-24 sm:space-y-32">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden min-h-[92vh] flex items-center">
        {/* Cinematic Animated Background */}
        <HeroCinematicBg />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left stagger-children revealed">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-light dark:bg-[#0b8793]/30 border border-primary/10 dark:border-[#00f2fe]/15 text-primary dark:text-[#00f2fe] text-xs font-semibold tracking-wider uppercase hover-glow">
                <Award className="w-3.5 h-3.5" /> {t.hero.tagline}
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-bold tracking-tight text-charcoal dark:text-white leading-[1.08]">
                {t.hero.title1} <br className="hidden sm:block" />
                <span className="text-shimmer italic font-serif relative">
                  {t.hero.title2}
                  <Sparkles className="absolute -top-4 -right-6 w-5 h-5 text-gold animate-pulse-slow" />
                </span>
              </h1>
              <p className="text-sm sm:text-base text-neutral-500 dark:text-neutral-400 max-w-xl leading-relaxed">
                {t.hero.desc}
              </p>
              
              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button 
                  variant="primary" 
                  size="lg"
                  onClick={() => openBooking()}
                  className="group shadow-premium glow-primary hover:scale-[1.02] transition-transform"
                >
                  {t.hero.cta_primary}
                  <ArrowRight className={`w-4 h-4 transition-transform ${locale === 'ar' ? 'mr-2 rotate-180 group-hover:-translate-x-1' : 'ml-2 group-hover:translate-x-1'}`} />
                </Button>
                <Link href="/services">
                  <Button variant="secondary" size="lg" className="w-full hover:scale-[1.02] transition-transform">
                    {t.hero.cta_secondary}
                  </Button>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-neutral-250/20 dark:border-neutral-800 max-w-lg">
                <div>
                  <span className="text-2xl sm:text-3xl font-bold text-primary dark:text-[#00f2fe] block">99.8%</span>
                  <span className="text-[10px] sm:text-xs font-medium text-neutral-400 uppercase tracking-widest block mt-0.5">{t.hero.stat_satisfaction}</span>
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-bold text-primary dark:text-[#00f2fe] block">15+</span>
                  <span className="text-[10px] sm:text-xs font-medium text-neutral-400 uppercase tracking-widest block mt-0.5">{t.hero.stat_experience}</span>
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-bold text-primary dark:text-[#00f2fe] block">5-Star</span>
                  <span className="text-[10px] sm:text-xs font-medium text-neutral-400 uppercase tracking-widest block mt-0.5">{t.hero.stat_reviews}</span>
                </div>
              </div>

            </div>

            {/* Hero Right Graphic - AI Smile Scanner */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end animate-slide-in-right">
              <AISmileScanner onComplete={() => openBooking()} />
            </div>

          </div>
        </div>
      </section>

      {/* 2. SERVICES SECTION */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 reveal">
        <SectionHeader
          tagline={t.services.tagline}
          title={t.services.title}
          description={t.services.desc}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children reveal relative">
          {/* Subtle Aurora Behind Services */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[600px] bg-primary/5 dark:bg-[#00f2fe]/5 rounded-full blur-[120px] pointer-events-none -z-10" />
          
          {services.map((service) => (
            <Card 
              key={service.slug} 
              variant="default" 
              className="flex flex-col h-full group"
              glowColor={getServiceGlow(service.slug)}
            >
              {/* Premium Header Image */}
              <div className="relative aspect-[16/10] overflow-hidden w-full bg-neutral-100">
                <PremiumImage 
                  src={service.image} 
                  alt={service.title} 
                  type="service" 
                  slug={service.slug} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Floating Icon badge on image */}
                <div className="absolute bottom-4 left-4 w-9 h-9 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-soft border border-white/50">
                  {getServiceIcon(service.slug)}
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  {/* Content */}
                  <h3 className="text-2xl font-semibold text-charcoal dark:text-white mb-3 group-hover:text-primary dark:group-hover:text-[#00f2fe] transition-colors tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-[15px] text-neutral-600 dark:text-white/70 leading-relaxed mb-6 font-light">
                    {service.description}
                  </p>

                  {/* Benefits tag pills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.benefits.slice(0, 2).map((benefit, i) => (
                      <span 
                        key={i} 
                        className="text-[10px] font-semibold text-primary dark:text-[#00f2fe] bg-primary-light dark:bg-[#00f2fe]/10 px-2.5 py-1 rounded-full uppercase tracking-wider"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Dynamic Details Links */}
                <div className="flex items-center justify-between pt-4 border-t border-neutral-100 dark:border-neutral-800 mt-auto">
                  <Link 
                    href={`/services/${service.slug}`}
                    className="text-xs font-semibold tracking-wider text-charcoal dark:text-white hover:text-primary dark:hover:text-[#00f2fe] flex items-center gap-1 focus:outline-none"
                  >
                    {t.services.view_details} <ArrowRight className={`w-3.5 h-3.5 transition-transform ${locale === 'ar' ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
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
      </section>

      {/* 3. SPECIALISTS SECTION */}
      <section className="relative bg-cream/40 dark:bg-transparent py-24 sm:py-32 border-y border-neutral-200/40 dark:border-white/5 reveal overflow-hidden">
        {/* Subtle Aurora Behind Specialists */}
        <div className="absolute top-1/2 right-0 w-[800px] h-[800px] bg-gold/5 dark:bg-[#e2c792]/5 rounded-full blur-[150px] pointer-events-none -z-10 -translate-y-1/2 translate-x-1/4" />
        
        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
          <SectionHeader
            tagline={t.doctors.tagline}
            title={t.doctors.title}
            description={t.doctors.desc}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-children reveal">
            {doctors.map((doctor) => (
              <Card 
                key={doctor.slug} 
                variant="default" 
                className="flex flex-col h-full relative group hover:shadow-[0_10px_40px_rgba(226,199,146,0.15)] dark:hover:shadow-[0_10px_40px_rgba(226,199,146,0.08)] transition-shadow duration-500"
                glowColor="rgba(226, 199, 146, 0.15)"
              >
                {/* Doctor Image Header */}
                <div className="relative aspect-[4/3] overflow-hidden w-full bg-neutral-100 border-b border-neutral-100/50">
                  <PremiumImage 
                    src={doctor.image} 
                    alt={doctor.name} 
                    type="doctor" 
                    slug={doctor.slug}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Subtle specialty label floating on avatar */}
                  <span className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold text-primary shadow-soft tracking-wider uppercase border border-white/50">
                    {doctor.specialization}
                  </span>
                </div>

                {/* Doctor details */}
                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div className="space-y-3 transform transition-transform duration-500 group-hover:-translate-y-1">
                    <h3 className="text-2xl font-semibold text-charcoal dark:text-white group-hover:text-gold dark:group-hover:text-gold transition-colors tracking-tight">
                      {doctor.name}
                    </h3>
                    <span className="text-xs font-semibold text-gold uppercase tracking-widest block drop-shadow-sm">
                      {t.doctors.board_certified}
                    </span>
                    <p className="text-[15px] text-neutral-600 dark:text-white/70 leading-relaxed font-light">
                      {doctor.bio}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-neutral-100 dark:border-neutral-800 mt-6 font-medium">
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
      </section>

      {/* 4. PATIENT TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 reveal">
        <SectionHeader
          tagline="Client Stories"
          title="Transforming Smiles, Building Trust"
          description="Read accounts from real patients who chose Lumina for luxury smile design, biological restorative care, and cosmetic comfort."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children reveal">
          {reviews.map((review, i) => (
            <Card key={i} variant="glass" hoverEffect={false} className="p-8 space-y-6 flex flex-col justify-between dark:bg-[#060b0a]/60 dark:border-neutral-800 hover-lift">
              
              {/* Quote & Stars */}
              <div className="space-y-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, starIndex) => (
                    <Star 
                      key={starIndex} 
                      className={`w-4 h-4 ${
                        starIndex < review.rating 
                          ? 'text-gold fill-gold' 
                          : 'text-neutral-250/20'
                      }`} 
                    />
                  ))}
                </div>
                <p className="text-sm text-neutral-600 dark:text-white/70 italic leading-relaxed">
                  "{review.comment}"
                </p>
              </div>

              {/* Author & Treatment Link */}
              <div className="flex items-center justify-between pt-6 border-t border-neutral-100/50 dark:border-neutral-800 mt-4">
                <div>
                  <span className="text-sm font-semibold text-charcoal dark:text-white block">
                    {review.name}
                  </span>
                  <span className="text-[10px] font-medium text-neutral-400 dark:text-white/55 uppercase tracking-widest block mt-0.5">
                    Verified Patient
                  </span>
                </div>
                <span className="text-[10px] font-semibold text-primary dark:text-[#00f2fe] bg-primary-light dark:bg-[#00f2fe]/10 px-2.5 py-1 rounded-full uppercase tracking-wider">
                  {review.service}
                </span>
              </div>

            </Card>
          ))}
        </div>
      </section>

      {/* 5. FAQ SECTION */}
      <section className="max-w-3xl mx-auto px-6 reveal relative mb-12">
        {/* Subtle glow behind FAQ */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-xl h-[400px] bg-white/5 dark:bg-[#00f2fe]/5 rounded-full blur-[100px] pointer-events-none -z-10" />

        <SectionHeader
          tagline="Common Concerns"
          title="Frequently Asked Questions"
          description="Everything you need to know about our luxury biological treatments, concierge booking, insurance networks, and diagnostic standards."
        />
        
        <div className="bg-white/10 dark:bg-white/[0.02] backdrop-blur-2xl rounded-3xl border border-white/20 dark:border-white/[0.05] shadow-glass px-6 py-8">
          <Accordion items={faqItems} />
        </div>
      </section>

      {/* 6. CTA BANNER */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 pb-12 reveal">
        <div 
          className="relative rounded-[32px] overflow-hidden shadow-premium text-center sm:text-left transition-all duration-500 hover:scale-[1.01] hover:shadow-[0_20px_50px_rgba(0,252,254,0.15)] group metallic-border"
          style={{
            background: `
              radial-gradient(circle at top left, rgba(0, 252, 254, 0.12), transparent 40%),
              radial-gradient(circle at bottom right, rgba(226, 199, 146, 0.08), transparent 40%),
              #050b0b
            `
          }}
        >
          {/* Animated beam lines in background */}
          <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#00f2fe]/40 to-transparent animate-pulse" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-12 sm:p-16">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold tracking-widest text-gold uppercase block">
                {locale === 'en' ? 'Schedule Online' : 'احجز عبر الإنترنت'}
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                {locale === 'en' ? 'Ready to Experience Elite Biological Dental Care?' : 'هل أنت مستعد لتجربة رعاية الأسنان الحيوية النخبوية؟'}
              </h2>
              <p className="text-slate-350 text-sm sm:text-base leading-relaxed max-w-xl font-light">
                {locale === 'en' ? (
                  "Unlock your radiant, healthy smile today. Reserve your spot instantly or dial our Istanbul boutique concierge desk directly at +90 (212) 555 01 99."
                ) : (
                  "ابدأ رحلتك للحصول على ابتسامة مشرقة وصحية اليوم. احجز موعدك فوراً أو اتصل بفرعنا في إسطنبول مباشرة على الرقم 99 01 555 (212) 90+."
                )}
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-center sm:justify-end">
              <Button 
                variant="gold" 
                size="lg"
                onClick={() => openBooking()}
                className="group shadow-premium !rounded-full !px-8 relative overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(226,199,146,0.5)] cursor-interactive"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <span className="relative z-10 flex items-center gap-2">
                  {locale === 'en' ? 'Schedule Appointment' : 'جدولة الموعد'}
                  <Calendar className="w-4 h-4 transition-transform group-hover:scale-110" />
                </span>
              </Button>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
