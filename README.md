## Trust Review (TR) is pre-installed — just add your API key

Add `TRUSTMODEL_API_KEY` to your repository secrets (Settings → Secrets → Actions).
Every pull request and push to main will automatically receive a TrustScore.

Get a free API key at [trustmodel.ai/developers](https://trustmodel.ai/developers).

---

## Next.js AI Agent Starter

A minimal Next.js 15 chat agent using the [Vercel AI SDK](https://sdk.vercel.ai) with streaming responses. Use this as a starting point for any AI-powered Next.js application.

### Stack

- [Next.js 15](https://nextjs.org) with App Router
- [Vercel AI SDK](https://sdk.vercel.ai) — `useChat` hook + `streamText`
- [OpenAI GPT-4o-mini](https://platform.openai.com) (swap any supported model)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Trust Review](https://trustmodel.ai) — automated AI trust scoring on every PR

### Getting started

```bash
cp .env.example .env.local
# Add OPENAI_API_KEY to .env.local
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Trust Review configuration

Edit `.trustmodel.yml` to adjust the trust threshold or switch between advisory and gate modes.

```yaml
threshold: 70   # 0-100 TrustScore required to pass
mode: advisory  # advisory | gate
```

Docs: [trustmodel.ai/developers](https://trustmodel.ai/developers)
