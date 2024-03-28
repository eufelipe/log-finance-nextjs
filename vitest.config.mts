import { defineConfig } from "vitest/config";

import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    environment: "jsdom",
    includeSource: ["src/**/*.{ts,tsx}"],
    coverage: {
      provider: "istanbul", // or 'v8'
      exclude: [
        "*.js",
        "tailwind.config.ts",
        "**/tests/**",
        "**/app/**",
        "**/.next/**",
        "node_modules/**",
      ],
    },
  },
});
