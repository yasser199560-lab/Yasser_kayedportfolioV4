import { useReveal } from "../hooks/useReveal";
import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";

const PROJECTS = [
    {
        title: "Shahd Association — Website & Mobile App",
        description:
            "Full donation and association management system with a modern UI and fully responsive design, built while training the NGO's youth web development section.",
        stack: ["React", "Node.js", "MongoDB"],
        link: "https://your-link-here.com",
        status: "In progress",
    },
    {
        title: "Adad Association Website",
        description:
            "A modern platform for managing association services, members and content, deployed and actively used by the organization.",
        stack: ["Angular", "Node.js"],
        link: "https://adadngo.netlify.app/",
    },
    {
        title: "Travelia",
        description:
            "Travel guide & booking platform with a clean UI, itinerary and listing management, and a smooth end-to-end booking experience.",
        stack: ["Next.js", "React 19", "MongoDB"],
        link: "https://travelia-rho.vercel.app/",
    },
    {
        title: "Talabaty",
        description:
            "Food ordering application with a fast, intuitive UX, JWT-based auth and a REST API backend deployed on Render.",
        stack: ["Express", "TypeScript", "MongoDB", "JWT"],
        link: "https://talabatyv1.netlify.app/",
    },
    {
        title: "InsightFlow",
        description:
            "Sales analytics platform that turns a business owner's sales export into a clear dashboard and plain-language recommendations, then publishes a sanitized version of the finding to a public insight feed for other businesses to learn from.",
        stack: ["Nuxt", "Dashboard", "Data Analytics"],
        link: "https://insightflow-o6ve.onrender.com/",
    },
];

function Projects() {
    const ref = useReveal();

    return (
        <section id="projects" className="relative py-24 md:py-32 bg-[var(--color-ink-soft)]">
            <div className="max-w-[var(--container-page)] mx-auto px-5 sm:px-8">
                <SectionHeading
                    tag="projects"
                    title="Selected"
                    accent="work"
                    description="A handful of products I've shipped end-to-end — from NGO platforms to travel and food-ordering apps."
                />

                <div ref={ref} className="reveal grid sm:grid-cols-2 gap-5">
                    {PROJECTS.map((project) => (
                        <ProjectCard key={project.title} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
