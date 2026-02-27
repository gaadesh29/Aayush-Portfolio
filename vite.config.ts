import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // <-- This must be here
import path from 'path'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // <-- And this must be here
  ],
  resolve: {
    alias: {
      'figma:asset': path.resolve(__dirname, './src/assets'),
      '@': path.resolve(__dirname, './src'),
    },
  },
})
