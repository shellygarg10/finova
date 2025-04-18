import { PrismaClient } from "@prisma/client";

// Using a global variable to avoid creating multiple instances
const globalForPrisma = globalThis;

export const db = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = db;
}
