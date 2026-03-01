import { portfolioData } from '../data/portfolio.js';

/**
 * Renders content based on the current page context
 */
export function renderContent() {
    renderNewspaperContent();
    renderCoderContent();
}

/* =========================================
   NEWSPAPER THEME RENDERERS
   ========================================= */

function renderNewspaperContent() {
    const expContainer = document.getElementById('newspaper-experience');
    const projContainer = document.getElementById('newspaper-projects');
    // const skillsContainer = document.getElementById('newspaper-skills'); // If we want to dynamicize skills too

    if (expContainer) {
        expContainer.innerHTML = portfolioData.experience.map(job => `
            <article class="grid md:grid-cols-[1fr_4fr] gap-8 border-b border-gray-300 pb-8 last:border-b-0">
                <div class="font-mono text-xs border-r border-gray-300 pr-4 text-right md:text-left h-full">
                    <div class="font-bold text-xl mb-1">${job.date}</div>
                    <div class="text-gray-500 mb-2">${job.endDate === 'PRESENT' ? '' : job.endDate}</div>
                    ${job.endDate === 'PRESENT' ?
                `<div class="bg-black text-white inline-block px-3 py-1 mb-2 rounded-full text-[10px] font-bold uppercase tracking-wider leading-none">PRESENT</div>`
                : ''}
                    <div class="text-gray-900 font-bold text-[10px] uppercase tracking-wider">${job.type}</div>
                </div>
                <div>
                    <h4 class="font-serif text-2xl font-bold mb-2 hover:underline decoration-news-accent decoration-2 cursor-pointer">
                        ${job.role} at ${job.company}
                    </h4>
                    <p class="font-serif text-lg font-medium leading-relaxed mb-4 text-justify text-gray-900 border-l-2 border-gray-200 pl-3 md:pl-0 md:border-none">
                        ${job.description}
                    </p>
                    ${job.highlights ? `
                    <ul class="font-mono text-xs space-y-2 text-gray-800 bg-[#e8e4dc] p-4 border-l-4 border-news-accent">
                        ${job.highlights.map(item => `<li class="flex items-start"><span class="font-bold mr-2">&gt;</span>${item}</li>`).join('')}
                    </ul>` : ''}
                    ${job.tech ? `
                    <div class="font-mono text-[10px] uppercase font-bold inline-block border border-black px-2 py-1 mt-2">
                        Tech: ${job.tech}
                    </div>` : ''}
                </div>
            </article>
        `).join('');
    }

    if (projContainer) {
        projContainer.innerHTML = portfolioData.projects.map(proj => `
            <li class="group">
                <div class="block transition-colors">
                    <h5 class="font-serif font-bold text-lg group-hover:underline decoration-news-accent">${proj.title}</h5>
                    <p class="font-mono text-[10px] text-gray-500 mb-1 border-b border-dotted border-gray-400 pb-1">
                        ${proj.tech.join(', ')}</p>
                    <p class="font-serif text-sm leading-snug text-gray-800 mb-2">${proj.desc}</p>
                    <div class="flex gap-4 font-mono text-[10px] uppercase font-bold">
                        ${proj.links.github ? `<a href="${proj.links.github}" target="_blank" class="hover:underline text-news-accent">GitHub Repo</a>` : ''}
                        ${proj.links.live ? `<a href="${proj.links.live}" target="_blank" class="hover:underline text-news-accent">Live Demo</a>` : ''}
                    </div>
                </div>
            </li>
        `).join('');
    }

    // Social links in footer
    const socialContainer = document.querySelector('footer div.font-serif.flex.flex-col');
    if (socialContainer && portfolioData.personal.social) {
        const social = portfolioData.personal.social;
        socialContainer.innerHTML = `
            <span class="font-bold mb-4 text-base border-b border-gray-600 pb-1 w-full md:w-auto">Subscriptions</span>
            ${social.linkedin ? `<a href="${social.linkedin}" target="_blank" class="hover:text-news-accent transition-colors mb-2">LinkedIn Edition</a>` : ''}
            ${social.github ? `<a href="${social.github}" target="_blank" class="hover:text-news-accent transition-colors mb-2">GitHub Repository</a>` : ''}
            ${social.twitter ? `<a href="${social.twitter}" target="_blank" class="hover:text-news-accent transition-colors mb-2">Twitter Feed</a>` : ''}
            <a href="mailto:${portfolioData.personal.email}" class="hover:text-news-accent transition-colors">Letter to the Editor</a>
        `;
    }
}

/* =========================================
   CODER THEME RENDERERS
   ========================================= */

function renderCoderContent() {
    const expContainer = document.getElementById('coder-experience');
    const projContainer = document.getElementById('coder-projects');

    if (expContainer) {
        expContainer.innerHTML = portfolioData.experience.map(job => `
            <div class="group relative pl-8 border-l border-dashed border-gray-700 hover:border-term-text transition-colors">
                <div class="absolute -left-[5px] top-0 w-2.5 h-2.5 bg-term-dim rounded-full group-hover:bg-term-text group-hover:shadow-glow transition-all"></div>
                <div class="flex flex-col sm:flex-row sm:items-baseline gap-4 mb-2">
                    <h3 class="text-2xl font-bold text-white group-hover:text-term-accent transition-colors">
                        ${job.role}
                    </h3>
                    <span class="text-sm text-term-dim font-mono">@ ${job.company} | ${job.fullDate}</span>
                </div>
                <p class="text-gray-400 mb-4 max-w-2xl leading-relaxed">
                    ${job.description}
                </p>
                ${job.coderHighlights ? `
                <div class="bg-[#0a0a0a] p-4 text-xs font-mono text-gray-300 border border-gray-800 rounded">
                    <span class="text-blue-400">const</span> achievements = [<br>
                    ${job.coderHighlights.map(h => `&nbsp;&nbsp;"${h}"`).join(',<br>')}<br>
                    ];
                </div>` : ''}
                ${job.tech ? `
                <div class="flex gap-2 mt-2">
                    ${job.tech.split(', ').map(t => `<span class="border border-gray-700 px-2 py-1 text-xs hover:border-term-text text-gray-500">${t}</span>`).join('')}
                </div>` : ''}
            </div>
        `).join('');
    }

    if (projContainer) {
        projContainer.innerHTML = portfolioData.projects.map(proj => `
             <div class="border border-term-dim bg-gray-900/30 p-6 hover:border-term-accent hover:bg-gray-900/80 transition-all group relative overflow-hidden flex flex-col h-full">
                <div class="absolute top-0 right-0 p-2 opacity-50 text-6xl text-term-dim -mr-4 -mt-4 transition-transform group-hover:scale-110 group-hover:opacity-20">
                    <i class="${proj.icon || 'fas fa-code'}"></i>
                </div>
                <h4 class="text-xl font-bold text-white mb-2 group-hover:text-term-accent">
                    ${proj.underscoredTitle || proj.title.replace(/ /g, '_')}
                </h4>
                <p class="text-sm text-gray-400 mb-4 leading-relaxed">${proj.desc}</p>

                <div class="flex flex-wrap gap-2 text-xs font-mono mb-6">
                    ${proj.tech.map(t => `<span class="${getTechColor(t)}">#${t}</span>`).join('')}
                </div>

                <div class="mt-auto flex gap-4 font-mono text-xs">
                    ${proj.links.github ? `
                    <a href="${proj.links.github}" target="_blank" class="text-term-dim hover:text-term-text transition-colors flex items-center gap-1">
                        <i class="fab fa-github"></i> source
                    </a>` : ''}
                    ${proj.links.live ? `
                    <a href="${proj.links.live}" target="_blank" class="text-term-accent hover:text-white transition-colors flex items-center gap-1">
                        <i class="fas fa-external-link-alt"></i> visit
                    </a>` : ''}
                </div>
            </div>
        `).join('');
    }

    // Social links in contact section
    const socialContainer = document.querySelector('#contact .flex.gap-4');
    if (socialContainer && portfolioData.personal.social) {
        const social = portfolioData.personal.social;
        socialContainer.innerHTML = `
            ${social.linkedin ? `<a href="${social.linkedin}" target="_blank" class="text-gray-400 hover:text-white transition-colors">[ LinkedIn ]</a>` : ''}
            ${social.github ? `<a href="${social.github}" target="_blank" class="text-gray-400 hover:text-white transition-colors">[ GitHub ]</a>` : ''}
            ${social.twitter ? `<a href="${social.twitter}" target="_blank" class="text-gray-400 hover:text-white transition-colors">[ Twitter ]</a>` : ''}
        `;
    }
}

function getTechColor(tech) {
    const map = {
        'React': 'text-blue-400',
        'XGBoost': 'text-blue-400',
        'FastAPI': 'text-green-400',
        'LangChain': 'text-blue-400',
        'Gemini': 'text-green-400',
        'FAISS': 'text-yellow-400',
        'Docker': 'text-blue-500'
    };
    return map[tech] || 'text-gray-400';
}
