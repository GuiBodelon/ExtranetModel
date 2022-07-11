// vite.config.ts
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'

export default defineConfig({
    plugins: [
        vue({
            template: { transformAssetUrls }
        }),
        quasar({
            sassVariables: 'src/quasar-variables.sass'
        })
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "/src"),
        },
    },
    define: {
        "process.env": {},
    },
});