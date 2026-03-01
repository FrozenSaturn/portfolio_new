import { defineConfig } from 'vite';
import { resolve } from 'path';
import fs from 'fs';

export default defineConfig({
    base: './', // Ensures assets are linked relatively (good for GitHub Pages etc.)
    plugins: [
        {
            name: 'dev-404-fallback',
            configureServer(server) {
                server.middlewares.use((req, res, next) => {
                    if (req.headers.accept && req.headers.accept.includes('text/html')) {
                        let cleanUrl = req.url.split('?')[0].split('#')[0];
                        if (cleanUrl.endsWith('/')) {
                            cleanUrl += 'index.html';
                        }
                        const filePath = resolve(__dirname, cleanUrl.slice(1));
                        if (!fs.existsSync(filePath)) {
                            res.statusCode = 404;
                            res.setHeader('Content-Type', 'text/html');
                            const html = fs.readFileSync(resolve(__dirname, '404.html'), 'utf-8');
                            return res.end(html);
                        }
                    }
                    next();
                });
            }
        }
    ],
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                newspaper: resolve(__dirname, 'newspaper/index.html'),
                coder: resolve(__dirname, 'coder/index.html'),
                notFound: resolve(__dirname, '404.html'),
            },
        },
    },
});
