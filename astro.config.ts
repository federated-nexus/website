import { defineConfig, passthroughImageService } from "astro/config"
export default defineConfig({
    trailingSlash: "never",
    build: { format: "directory" },
    image: { service: passthroughImageService() },
})
