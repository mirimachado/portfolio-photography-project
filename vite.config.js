import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/portfolio-photography-project/', // 🛑 Coloque o nome exato do repositório aqui
});
