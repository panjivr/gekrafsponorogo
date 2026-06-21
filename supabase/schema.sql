-- GEKRAFS Ponorogo — Supabase schema + RLS.
-- Run in the Supabase SQL editor to provision tables used by the website.

create table if not exists news (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  excerpt text not null,
  content text not null,
  category text not null default 'Berita',
  cover_color text not null default '#00aeef',
  author text not null default 'Tim Media GEKRAFS',
  published_at date not null default current_date
);

create table if not exists events (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  description text not null,
  location text not null,
  subsector text not null default 'Organisasi',
  status text not null default 'upcoming',
  accent text not null default '#00aeef',
  starts_at date not null
);

create table if not exists members (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text unique,
  phone text,
  subsector text not null,
  role text not null default 'Anggota',
  district text not null,
  initials text not null default '',
  status text not null default 'pending',
  message text,
  created_at timestamptz not null default now()
);

-- Enable Row Level Security
alter table news enable row level security;
alter table events enable row level security;
alter table members enable row level security;

-- Public read for published content
create policy "public read news" on news for select using (true);
create policy "public read events" on events for select using (true);
-- Only approved members are publicly readable (directory)
create policy "public read approved members" on members
  for select using (status = 'approved');

-- Anonymous visitors may submit a registration (insert only, always pending)
create policy "anon insert members" on members
  for insert with check (status = 'pending');
