import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig(() => {
  // Determine the base path for deployment:
  // - GitHub Pages project repository: '/ANAS-MAHMUD/'
  // - Custom domain / Firebase Hosting / Local development: '/'
  const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';
  const isCustomDomain = process.env.CUSTOM_DOMAIN === 'true' || process.env.VITE_CUSTOM_DOMAIN === 'true';
  const customBase = process.env.BASE_PATH || process.env.VITE_BASE_PATH;

  const base = customBase || (isGitHubActions && !isCustomDomain ? '/ANAS-MAHMUD/' : '/');

  return {
    base,
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
