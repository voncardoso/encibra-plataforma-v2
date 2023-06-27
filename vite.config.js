import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss';
import { VitePWA} from "vite-plugin-pwa";

const manifestForPlugin = {
	registerType: "prompt",
	includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.svg"],
	manifest: {
    theme_color: "#E2942F",
    background_color: "#F4F3F1",
    display: "standalone",
    scope: "/",
    start_url: "/",
    name: "Encibra App",
    short_name: "Encibra",
    description: "Gerador de relat\u00f3rio ",
    icons: [
        {
            src: "/icon-192x192.png",
            sizes: "192x192",
            type: "image/png"
        },
        {
            src: "/icon-256x256.png",
            size: "256x256",
            type: "image/png"
        },
        {
            src: "/icon-384x384.png",
            sizes: "384x384",
            type: "image/png"
        },
        {
            src: "/icon-512x512.png",
            sizes: "512x512",
            type: "image/png"
        }
    ]
},
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss('./tailwind.config.js'),
    VitePWA(manifestForPlugin),
  ],
})


