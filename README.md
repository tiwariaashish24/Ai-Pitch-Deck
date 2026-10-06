This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Inngest background tasks

Installing the `inngest` package does not generate the integration files. This project has a sample function in `lib/inngest-functions.ts` and registers it at `/api/inngest`.

Run the Next.js app and the Inngest development server in separate terminals. In PowerShell:

```bash
$env:INNGEST_DEV = "1"
pnpm dev
```

```bash
pnpm dlx inngest-cli@latest dev
```

On macOS or Linux, start Next.js with `INNGEST_DEV=1 pnpm dev`. With both servers running, queue the example task:

```bash
curl -X POST http://localhost:3000/api/background
```

The request returns `202 Accepted`; the task runs asynchronously and its log appears in the Next.js terminal. Replace the sample function body and event data with the work your application needs to perform. Protect the example trigger endpoint with your application's authentication before using it in production.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
