'use client';

import React, { useState, useEffect } from 'react';
import { services } from '../../data/services';
import { doctors } from '../../data/doctors';
import { useAppContext } from '../../context/AppContext';
import { translations } from '../../data/translations';
import { Calendar, User, Activity, Clock, FileText, CheckCircle, Sparkles } from 'lucide-react';
import TimeSlotPicker from './TimeSlotPicker';
import Button from '../ui/Button';

interface BookingFormProps {
  preselectedService?: string;
  preselectedDoctor?: string;
  onSuccess?: () => void;
}

export const BookingForm: React.FC<BookingFormProps> = ({
  preselectedService = '',
  preselectedDoctor = '',
  onSuccess,
}) => {
  const { locale } = useAppContext();
  const t = translations[locale];

  const [service, setService] = useState(preselectedService);
  const [doctor, setDoctor] = useState(preselectedDoctor);
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [refCode, setRefCode] = useState('');

  // Reset steps/inputs if preselected change
  useEffect(() => {
    if (preselectedService) setService(preselectedService);
    if (preselectedDoctor) setDoctor(preselectedDoctor);
  }, [preselectedService, preselectedDoctor]);

  // Determine available slots based on doctor and date
  const [availableSlots, setAvailableSlots] = useState<string[]>([]);
  useEffect(() => {
    if (!doctor || !date) {
      setAvailableSlots([]);
      return;
    }

    const selectedDoc = doctors.find((d) => d.slug === doctor);
    if (!selectedDoc) return;

    // Get day of week
    // Note: JS Date constructor can parse YYYY-MM-DD
    const parsedDate = new Date(date + 'T00:00:00');
    const dayName = parsedDate.toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();

    const slots = selectedDoc.schedule[dayName] || [];
    setAvailableSlots(slots);
    setTimeSlot(''); // Reset time when date changes
  }, [doctor, date]);

  // Handle auto-selection of specialist depending on service
  useEffect(() => {
    if (!service || doctor) return;

    // Map service to specialty
    const specialtyMap: Record<string, string> = {
      braces: 'Orthodontics',
      implants: 'Implant Dentistry',
      cosmetic: 'Cosmetic Dentistry',
      whitening: 'Cosmetic Dentistry',
      cleaning: 'Cosmetic Dentistry',
      'root-canal': 'Endodontics',
    };

    const targetSpecialty = specialtyMap[service];
    if (targetSpecialty) {
      const matchedDoc = doctors.find((d) => d.specialization.en === targetSpecialty);
      if (matchedDoc) {
        setDoctor(matchedDoc.slug);
      }
    }
  }, [service, doctor]);

  const selectedDoctorObj = doctors.find((d) => d.slug === doctor);
  const selectedServiceObj = services.find((s) => s.slug === service);

  // Form Submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!service || !doctor || !date || !timeSlot || !name || !phone || !email) {
      alert(locale === 'en' ? 'Please complete all form fields.' : 'يرجى إكمال جميع حقول النموذج.');
      return;
    }

    // Generate simulated reference code
    const randomCode = `LUM-${Math.floor(10000 + Math.random() * 90000)}`;
    setRefCode(randomCode);
    setIsSubmitted(true);
  };

  // Get active doctor working days string
  const getDoctorWorkingDaysStr = () => {
    if (!selectedDoctorObj) return '';
    const days = Object.keys(selectedDoctorObj.schedule).map(
      d => d.charAt(0).toUpperCase() + d.slice(1)
    );
    if (days.length === 0) return locale === 'en' ? 'No schedule' : 'لا يوجد جدول';
    if (days.length === 1) return days[0];
    if (days.length === 2) return days.join(locale === 'en' ? ' & ' : ' و ');
    return `${days.slice(0, -1).join(locale === 'en' ? ', ' : '، ')} ${locale === 'en' ? '&' : 'و'} ${days[days.length - 1]}`;
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-8 px-4 animate-fade-in">
        <div className="w-16 h-16 bg-primary-light dark:bg-[#00f2fe]/10 text-primary dark:text-[#00f2fe] rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10" />
        </div>
        <h3 className="text-2xl font-semibold text-charcoal dark:text-white mb-2">
          {locale === 'en' ? 'Appointment Requested' : 'تم طلب الموعد'}
        </h3>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 max-w-sm mx-auto mb-8">
          {locale === 'en' ?
            'We have reserved your slot. A boutique health concierge will call you shortly to confirm your clinical details.' :
            'لقد حجزنا موعدك. سيتصل بك فريقنا الطبي قريباً لتأكيد التفاصيل السريرية.'}
        </p>

        {/* Premium Booking Ticket */}
        <div className="bg-cream dark:bg-[#060b0a] border border-neutral-200/60 dark:border-neutral-800 rounded-3xl p-6 text-left max-w-md mx-auto shadow-soft mb-8 relative overflow-hidden">
          {/* Ticket Edge punch holes effect */}
          <div className="absolute top-1/2 -left-3 w-6 h-6 rounded-full bg-white dark:bg-[#081110] border-r border-neutral-200/60 dark:border-neutral-800 -translate-y-1/2" />
          <div className="absolute top-1/2 -right-3 w-6 h-6 rounded-full bg-white dark:bg-[#081110] border-l border-neutral-200/60 dark:border-neutral-800 -translate-y-1/2" />

          <div className="flex items-center justify-between pb-4 border-b border-dashed border-neutral-200 dark:border-neutral-800">
            <div>
              <span className="text-[10px] font-semibold text-neutral-400 uppercase tracking-widest block">{locale === 'en' ? 'Reference Code' : 'رمز المرجع'}</span>
              <span className="text-sm font-bold text-primary dark:text-[#00f2fe] font-mono">{refCode}</span>
            </div>
            <div className="text-right">
              <span className="text-[10px] font-semibold text-neutral-400 uppercase tracking-widest block">{locale === 'en' ? 'Status' : 'الحالة'}</span>
              <span className="text-xs font-semibold text-teal-600 dark:text-[#00f2fe] bg-teal-50 dark:bg-[#00f2fe]/10 px-2 py-0.5 rounded-full inline-block mt-0.5">{locale === 'en' ? 'Pending Concierge' : 'قيد الانتظار'}</span>
            </div>
          </div>

          <div className="space-y-4 pt-4 text-sm">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="text-[10px] font-semibold text-neutral-400 uppercase tracking-widest block">{locale === 'en' ? 'Patient' : 'المريض'}</span>
                <span className="font-medium text-charcoal dark:text-white">{name}</span>
              </div>
              <div>
                <span className="text-[10px] font-semibold text-neutral-400 uppercase tracking-widest block">{locale === 'en' ? 'Treatment' : 'العلاج'}</span>
                <span className="font-medium text-charcoal dark:text-white">
                  {selectedServiceObj?.title ? selectedServiceObj.title[locale as keyof typeof selectedServiceObj.title] : ''}
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="text-[10px] font-semibold text-neutral-400 uppercase tracking-widest block">{locale === 'en' ? 'Specialist' : 'الأخصائي'}</span>
                <span className="font-medium text-charcoal dark:text-white">
                  {selectedDoctorObj?.name ? selectedDoctorObj.name[locale as keyof typeof selectedDoctorObj.name] : ''}
                </span>
              </div>
              <div>
                <span className="text-[10px] font-semibold text-neutral-400 uppercase tracking-widest block">{locale === 'en' ? 'Specialty' : 'التخصص'}</span>
                <span className="font-medium text-gold">
                  {selectedDoctorObj?.specialization ? selectedDoctorObj.specialization[locale as keyof typeof selectedDoctorObj.specialization] : ''}
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-3 border-t border-neutral-100 dark:border-neutral-800">
              <div>
                <span className="text-[10px] font-semibold text-neutral-400 uppercase tracking-widest block">{locale === 'en' ? 'Date' : 'التاريخ'}</span>
                <span className="font-semibold text-charcoal dark:text-white flex items-center gap-1.5 mt-0.5">
                  <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                  {date}
                </span>
              </div>
              <div>
                <span className="text-[10px] font-semibold text-neutral-400 uppercase tracking-widest block">{locale === 'en' ? 'Time Slot' : 'الموعد'}</span>
                <span className="font-semibold text-primary dark:text-[#00f2fe] flex items-center gap-1.5 mt-0.5">
                  <Clock className="w-3.5 h-3.5 text-neutral-400" />
                  {timeSlot}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-3">
          <Button
            variant="outline"
            onClick={() => {
              setIsSubmitted(false);
              setService('');
              setDoctor('');
              setDate('');
              setTimeSlot('');
              setName('');
              setPhone('');
              setEmail('');
              setCurrentStep(1);
            }}
          >
            {locale === 'en' ? 'Schedule Another' : 'حجز آخر'}
          </Button>
          {onSuccess && (
            <Button variant="primary" onClick={onSuccess}>
              {locale === 'en' ? 'Done' : 'تم'}
            </Button>
          )}
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">

      {/* Progress Indicator */}
      <div className="flex items-center justify-between px-2 mb-6">
        <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider">
          <span className={`w-6 h-6 rounded-full flex items-center justify-center border text-[10px] ${currentStep >= 1 ? 'bg-primary dark:bg-[#0b8793] text-white border-primary dark:border-[#0b8793]' : 'text-neutral-400 border-neutral-200 dark:border-neutral-700'
            }`}>1</span>
          <span className={currentStep >= 1 ? 'text-primary dark:text-[#00f2fe]' : 'text-neutral-400'}>{locale === 'en' ? 'Care & Specialist' : 'الرعاية والأخصائي'}</span>
        </div>
        <div className="w-8 h-[1px] bg-neutral-200 dark:bg-neutral-800" />
        <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider">
          <span className={`w-6 h-6 rounded-full flex items-center justify-center border text-[10px] ${currentStep >= 2 ? 'bg-primary dark:bg-[#0b8793] text-white border-primary dark:border-[#0b8793]' : 'text-neutral-400 border-neutral-200 dark:border-neutral-700'
            }`}>2</span>
          <span className={currentStep >= 2 ? 'text-primary dark:text-[#00f2fe]' : 'text-neutral-400'}>{locale === 'en' ? 'Schedule & Contact' : 'الجدول والاتصال'}</span>
        </div>
      </div>

      {currentStep === 1 && (
        <div className="space-y-5 animate-fade-in">

          {/* Service Selector */}
          <div className="space-y-2">
            <label className="text-xs font-semibold tracking-wider text-charcoal dark:text-white uppercase flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-neutral-400" />
              {locale === 'en' ? 'Select Service' : 'اختر الخدمة'}
            </label>
            <select
              value={service}
              onChange={(e) => {
                setService(e.target.value);
                // Clear preselected doctor to trigger auto-specialist selection
                setDoctor('');
              }}
              required
              className="w-full bg-white dark:bg-[#060b0a] border border-neutral-200/80 dark:border-neutral-800 rounded-2xl px-4 py-3 text-sm text-neutral-700 dark:text-neutral-300 focus:border-primary dark:focus:border-[#00f2fe] focus:outline-none transition-colors"
            >
              <option value="">{locale === 'en' ? '-- Choose Dental Treatment --' : '-- اختر علاج الأسنان --'}</option>
              {services.map((s) => (
                <option key={s.slug} value={s.slug}>
                  {s.title[locale as keyof typeof s.title]}
                </option>
              ))}
            </select>
          </div>

          {/* Doctor Selector */}
          <div className="space-y-2">
            <label className="text-xs font-semibold tracking-wider text-charcoal dark:text-white uppercase flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-neutral-400" />
              {locale === 'en' ? 'Select Doctor' : 'اختر الطبيب'}
            </label>
            <select
              value={doctor}
              onChange={(e) => setDoctor(e.target.value)}
              required
              className="w-full bg-white dark:bg-[#060b0a] border border-neutral-200/80 dark:border-neutral-800 rounded-2xl px-4 py-3 text-sm text-neutral-700 dark:text-neutral-300 focus:border-primary dark:focus:border-[#00f2fe] focus:outline-none transition-colors"
            >
              <option value="">{locale === 'en' ? '-- Select Specialist --' : '-- اختر الأخصائي --'}</option>
              {doctors.map((d) => (
                <option key={d.slug} value={d.slug}>
                  {d.name[locale as keyof typeof d.name]} ({d.specialization[locale as keyof typeof d.specialization]})
                </option>
              ))}
            </select>
            {selectedDoctorObj && (
              <span className="text-[11px] text-neutral-400 block px-1">
                {locale === 'en' ? 'Availability:' : 'التوافر:'} <span className="font-semibold text-primary dark:text-[#00f2fe]">{getDoctorWorkingDaysStr()}</span>
              </span>
            )}
          </div>

          <div className="pt-2">
            <Button
              type="button"
              variant="primary"
              className="w-full justify-center"
              disabled={!service || !doctor}
              onClick={() => setCurrentStep(2)}
            >
              {locale === 'en' ? 'Next Step' : 'الخطوة التالية'}
            </Button>
          </div>
        </div>
      )}

      {currentStep === 2 && (
        <div className="space-y-5 animate-fade-in">

          {/* Date Picker */}
          <div className="space-y-2">
            <label className="text-xs font-semibold tracking-wider text-charcoal dark:text-white uppercase flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-neutral-400" />
              {locale === 'en' ? 'Select Date' : 'اختر التاريخ'}
            </label>
            <input
              type="date"
              value={date}
              min={new Date().toISOString().split('T')[0]} // Block past dates
              onChange={(e) => setDate(e.target.value)}
              required
              className="w-full bg-white dark:bg-[#060b0a] border border-neutral-200/80 dark:border-neutral-800 rounded-2xl px-4 py-3 text-sm text-neutral-700 dark:text-neutral-300 focus:border-primary dark:focus:border-[#00f2fe] focus:outline-none transition-colors"
            />
          </div>

          {/* Time Slot Picker */}
          {date && doctor && (
            <div className="animate-fade-in">
              <TimeSlotPicker
                availableSlots={availableSlots}
                selectedSlot={timeSlot}
                onChange={setTimeSlot}
              />
            </div>
          )}

          {/* Contact Details */}
          {timeSlot && (
            <div className="space-y-4 pt-4 border-t border-neutral-100 dark:border-neutral-800 animate-fade-in">
              <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest block">{locale === 'en' ? 'Patient Contact Details' : 'تفاصيل اتصال المريض'}</span>

              <div className="space-y-2">
                <input
                  type="text"
                  placeholder={locale === 'en' ? 'Full Name' : 'الاسم الكامل'}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full bg-white dark:bg-[#060b0a] border border-neutral-200/80 dark:border-neutral-800 rounded-2xl px-4 py-3 text-sm text-neutral-700 dark:text-neutral-300 focus:border-primary dark:focus:border-[#00f2fe] focus:outline-none transition-colors"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <input
                  type="tel"
                  placeholder={locale === 'en' ? 'Phone Number' : 'رقم الهاتف'}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="w-full bg-white dark:bg-[#060b0a] border border-neutral-200/80 dark:border-neutral-800 rounded-2xl px-4 py-3 text-sm text-neutral-700 dark:text-neutral-300 focus:border-primary dark:focus:border-[#00f2fe] focus:outline-none transition-colors"
                />
                <input
                  type="email"
                  placeholder={locale === 'en' ? 'Email Address' : 'البريد الإلكتروني'}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-white dark:bg-[#060b0a] border border-neutral-200/80 dark:border-neutral-800 rounded-2xl px-4 py-3 text-sm text-neutral-700 dark:text-neutral-300 focus:border-primary dark:focus:border-[#00f2fe] focus:outline-none transition-colors"
                />
              </div>
            </div>
          )}

          {/* Nav Buttons */}
          <div className="flex gap-3 pt-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => setCurrentStep(1)}
              className="flex-1"
            >
              {locale === 'en' ? 'Back' : 'رجوع'}
            </Button>
            <Button
              type="submit"
              variant="primary"
              className="flex-1 justify-center"
              disabled={!timeSlot || !name || !phone || !email}
            >
              {locale === 'en' ? 'Request Booking' : 'طلب حجز'}
            </Button>
          </div>
        </div>
      )}
    </form>
  );
};

export default BookingForm;
