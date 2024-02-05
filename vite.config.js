import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { djangoVitePlugin } from 'django-vite-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    djangoVitePlugin([
      'pm_app/js/main.js', // colocar os códigos para serem compilados
      'pm_app/css/style.css',
  ])],
})



