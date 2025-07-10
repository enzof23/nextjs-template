// import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { eq } from "drizzle-orm";
import { usersTable } from "./schema";

const DB_URL = process.env.DATABASE_URL;

if (!DB_URL) {
  throw new Error("DATABASE_URL environment variable is not set");
}

const db = drizzle(DB_URL);

async function main() {
  const user: typeof usersTable.$inferInsert = {
    name: "John",
    age: 30,
    email: "john@example.com",
  };
  await db.insert(usersTable).values(user);
  console.log("New user created!");
  const users = await db.select().from(usersTable);
  console.log("Getting all users from the database: ", users);
  /*
  const users: {
    id: number;
    name: string;
    age: number;
    email: string;
  }[]
  */
  await db
    .update(usersTable)
    .set({
      age: 31,
    })
    .where(eq(usersTable.email, user.email));
  console.log("User info updated!");
  await db.delete(usersTable).where(eq(usersTable.email, user.email));
  console.log("User deleted!");
}
main();

/** For synchronous connection using Neon **/

// const sql = neon(DB_URL);
// const db = drizzle({ client: sql })

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
