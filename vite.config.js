import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// base: './' => relative asset paths, so the site works both at
// https://user.github.io/ and at https://user.github.io/repo-name/
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
})
