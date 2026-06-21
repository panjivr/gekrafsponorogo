import { cookies } from "next/headers";
import { createHash } from "crypto";

/**
 * Minimal admin gate for the registrations panel.
 * Set ADMIN_PASSWORD in the environment to enable /admin.
 * The session cookie stores a salted hash of the password (not the password),
 * so it can't be forged without knowing ADMIN_PASSWORD.
 */
export const ADMIN_COOKIE = "gk_admin";

export function adminConfigured(): boolean {
  return Boolean(process.env.ADMIN_PASSWORD);
}

export function expectedToken(): string {
  const pw = process.env.ADMIN_PASSWORD ?? "";
  return createHash("sha256").update(`${pw}::gekrafs-ponorogo-admin`).digest("hex");
}

export async function isAdmin(): Promise<boolean> {
  if (!adminConfigured()) return false;
  const store = await cookies();
  return store.get(ADMIN_COOKIE)?.value === expectedToken();
}
