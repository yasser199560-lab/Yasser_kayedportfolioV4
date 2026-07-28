import { useReveal } from "../hooks/useReveal";
import SectionHeading from "../components/SectionHeading";
import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaAngular,
    FaNodeJs,
    FaGitAlt,
    FaGithub,
    FaJava,
} from "react-icons/fa";

import {
    SiTypescript,
    SiNextdotjs,
    SiExpress,
    SiDjango,
    SiFastapi,
    SiFlutter,
    SiFirebase,
    SiMysql,
    SiMongodb,
} from "react-icons/si";

const TECHNOLOGIES = [
    { name: "HTML5", icon: FaHtml5 },
    { name: "CSS3", icon: FaCss3Alt },
    { name: "JavaScript", icon: FaJs },
    { name: "TypeScript", icon: SiTypescript },
    { name: "React", icon: FaReact },
    { name: "Angular", icon: FaAngular },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Node.js", icon: FaNodeJs },
    { name: "Express", icon: SiExpress },
    { name: "Django", icon: SiDjango },
    { name: "FastAPI", icon: SiFastapi },
    { name: "Flutter", icon: SiFlutter },
    { name: "Firebase", icon: SiFirebase },
    { name: "MySQL", icon: SiMysql },
    { name: "MongoDB", icon: SiMongodb },
    { name: "Git", icon: FaGitAlt },
    { name: "GitHub", icon: FaGithub },
    { name: "Java", icon: FaJava },
];

function Technologies() {
    const ref = useReveal();

    return (
        <section id="technologies" className="relative py-24 md:py-32">
            <div className="max-w-[var(--container-page)] mx-auto px-5 sm:px-8">
                <SectionHeading tag="stack" title="Technologies I" accent="work with" />

                <div
                    ref={ref}
                    className="reveal grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4"
                >
                    {TECHNOLOGIES.map((tech) => {
                        const Icon = tech.icon;
                        return (
                            <div
                                key={tech.name}
                                className="group card-surface rounded-xl p-5 flex flex-col items-center gap-3 hover:-translate-y-1 hover:border-[var(--color-signal)]/40 transition-all duration-300"
                            >
                                <Icon
                                    size={28}
                                    className="text-[var(--color-muted)] group-hover:text-[var(--color-signal)] transition-colors duration-300"
                                />
                                <span className="text-xs text-[var(--color-muted)] group-hover:text-[var(--color-text)] transition-colors duration-300 text-center">
                                    {tech.name}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Technologies;
