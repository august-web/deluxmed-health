# Production Deployment Migration: Vercel → Custom Domain

## Objective
- Migrate https://deluxmed-health.vercel.app/ to a production-ready deployment under the custom domain https://deluxmed.com with SSL, CI/CD, DNS, SEO, and verification.

## 1) DNS Configuration
- Apex domain (deluxmed.com): Create A record → 76.76.21.21
- Subdomain (www.deluxmed.com): Create CNAME → cname.vercel-dns.com
- Optional verification TXT record: Provided by Vercel when adding the domain (copy exact value into registrar)
- Propagation: Typically within minutes; allow up to 24–48 hours

## 2) Vercel Project Configuration
- Add domain deluxmed.com in Vercel → Project → Settings → Domains
- Configure Production branch: main
- Build settings:
  - Build Command: npm run build
  - Output Directory: dist
- vercel.json (at repo root):
  - Rewrites for SPA routing to /index.html
  - Security headers (HSTS, Referrer-Policy, X-Content-Type-Options)
  - Permanent redirects from demo host to custom domain

## 3) SSL Certificates
- Vercel provisions SSL automatically after domain DNS is valid
- Enforce HTTPS via HSTS header in vercel.json
- Verify certificate:
  - Open https://deluxmed.com in browser → lock icon
  - CLI: `curl -I https://deluxmed.com`

## 4) Production Environment Variables
- Use Vercel → Project → Settings → Environment Variables
- Frontend variables must be prefixed with VITE_ to be exposed (Vite convention)
- Example keys:
  - VITE_SITE_URL=https://deluxmed.com
  - VITE_API_BASE_URL=[your API URL if applicable]
  - VITE_ANALYTICS_ID=[analytics key]
- Do not store secrets needed only server-side in the frontend; use serverless functions or backend
- Reference: .env.example added to repo for structure

## 5) Functionality Testing on Custom Domain
- Smoke test core flows:
  - Pages render: /, /primary-care-baltimore, /behavioral-health-baltimore, /telehealth-maryland, /doreen-ackom-owusu-nurse-practitioner, /blog, /contact, /insurance-payment, /privacy-policy
  - Client-side routing works on deep links and refresh
  - Assets load (favicon, logo, images, CSS, JS)
  - SEO resources: /sitemap.xml and /robots.txt
- If APIs exist:
  - Auth endpoints return valid responses over HTTPS
  - Database connections succeed
  - File uploads work with correct CORS and size limits
  - Third-party integrations (analytics, forms, etc.) function

## 6) Automated Deployment Pipelines
- Vercel Git integration:
  - Connect GitHub → set production to main branch
- GitHub Actions (added):
  - Workflow at .github/workflows/vercel-deploy.yml
  - Requires secrets: VERCEL_TOKEN, VERCEL_ORG_ID, VERCEL_PROJECT_ID
  - Builds and deploys on pushes to main

## 7) Domain Verification
- DNS resolution: `nslookup deluxmed.com` and `nslookup www.deluxmed.com` → should resolve to Vercel
- HTTPS check: `curl -I https://deluxmed.com` → 200 and valid certificate
- Routing:
  - SPA routes respond with app content (200) instead of 404
  - Demo host redirects: https://deluxmed-health.vercel.app/... → https://deluxmed.com/...

## 8) Sitemap & Robots Update
- Sitemap: public/sitemap.xml includes all app URLs with the https://deluxmed.com base
- Robots: public/robots.txt references `Sitemap: https://deluxmed.com/sitemap.xml`
- After deployment:
  - Verify reachable at https://deluxmed.com/sitemap.xml and https://deluxmed.com/robots.txt
  - Submit sitemap in Google Search Console and Bing Webmaster Tools

## 9) SEO Redirects
- vercel.json redirects permanently (301) from demo host to custom domain
- Also normalize www → apex:
  - Redirects include rule for www.deluxmed.com → deluxmed.com
- Preserve ranking and consolidate canonical domain

## 10) Documentation, Rollback, Monitoring, Checklist
- Rollback procedures:
  - Revert to previous commit and redeploy in Vercel
  - Temporarily remove custom domain in Project Settings or point DNS back if needed
  - Disable GitHub Actions workflow if necessary
- Monitoring:
  - Enable Vercel Analytics
  - Add uptime checks (e.g., UptimeRobot, Healthchecks) for homepage and key routes
  - Track error logs via browser console monitoring or Sentry (if added)
- Post-deployment verification checklist:
  - [ ] DNS A and CNAME records resolve correctly
  - [ ] HTTPS valid and enforced
  - [ ] SPA routing works on deep links
  - [ ] Assets load without mixed content warnings
  - [ ] Sitemap and robots accessible and correct
  - [ ] Demo host redirects to custom domain
  - [ ] CI/CD triggers on main branch
  - [ ] Analytics tracking live (if configured)
  - [ ] Search Console updated with new domain and sitemap
