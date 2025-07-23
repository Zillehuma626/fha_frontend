import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    allowedHosts: [
      'fha-accountants.onrender.com', // Your Render host
      'localhost',
      'fhaaccountants.co.uk',
      'www.fhaaccountants.co.uk',
    ],
    strictPort: true,
    host: '0.0.0.0', 
    port:8000,
  },
  assetsInclude:['**/*.PNG'],
  server:{
    host:true,
    strictPort:true,
    port:8000,
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  }
});
