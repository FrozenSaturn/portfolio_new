tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                serif: ['"Playfair Display"', 'serif'],
                mono: ['"Space Mono"', 'monospace'],
            },
            colors: {
                news: {
                    paper: '#f7f1dc', // Warm newsprint yellow
                    ink: '#1a1a1a',   // Deep black
                    accent: '#c0392b', // Editorial red
                    line: '#2c3e50',  // Dark grey for lines
                    subtle: '#e5e0d8' // Slightly darker paper for backgrounds
                },
                term: {
                    bg: '#050505',
                    text: '#39ff14',  // Classic terminal green
                    dim: '#2d5e2e',
                    accent: '#0ff', // Cyan for accents
                    warn: '#ff3333'
                }
            },
            boxShadow: {
                'news': '5px 5px 0px 0px rgba(0,0,0,1)',
                'hover': '8px 8px 0px 0px rgba(0,0,0,1)',
                'glow': '0 0 10px #39ff14, 0 0 20px #39ff14',
            }
        }
    }
}
