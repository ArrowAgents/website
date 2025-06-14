# Cloudflare Pages Deployment Guide

This project is configured for deployment to Cloudflare Pages as a static Next.js site.

## Prerequisites

1. A GitHub account
2. A Cloudflare account
3. Your code pushed to a GitHub repository

## Local Development & Testing

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build static export
npm run build

# Preview static site locally
npm run preview
```

## Deployment Steps

### 1. Push to GitHub

Make sure your code is pushed to a GitHub repository:

```bash
git add .
git commit -m "Ready for Cloudflare Pages deployment"
git push origin main
```

### 2. Deploy to Cloudflare Pages

1. Log in to the [Cloudflare dashboard](https://dash.cloudflare.com)
2. Select your account
3. Go to **Workers & Pages** > **Create**
4. Select the **Pages** tab
5. Select **Connect to Git**
6. Choose your GitHub repository
7. Select **Begin setup**

### 3. Build Configuration

In the **Build settings** section, use these settings:

| Configuration option | Value |
|---------------------|-------|
| Framework preset | Next.js (Static HTML Export) |
| Production branch | main |
| Build command | `npm run build` |
| Build directory | `out` |

### 4. Deploy

Click **Save and Deploy**. Cloudflare Pages will:
- Install dependencies
- Run the build command
- Deploy your static site
- Provide you with a `*.pages.dev` URL

## Project Configuration

This project is already configured with:

- ✅ `output: 'export'` in `next.config.ts`
- ✅ `trailingSlash: true` for proper routing
- ✅ `images: { unoptimized: true }` for static export
- ✅ Build scripts in `package.json`

## Automatic Deployments

Once connected to GitHub, Cloudflare Pages will automatically:
- Rebuild and deploy on every push to the main branch
- Create preview deployments for pull requests
- Provide deployment status in GitHub

## Custom Domain (Optional)

After deployment, you can add a custom domain:
1. Go to your Pages project in the Cloudflare dashboard
2. Navigate to **Custom domains**
3. Add your domain and follow the DNS setup instructions

## Environment Variables

If you need environment variables:
1. Go to your Pages project settings
2. Navigate to **Environment variables**
3. Add your variables for Production and Preview environments

## Troubleshooting

- Ensure your `next.config.ts` has `output: 'export'`
- Check that the build directory is set to `out`
- Verify all images use the `unoptimized: true` setting
- Make sure no server-side features are used (API routes, etc.) 