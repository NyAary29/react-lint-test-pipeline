import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/react-lint-test-pipeline/',
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
  },
})