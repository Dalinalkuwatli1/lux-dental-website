export type TranslatedString = { en: string; ar: string };
export type TranslatedArray = { en: string[]; ar: string[] };

export type Service = {
  slug: string;
  title: TranslatedString;
  description: TranslatedString;
  benefits: TranslatedArray;
  procedure: TranslatedString;
  recovery: TranslatedString;
  image: string;
};

export const services: Service[] = [
  {
    slug: "cleaning",
    title: { en: "Teeth Cleaning", ar: "تنظيف الأسنان" },
    description: {
      en: "Professional cleaning to remove plaque and tartar, keeping your gums healthy.",
      ar: "تنظيف احترافي دقيق لإزالة الجير والترسبات، لضمان صحة ونضارة لثتك."
    },
    benefits: {
      en: ["Healthier gums", "Brighter smile", "Fresh breath"],
      ar: ["لثة أكثر صحة", "ابتسامة أكثر إشراقاً", "نَفَس منعش"]
    },
    procedure: {
      en: "Our hygienist uses ultrasonic scalers and polishing tools to thoroughly clean each tooth.",
      ar: "يستخدم خبراؤنا أحدث الأجهزة فوق الصوتية وأدوات التلميع الدقيقة لتنظيف كل سن بعناية فائقة."
    },
    recovery: {
      en: "No downtime – return to normal activities immediately.",
      ar: "لا حاجة لفترة نقاهة – يمكنك استئناف نشاطك الطبيعي على الفور."
    },
    image: "/images/services/the-surprising-health-benefits-of-regular-dental-cleanings.jpg",
  },
  {
    slug: "whitening",
    title: { en: "Teeth Whitening", ar: "تبييض الأسنان" },
    description: {
      en: "A safe, in‑office whitening treatment that brightens your smile up to 8 shades.",
      ar: "جلسة تبييض آمنة وفعالة داخل العيادة لتفتيح لون ابتسامتك حتى 8 درجات بلمعان طبيعي."
    },
    benefits: {
      en: ["Instant results", "Long‑lasting brightness", "Confidence boost"],
      ar: ["نتائج فورية", "إشراق يدوم طويلاً", "تعزيز الثقة"]
    },
    procedure: {
      en: "A professional‑grade peroxide gel is applied and activated with a light for 30 minutes.",
      ar: "نستخدم جل التبييض الاحترافي ونقوم بتنشيطه ضوئياً لمدة 30 دقيقة لنتائج فورية ومبهرة."
    },
    recovery: {
      en: "Mild sensitivity for a few hours is possible; avoid staining foods.",
      ar: "قد تحدث حساسية خفيفة ومؤقتة؛ ويُوصى بتجنب الأطعمة المسببة للتصبغ لعدة أيام."
    },
    image: "/images/services/whitening.png",
  },
  {
    slug: "implants",
    title: { en: "Dental Implants", ar: "زراعة الأسنان" },
    description: {
      en: "Permanent, lifelike tooth replacements anchored to the jawbone.",
      ar: "أسنان بديلة دائمة بمظهر طبيعي تماماً، تُثبت بأمان وتناغم في عظم الفك."
    },
    benefits: {
      en: ["Stable bite", "Natural look", "Preserves bone"],
      ar: ["عضة قوية ومستقرة", "مظهر طبيعي وجذاب", "الحفاظ على بنية الفك"]
    },
    procedure: {
      en: "Surgical placement of titanium posts followed by a custom crown after osseointegration.",
      ar: "زراعة دقيقة لدعامات التيتانيوم، يتبعها تركيب تاج مخصص بعد اكتمال الاندماج الطبيعي مع العظم."
    },
    recovery: {
      en: "2‑3 weeks of limited chewing, full healing 3‑6 months before crown placement.",
      ar: "مضغ حذر لأسبوعين أو ثلاثة، ويكتمل الشفاء التام خلال 3-6 أشهر قبل التركيب النهائي للتاج."
    },
    image: "/images/services/implants.png",
  },
  {
    slug: "braces",
    title: { en: "Orthodontic Braces", ar: "تقويم الأسنان" },
    description: {
      en: "Modern clear or ceramic braces to straighten teeth discreetly.",
      ar: "خيارات تقويم حديثة، شفافة أو خزفية، لمحاذاة الأسنان بأسلوب أنيق وغير ملحوظ."
    },
    benefits: {
      en: ["Improved alignment", "Better bite", "Enhanced oral health"],
      ar: ["تناسق مثالي للأسنان", "إطباق سليم ومريح", "تعزيز صحة الفم بشكل عام"]
    },
    procedure: {
      en: "Brackets are bonded to each tooth and adjusted monthly over 12‑24 months.",
      ar: "تُثبت الحاصرات بعناية وتُعدّل دورياً للوصول إلى النتيجة المثالية خلال 12 إلى 24 شهراً."
    },
    recovery: {
      en: "Mild soreness after adjustments; use orthodontic wax as needed.",
      ar: "انزعاج طفيف طبيعي بعد التعديلات الدورية؛ يمكن استخدام شمع التقويم لتخفيف الاحتكاك."
    },
    image: "/images/services/braces.jpg",
  },
  {
    slug: "root-canal",
    title: { en: "Root Canal Treatment", ar: "علاج الجذور (سحب العصب)" },
    description: {
      en: "Saving an infected tooth by removing the pulp and sealing the canal.",
      ar: "علاج دقيق لإنقاذ السن المصاب عبر إزالة العصب التالف وإغلاق القناة بإحكام."
    },
    benefits: {
      en: ["Pain relief", "Preserves natural tooth", "Prevents spread of infection"],
      ar: ["تخفيف جذري للألم", "الحفاظ على بنية السن الطبيعي", "إيقاف انتشار العدوى"]
    },
    procedure: {
      en: "The infected pulp is removed, the canal cleaned, and a biocompatible filling placed.",
      ar: "نُزيل العصب المصاب بلطف، ونعقم القنوات بدقة متناهية، ثم نملؤها بمادة طبية متوافقة حيوياً."
    },
    recovery: {
      en: "A few days of mild discomfort; avoid hard foods for a week.",
      ar: "انزعاج طفيف لعدة أيام بعد العلاج؛ يُنصح بتجنب قضم الأطعمة الصلبة لمدة أسبوع."
    },
    image: "/images/services/root-canal.jpg",
  },
  {
    slug: "cosmetic",
    title: { en: "Cosmetic Dentistry", ar: "طب الأسنان التجميلي" },
    description: {
      en: "Custom veneers, crowns, and bonding for a flawless smile.",
      ar: "قشور خزفية فائقة الرقة (فينير)، تيجان، وترميمات فنية لابتسامة خالية من العيوب."
    },
    benefits: {
      en: ["Aesthetic improvement", "Durable results", "Stain‑resistant"],
      ar: ["جاذبية جمالية مضاعفة", "نتائج قوية وطويلة الأمد", "مقاومة عالية للتصبغات"]
    },
    procedure: {
      en: "Thin porcelain veneers are fabricated and bonded to the front surface of teeth.",
      ar: "نصمم قشور البورسلين خصيصاً لتناسب ملامحك، ونثبتها بانسيابية تامة على الواجهة الأمامية للأسنان."
    },
    recovery: {
      en: "Slight sensitivity for a few days; avoid staining foods.",
      ar: "حساسية مؤقتة وبسيطة لأيام معدودة؛ يُنصح بالتقليل من الأطعمة المسببة للتصبغ في البداية."
    },
    image: "/images/services/cosmetic.jpg",
  },
];
