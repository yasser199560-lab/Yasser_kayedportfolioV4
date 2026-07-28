import { useReveal } from "../hooks/useReveal";
import SectionHeading from "../components/SectionHeading";

const SPECS = [
    {
        label: "Education",
        value: "B.Sc. Information Technology",
        detail: "Lebanese International University",
    },
    {
        label: "Experience",
        value: "Full Stack Developer",
        detail: "NGO technology solutions",
    },
    {
        label: "Location",
        value: "Based in Lebanon",
        detail: "Open to remote & on-site work",
    },
    {
        label: "Focus",
        value: "Web · Mobile · AI",
        detail: "End-to-end product delivery",
    },
];

function About() {
    const ref = useReveal();

    return (
        <section id="about" className="relative py-24 md:py-32">
            <div className="max-w-[var(--container-page)] mx-auto px-5 sm:px-8">
                <SectionHeading tag="about" title="Get to know" accent="me" align="left" />

                <div ref={ref} className="reveal grid lg:grid-cols-[1.05fr_0.95fr] gap-14">
                    <div className="space-y-5 text-[var(--color-muted)] text-base sm:text-lg leading-relaxed">
                        <p>
                            I'm an <strong className="text-[var(--color-text)]">Information Technology graduate</strong> from
                            the Lebanese International University, where I built a full{" "}
                            <strong className="text-[var(--color-text)]">e-commerce application</strong> as my senior project.
                        </p>
                        <p>
                            After graduation I joined{" "}
                            <strong className="text-[var(--color-text)]">SHAHD Association NGO</strong> as a Youth Section Web
                            Development Trainer, leading their website and mobile app while managing their software solutions.
                        </p>
                        <p>
                            I later took on similar responsibilities at{" "}
                            <strong className="text-[var(--color-text)]">ADAD Association NGO</strong>, delivering end-to-end
                            digital solutions to support their technology initiatives.
                        </p>
                        <p>
                            I'm passionate about building efficient, user-centered web and mobile products, and I keep
                            sharpening my craft — from interface design to AI-assisted engineering.
                        </p>
                    </div>

                    <div className="card-surface rounded-2xl overflow-hidden">
                        <div className="px-6 py-4 border-b border-[var(--color-line)] font-mono text-xs text-[var(--color-signal)]">
                            profile.json
                        </div>
                        <dl>
                            {SPECS.map((spec, i) => (
                                <div
                                    key={spec.label}
                                    className={`px-6 py-5 grid grid-cols-[auto_1fr] gap-x-4 items-start ${
                                        i !== SPECS.length - 1 ? "border-b border-[var(--color-line)]" : ""
                                    }`}
                                >
                                    <dt className="font-mono text-xs text-[var(--color-muted)] pt-1 whitespace-nowrap">
                                        {spec.label}
                                    </dt>
                                    <dd>
                                        <p className="text-[var(--color-text)] font-medium">{spec.value}</p>
                                        <p className="text-sm text-[var(--color-muted)]">{spec.detail}</p>
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
