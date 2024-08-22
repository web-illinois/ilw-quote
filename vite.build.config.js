import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
    root: "src",
    build: {
        outDir: "../dist",
        lib: {
            name: "ilw-quote",
            entry: "ilw-quote.js",
            fileName: "ilw-quote",
            formats: ["es", "cjs", "umd"],
        },
        rollupOptions: {
            output: {
                assetFileNames: (chunkInfo) => {
                    if (chunkInfo.name === "style.css") return "ilw-quote.css";
                },
            },
        },
    },
    server: {
        hmr: false,
    },
});
