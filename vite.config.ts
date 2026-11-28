import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'

// Your Cloudflare Web Analytics token (Web Analytics > Manage site in the dashboard).
// It isn't a secret: it ends up in the page's HTML anyway, and Cloudflare only accepts
// it from tancheeyang.com. While it's empty, no analytics script is added.
const CF_WEB_ANALYTICS_TOKEN = 'dc6a2f7e269d4c53b40e821e33cb2f0c'

// A tiny Vite plugin. During `npm run build` it adds Cloudflare's analytics script
// just before </body>. `npm run dev` skips it, so working locally never counts as a visit.
function cloudflareWebAnalytics(token: string): Plugin {
  return {
    name: 'cloudflare-web-analytics',
    apply: 'build',
    transformIndexHtml(html: string) {
      if (!token) return html
      const script = `<script type="module" src="https://static.cloudflareinsights.com/beacon.min.js" data-cf-beacon='{"token": "${token}"}'></script>`
      return html.replace('</body>', `  ${script}\n  </body>`)
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), cloudflareWebAnalytics(CF_WEB_ANALYTICS_TOKEN)],
})
