import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    allowedHosts: 'fha-accountants.onrender.com'
  },
  assetsInclude:['**/*.PNG'],
  server:{
    host:true,
    strictPort:true,
    port:8000
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  }
});
