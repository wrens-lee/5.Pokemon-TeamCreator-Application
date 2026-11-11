import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
//server proxy sends any request to /api to localhost:3000 that is running our express backend
export default defineConfig({
  plugins: [react()],
  server:{
    proxy:{
      "/api": "http://localhost:3000",
    },
  },
});

//requires 2 terminals to run at the same time
//1. node app.js (express server)
//2. npm run dev (React frontend)
