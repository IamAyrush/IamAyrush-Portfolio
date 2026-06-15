"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Award,
  BadgeCheck,
  Code2,
  Database,
  Github,
  GraduationCap,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Moon,
  Rocket,
  ShieldCheck,
  Sparkles,
  Sun,
  Trophy,
} from "lucide-react";

const links = [
  { label: "GitHub", href: "https://github.com/IamAyrush", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ayrush/", icon: Linkedin },
  { label: "LeetCode", href: "https://leetcode.com/u/iamayrush/", icon: Code2 },
];

const metrics = [
  { value: "Full-stack", label: "Product engineering" },
  { value: "8.7", label: "B.Tech CGPA" },
  { value: "Top 5", label: "ITE branch ranking" },
  { value: "5+", label: "Backend team led" },
];

const projects = [
  {
    name: "Blissmet",
    role: "Service Marketplace",
    period: "Jul 2025 - Dec 2025",
    stack: ["Next.js", "Clerk Auth", "Node.js", "MongoDB"],
    demoHref: "https://bliss-blush-chi.vercel.app/",
    githubHref: "https://github.com/ThatsDronzer/Bliss",
    bullets: [
      "Built RBAC flows with secure user and vendor separation.",
      "Designed MongoDB/Mongoose schemas for users, vendors, services, and reviews.",
      "Integrated Clerk webhooks to sync auth metadata and resolve roles dynamically.",
    ],
  },
  {
    name: "WanderLust",
    role: "Full Stack Airbnb Portal",
    period: "Jan 2025 - Apr 2025",
    stack: ["Node.js", "Express.js", "MongoDB", "EJS", "Bootstrap"],
    demoHref: "https://wanderlust-airbnb-gmsk.onrender.com/",
    githubHref: "https://github.com/IamAyrush/Wanderlust-Airbnb",
    bullets: [
      "Delivered RESTful routing and complete CRUD for 100+ accommodation listings.",
      "Engineered Passport.js authentication with session middleware and protected routes.",
      "Added the Vibes feature, increasing travel listing interaction by 20%.",
    ],
  },
  {
    name: "TheBarsOnly",
    role: "Reflex Testing Game",
    period: "2024",
    stack: ["JavaScript", "HTML", "CSS", "Animation"],
    demoHref: "https://iamayrush.github.io/MiniProject2/",
    githubHref: "https://github.com/IamAyrush/MiniProject2",
    bullets: [
      "Built a responsive browser game focused on reaction timing and quick visual feedback.",
      "Designed animated interactions and UI states for laptop-screen gameplay.",
      "Kept the experience lightweight with simple web fundamentals and fast loading.",
    ],
  },
  {
    name: "Yoom",
    role: "Virtual Meetings Platform",
    period: "2024",
    stack: ["Next.js", "Video SDK", "TypeScript", "Auth"],
    demoHref: "https://zoom-clone-ecru-sigma.vercel.app/",
    githubHref: "https://github.com/IamAyrush/Zoom-clone-App",
    bullets: [
      "Built a video conferencing platform with real-time meetings and guest access.",
      "Added meeting flows for video, screen sharing, and recordings.",
      "Shaped the interface around familiar meeting controls and fast session entry.",
    ],
  },
];

const certificates = [
  {
    title: "Full Stack Developer",
    focus: "End-to-end web development",
    href: "https://iamayrush-portfolio.vercel.app/assets/pdf/pdf2.pdf",
    image: "/certificate-fullstack.png",
  },
  {
    title: "Frontend Web Developer",
    focus: "Responsive interface development",
    href: "https://iamayrush-portfolio.vercel.app/assets/pdf/AYUSH%20VERMA.pdf",
    image: "/certificate-frontend-1.png",
  },
  {
    title: "Frontend Web Developer",
    focus: "Modern frontend fundamentals",
    href: "https://iamayrush-portfolio.vercel.app/assets/pdf/pdf1.pdf",
    image: "/certificate-frontend-2.png",
  },
];

const skills = [
  {
    title: "Frontend",
    icon: Layers3,
    items: ["React.js", "Next.js", "Vue.js", "Tailwind CSS", "Material UI", "Shadcn UI"],
  },
  {
    title: "Backend",
    icon: Rocket,
    items: ["Node.js", "Express.js", "RESTful APIs", "Clerk Auth", "Passport.js"],
  },
  {
    title: "Data",
    icon: Database,
    items: ["MongoDB", "Mongoose", "SQL", "OpenSearch", "Metabase"],
  },
  {
    title: "Core",
    icon: ShieldCheck,
    items: ["DSA", "OOP", "Operating Systems", "DBMS", "Computer Networks"],
  },
];

const achievements = [
  "Led a 5+ member backend team for a college-incubated project.",
  "Ranked Top 5 in ITE branch at MAIT in 2025.",
  "Led event management for 2 college fests, improving engagement by 10-20%.",
  "NSS Cell Member leading education visits and community teaching programs.",
];

const resumeUrl =
  "https://drive.google.com/file/d/1gCnhySBcxBp8o8hhuocDpbPApD-Nh89x/view?usp=drivesdk";

export default function Home() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("portfolio-theme");

    if (savedTheme === "dark" || savedTheme === "light") {
      setTheme(savedTheme);
      return;
    }

    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  return (
    <main className="themeRoot" data-theme={theme}>
      <section className="hero" id="home">
        <nav className="nav" aria-label="Main navigation">
          <a className="brand" href="#home">
            <span>AV</span>
            Ayush Verma
          </a>
          <div className="navLinks">
            <a href="#work">Work</a>
            <a href="#projects">Projects</a>
            <a href="#certificates">Certificates</a>
            <a href="#skills">Skills</a>
            <button
              className="themeToggle"
              type="button"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              onClick={() => setTheme((current) => (current === "dark" ? "light" : "dark"))}
            >
              {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
            </button>
            <a href="mailto:ayrush01@gmail.com" className="navButton">
              <Mail size={16} />
              Hire me
            </a>
          </div>
        </nav>

        <div className="heroGrid">
          <div className="heroCopy">
            <div className="eyebrow">
              <Sparkles size={16} />
              Software Engineer Intern at SuperAGI
            </div>
            <h1>Full-stack engineer crafting fast, reliable product experiences.</h1>
            <p>
              I build production-ready interfaces and backend APIs with Next.js, Vue.js, Node.js,
              MongoDB, and a debugging mindset sharpened on real customer-facing systems.
            </p>
            <div className="heroActions">
              <a href="#projects" className="primaryAction">
                View projects
                <ArrowUpRight size={18} />
              </a>
              <a href="mailto:ayrush01@gmail.com" className="secondaryAction">
                <Mail size={18} />
                Contact
              </a>
            </div>
            <div className="contactStrip" aria-label="Contact details">
              <span>
                <MapPin size={15} />
                New Delhi, India
              </span>
              <span>
                <Mail size={15} />
                ayrush01@gmail.com
              </span>
            </div>
          </div>

          <aside className="heroPanel" aria-label="Resume highlights">
            <div className="orbitalBadge badgeOne">
              <BadgeCheck size={16} />
              Clean PRs
            </div>
            <div className="orbitalBadge badgeTwo">
              <Code2 size={16} />
              API + UI
            </div>
            <div className="portraitFrame">
              <Image
                src="/ayush-cutout.png"
                alt="Ayush Verma portrait cutout"
                fill
                priority
                sizes="(max-width: 720px) 260px, 320px"
              />
            </div>
            <div className="profileCard">
              <div className="avatar">AV</div>
              <div>
                <p className="profileName">Ayush Verma</p>
                <p className="profileRole">Software Engineer</p>
              </div>
            </div>
            <div className="signalGrid">
              {metrics.map((metric) => (
                <div className="signal" key={metric.label}>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="marquee" aria-label="Technology badges">
        <div>
          {[
            "React",
            "Next.js",
            "Vue.js",
            "Node.js",
            "MongoDB",
            "OpenSearch",
            "Clerk",
            "Tailwind",
            "REST APIs",
          ].map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="section split" id="work">
        <div>
          <p className="sectionKicker">Experience</p>
          <h2>Debugging, shipping, and polishing real product workflows.</h2>
        </div>
        <article className="experienceCard">
          <div className="timelineDot" />
          <div className="experienceHeader">
            <div>
              <h3>SuperAGI</h3>
              <p>Software Engineer Intern · Bangalore, Karnataka</p>
            </div>
            <span>Jan 2026 - Present</span>
          </div>
          <ul>
            <li>Resolved 16+ critical frontend and backend issues by tracing OpenSearch logs.</li>
            <li>Built reusable Vue.js and Tailwind CSS components for consistent UI delivery.</li>
            <li>Designed a WhatsApp carousel messaging feature for structured communication.</li>
            <li>Used OpenSearch and Metabase to diagnose production failures faster.</li>
          </ul>
        </article>
      </section>

      <section className="section" id="projects">
        <div className="sectionHeader">
          <p className="sectionKicker">Selected projects</p>
          <h2>Product builds with auth, data models, APIs, and user-facing polish.</h2>
        </div>
        <div className="projectGrid">
          {projects.map((project) => (
            <article className="projectCard" key={project.name}>
              <div className="projectTop">
                <div>
                  <h3>{project.name}</h3>
                  <p>{project.role}</p>
                </div>
                <span>{project.period}</span>
              </div>
              <div className="badges">
                {project.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <ul>
                {project.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <div className="projectLinks">
                <a href={project.demoHref} target="_blank" rel="noreferrer">
                  Demo
                  <ArrowUpRight size={15} />
                </a>
                <a href={project.githubHref} target="_blank" rel="noreferrer">
                  GitHub
                  <Github size={15} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section certificatesSection" id="certificates">
        <div className="sectionHeader">
          <p className="sectionKicker">Certificates</p>
          <h2>Development credentials with quick preview access.</h2>
        </div>
        <div className="certificateGrid">
          {certificates.map((certificate, index) => (
            <article className="certificateCard" key={`${certificate.title}-${index}`}>
              <div className="certificatePreview">
                <Image
                  src={certificate.image}
                  alt={`${certificate.title} certificate preview`}
                  fill
                  sizes="(max-width: 720px) calc(100vw - 84px), (max-width: 980px) 42vw, 330px"
                />
                <div className="certificateIcon">
                  <Award size={21} />
                </div>
              </div>
              <p>{certificate.title}</p>
              <span>{certificate.focus}</span>
              <a href={certificate.href} target="_blank" rel="noreferrer">
                Preview
                <ArrowUpRight size={15} />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section skillsSection" id="skills">
        <div className="sectionHeader">
          <p className="sectionKicker">Stack</p>
          <h2>A practical toolkit for shipping full-stack features end to end.</h2>
        </div>
        <div className="skillsGrid">
          {skills.map((group) => {
            const Icon = group.icon;
            return (
              <article className="skillCard" key={group.title}>
                <Icon size={24} />
                <h3>{group.title}</h3>
                <div className="skillTags">
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section resumeBand">
        <div>
          <p className="sectionKicker">Resume snapshot</p>
          <h2>Clean credentials, turned into an interactive portfolio surface.</h2>
          <p>
            Education at MAIT, production internship experience, service marketplace work, travel
            portal engineering, and leadership achievements are all reflected here.
          </p>
          <div className="education">
            <GraduationCap size={20} />
            <span>B.Tech in Information Technology · MAIT Delhi · CGPA 8.7</span>
          </div>
          <a className="resumeLink" href={resumeUrl} target="_blank" rel="noreferrer">
            View full resume
            <ArrowUpRight size={17} />
          </a>
        </div>
        <div className="resumePreview">
          <Image src="/resume-preview.png" alt="Ayush Verma resume preview" fill sizes="360px" />
        </div>
      </section>

      <section className="section achievements">
        <div className="sectionHeader">
          <p className="sectionKicker">Achievements</p>
          <h2>Leadership and consistency beyond coursework.</h2>
        </div>
        <div className="achievementGrid">
          {achievements.map((achievement) => (
            <article key={achievement}>
              <Trophy size={20} />
              <p>{achievement}</p>
            </article>
          ))}
        </div>
      </section>

      <footer>
        <div>
          <strong>Ayush Verma</strong>
          <span>Software Engineer · New Delhi</span>
        </div>
        <div className="footerLinks">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <a href={link.href} key={link.label} aria-label={link.label} target="_blank" rel="noreferrer">
                <Icon size={18} />
              </a>
            );
          })}
        </div>
      </footer>
    </main>
  );
}
