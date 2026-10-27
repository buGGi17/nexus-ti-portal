import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import AstroPWA from '@vite-pwa/astro';

// https://astro.build/config
export default defineConfig({
  site: 'https://buggi17.github.io',
  base: '/nexus-ti-portal',
  integrations: [
    tailwind(),
    AstroPWA({
      mode: 'production',
      base: '/nexus-ti-portal/',
      scope: '/nexus-ti-portal/',
      registerType: 'autoUpdate',
      manifest: {
        name: 'NEXUS TI - Consultoría TI y Software a Medida',
        short_name: 'NEXUS TI',
        theme_color: '#07090e',
        background_color: '#07090e',
        display: 'standalone',
        orientation: 'portrait',
        start_url: '/nexus-ti-portal/',
        description: 'Servicios de alta especialización: Microservicios, BI & Data Analytics, Desarrollo a Medida, Segregación de Funciones (COBIT) y Mesa de Servicios ITIL.',
        icons: [
          {
            src: '/nexus-ti-portal/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/nexus-ti-portal/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: '/nexus-ti-portal/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      },
      workbox: {
        navigateFallback: '/nexus-ti-portal/',
        globPatterns: ['**/*.{css,js,html,svg,png,ico,txt}']
      },
      devOptions: {
        enabled: true,
        navigateFallbackAllowlist: [/^\//]
      }
    })
  ]
});
