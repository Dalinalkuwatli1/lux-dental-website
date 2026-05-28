'use client';

import React from 'react';
import { useAppContext } from '../../context/AppContext';
import { translations } from '../../data/translations';

export default function TermsOfServicePage() {
  const { locale } = useAppContext();
  const t = translations[locale];

  return (
    <div className="pt-36 pb-20 sm:pt-40 sm:pb-28 max-w-4xl mx-auto px-6 sm:px-8 animate-fade-in">
      <div className="space-y-4 mb-12 border-b border-neutral-200 dark:border-neutral-800 pb-10">
        <span className="text-xs font-semibold tracking-widest text-gold uppercase block">
          {locale === 'en' ? 'Legal & Compliance' : 'الشؤون القانونية والامتثال'}
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-charcoal dark:text-white">
          {locale === 'en' ? 'Terms of Service' : 'شروط الخدمة'}
        </h1>
        <p className="text-sm sm:text-base text-neutral-500 dark:text-neutral-400">
          {locale === 'en' 
            ? 'Last updated: May 2026. Please read these terms carefully before using our clinical services.'
            : 'آخر تحديث: مايو 2026. يرجى قراءة هذه الشروط بعناية قبل استخدام خدماتنا السريرية.'}
        </p>
      </div>

      <div className="space-y-12 text-neutral-600 dark:text-neutral-300 leading-relaxed font-light">
        
        {/* Section 1 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-charcoal dark:text-white">
            {locale === 'en' ? '1. Clinical Agreements' : '1. الاتفاقيات السريرية'}
          </h2>
          <p>
            {locale === 'en' 
              ? 'By scheduling an appointment and proceeding with treatment at Lumina Dental Clinic, you agree to adhere to our clinical protocols. All treatment plans are estimates based on initial diagnostics and may be subject to change upon further clinical discovery.'
              : 'من خلال تحديد موعد والمضي قدمًا في العلاج في عيادة لومينا لطب الأسنان، فإنك توافق على الالتزام ببروتوكولاتنا السريرية. جميع خطط العلاج هي تقديرات تستند إلى التشخيص الأولي وقد تكون عرضة للتغيير عند المزيد من الاكتشاف السريري.'}
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-charcoal dark:text-white">
            {locale === 'en' ? '2. Cancellations & No-Shows' : '2. الإلغاء وعدم الحضور'}
          </h2>
          <p>
            {locale === 'en'
              ? 'We require a minimum of 48 hours notice for appointment cancellations or rescheduling. Due to the highly specialized nature of our biological procedures, failure to provide adequate notice may result in a cancellation fee applied to your account.'
              : 'نطلب إشعارًا مسبقًا بمدة لا تقل عن 48 ساعة لإلغاء المواعيد أو إعادة جدولتها. نظرًا للطبيعة المتخصصة للغاية لإجراءاتنا البيولوجية، قد يؤدي عدم تقديم إشعار كافٍ إلى تطبيق رسوم إلغاء على حسابك.'}
          </p>
        </section>

        {/* Section 3 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-charcoal dark:text-white">
            {locale === 'en' ? '3. Financial Policy' : '3. السياسة المالية'}
          </h2>
          <p>
            {locale === 'en'
              ? 'Payment in full is expected at the time services are rendered unless a prior financial arrangement has been made. We accept major credit cards, bank transfers, and specialized healthcare financing options.'
              : 'يُتوقع الدفع بالكامل في وقت تقديم الخدمات ما لم يتم ترتيب مالي مسبق. نحن نقبل بطاقات الائتمان الرئيسية، والتحويلات المصرفية، وخيارات تمويل الرعاية الصحية المتخصصة.'}
          </p>
        </section>

        {/* Section 4 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-charcoal dark:text-white">
            {locale === 'en' ? '4. Guarantee of Treatment' : '4. ضمان العلاج'}
          </h2>
          <p>
            {locale === 'en'
              ? 'While we utilize world-class biomimetic materials and state-of-the-art techniques, biological responses vary by individual. Therefore, we cannot legally guarantee absolute outcomes, but we stand by the uncompromising quality of our clinical execution.'
              : 'في حين أننا نستخدم مواد محاكية حيوية عالمية المستوى وتقنيات حديثة، فإن الاستجابات البيولوجية تختلف من فرد لآخر. لذلك، لا يمكننا قانونًا ضمان النتائج المطلقة، لكننا نلتزم بالجودة التي لا تضاهى لتنفيذنا السريري.'}
          </p>
        </section>

        {/* Contact Info */}
        <div className="mt-16 p-8 bg-neutral-50 dark:bg-neutral-900 rounded-2xl border border-neutral-100 dark:border-neutral-800">
          <h3 className="text-lg font-semibold text-charcoal dark:text-white mb-2">
            {locale === 'en' ? 'Questions About These Terms?' : 'أسئلة حول هذه الشروط؟'}
          </h3>
          <p className="text-sm">
            {locale === 'en' ? 'Please reach out to our administration team before your next visit:' : 'يرجى التواصل مع فريق الإدارة لدينا قبل زيارتك القادمة:'}
          </p>
          <a href="mailto:admin@luminadental.com" className="text-primary dark:text-[#00f2fe] font-medium hover:underline mt-2 inline-block">
            admin@luminadental.com
          </a>
        </div>

      </div>
    </div>
  );
}
