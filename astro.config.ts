import { defineConfig, passthroughImageService } from "astro/config"
import starlight from "@astrojs/starlight"

const logo = "./src/images/icon.svg"

export default defineConfig({
    trailingSlash: "never",
    build: { format: "directory" },
    integrations: [
        starlight({
            title: "Federated Nexus",
            description:
                "Federated Nexus is a community resource hosting multiple FOSS (especially federated) services, including Matrix and Forgejo.",
            favicon: logo,
            logo: {
                src: logo,
            },
            social: [
                {
                    icon: "seti:git",
                    label: "Source Code",
                    href: "https://git.federated.nexus",
                },
                {
                    icon: "mastodon",
                    label: "Mastodon",
                    href: "https://wetdry.world/@QuadRadical",
                },
            ],
        }),
    ],
    image: { service: passthroughImageService() },
})
