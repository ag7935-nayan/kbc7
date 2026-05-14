import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: {
      entry: "server",
    },
  },

  vite: {
    server: {
      host: "0.0.0.0",
      port: 10000,
    },

    preview: {
      host: "0.0.0.0",
      port: 10000,

      allowedHosts: [
        "kbc-main-main.onrender.com",
      ],
    },
  },
});
