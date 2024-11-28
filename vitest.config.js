// vitest.config.js
import { defineConfig } from 'vitest/config'

export default defineConfig({
    test: {
        globals: true, // Use global variables like `describe` and `it` without importing them
        environment: 'node', // Default environment, can be changed to 'happy-dom' or 'jsdom' for DOM tests
        coverage: {
            reporter: ['text', 'html'], // Coverage report formats
        },
    },
})
