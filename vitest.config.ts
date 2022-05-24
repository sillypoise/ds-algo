// import { defineConfig } from 'vite'
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["./Problems/**/*.ts"],
  },
});
