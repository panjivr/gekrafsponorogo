import { PrismaClient } from "@prisma/client";

/**
 * Prisma is the schema source of truth / migration tool (see prisma/schema.prisma).
 * Runtime reads use the Supabase JS client (serverless-friendly on Vercel), but
 * this singleton is available for any server-side ORM usage you add later.
 */
const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({ log: process.env.NODE_ENV === "development" ? ["error", "warn"] : ["error"] });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
