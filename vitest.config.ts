// import { defineConfig } from 'vite'
import { defineConfig } from "vitest/config";

export default defineConfig({
    root: ".",
    test: {
        include: ["./Problems/**/*.ts"],
    },
});
