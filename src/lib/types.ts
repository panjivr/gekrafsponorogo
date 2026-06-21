export type News = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  cover_color: string; // hex used for the cover gradient
  author: string;
  published_at: string; // ISO date
};

export type EventItem = {
  id: string;
  slug: string;
  title: string;
  description: string;
  location: string;
  starts_at: string; // ISO date
  subsector: string;
  status: "upcoming" | "past";
  accent: string; // hex
};

export type Member = {
  id: string;
  name: string;
  subsector: string;
  role: string;
  district: string;
  initials: string;
};

export type RegistrationInput = {
  name: string;
  email: string;
  phone: string;
  subsector: string;
  district: string;
  message?: string;
};
