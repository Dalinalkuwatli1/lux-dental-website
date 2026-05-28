'use client';

import React from 'react';
import { useAppContext } from '../../context/AppContext';
import { translations } from '../../data/translations';

export default function PrivacyPolicyPage() {
  const { locale } = useAppContext();
  const t = translations[locale];

  return (
    <div className="pt-36 pb-20 sm:pt-40 sm:pb-28 max-w-4xl mx-auto px-6 sm:px-8 animate-fade-in">
      <div className="space-y-4 mb-12 border-b border-neutral-200 dark:border-neutral-800 pb-10">
        <span className="text-xs font-semibold tracking-widest text-gold uppercase block">
          {locale === 'en' ? 'Legal & Compliance' : 'الشؤون القانونية والامتثال'}
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-charcoal dark:text-white">
          {locale === 'en' ? 'Privacy Policy' : 'سياسة الخصوصية'}
        </h1>
        <p className="text-sm sm:text-base text-neutral-500 dark:text-neutral-400">
          {locale === 'en' 
            ? 'Last updated: May 2026. Your privacy and the security of your medical data are of the utmost importance to Lumina Dental Clinic.'
            : 'آخر تحديث: مايو 2026. خصوصيتك وأمان بياناتك الطبية هما في غاية الأهمية بالنسبة لعيادة لومينا لطب الأسنان.'}
        </p>
      </div>

      <div className="space-y-12 text-neutral-600 dark:text-neutral-300 leading-relaxed font-light">
        
        {/* Section 1 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-charcoal dark:text-white">
            {locale === 'en' ? '1. Information We Collect' : '1. المعلومات التي نجمعها'}
          </h2>
          <p>
            {locale === 'en' 
              ? 'We collect personal and medical information necessary to provide you with exceptional biological dental care. This includes, but is not limited to, your name, contact details, comprehensive medical history, dental records, and payment information.'
              : 'نقوم بجمع المعلومات الشخصية والطبية اللازمة لتزويدك برعاية أسنان بيولوجية استثنائية. يشمل ذلك، على سبيل المثال لا الحصر، اسمك، وتفاصيل الاتصال، والتاريخ الطبي الشامل، وسجلات الأسنان، ومعلومات الدفع.'}
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-charcoal dark:text-white">
            {locale === 'en' ? '2. How We Use Your Information' : '2. كيف نستخدم معلوماتك'}
          </h2>
          <p>
            {locale === 'en'
              ? 'Your data is strictly used for clinical diagnostics, personalizing your treatment plans, processing payments, and maintaining secure communication regarding your appointments and oral health status.'
              : 'تُستخدم بياناتك بدقة للتشخيص السريري، وتخصيص خطط العلاج الخاصة بك، ومعالجة المدفوعات، والحفاظ على التواصل الآمن فيما يتعلق بمواعيدك وحالة صحة فمك.'}
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>{locale === 'en' ? 'To schedule and manage your consultations.' : 'لجدولة وإدارة استشاراتك.'}</li>
            <li>{locale === 'en' ? 'To ensure safety and compatibility of our biological treatments with your systemic health.' : 'لضمان سلامة وتوافق علاجاتنا البيولوجية مع صحتك العامة.'}</li>
            <li>{locale === 'en' ? 'To comply with international and local healthcare regulations (e.g., HIPAA compliance).' : 'للامتثال للوائح الرعاية الصحية الدولية والمحلية (مثل الامتثال لقانون HIPAA).'}</li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-charcoal dark:text-white">
            {locale === 'en' ? '3. Data Security & Confidentiality' : '3. أمن البيانات والسرية'}
          </h2>
          <p>
            {locale === 'en'
              ? 'We employ advanced, bank-level encryption and secure server infrastructures to protect your personal and medical data against unauthorized access, alteration, or disclosure. All clinical staff are bound by strict confidentiality agreements.'
              : 'نحن نستخدم تشفيرًا متقدمًا على مستوى البنوك وبنى تحتية آمنة للخوادم لحماية بياناتك الشخصية والطبية من الوصول غير المصرح به أو التغيير أو الإفصاح. يلتزم جميع الموظفين السريريين باتفاقيات سرية صارمة.'}
          </p>
        </section>

        {/* Section 4 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-charcoal dark:text-white">
            {locale === 'en' ? '4. Third-Party Sharing' : '4. مشاركة الأطراف الثالثة'}
          </h2>
          <p>
            {locale === 'en'
              ? 'Lumina Dental Clinic does not sell or rent your personal data to third parties. We only share information with trusted medical partners, specialized laboratories (for custom prosthetics), and payment processors strictly for the fulfillment of your care.'
              : 'عيادة لومينا لطب الأسنان لا تبيع أو تؤجر بياناتك الشخصية لأطراف ثالثة. نحن نشارك المعلومات فقط مع شركاء طبيين موثوقين، والمختبرات المتخصصة (للتركيبات المخصصة)، ومعالجات الدفع حصريًا من أجل إتمام رعايتك.'}
          </p>
        </section>

        {/* Section 5 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-charcoal dark:text-white">
            {locale === 'en' ? '5. Your Rights' : '5. حقوقك'}
          </h2>
          <p>
            {locale === 'en'
              ? 'You reserve the right to request access to your medical files, ask for corrections, or request deletion of your non-clinical data, subject to legal medical retention requirements. To exercise these rights, please contact our concierge.'
              : 'أنت تحتفظ بالحق في طلب الوصول إلى ملفاتك الطبية، أو طلب التصحيحات، أو طلب حذف بياناتك غير السريرية، مع مراعاة المتطلبات القانونية للاحتفاظ الطبي. لممارسة هذه الحقوق، يرجى الاتصال بخدمة الكونسيرج لدينا.'}
          </p>
        </section>

        {/* Contact Info */}
        <div className="mt-16 p-8 bg-neutral-50 dark:bg-neutral-900 rounded-2xl border border-neutral-100 dark:border-neutral-800">
          <h3 className="text-lg font-semibold text-charcoal dark:text-white mb-2">
            {locale === 'en' ? 'Contact Our Privacy Officer' : 'تواصل مع مسؤول الخصوصية لدينا'}
          </h3>
          <p className="text-sm">
            {locale === 'en' ? 'If you have any questions about this Privacy Policy, please email us at:' : 'إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى مراسلتنا على:'}
          </p>
          <a href="mailto:privacy@luminadental.com" className="text-primary dark:text-[#00f2fe] font-medium hover:underline mt-2 inline-block">
            privacy@luminadental.com
          </a>
        </div>

      </div>
    </div>
  );
}
