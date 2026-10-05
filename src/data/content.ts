import { BookOpen, HeartPulse, Medal, TreePine, type LucideIcon } from 'lucide-react';

// Facts, links and tagline come from tis.edu.in; supporting wording is paraphrased.

export interface NavLink {
  label: string;
  href: string;
}

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const SITE = { name: 'Tulas International School' };

export const links = {
  apply: 'https://admission.tis.edu.in',
  tour: 'https://tis.edu.in/virtual-tour/',
  brochure: 'https://tis.edu.in/MandatoryPDF/TIS_BROCHURE.pdf',
  phone: '+919837983791',
  phoneLabel: '+91-98379 83791',
};

export const navLinks: NavLink[] = [
  { label: 'About TIS', href: '#about' },
  { label: 'Boarding Life', href: '#campus' },
  { label: 'Admission', href: '#admissions' },
];

export const hero = {
  eyebrow: 'Boarding and day school excellence · Dehradun, India',
  headline: "Let's do it with Tulas",
  sub: 'A CBSE school for Classes 4 to 12, where academic excellence, holistic development and a nurturing campus prepare students to become global leaders.',
};

export const stats = [
  { value: '22', label: 'Acre pollution-free campus' },
  { value: '16+', label: 'Olympic sports' },
  { value: '24×7', label: 'Medical assistance' },
  { value: '6:1', label: 'Student to teacher ratio' },
];

export const about = {
  title: 'Seamless opportunities to grow',
  body: 'Tulas International School was established in 2012 under the aegis of Rishabh Educational Trust to impart education through seamless opportunities. On a welcoming Dehradun campus, learning extends well beyond the classroom.',
};

export const features: Feature[] = [
  { icon: BookOpen, title: 'Academics', description: 'A CBSE curriculum taught in small groups, so every student gets real attention.' },
  { icon: TreePine, title: 'Boarding life', description: 'A green residential campus where students live, learn and unwind together.' },
  { icon: Medal, title: 'Sport', description: 'From archery and shooting to swimming and horse riding, coached for discipline and joy.' },
  { icon: HeartPulse, title: 'Care', description: 'Round-the-clock medical support and a team that looks after every child.' },
];

export const cta = {
  title: 'Start your Tulas journey',
  body: 'Admissions are open for Classes 4 to 12. Apply online, call the helpline or download the brochure to plan your visit.',
};
