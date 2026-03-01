export const portfolioData = {
    personal: {
        name: "Arya Bhattacharjee",
        role: "Full Stack AI Engineer",
        email: "aryaa111000@gmail.com",
        location: "Kolkata, India",
        bio: "Bridging the gap between robust systems serving 1,000+ users monthly and cutting-edge agentic AI pipelines. In a world where digital landscapes shift daily, stability meets innovation here.",
        metrics: "99.9% Uptime • <100ms Latency • 100% Code Coverage",
        tagline: "Code is temporary, logic is forever.",
        social: {
            github: "https://github.com/FrozenSaturn",
            linkedin: "https://www.linkedin.com/in/arya-bhattacharjee/",
            twitter: "https://x.com/frozen_saturn"
        }
    },
    experience: [
        {
            id: "groweasy",
            company: "GrowEasy",
            role: "Software Developer Intern",
            date: "DEC '25",
            endDate: "PRESENT",
            type: "Remote",
            fullDate: "2025.12 - PRESENT",
            description: "Currently owning the backend for a live SaaS product. Designed a secure subscription microservice with Razorpay and built 25+ APIs integrating Gemini for content generation.",
            highlights: [
                "Handling secure storage for 4000+ generated assets.",
                "Implemented granular plan validation & feature gating."
            ],
            coderHighlights: [
                "Secure storage for 4000+ generated assets",
                "Granular plan validation",
                "Integrated Gemini API"
            ]
        },
        {
            id: "santent",
            company: "SantEnt",
            role: "AI Engineer Intern",
            date: "JUL '25",
            endDate: "OCT '25",
            type: "On-site",
            fullDate: "2025.07 - 2025.10",
            description: "Deployed an agentic AI pipeline using LangChain on Google Cloud. Also engineered a RAG-based Shopify chatbot using Vector Search (FAISS) to drive product discovery.",
            highlights: [
                "Integrated LangSmith for reasoning traces & latency optimization."
            ],
            coderHighlights: [
                "LangChain",
                "FAISS",
                "GCP"
            ]
        },
        {
            id: "college",
            company: "CollegeTips.in",
            role: "AI Intern",
            date: "MAY '25",
            endDate: "JUN '25",
            type: "Remote",
            fullDate: "2025.05 - 2025.06",
            description: "Shipped a voice-enabled chatbot for digital literacy, helping 50+ users with zero technical experience.",
            tech: "Gemini API, Dialogflow"
        }
    ],
    projects: [
        {
            title: "Live Chat App",
            underscoredTitle: "Live_Chat_App",
            tech: ["Next.js", "Convex DB", "Clerk Auth", "Shadcn UI"],
            desc: "A real-time chat application with features like user authentication, real-time messaging, and online status indicators.",
            icon: "fas fa-comments",
            links: {
                github: "https://github.com/FrozenSaturn/live-chat",
                live: "https://livechat.aryabhattacharjee.online"
            }
        },
        {
            title: "IPL Insight Engine",
            underscoredTitle: "IPL_Insight_Engine",
            tech: ["XGBoost", "FastAPI", "React", "Docker"],
            desc: "Explainable AI cricket forecasting using SHAP values. Provides depth analysis of match outcomes.",
            icon: "fas fa-chart-line",
            links: {
                github: "https://github.com/FrozenSaturn/ipl_predictor",
                live: "https://ipl-insight.aryabhattacharjee.online"
            }
        },
        {
            title: "AskAway RAG Bot",
            underscoredTitle: "AskAway_RAG_Bot",
            tech: ["LangChain", "Faiss", "Gemini"],
            desc: "Interactive PDF chatbot with 1.8x better retrieval precision.",
            icon: "fas fa-robot",
            links: {
                github: "https://github.com/FrozenSaturn/RAG_based_Chatbot",
                live: "https://askaway.aryabhattacharjee.online"
            }
        }
    ],
    skills: [
        { name: "Python", icon: "fab fa-python", color: "text-yellow-400" },
        { name: "JS / TS", icon: "fab fa-js", color: "text-yellow-300" },
        { name: "Node.js", icon: "fab fa-node", color: "text-green-500" },
        { name: "React", icon: "fab fa-react", color: "text-blue-400" },
        { name: "Docker", icon: "fab fa-docker", color: "text-blue-500" },
        { name: "AWS", icon: "fab fa-aws", color: "text-orange-500" },
        { name: "SQL", icon: "fas fa-database", color: "text-purple-400" }, // specific icon
        { name: "Git", icon: "fab fa-git-alt", color: "text-red-500" },
        { name: "AI / LLM", icon: "fas fa-brain", color: "text-pink-500" } // added color
    ]
};
