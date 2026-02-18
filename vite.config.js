import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    base: './', // Ensures assets are linked relatively (good for GitHub Pages etc.)
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                newspaper: resolve(__dirname, 'newspaper.html'),
                coder: resolve(__dirname, 'coder.html'),
            },
        },
    },
});
