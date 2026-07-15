import { defineConfig } from 'vite'
import { devtools } from '@tanstack/devtools-vite'

import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import { nitro } from 'nitro/vite'
import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const config = defineConfig({
  resolve: {
    tsconfigPaths: true,
    alias: {
      '@noble/ciphers/chacha': '@noble/ciphers/chacha.js',
      '@noble/ciphers/utils': '@noble/ciphers/utils.js',
    },
  },
  plugins: [devtools(), tailwindcss(), tanstackStart(), nitro(),  viteReact()],
  optimizeDeps: {
    exclude: ['@noble/ciphers'],
  },

  ssr: {
    noExternal: ['@noble/ciphers'],
  },
})

export default config
