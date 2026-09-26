import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig(({ mode }) => {
  const isStandalone = mode === 'standalone'

  return {
    plugins: [react()],
    define: {
      'process.env.NODE_ENV': '"production"',
    },
    build: {
      emptyOutDir: !isStandalone,
      lib: isStandalone
        ? {
            entry: resolve(__dirname, 'src/main.tsx'),
            name: 'CheckoutWidget',
            fileName: () => 'checkout-widget.umd.js',
            formats: ['umd'],
          }
        : {
            entry: resolve(__dirname, 'src/main.tsx'),
            name: 'CheckoutWidget',
            fileName: () => 'checkout-widget.es.js',
            formats: ['es'],
          },
      rollupOptions: {
        external: isStandalone
          ? []
          : [
              'react',
              'react-dom',
              'react-dom/client',
              'react/jsx-runtime',
            ],
        output: {
          exports: 'named',
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
            'react-dom/client': 'ReactDOM',
            'react/jsx-runtime': 'jsxRuntime',
          },
        },
      },
      cssCodeSplit: false,
    },
  }
})