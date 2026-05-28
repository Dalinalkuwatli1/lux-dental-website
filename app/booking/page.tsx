'use client';

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useAppContext } from '../../context/AppContext';
import { translations } from '../../data/translations';
import { Calendar, ShieldCheck, Sparkles, Clock, Phone, MapPin } from 'lucide-react';
import BookingForm from '../../components/booking/BookingForm';
import Card from '../../components/ui/Card';

function BookingFormWithParams() {
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get('service') || '';
  const doctorParam = searchParams.get('doctor') || '';

  return (
    <BookingForm
      preselectedService={serviceParam}
      preselectedDoctor={doctorParam}
    />
  );
}

export default function BookingPage() {
  const { locale } = useAppContext();
  const t = translations[locale];

  return (
    <div className="pt-36 pb-20 sm:pt-40 sm:pb-28 max-w-7xl mx-auto px-6 sm:px-8 animate-fade-in">

      {/* Editorial Header */}
      <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
        <span className="text-xs font-semibold tracking-widest text-gold uppercase block">
          {locale === 'en' ? 'Scheduler Live' : 'مجدول المواعيد'}
        </span>
        <h1 className="text-4xl font-bold tracking-tight text-charcoal dark:text-white">
          {locale === 'en' ? 'Schedule Your Clinical Consultation' : 'احجز استشارتك السريرية'}
        </h1>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
          {locale === 'en' ?
            'Reserve your biological consultation slot instantly. Fill in the options below, and our Beverly Hills clinical concierge will contact you to finalize medical details.' :
            'احجز استشارتك البيولوجية فوراً. املأ الخيارات أدناه، وسيتصل بك فريقنا في بيفرلي هيلز لاستكمال التفاصيل الطبية.'}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">

        {/* Left Column: Standalone Booking Form Container */}
        <div className="lg:col-span-7">
          <Card variant="default" hoverEffect={false} className="p-8 sm:p-10 border border-neutral-100 dark:border-neutral-800 shadow-premium dark:bg-[#081110]">
            <Suspense fallback={<div className="text-center text-sm py-12 text-neutral-400">Loading form...</div>}>
              <BookingFormWithParams />
            </Suspense>
          </Card>
        </div>

        {/* Right Column: Support and Clinic Details */}
        <div className="lg:col-span-5 space-y-6">

          {/* Trust Banner */}
          <Card variant="accent" hoverEffect={false} className="p-6 space-y-4">
            <h3 className="text-sm font-bold text-primary dark:text-[#00f2fe] flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" /> {locale === 'en' ? 'The Lumina Standard' : 'معيار لومينا'}
            </h3>
            <ul className="text-xs text-neutral-600 dark:text-neutral-300 space-y-3 font-medium leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-gold rounded-full shrink-0 mt-1.5" />
                <span><strong>{locale === 'en' ? 'No Prep Cancellation:' : 'إلغاء بدون رسوم:'}</strong> {locale === 'en' ? 'Reschedule or cancel up to 24 hours prior without clinical penalty.' : 'إعادة جدولة أو إلغاء حتى 24 ساعة مسبقاً دون رسوم سريرية.'}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-gold rounded-full shrink-0 mt-1.5" />
                <span><strong>{locale === 'en' ? 'Biological Consultation:' : 'استشارة بيولوجية:'}</strong> {locale === 'en' ? '60 minutes of comprehensive physical assessment and micro-imaging.' : '60 دقيقة من التقييم الجسدي الشامل والتصوير الدقيق.'}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-gold rounded-full shrink-0 mt-1.5" />
                <span><strong>{locale === 'en' ? 'PPO Direct Coordination:' : 'تنسيق التأمين المباشر:'}</strong> {locale === 'en' ? 'Direct submittal to PPO dental plans for maximum fee recovery.' : 'تقديم مباشر لخطط تأمين الأسنان لتحقيق أقصى استرداد.'}</span>
              </li>
            </ul>
          </Card>

          {/* Contact Details Card */}
          <Card variant="cream" hoverEffect={false} className="p-6 space-y-4 border border-neutral-200/50 dark:border-neutral-800 dark:bg-neutral-900/50">
            <h3 className="text-sm font-bold text-charcoal dark:text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-gold animate-pulse" /> {t.footer.contact}
            </h3>
            <ul className="space-y-4 text-xs text-neutral-500 dark:text-neutral-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-charcoal dark:text-white block">{locale === 'en' ? 'Location' : 'الموقع'}</span>
                  <span>100 Prestige Blvd, Suite 400, Beverly Hills, CA</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-charcoal dark:text-white block">{locale === 'en' ? 'Concierge Desk' : 'مكتب الاستقبال'}</span>
                  <a href="tel:+13105550199" className="hover:text-primary dark:hover:text-[#00f2fe] transition-colors">
                    (310) 555-0199
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-charcoal dark:text-white block">{locale === 'en' ? 'Working Hours' : 'ساعات العمل'}</span>
                  <span>{locale === 'en' ? 'Mon-Fri: 9:00 AM - 6:00 PM' : 'الاثنين-الجمعة: 9:00 ص - 6:00 م'}<br />{locale === 'en' ? 'Sat: 10:00 AM - 4:00 PM' : 'السبت: 10:00 ص - 4:00 م'}</span>
                </div>
              </li>
            </ul>
          </Card>

        </div>

      </div>

    </div>
  );
}
