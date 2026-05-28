'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { services } from '../../../data/services';
import { useBooking } from '../../../components/booking/BookingContext';
import { useAppContext } from '../../../context/AppContext';
import { translations } from '../../../data/translations';
import {
  ArrowLeft,
  CheckCircle,
  Clock,
  ShieldAlert,
  Activity,
  Sparkles,
  HelpCircle,
  Calendar
} from 'lucide-react';
import Button from '../../../components/ui/Button';
import Card from '../../../components/ui/Card';
import PremiumImage from '../../../components/ui/PremiumImage';

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const router = useRouter();
  const { openBooking } = useBooking();
  const { locale } = useAppContext();
  const t = translations[locale];

  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="pt-44 pb-28 text-center max-w-md mx-auto space-y-6">
        <h2 className="text-2xl font-bold text-charcoal dark:text-white">Treatment Not Found</h2>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          The requested dental treatment could not be resolved in our clinical database.
        </p>
        <Link href="/services">
          <Button variant="primary">Return to Services</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-36 pb-20 sm:pt-40 sm:pb-28 max-w-7xl mx-auto px-6 sm:px-8 space-y-10 animate-fade-in">

      {/* Navigation Breadcrumb */}
      <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-neutral-400 uppercase">
        <Link href="/services" className="hover:text-primary dark:hover:text-[#00f2fe] transition-colors flex items-center gap-1">
          <ArrowLeft className={`w-3.5 h-3.5 ${locale === 'ar' ? 'rotate-180' : ''}`} /> {t.nav.treatments}
        </Link>
        <span>/</span>
        <span className="text-neutral-600 dark:text-neutral-300">{service.title[locale as keyof typeof service.title]}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

        {/* Left Column: Extensive Details */}
        <div className="lg:col-span-8 space-y-10 text-left">

          <div className="space-y-4">
            <span className="text-xs font-semibold tracking-widest text-gold uppercase block">
              {locale === 'en' ? 'Biological Standard' : 'المعيار البيولوجي'}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal dark:text-white tracking-tight">
              {service.title[locale as keyof typeof service.title]}
            </h1>
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed font-light">
              {service.description[locale as keyof typeof service.description]}
            </p>
          </div>

          {/* Procedure Step-by-Step */}
          <div className="space-y-4 pt-6 border-t border-neutral-100 dark:border-neutral-800">
            <h3 className="text-lg font-bold text-charcoal dark:text-white flex items-center gap-2">
              <Activity className="w-5 h-5 text-primary dark:text-[#00f2fe]" /> {locale === 'en' ? 'The Clinical Procedure' : 'الإجراء السريري'}
            </h3>
            <p className="text-sm text-neutral-600 dark:text-white/70 leading-relaxed">
              {service.procedure[locale as keyof typeof service.procedure]}
            </p>
            <div className="glassmorphic rounded-2xl p-5 text-xs text-neutral-600 dark:text-white/70 border border-neutral-200/50 dark:border-white/10">
              <span className="font-semibold text-charcoal dark:text-white uppercase block mb-1">
                {locale === 'en' ? 'Conservative Biological Practice' : 'الممارسة البيولوجية المحافظة'}
              </span>
              {locale === 'en' ?
                'We adhere strictly to biomimetic dental philosophies. We aim to preserve maximum natural enamel structure and prioritize non-toxic biological bonding systems for longevity and systemic wellness.' :
                'نلتزم تمامًا بفلسفات طب الأسنان البيولوجية. نهدف إلى الحفاظ على أقصى بنية طبيعية للمينا ونعطي الأولوية لأنظمة الترابط البيولوجية غير السامة من أجل طول العمر والصحة الشاملة.'}
            </div>
          </div>

          {/* Recovery and Care Info */}
          <div className="space-y-4 pt-6 border-t border-neutral-100 dark:border-neutral-800">
            <h3 className="text-lg font-bold text-charcoal dark:text-white flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary dark:text-[#00f2fe]" /> {locale === 'en' ? 'Post-Operative & Recovery Guidelines' : 'إرشادات ما بعد الجراحة والتعافي'}
            </h3>
            <p className="text-sm text-neutral-600 dark:text-white/70 leading-relaxed">
              {service.recovery[locale as keyof typeof service.recovery]}
            </p>
            <div className="flex gap-3 p-4 bg-primary-light dark:bg-[#00f2fe]/5 border border-primary/5 dark:border-[#00f2fe]/10 rounded-2xl text-xs text-neutral-600 dark:text-white/70">
              <ShieldAlert className="w-4 h-4 text-primary dark:text-[#00f2fe] shrink-0 mt-0.5" />
              <span>
                <strong>{locale === 'en' ? 'Need recovery support?' : 'بحاجة لدعم التعافي؟'}</strong> {locale === 'en' ? 'A specialist is available 24/7. Standard biological comfort parameters vary depending on tissue sensitivities. For any immediate postoperative concerns, please reach out to our clinic directly.' : 'الأخصائي متاح على مدار الساعة. تختلف معايير الراحة البيولوجية القياسية اعتمادًا على حساسيات الأنسجة. لأي مخاوف فورية بعد العملية، يرجى التواصل مع عيادتنا مباشرة.'}
              </span>
            </div>
          </div>

        </div>

        {/* Right Column: Sticky Booking Ticket Box */}
        <div className="lg:col-span-4 lg:sticky lg:top-28">
          <Card variant="glass" className="p-8 space-y-6">
            {/* Premium Treatment Image */}
            <div className="relative aspect-[16/10] overflow-hidden w-full bg-neutral-100 dark:bg-neutral-800 rounded-2xl mb-4">
              <PremiumImage
                src={service.image}
                alt={service.title.en}
                type="service"
                slug={service.slug}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-bold text-gold uppercase tracking-widest block">
                {locale === 'en' ? 'Summary Overview' : 'نظرة عامة موجزة'}
              </span>
              <h3 className="text-lg font-bold text-charcoal dark:text-white">
                {locale === 'en' ? 'Treatment Guide' : 'دليل العلاج'}
              </h3>
            </div>

            {/* Expected Benefits */}
            <div className="space-y-3">
              <span className="text-[10px] font-bold text-neutral-400 dark:text-white/55 uppercase tracking-widest block">{t.services.benefits}</span>
              <ul className="space-y-2">
                {service.benefits[locale as keyof typeof service.benefits].map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-neutral-600 dark:text-white/70 font-medium leading-tight">
                    <CheckCircle className="w-4 h-4 text-primary dark:text-[#00f2fe] shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800 space-y-4">
              <div className="flex items-center justify-between text-xs">
                <span className="text-neutral-400 dark:text-white/55 font-medium uppercase tracking-wider">{locale === 'en' ? 'Hospital Stay' : 'الإقامة في المستشفى'}</span>
                <span className="font-semibold text-charcoal dark:text-white">{locale === 'en' ? 'None (Outpatient)' : 'لا يوجد (عيادة خارجية)'}</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-neutral-400 dark:text-white/55 font-medium uppercase tracking-wider">{locale === 'en' ? 'Clinical Setting' : 'الإعداد السريري'}</span>
                <span className="font-semibold text-primary dark:text-[#00f2fe]">{locale === 'en' ? 'Beverly Hills Boutique' : 'مركز بيفرلي هيلز'}</span>
              </div>
            </div>

            <Button
              variant="primary"
              className="w-full justify-center group"
              onClick={() => openBooking(service.slug)}
            >
              {t.services.book_now}
              <Calendar className="w-4 h-4 ml-2 transition-transform group-hover:scale-105" />
            </Button>
          </Card>
        </div>

      </div>

    </div>
  );
}
