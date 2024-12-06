import VueRouter from "unplugin-vue-router/vite";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";

export default defineConfig({
  plugins: [
    VueRouter({
      logs: true,
      routesFolder: [
        {
          src: "src/pages",
        },
      ],
      extensions: ['.vue'],
      filePatterns: ['**/*'],
      dts: './typed-router.d.ts',
    }),
    vue(),
    AutoImport({
      imports: ["vue"],
      dts: true,
    }),
    Components({
      dirs: ["src/components", "src/pages"],
      dts: true,
    }),
  ],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  optimizeDeps: {
    include: ["vue", "vue-router"],
  },
});
