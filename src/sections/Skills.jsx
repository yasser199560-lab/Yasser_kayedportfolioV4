import { useReveal } from "../hooks/useReveal";
import SectionHeading from "../components/SectionHeading";
import {
    FaLaptopCode,
    FaServer,
    FaMobileAlt,
    FaDatabase,
    FaTools,
    FaRobot,
} from "react-icons/fa";

const SKILL_CATEGORIES = [
    {
        title: "Frontend",
        icon: FaLaptopCode,
        skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React.js", "Next.js", "Angular", "Responsive Design"],
    },
    {
        title: "Backend",
        icon: FaServer,
        skills: ["Node.js", "Express.js", "FastAPI", "Django", "Django REST Framework", "REST APIs"],
    },
    {
        title: "Mobile",
        icon: FaMobileAlt,
        skills: ["Flutter", "Android Studio", "Android Development", "Firebase"],
    },
    {
        title: "Databases",
        icon: FaDatabase,
        skills: ["MySQL", "MongoDB", "Mongoose", "Firebase"],
    },
    {
        title: "DevOps & Tools",
        icon: FaTools,
        skills: ["Git", "GitHub", "CI/CD Fundamentals", "Deployment & Hosting"],
    },
    {
        title: "AI & Cybersecurity",
        icon: FaRobot,
        skills: ["Prompt Engineering", "AI APIs Integration", "Cybersecurity", "AI Fundamentals"],
    },
];

function Skills() {
    const ref = useReveal();

    return (
        <section id="skills" className="relative py-24 md:py-32 bg-[var(--color-ink-soft)]">
            <div className="max-w-[var(--container-page)] mx-auto px-5 sm:px-8">
                <SectionHeading
                    tag="skills"
                    title="What I bring"
                    accent="to the table"
                    description="A cross-stack toolkit for taking a product from idea to a deployed, maintainable release."
                />

                <div ref={ref} className="reveal grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {SKILL_CATEGORIES.map((category) => {
                        const Icon = category.icon;
                        return (
                            <div
                                key={category.title}
                                className="card-surface rounded-2xl p-6 hover:border-[var(--color-signal)]/40 transition-colors duration-300"
                            >
                                <div className="flex items-center gap-3 mb-5">
                                    <span className="w-9 h-9 rounded-lg bg-[var(--color-signal)]/10 text-[var(--color-signal)] flex items-center justify-center">
                                        <Icon size={16} />
                                    </span>
                                    <h4 className="font-semibold text-[var(--color-text)]">
                                        {category.title}
                                    </h4>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-line)] bg-[var(--color-ink)]/60 px-3 py-1 text-xs text-[var(--color-muted)]"
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-signal)]" />
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Skills;
