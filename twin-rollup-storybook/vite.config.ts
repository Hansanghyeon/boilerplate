import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
/** @type {import('vite').defineConfig} */

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          [
            'twin',
            {
              exclude: [
                '\x00commonjsHelpers.js', // Avoid build error
              ],
            },
          ],
          'macros',
          '@emotion/babel-plugin',
        ],
      },
    }),
    tsconfigPaths(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  define: {
    'process.env': {},
  },
})
