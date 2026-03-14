import { portfolioData } from '../data/portfolio.js';

/**
 * Renders content based on the current page context
 */
export function renderContent() {
    renderNewspaperContent();
    renderCoderContent();
    setupModals();
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
        projContainer.innerHTML = portfolioData.projects.map((proj, index) => `
            <li class="group cursor-pointer" data-deepdive="${index}">
                <div class="block transition-colors">
                    <h5 class="font-serif font-bold text-lg group-hover:underline decoration-news-accent">${proj.title}</h5>
                    <p class="font-mono text-[10px] text-gray-500 mb-1 border-b border-dotted border-gray-400 pb-1">
                        ${proj.tech.join(', ')}</p>
                    <p class="font-serif text-sm leading-snug text-gray-800 mb-2">${proj.desc}</p>
                    <div class="flex gap-4 font-mono text-[10px] uppercase font-bold items-center">
                        ${proj.links.github ? `<a href="${proj.links.github}" target="_blank" class="hover:underline text-news-accent relative z-10">GitHub Repo</a>` : ''}
                        ${proj.links.live ? `<a href="${proj.links.live}" target="_blank" class="hover:underline text-news-accent relative z-10">Live Demo</a>` : ''}
                        ${proj.deepDive ? `<button data-deepdive="${index}" class="ml-auto hover:bg-news-ink hover:text-white text-news-ink transition-colors flex items-center gap-1 border border-news-ink px-2 py-0.5 relative z-10"><i class="fas fa-search-plus"></i> Deep Dive</button>` : ''}
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
        projContainer.innerHTML = portfolioData.projects.map((proj, index) => `
             <div class="border border-term-dim bg-gray-900/30 p-6 hover:border-term-accent hover:bg-gray-900/80 transition-all group relative overflow-hidden flex flex-col h-full cursor-pointer" data-deepdive="${index}">
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

                <div class="mt-auto flex gap-4 font-mono text-xs items-center">
                    ${proj.links.github ? `
                    <a href="${proj.links.github}" target="_blank" class="text-term-dim hover:text-term-text transition-colors flex items-center gap-1 relative z-10">
                        <i class="fab fa-github"></i> source
                    </a>` : ''}
                    ${proj.links.live ? `
                    <a href="${proj.links.live}" target="_blank" class="text-term-accent hover:text-white transition-colors flex items-center gap-1 relative z-10">
                        <i class="fas fa-external-link-alt"></i> visit
                    </a>` : ''}
                    ${proj.deepDive ? `
                    <button data-deepdive="${index}" class="ml-auto text-term-text hover:text-white transition-colors flex items-center gap-1 border border-term-dim hover:border-term-text px-2 py-1 bg-black/30 relative z-10">
                        > execute deep_dive.sh
                    </button>` : ''}
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
        'Docker': 'text-blue-500',
        'Vanilla CSS': 'text-orange-400',
        'JavaScript': 'text-yellow-400',
        'SVG Animations': 'text-pink-400',
        'Next.js': 'text-white',
        'Convex DB': 'text-blue-300',
        'Clerk Auth': 'text-purple-400',
        'Shadcn UI': 'text-slate-300',
        'Leaflet.js': 'text-green-400',
        'Node.js': 'text-green-500',
        'Express': 'text-gray-300',
        'Vite': 'text-purple-400'
    };
    return map[tech] || 'text-gray-400';
}

/* =========================================
   MODAL LOGIC
   ========================================= */

function setupModals() {
    // Determine theme based on which container exists
    const isNewspaper = document.getElementById('newspaper-projects') !== null;
    const isCoder = document.getElementById('coder-projects') !== null;

    if (!isNewspaper && !isCoder) return;

    // Create modal container if it doesn't exist
    let modal = document.getElementById('deep-dive-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'deep-dive-modal';
        // Base classes for modal wrapper (hidden by default)
        modal.className = 'fixed inset-0 z-[100] flex items-center justify-center bg-black/80 hidden opacity-0 transition-opacity duration-300';
        document.body.appendChild(modal);

        // Close modal when clicking outside
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal(modal);
        });
    }

    // Add click listeners to sub-buttons and cards
    document.querySelectorAll('[data-deepdive]').forEach(element => {
        element.addEventListener('click', (e) => {
            // If the user clicked a link inside the box, don't open the modal
            if (e.target.closest('a')) return;

            // If the target is the element itself or a child (and not a link)
            const projIndex = parseInt(element.getAttribute('data-deepdive'), 10);
            const project = portfolioData.projects[projIndex];
            if (project && project.deepDive) {
                // Prevent default if it's the button to avoid jumpiness, 
                // but actually for the card it's fine.
                e.preventDefault();
                e.stopPropagation(); // Stop multiple triggers if child button clicked
                openModal(modal, project, isNewspaper ? 'newspaper' : 'coder');
            }
        });
    });
}

function openModal(modal, project, theme) {
    const data = project.deepDive;
    let contentHTML = '';

    if (theme === 'newspaper') {
        contentHTML = `
            <div class="bg-news-paper border-4 border-double border-news-ink p-8 max-w-2xl w-full mx-4 relative max-h-[90vh] overflow-y-auto">
                <button class="absolute top-4 right-4 text-news-ink hover:text-news-accent font-bold text-2xl" onclick="document.getElementById('deep-dive-modal').classList.add('hidden'); document.getElementById('deep-dive-modal').classList.remove('opacity-100');">&times;</button>
                <div class="border-b-2 border-black pb-2 mb-6 pr-8">
                    <span class="font-mono text-[10px] font-bold uppercase tracking-widest bg-news-accent text-white px-2 py-0.5">Special Report</span>
                    <h2 class="font-serif text-3xl md:text-4xl font-black mt-2 leading-tight text-news-ink">${project.title}</h2>
                </div>
                
                <p class="font-serif text-lg leading-relaxed text-gray-900 text-justify mb-6 drop-cap">
                    ${data.summary}
                </p>
                
                <h3 class="font-serif text-xl font-bold border-b border-black mb-4">The Architect's Choices</h3>
                <div class="space-y-4 mb-8">
                    ${data.whyTech.map(tech => `
                        <div class="border-l-4 border-news-accent pl-4">
                            <h4 class="font-bold font-mono text-sm uppercase">${tech.title}</h4>
                            <p class="font-serif text-gray-800 text-sm mt-1">${tech.desc}</p>
                        </div>
                    `).join('')}
                </div>
                
                <h3 class="font-serif text-xl font-bold border-b border-black mb-4">Key Metrics</h3>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-sm">
                    ${data.metrics.map(metric => `
                        <div class="border border-black p-3 text-center bg-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                            <div class="text-2xl font-black mb-1">${metric.value}</div>
                            <div class="text-[10px] uppercase text-gray-600">${metric.label}</div>
                            <div class="w-full bg-gray-200 h-1 mt-2">
                                <div class="bg-news-ink h-1" style="width: ${metric.percentage}%"></div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    } else { // coder theme
        contentHTML = `
            <div class="bg-[#0a0a0a] border border-term-dim p-6 max-w-2xl w-full mx-4 relative max-h-[90vh] overflow-y-auto shadow-[0_0_20px_rgba(0,255,0,0.1)] terminal-window">
                <div class="flex items-center justify-between border-b border-gray-800 pb-3 mb-6 sticky top-0 bg-[#0a0a0a] pt-2 z-10">
                    <div class="flex space-x-2">
                        <div class="w-3 h-3 rounded-full bg-red-500 cursor-pointer hover:bg-red-400" onclick="document.getElementById('deep-dive-modal').classList.add('hidden'); document.getElementById('deep-dive-modal').classList.remove('opacity-100');"></div>
                        <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div class="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <span class="font-mono text-xs text-term-dim opacity-70">~/projects/${project.underscoredTitle}/deep_dive.sh</span>
                    <div class="w-16"></div> <!-- spacer -->
                </div>
                
                <div class="font-mono text-sm text-gray-300 space-y-8">
                    <div>
                        <div><span class="text-term-accent font-bold">$</span> cat summary.txt</div>
                        <p class="mt-2 text-gray-400 pl-4 border-l-2 border-term-dim leading-relaxed">
                            ${data.summary}
                        </p>
                    </div>
                    
                    <div>
                        <div><span class="text-term-accent font-bold">$</span> ./explain_architecture.sh</div>
                        <div class="mt-3 space-y-4 pl-4 border-l border-dashed border-gray-800">
                            ${data.whyTech.map(tech => `
                                <div>
                                    <span class="text-blue-400 font-bold">[${tech.title}]</span>
                                    <p class="text-gray-400 mt-1 text-xs leading-relaxed">${tech.desc}</p>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    
                    <div class="pb-4">
                        <div><span class="text-term-accent font-bold">$</span> watch -n 1 "./metrics"</div>
                        <div class="mt-3 grid grid-cols-1 md:grid-cols-3 gap-4">
                            ${data.metrics.map(metric => `
                                <div class="border border-gray-800 p-3 bg-black/50 hover:border-term-dim transition-colors">
                                    <div class="text-term-text font-bold text-xl">${metric.value}</div>
                                    <div class="text-[10px] text-gray-500 uppercase mt-1"># ${metric.label}</div>
                                    <div class="w-full bg-gray-900 h-1 mt-2 origin-left scale-x-100 transition-transform duration-1000">
                                        <div class="bg-term-text h-1" style="width: ${metric.percentage}%"></div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    modal.innerHTML = contentHTML;
    modal.classList.remove('hidden');
    // small delay to allow display to apply before opacity transition
    setTimeout(() => {
        modal.classList.add('opacity-100');
    }, 10);
}

function closeModal(modal) {
    modal.classList.remove('opacity-100');
    setTimeout(() => {
        modal.classList.add('hidden');
        modal.innerHTML = '';
    }, 300);
}
