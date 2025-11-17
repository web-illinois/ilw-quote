import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
    root: "src",
    build: {
        outDir: "../dist/cdn",
        lib: {
            name: "ilw-quote",
            entry: "ilw-quote.ts",
            fileName: "ilw-quote",
            formats: ["es"],
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
