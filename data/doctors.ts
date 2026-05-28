export type TranslatedString = { en: string; ar: string };

export type Doctor = {
  slug: string;
  name: TranslatedString;
  specialization: TranslatedString;
  bio: TranslatedString;
  image: string;
  schedule: Record<string, string[]>; // day -> array of time slots (HH:mm)
};

export const doctors: Doctor[] = [
  {
    slug: "dr-jane-smith",
    name: { en: "Dr. Jane Smith", ar: "د. جين سميث" },
    specialization: { en: "Orthodontics", ar: "تقويم الأسنان" },
    bio: {
      en: "15 years of experience transforming smiles with state‑of‑the‑art braces and aligners.",
      ar: "تمتلك 15 عاماً من الخبرة في تجميل الابتسامات باستخدام أحدث تقنيات تقويم الأسنان والمقومات الشفافة."
    },
    image: "/images/doctors/dr-jane-smith.png",
    schedule: {
      monday: ["09:00", "10:30", "14:00"],
      tuesday: ["11:00", "13:30", "15:00"],
      wednesday: ["09:30", "12:00", "16:00"],
    },
  },
  {
    slug: "dr-alex-lee",
    name: { en: "Dr. Alex Lee", ar: "د. أليكس لي" },
    specialization: { en: "Implant Dentistry", ar: "زراعة الأسنان" },
    bio: {
      en: "Board‑certified implant specialist known for precision and patient comfort.",
      ar: "أخصائي زراعة أسنان معتمد من البورد، يُعرف بدقته المتناهية وحرصه الفائق على راحة المريض."
    },
    image: "/images/doctors/dr-alex-lee.png",
    schedule: {
      thursday: ["08:00", "10:00", "14:30"],
      friday: ["09:00", "11:30", "15:00"],
    },
  },
  {
    slug: "dr-maria-garcia",
    name: { en: "Dr. Maria García", ar: "د. ماريا غارسيا" },
    specialization: { en: "Cosmetic Dentistry", ar: "طب الأسنان التجميلي" },
    bio: {
      en: "Passionate about creating flawless smiles through veneers and whitening.",
      ar: "شغوفة بصنع ابتسامات خالية من العيوب من خلال القشور الخزفية وتبييض الأسنان الاحترافي."
    },
    image: "/images/doctors/dr-maria-garcia.png",
    schedule: {
      monday: ["10:00", "13:00", "15:30"],
      wednesday: ["09:00", "12:30", "16:00"],
      friday: ["10:30", "14:00", "17:00"],
    },
  },
  {
    slug: "dr-yousef-al-ali",
    name: { en: "Dr. Yousef Al-Rashidi", ar: "د. يوسف الراشدي" },
    specialization: { en: "Endodontics", ar: "علاج عصب وجذور الأسنان" },
    bio: {
      en: "Board‑certified endodontist specializing in painless microscopic root canal therapy.",
      ar: "أخصائي علاج جذور الأسنان، متخصّص في سحب العصب وحشو الجذور بدون ألم باستخدام تقنيات المجهر المتقدمة."
    },
    image: "/images/doctors/dr-yousef-al-ali.png",
    schedule: {
      tuesday: ["09:00", "11:00", "14:00"],
      wednesday: ["10:00", "13:00", "15:00"],
      thursday: ["09:00", "12:00", "14:30"],
    },
  },
];
