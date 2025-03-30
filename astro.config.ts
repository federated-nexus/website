import { defineConfig, passthroughImageService } from "astro/config"
import icon from "astro-icon"

export default defineConfig({
    trailingSlash: "never",
    integrations: [icon()],
    build: { format: "directory" },
    image: { service: passthroughImageService() },
})
