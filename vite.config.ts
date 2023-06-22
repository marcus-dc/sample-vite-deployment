import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://marcus-dc.github.io/sample-vite-deployment/',
  plugins: [react()],
});
