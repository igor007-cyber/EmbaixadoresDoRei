import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Na Vercel o app roda na raiz do dominio; no GitHub Pages roda sob /EmbaixadoresDoRei/.
  base: process.env.VERCEL ? '/' : '/EmbaixadoresDoRei/',
})
