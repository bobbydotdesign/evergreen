---
description: Deploy to Vercel and set up feedback collection. Use when the user wants to deploy, ship, publish, or collect user feedback.
---

### Deploy to Vercel

1. **Check prerequisites**:
   - Verify `vercel` CLI is available (`npx vercel --version`)
   - Check for a `vercel.json` — create one if missing with sensible defaults
   - Ensure the project builds cleanly (`npm run build`)

2. **Deploy**:
   - For preview: `npx vercel` (creates a preview deployment)
   - For production: `npx vercel --prod`
   - Display the deployment URL when done

3. **If first deploy**:
   - Guide through `npx vercel link` to connect to a Vercel project
   - Suggest setting up environment variables if `.env.example` exists

### Feedback Setup

When the user wants feedback capture, offer these options:

**Quick option — Feedback widget**:
Create a simple feedback button/form component at `src/components/feedback.tsx`:
- Floating button in bottom-right corner
- Opens a small form: text input + sentiment (positive/neutral/negative)
- Stores submissions (suggest Vercel KV, a simple API route, or external service)
- Can be toggled on/off via environment variable

**Structured option — Feedback page**:
Create a dedicated `/feedback` route:
- Rate overall experience
- Comment on specific features
- Optional contact info
- Thank you state after submission

### After Deploying
- Share the live URL
- Suggest sharing with testers
- Offer to set up a custom domain via Vercel
- Remind about Vercel Analytics for usage data

### vercel.json defaults
```json
{
  "framework": "nextjs"
}
```
