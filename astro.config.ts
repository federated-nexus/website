import { defineConfig, passthroughImageService } from "astro/config"
import starlight from "@astrojs/starlight"

export default defineConfig({
    trailingSlash: "never",
    build: { format: "directory" },
    integrations: [
        starlight({
            title: "Federated Nexus",
            description:
                "Federated Nexus is a community resource hosting multiple FOSS (especially federated) services, including Matrix and Forgejo.",
            favicon: "/images/icon.svg",
            logo: {
                src: "./src/images/icon.svg",
            },
            social: [
                {
                    icon: "seti:git",
                    label: "Git",
                    href: "https://git.federated.nexus",
                },
                {
                    icon: "mastodon",
                    label: "Mastodon",
                    href: "https://wetdry.world/@QuadRadical",
                },
            ],
            sidebar: [
                { slug: "index" },
                {
                    label: "Services",
                    translations: {
                        "ru-RU": "Услуги",
                        "uk-UA": "Послуги",
                    },
                    autogenerate: { directory: "services" },
                },
                { slug: "code" },
                { slug: "donate" },
            ],

            defaultLocale: "root",
            locales: {
                root: {
                    label: "English",
                    lang: "en",
                },

                "fr-fr": {
                    label: "Français",
                    lang: "fr-FR",
                },

                "uk-ua": {
                    label: "Українська",
                    lang: "uk-UA",
                },

                "ru-ru": {
                    label: "Русский",
                    lang: "ru-RU",
                },
            },
        }),
    ],
    image: { service: passthroughImageService() },
})
