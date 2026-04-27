import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  cloudflare: false,
  tanstackStart: {
    prerender: {
      enabled: true,
      crawlLinks: true,
      retryCount: 2,
    },
    pages: [
      { path: "/", prerender: { enabled: true } },
      { path: "/leistungen", prerender: { enabled: true } },
      { path: "/referenzen", prerender: { enabled: true } },
      { path: "/news", prerender: { enabled: true } },
      { path: "/kontakt", prerender: { enabled: true } },
      { path: "/impressum", prerender: { enabled: true } },
      { path: "/datenschutz", prerender: { enabled: true } },
    ],
  },
});
