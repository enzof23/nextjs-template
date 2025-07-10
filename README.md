# First steps:

- Clone the repository
- Install dependencies
- Set up environment variables following .env.example

## Clerk

- Create a custom sign-in or sign-up page: https://clerk.com/docs/references/nextjs/custom-sign-in-or-up-page

- Add custom onboarding to sign-up (collect additional information): https://clerk.com/docs/references/nextjs/add-onboarding-flow

- Protect specific routes: https://clerk.com/docs/references/nextjs/clerk-middleware

- Read user and session data: https://clerk.com/docs/references/nextjs/read-session-data

- Next.js SDK Reference: https://clerk.com/docs/references/nextjs/overview

- Deploy to production: https://clerk.com/docs/deployments/overview

## Neon

- Neon Documentation: https://neon.com/docs/guides/nextjs

- Connect Neon from Drizzle: https://neon.com/docs/guides/drizzle

# Note:

With the neon-http and neon-websockets drivers, you can access a Neon database from serverless environments over HTTP or WebSockets instead of TCP. Querying over HTTP is faster for single, non-interactive transactions.

If you need session or interactive transaction support, or a fully compatible drop-in replacement for the pg driver, you can use the WebSocket-based neon-serverless driver. You can connect to a Neon database directly using Postgres

## Drizzle

- Apply changes to the database using "drizzle-kit push" command.
