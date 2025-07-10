import { neon } from "@neondatabase/serverless";

const DB_URL = process.env.DATABASE_URL;

if (!DB_URL) {
  throw new Error("DATABASE_URL environment variable is not set");
}

const sql = neon(DB_URL);

/* Get Data from a Server Component at runtime */

/**
 * export async function getData() {
 * const response = await sql`SELECT version()`;
 * return response[0].version;
 * }
 **/

/* Data mutation from a Server Action */

/**
 * async function create(formData: FormData) {
 * "use server";
 * await sql`CREATE TABLE IF NOT EXISTS comments (comment TEXT)`;
 * const comment = formData.get("comment");
 * await sql("INSERT INTO comments (comment) VALUES ($1)", [comment]);
 * }
 **/

/* Data mutation from a Serverless Function */

/**
 * export default async function handler(req, res) {
 * const response = await sql`SELECT version()`;
 * const { version } = response[0];
 * res.status(200).json({ version });
 * }
 **/

/* Data mutation from an Edge Function */

/**
 * export config = {
 *   runtime: "edge",
 * }
 *
 * export default async function handler(req, res) {
 * const response = await sql`SELECT version()`;
 * const { version } = response[0];
 * res.status(200).json({ version });
 * }
 **/
