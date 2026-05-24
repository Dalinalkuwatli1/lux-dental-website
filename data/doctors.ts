export type Doctor = {
  slug: string;
  name: string;
  specialization: string;
  bio: string;
  image: string;
  schedule: Record<string, string[]>; // day -> array of time slots (HH:mm)
};

export const doctors: Doctor[] = [
  {
    slug: "dr-jane-smith",
    name: "Dr. Jane Smith",
    specialization: "Orthodontics",
    bio: "15 years of experience transforming smiles with state‑of‑the‑art braces and aligners.",
    image: "https://images.unsplash.com/photo-1594824813573-246434de83fb?auto=format&fit=crop&w=800&q=80",
    schedule: {
      monday: ["09:00", "10:30", "14:00"],
      tuesday: ["11:00", "13:30", "15:00"],
      wednesday: ["09:30", "12:00", "16:00"],
    },
  },
  {
    slug: "dr-alex-lee",
    name: "Dr. Alex Lee",
    specialization: "Implant Dentistry",
    bio: "Board‑certified implant specialist known for precision and patient comfort.",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80",
    schedule: {
      thursday: ["08:00", "10:00", "14:30"],
      friday: ["09:00", "11:30", "15:00"],
    },
  },
  {
    slug: "dr-maria-garcia",
    name: "Dr. Maria García",
    specialization: "Cosmetic Dentistry",
    bio: "Passionate about creating flawless smiles through veneers and whitening.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80",
    schedule: {
      monday: ["10:00", "13:00", "15:30"],
      wednesday: ["09:00", "12:30", "16:00"],
      friday: ["10:30", "14:00", "17:00"],
    },
  },
];
