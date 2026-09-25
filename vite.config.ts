import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.NODE_ENV': '"production"',
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.tsx'),
      name: 'CheckoutWidget',
      fileName: (format) => `checkout-widget.${format}.js`,
      formats: ['umd', 'es']
    },
    rollupOptions: {
      external: [],
      output: {
        exports: 'named',
      }
    },
    cssCodeSplit: false,
  }
})