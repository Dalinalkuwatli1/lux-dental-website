import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useBooking } from '../booking/BookingContext';
import { useAppContext } from '../../context/AppContext';
import { translations } from '../../data/translations';

// Custom inline SVG icons for perfect luxury styling and zero dependency mismatch
const InstagramIcon = () => (
  <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const WhatsAppIcon = () => (
  <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
);

const TikTokIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.62 4.19 1.1 1.25 2.58 2.08 4.18 2.37v3.98c-1.89-.01-3.72-.67-5.23-1.84-.04 2.87.02 5.75-.02 8.62-.07 1.83-.67 3.69-1.9 5.02-1.52 1.73-3.87 2.63-6.14 2.49-2.31-.07-4.6-1.15-5.9-3.07-1.46-2.07-1.81-4.89-.96-7.29.83-2.45 2.92-4.39 5.48-4.99.07.01.14.02.21.02v4.06c-1.37.28-2.61 1.21-3.1 2.53-.59 1.51-.2 3.32.96 4.44 1.1 1.11 2.83 1.41 4.21.75 1.15-.52 1.89-1.7 1.95-2.96.06-2.67.02-5.34.03-8.01.01-4.22-.03-8.44.02-12.66z" />
  </svg>
);

export const Footer: React.FC = () => {
  const { openBooking } = useBooking();
  const { locale } = useAppContext();
  const t = translations[locale].footer;
  const navT = translations[locale].nav;
  const currentYear = new Date().getFullYear();

  const serviceLinks = [
    { name: locale === 'en' ? 'Teeth Cleaning' : 'تنظيف الأسنان', href: '/services/cleaning' },
    { name: locale === 'en' ? 'Teeth Whitening' : 'تبييض الأسنان', href: '/services/whitening' },
    { name: locale === 'en' ? 'Dental Implants' : 'زراعة الأسنان', href: '/services/implants' },
    { name: locale === 'en' ? 'Orthodontics' : 'تقويم الأسنان', href: '/services/braces' },
    { name: locale === 'en' ? 'Root Canal' : 'علاج الجذور', href: '/services/root-canal' },
    { name: locale === 'en' ? 'Cosmetic Dentistry' : 'طب الأسنان التجميلي', href: '/services/cosmetic' },
  ];

  const quickLinks = [
    { name: locale === 'en' ? 'Home' : 'الرئيسية', href: '/' },
    { name: navT.treatments, href: '/services' },
    { name: navT.specialists, href: '/doctors' },
    { name: navT.book, href: '/booking' },
  ];

  return (
    <footer
      className="bg-[#050b0b] text-slate-300 pt-16 pb-8 relative overflow-hidden transition-colors duration-500 border-t border-white/5"
    >
      {/* Very subtle background ambient glows */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] rounded-full bg-white/[0.01] blur-[120px] pointer-events-none" />

      {/* 1. Subtle Minimal Trust Strip */}
      <div className="border-b border-white/5 pb-10 mb-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="relative overflow-hidden w-full py-1 flex items-center justify-center">
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[10px] font-semibold tracking-[0.25em] text-slate-400 uppercase">
              <span>{locale === 'en' ? 'Trusted by international patients' : 'موثوق به من قبل مرضانا الدوليين'}</span>
              <span className="text-slate-655 hidden sm:inline">•</span>
              <span>{locale === 'en' ? 'Türkiye' : 'تركيا'}</span>
              <span className="text-slate-655">•</span>
              <span>{locale === 'en' ? 'UAE' : 'الإمارات'}</span>
              <span className="text-slate-655">•</span>
              <span>{locale === 'en' ? 'Qatar' : 'قطر'}</span>
              <span className="text-slate-655">•</span>
              <span>{locale === 'en' ? 'London' : 'لندن'}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">

        {/* Footer Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Column 1: Brand & Bio */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3 group focus:outline-none cursor-interactive">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-[#00f2fe]/10 blur-md group-hover:bg-[#00f2fe]/20 transition-all duration-500" />
                <Image
                  src="/images/tooth-logo-transparent.png"
                  alt="Lumina Dental"
                  width={52}
                  height={52}
                  className="relative w-13 h-13 object-contain transition-transform duration-500 group-hover:scale-110 drop-shadow-[0_0_8px_rgba(0,242,254,0.3)]"
                />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-sm font-bold tracking-[0.25em] text-white font-sans">
                  LUMINA
                </span>
                <span className="text-[8px] font-semibold tracking-[0.4em] text-gold uppercase">
                  DENTAL CLINIC
                </span>
              </div>
            </Link>
            <p className="text-[13px] text-slate-400 leading-relaxed font-light">
              {locale === 'en' ?
                'Experience the pinnacle of luxury oral healthcare. We fuse world-class biological technology with boutique medical artistry.' :
                'ارتقِ بابتسامتك في عالم طب الأسنان الفاخر؛ حيث تلتقي التكنولوجيا البيولوجية الأكثر تقدماً بالفن الطبي الاستثنائي، لنصنع من ابتسامتك تحفة فنية فريدة.'}
            </p>

            {/* Social Links - Clean & Bare Minimal */}
            <div className="flex items-center gap-4 pt-2">
              <a href="#" className="text-slate-400 hover:text-[#00f2fe] transition-colors duration-300 cursor-interactive" aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a href="#" className="text-slate-400 hover:text-[#00f2fe] transition-colors duration-300 cursor-interactive" aria-label="Linkedin">
                <LinkedinIcon />
              </a>
              <a href="#" className="text-slate-400 hover:text-[#00f2fe] transition-colors duration-300 cursor-interactive" aria-label="TikTok">
                <TikTokIcon />
              </a>
              <a href="https://wa.me/902125550199" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#00f2fe] transition-colors duration-300 cursor-interactive" aria-label="WhatsApp">
                <WhatsAppIcon />
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="text-[11px] font-bold tracking-[0.2em] text-white uppercase mb-6">
              {navT.treatments}
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-slate-300 hover:text-[#00f2fe] transition-colors focus:outline-none font-light cursor-interactive"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Navigation */}
          <div>
            <h4 className="text-[11px] font-bold tracking-[0.2em] text-white uppercase mb-6">
              {t.quick_links}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-slate-300 hover:text-[#00f2fe] transition-colors focus:outline-none font-light cursor-interactive"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Hours */}
          <div className="space-y-6">
            <h4 className="text-[11px] font-bold tracking-[0.2em] text-white uppercase">
              {t.contact}
            </h4>
            <ul className="space-y-4 text-[13px] text-slate-300 font-light">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span className="text-slate-300">{t.address}<br />{t.city}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <a href="tel:+902125550199" className="hover:text-[#00f2fe] transition-colors cursor-interactive text-slate-300" dir="ltr">
                  {t.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <a href="mailto:concierge@luminadental.com" className="hover:text-[#00f2fe] transition-colors cursor-interactive text-slate-300">
                  concierge@luminadental.com
                </a>
              </li>
              <li className="flex items-start gap-3 pt-2 border-t border-white/5">
                <Clock className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <div className="text-xs space-y-1 text-slate-300">
                  <p><span className="text-slate-400 font-medium">{t.mon_fri}:</span> 9:00 AM - 6:00 PM</p>
                  <p><span className="text-slate-400 font-medium">{t.sat}:</span> 10:00 AM - 4:00 PM</p>
                  <p className="text-teal-400 dark:text-[#00f2fe] font-medium">{t.sun}: {t.closed}</p>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* 2. Luxury Certifications Row */}
        <div className="border-t border-white/5 py-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-[10px] tracking-[0.2em] text-slate-400 uppercase font-medium">
          <span>{locale === 'en' ? 'HIPAA Compliant' : 'متوافق مع معايير HIPAA'}</span>
          <span className="text-white/10 hidden sm:inline">•</span>
          <span>{locale === 'en' ? 'Swiss Dental Tech' : 'تقنيات الأسنان السويسرية'}</span>
          <span className="text-white/10 hidden sm:inline">•</span>
          <span>{locale === 'en' ? 'AI Assisted Diagnostics' : 'تشخيصات مدعومة بالذكاء الاصطناعي'}</span>
          <span className="text-white/10 hidden sm:inline">•</span>
          <span>{locale === 'en' ? 'Biological Standards' : 'معايير بيولوجية صحية'}</span>
        </div>

        {/* 3. Payment Methods — clean monochrome cards */}
        <div className="border-t border-white/5 py-6 flex flex-wrap items-center justify-center gap-5 select-none">
          <span className="text-[10px] text-slate-500 font-medium tracking-[0.18em] uppercase">
            {locale === 'en' ? 'Accepted Payments' : 'طرق الدفع'}
          </span>
          <div className="flex items-center gap-3">
            {/* Visa */}
            <div className="w-12 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center hover:border-white/20 transition-colors">
              <span className="text-[11px] font-black italic tracking-tighter text-white/60">VISA</span>
            </div>
            {/* Mastercard */}
            <div className="w-12 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center hover:border-white/20 transition-colors">
              <div className="flex -space-x-1.5">
                <div className="w-3.5 h-3.5 rounded-full bg-white/50" />
                <div className="w-3.5 h-3.5 rounded-full bg-white/30" />
              </div>
            </div>
            {/* Amex */}
            <div className="w-12 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex flex-col items-center justify-center leading-none hover:border-white/20 transition-colors">
              <span className="text-[5px] font-black tracking-tight text-white/50 uppercase">AMEX</span>
            </div>
            {/* PayPal */}
            <div className="w-12 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center hover:border-white/20 transition-colors">
              <span className="text-[9px] font-black italic tracking-tight text-white/60">PayPal</span>
            </div>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-500">
          <div className="space-y-1 text-center md:text-left">
            <p>© {currentYear} Lumina Dental Clinic. {locale === 'en' ? 'Crafted for exceptional patient experiences.' : 'صُنع لتجارب مرضى استثنائية.'}</p>
          </div>

          {/* Designer Credit */}
          <div className="text-center md:text-right">
            <span className="text-[9px] text-slate-500 block">
              {locale === 'en' ? 'Creative direction by' : 'الإخراج الإبداعي بواسطة'}
            </span>
            <span className="font-medium text-slate-400 hover:text-white transition-colors duration-300 tracking-wider">
              Dalin Alkuwatli
            </span>
          </div>

          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors cursor-interactive">{locale === 'en' ? 'Privacy Policy' : 'سياسة الخصوصية'}</Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors cursor-interactive">{locale === 'en' ? 'Terms of Service' : 'شروط الخدمة'}</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
