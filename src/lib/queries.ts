import { getSupabase } from "./supabase";
import { seedNews, seedEvents, seedMembers } from "./seed-data";
import type { News, EventItem, Member } from "./types";

/**
 * Data access layer. Reads from Supabase when configured; otherwise falls back
 * to the built-in seed data so every page renders without a database.
 */

export async function getNews(limit?: number): Promise<News[]> {
  const sb = getSupabase();
  if (sb) {
    const { data, error } = await sb
      .from("news")
      .select("*")
      .order("published_at", { ascending: false })
      .limit(limit ?? 100);
    if (!error && data && data.length) return data as News[];
  }
  return limit ? seedNews.slice(0, limit) : seedNews;
}

export async function getNewsBySlug(slug: string): Promise<News | null> {
  const sb = getSupabase();
  if (sb) {
    const { data } = await sb.from("news").select("*").eq("slug", slug).maybeSingle();
    if (data) return data as News;
  }
  return seedNews.find((n) => n.slug === slug) ?? null;
}

export async function getEvents(limit?: number): Promise<EventItem[]> {
  const sb = getSupabase();
  if (sb) {
    const { data, error } = await sb
      .from("events")
      .select("*")
      .order("starts_at", { ascending: true })
      .limit(limit ?? 100);
    if (!error && data && data.length) return data as EventItem[];
  }
  return limit ? seedEvents.slice(0, limit) : seedEvents;
}

export async function getMembers(limit?: number): Promise<Member[]> {
  const sb = getSupabase();
  if (sb) {
    const { data, error } = await sb
      .from("members")
      .select("*")
      .eq("status", "approved")
      .limit(limit ?? 100);
    if (!error && data && data.length) return data as Member[];
  }
  return limit ? seedMembers.slice(0, limit) : seedMembers;
}
