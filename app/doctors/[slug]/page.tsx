'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { doctors } from '../../../data/doctors';
import { useBooking } from '../../../components/booking/BookingContext';
import { useAppContext } from '../../../context/AppContext';
import { translations } from '../../../data/translations';
import {
  ArrowLeft,
  CheckCircle,
  Users,
  Calendar,
  Award,
  Clock,
  Briefcase,
  BookOpen
} from 'lucide-react';
import Button from '../../../components/ui/Button';
import Card from '../../../components/ui/Card';
import PremiumImage from '../../../components/ui/PremiumImage';

export default function DoctorDetailPage() {
  const { slug } = useParams();
  const router = useRouter();
  const { openBooking } = useBooking();
  const { locale } = useAppContext();
  const t = translations[locale];

  const doctor = doctors.find((d) => d.slug === slug);

  if (!doctor) {
    return (
      <div className="pt-44 pb-28 text-center max-w-md mx-auto space-y-6">
        <h2 className="text-2xl font-bold text-charcoal dark:text-white">Specialist Not Found</h2>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          The requested clinical director could not be resolved in our medical board directory.
        </p>
        <Link href="/doctors">
          <Button variant="primary">Return to Board</Button>
        </Link>
      </div>
    );
  }

  // Get active doctor working days string
  const getDoctorWorkingDaysStr = () => {
    const days = Object.keys(doctor.schedule).map(
      d => d.charAt(0).toUpperCase() + d.slice(1)
    );
    if (days.length === 0) return locale === 'en' ? 'No schedule' : 'لا يوجد جدول';
    if (days.length === 1) return days[0];
    if (days.length === 2) return days.join(locale === 'en' ? ' & ' : ' و ');
    return `${days.slice(0, -1).join(locale === 'en' ? ', ' : '، ')} ${locale === 'en' ? '&' : 'و'} ${days[days.length - 1]}`;
  };

  return (
    <div className="pt-36 pb-20 sm:pt-40 sm:pb-28 max-w-7xl mx-auto px-6 sm:px-8 space-y-10 animate-fade-in">

      {/* Navigation Breadcrumb */}
      <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-neutral-400 uppercase">
        <Link href="/doctors" className="hover:text-primary dark:hover:text-[#00f2fe] transition-colors flex items-center gap-1">
          <ArrowLeft className={`w-3.5 h-3.5 ${locale === 'ar' ? 'rotate-180' : ''}`} /> {t.nav.specialists}
        </Link>
        <span>/</span>
        <span className="text-neutral-600 dark:text-neutral-300">{doctor.name[locale as keyof typeof doctor.name]}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

        {/* Left Column: Extensive Profile & Schedule */}
        <div className="lg:col-span-8 space-y-10 text-left">

          {/* Avatar and Credentials */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 pb-8 border-b border-neutral-100 dark:border-neutral-800">
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden shrink-0 border border-neutral-100 dark:border-neutral-800 shadow-soft">
              <PremiumImage
                src={doctor.image}
                alt={doctor.name.en}
                type="doctor"
                slug={doctor.slug}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-3 text-center sm:text-left">
              <span className="text-xs font-semibold tracking-widest text-gold uppercase block">
                {locale === 'en' ? 'Boutique Director' : 'مدير المركز'}
              </span>
              <h1 className="text-3xl sm:text-4xl font-bold text-charcoal dark:text-white tracking-tight">
                {doctor.name[locale as keyof typeof doctor.name]}
              </h1>
              <span className="text-sm font-semibold text-primary dark:text-[#00f2fe] bg-primary-light dark:bg-[#00f2fe]/10 px-3 py-1 rounded-full uppercase tracking-wider inline-block">
                {doctor.specialization[locale as keyof typeof doctor.specialization]} {locale === 'en' ? 'Specialist' : 'أخصائي'}
              </span>
            </div>
          </div>

          {/* biography */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-charcoal dark:text-white flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-primary dark:text-[#00f2fe]" /> {locale === 'en' ? 'Biography & Core Philosophy' : 'السيرة الذاتية والفلسفة الأساسية'}
            </h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
              {doctor.bio[locale as keyof typeof doctor.bio]}
            </p>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
              {locale === 'en' ?
                "Practicing conservative, biological dentistry means looking beyond the teeth. We evaluate systemic connections, prioritizing non-metal restorations, zero-radiation digital imaging where possible, and biocompatible materials designed to support the entire body's immunity and balance." :
                "ممارسة طب الأسنان البيولوجي المحافظ تعني النظر إلى ما هو أبعد من الأسنان. نقوم بتقييم الروابط الشاملة، مع إعطاء الأولوية للترميمات الخالية من المعادن، والتصوير الرقمي الخالي من الإشعاع، والمواد المتوافقة حيوياً."}
            </p>
          </div>

          {/* Credentials */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-neutral-100 dark:border-neutral-800">
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-charcoal dark:text-white flex items-center gap-1.5">
                <Award className="w-4 h-4 text-gold" /> {locale === 'en' ? 'Academic Credentials' : 'المؤهلات الأكاديمية'}
              </h4>
              <ul className="text-xs text-neutral-600 dark:text-neutral-400 space-y-2 list-disc pl-4 leading-relaxed font-medium">
                {locale === 'en' ? (
                  <>
                    <li>Doctor of Dental Surgery (DDS) - Top 5% Rank</li>
                    <li>Post-Graduate Certificate in Advanced Biological Restorations</li>
                    <li>Active Member - International Academy of Oral Medicine & Toxicology</li>
                  </>
                ) : (
                  <>
                    <li>دكتوراه في جراحة الأسنان - ضمن أعلى 5%</li>
                    <li>شهادة دراسات عليا في الترميمات البيولوجية المتقدمة</li>
                    <li>عضو نشط - الأكاديمية الدولية لطب الفم والسموم</li>
                  </>
                )}
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-charcoal dark:text-white flex items-center gap-1.5">
                <Briefcase className="w-4 h-4 text-gold" /> {locale === 'en' ? 'Clinical Excellence' : 'التميز السريري'}
              </h4>
              <ul className="text-xs text-neutral-600 dark:text-neutral-400 space-y-2 list-disc pl-4 leading-relaxed font-medium">
                {locale === 'en' ? (
                  <>
                    <li>15+ Years Active High-Budget Private Practice</li>
                    <li>Pioneer in Biological Micro-Surgical Enamel Bonding</li>
                    <li>Frequent Lecturer on Biocompatible Dental Prostheses</li>
                  </>
                ) : (
                  <>
                    <li>أكثر من 15 عاماً من الممارسة الخاصة بميزانيات عالية</li>
                    <li>رائد في الترابط البيولوجي الدقيق للمينا</li>
                    <li>محاضر معتمد في التعويضات السنية المتوافقة حيوياً</li>
                  </>
                )}
              </ul>
            </div>
          </div>

          {/* Visual Schedule Display */}
          <div className="space-y-4 pt-6 border-t border-neutral-100 dark:border-neutral-800">
            <h3 className="text-lg font-bold text-charcoal dark:text-white flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary dark:text-[#00f2fe]" /> {locale === 'en' ? 'Weekly Schedule at a Glance' : 'لمحة عن الجدول الأسبوعي'}
            </h3>
            <p className="text-xs text-neutral-400">
              {locale === 'en' ?
                'The clinical schedule below represents regular on-site consulting slots. Actual availability is updated live in the booking form.' :
                'يمثل الجدول السريري أدناه فترات الاستشارة المنتظمة في العيادة. يتم تحديث التوافر الفعلي مباشرة في نموذج الحجز.'}
            </p>

            <div className="border border-neutral-200/60 dark:border-neutral-800 rounded-2xl overflow-hidden shadow-soft bg-white dark:bg-[#081110]">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-neutral-50 dark:bg-neutral-900 border-b border-neutral-200/60 dark:border-neutral-800 text-[10px] font-bold text-neutral-500 uppercase tracking-widest">
                    <th className="py-3.5 px-5">{locale === 'en' ? 'Day' : 'اليوم'}</th>
                    <th className="py-3.5 px-5">{locale === 'en' ? 'Shift Hours' : 'ساعات الدوام'}</th>
                    <th className="py-3.5 px-5">{locale === 'en' ? 'Available Slots' : 'المواعيد المتاحة'}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100 dark:divide-neutral-800 text-neutral-600 dark:text-neutral-400 font-medium">
                  {Object.entries(doctor.schedule).map(([day, slots]) => (
                    <tr key={day} className="hover:bg-cream/40 dark:hover:bg-neutral-900/50 transition-colors">
                      <td className="py-3.5 px-5 font-semibold capitalize text-charcoal dark:text-white">{day}</td>
                      <td className="py-3.5 px-5">9:00 AM - 5:00 PM</td>
                      <td className="py-3.5 px-5">
                        <div className="flex gap-1.5 flex-wrap">
                          {slots.map(s => (
                            <span key={s} className="bg-primary-light dark:bg-[#00f2fe]/10 text-primary dark:text-[#00f2fe] px-2 py-0.5 rounded-md font-semibold font-mono text-[10px]">
                              {s}
                            </span>
                          ))}
                        </div>
                      </td>
                    </tr>
                  ))}
                  {/* Non-working days placeholder */}
                  {['monday', 'tuesday', 'wednesday', 'thursday', 'friday']
                    .filter(day => !doctor.schedule[day])
                    .map(day => (
                      <tr key={day} className="bg-neutral-50/20 dark:bg-neutral-900/20 text-neutral-400">
                        <td className="py-3.5 px-5 capitalize">{day}</td>
                        <td className="py-3.5 px-5">{locale === 'en' ? 'No Consultations' : 'لا يوجد استشارات'}</td>
                        <td className="py-3.5 px-5 italic text-[10px]">{locale === 'en' ? 'Concierge On-Call Only' : 'خدمة العملاء عند الطلب'}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>

        {/* Right Column: Sticky Booking Ticket Box */}
        <div className="lg:col-span-4 lg:sticky lg:top-28">
          <Card variant="glass" className="p-8 space-y-6">
            <div className="space-y-1">
              <span className="text-[10px] font-bold text-gold uppercase tracking-widest block">
                {locale === 'en' ? 'Consultation Booking' : 'حجز استشارة'}
              </span>
              <h3 className="text-lg font-bold text-charcoal dark:text-white">
                {locale === 'en' ? 'Schedule Specialists' : 'جدولة الأخصائيين'}
              </h3>
            </div>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3 text-xs">
                <CheckCircle className="w-4 h-4 text-primary dark:text-[#00f2fe] shrink-0 mt-0.5" />
                <div className="space-y-0.5 text-neutral-600 dark:text-neutral-400 font-medium">
                  <span className="font-semibold text-charcoal dark:text-white block">
                    {locale === 'en' ? 'Direct Scheduling' : 'الجدولة المباشرة'}
                  </span>
                  <span>{locale === 'en' ? `Reserve a slot directly with ${doctor.name.en}.` : `احجز موعداً مباشرة مع ${doctor.name.ar}.`}</span>
                </div>
              </div>
              <div className="flex items-start gap-3 text-xs">
                <CheckCircle className="w-4 h-4 text-primary dark:text-[#00f2fe] shrink-0 mt-0.5" />
                <div className="space-y-0.5 text-neutral-600 dark:text-neutral-400 font-medium">
                  <span className="font-semibold text-charcoal dark:text-white block">
                    {locale === 'en' ? 'Available Clinic Days' : 'أيام العيادة المتاحة'}
                  </span>
                  <span>{locale === 'en' ? 'Available on' : 'متاح في'} <span className="font-semibold text-primary dark:text-[#00f2fe]">{getDoctorWorkingDaysStr()}</span>.</span>
                </div>
              </div>
            </div>

            <Button
              variant="primary"
              className="w-full justify-center group"
              onClick={() => openBooking('', doctor.slug)}
            >
              {locale === 'en' ? 'Book with' : 'احجز مع'} {doctor.name[locale as keyof typeof doctor.name].split(' ').slice(-1)[0]}
              <Calendar className={`w-4 h-4 transition-transform ${locale === 'ar' ? 'mr-2 rotate-180 group-hover:-translate-x-1' : 'ml-2 group-hover:translate-x-1'}`} />
            </Button>
          </Card>
        </div>

      </div>

    </div>
  );
}
