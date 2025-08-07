import Lara from '@primeuix/themes/lara';
import { definePreset } from '@primeuix/themes';

// Using the Tailwind CSS color palette
// @source: https://primevue.org/theming/styled/
const LaraMountainMeadow = definePreset(Lara, {
  semantic: {
    colorScheme: {
      primary: {
          0: '{teal.0}',
         50: '{teal.50}',
        100: '{teal.100}',
        200: '{teal.200}',
        300: '{teal.300}',
        400: '{teal.400}',
        500: '{teal.500}',
        600: '{teal.600}',
        700: '{teal.700}',
        800: '{teal.800}',
        900: '{teal.900}',
        950: '{teal.950}'
      },
    }
  }
});

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  devServer: {
    host: '0',
  },

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@vite-pwa/nuxt',
    "@primevue/nuxt-module",
    "@nuxtjs/tailwindcss",
  ],

  ssr: false,

  primevue: {
    options: {
      theme: {
        preset: LaraMountainMeadow,
        options: {
          prefix: 'p',
          darkModeSelector: '.dark-mode',
          cssLayer: false
        }
      }
    }
  },

  pwa: {
    registerType: 'autoUpdate',
    workbox: {
      navigateFallback: '/',
      globPatterns: ['**/*.{js,css,html,png,svg,ico}']
    },
    devOptions: {
      enabled: true,
      suppressWarnings: true,
      navigateFallbackAllowlist: [/^\/$/],
      type: 'module'
    },
    client: {
      installPrompt: true,
      periodicSyncForUpdates: 20
    },
    manifest: {
      name: "Nuxt4 PWA",
      short_name: "Nuxt4 PWA",
      description: "Testing Nuxt4 PWA",
      theme_color: "#10B981",
      background_color: "#ffffff",
      display: "standalone",
      orientation: "portrait",
      scope: "/",
      start_url: "/",
      id: "/",
      icons: [
        {
          src: "icons/nuxt-512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "icons/nuxt-144.png",
          sizes: "144x144",
          type: "image/png"
        },
        {
          src: "icons/nuxt-96.png",
          sizes: "96x96",
          type: "image/png"
        },
        {
          src: "icons/nuxt-64.png",
          sizes: "64x64",
          type: "image/png"
        }
      ]
    },
  },

  vite: {
    // Better support for Tauri CLI output
    clearScreen: false,
    // Enable environment variables
    // Additional environment variables can be found at
    // https://v2.tauri.app/reference/environment-variables/
    envPrefix: ['VITE_', 'TAURI_'],
    server: {
      // Tauri requires a consistent port
      strictPort: true,
    },
  },
  // Avoids error [unhandledRejection] EMFILE: too many open files, watch
  ignore: ['**/src-tauri/**'],
})