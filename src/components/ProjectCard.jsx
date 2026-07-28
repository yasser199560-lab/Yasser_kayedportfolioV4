import { FaArrowUpRightFromSquare } from "react-icons/fa6";

function ProjectCard({ title, description, stack = [], link, status = "Live" }) {
    return (
        <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="group card-surface rounded-2xl p-6 sm:p-7 flex flex-col hover:border-[var(--color-signal)]/40 hover:-translate-y-1 transition-all duration-300"
        >
            <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-live)] opacity-75" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-live)]" />
                    </span>
                    <span className="font-mono text-[11px] text-[var(--color-muted)]">
                        {status}
                    </span>
                </div>
                <FaArrowUpRightFromSquare
                    size={14}
                    className="text-[var(--color-muted)] group-hover:text-[var(--color-signal)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                />
            </div>

            <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">
                {title}
            </h3>
            <p className="text-sm text-[var(--color-muted)] leading-relaxed flex-1">
                {description}
            </p>

            {stack.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-2">
                    {stack.map((tech) => (
                        <span
                            key={tech}
                            className="rounded-full border border-[var(--color-line)] px-2.5 py-1 font-mono text-[10px] text-[var(--color-muted)]"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            )}

            <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-signal)]">
                View project
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </span>
        </a>
    );
}

export default ProjectCard;
