<script setup>
import { useStaticContentStore } from "~/stores/static-content.js";

const config = useRuntimeConfig();
const imageBaseUrl = config.public.imageBaseUrl;
const staticContentStore = useStaticContentStore();
await staticContentStore.loadContent();

useHead({
  script: [
    {
      key: "schema-org-data",
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "@id": "https://www.framecore.se/#organization",
        name: "FrameCore",
        url: "https://www.framecore.se",
        logo: {
          "@type": "ImageObject",
          url: `${imageBaseUrl}/framecore-logo.svg`,
          width: 250,
          height: 60,
        },

        description:
          "FrameCore erbjuder webbutveckling med fokus på moderna teknologier som Vue, Nuxt och Tailwind CSS. Vi bygger snabba, responsiva och sökmotoroptimerade appar och webbplatser.",

        knowsAbout: [
          "Webbutveckling",
          "Vue.js",
          "Nuxt",
          "Tailwind CSS",
          "Node.js",
          "JavaScript",
          "Fullstack-utveckling",
          "SEO",
        ],

        areaServed: {
          "@type": "Country",
          name: "Sverige",
        },

        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Webbutvecklingstjänster",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Webbutveckling",
                description:
                  "Utveckling av moderna, snabba och responsiva webbplatser med Vue, Nuxt och Tailwind CSS.",
                serviceType: "Webbutveckling",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Fullstack-utveckling",
                description:
                  "Helhetslösningar med frontend och backend – från databas till färdig webbapplikation.",
                serviceType: "Fullstack-utveckling",
              },
            },
          ],
        },
      }),
    },
  ],
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
