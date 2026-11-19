import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// base: './' => chemins relatifs : le site fonctionne aussi bien sur
// https://pseudo.github.io/ que sur https://pseudo.github.io/nom-du-repo/
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
})
