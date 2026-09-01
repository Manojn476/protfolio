import { motion } from 'framer-motion';
import {
  ArrowRight,
  Award,
  BarChart3,
  BookOpen,
  BrainCircuit,
  Briefcase,
  CheckCircle2,
  ClipboardCheck,
  Code2,
  Cpu,
  Database,
  ExternalLink,
  FolderGit2,
  GitBranch,
  GraduationCap,
  Layers3,
  Mail,
  MapPin,
  Rocket,
  School,
  Server,
  Sparkles,
  Wrench,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { certifications, education } from './data/education';
import { featuredRepos, githubProfile } from './data/github';
import { personal } from './data/personal';
import { featuredProject, projects } from './data/projects';
import { skillGroups } from './data/skills';
import { experiences } from './data/experience';
import { socialLinks } from './data/social';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'GitHub', href: '#github' },
  { label: 'Contact', href: '#contact' },
];

const socialIconMap: Record<string, LucideIcon> = {
  GitHub: GitBranch,
  LinkedIn: Briefcase,
  LeetCode: Code2,
  Email: Mail,
};

const skillIcons: Record<string, LucideIcon> = {
  Code2,
  Brain: BrainCircuit,
  BarChart3,
  Server,
  Layout: Layers3,
  Database,
  Wrench,
  GitBranch,
};

const dsaTopics = [
  'Arrays & Strings',
  'Hashing & Maps',
  'Trees & Graphs',
  'Dynamic Programming',
  'Backtracking',
  'Greedy & Heuristics',
];

const learningLabTopics = [
  { title: 'LLM Systems', description: 'Prompt design, evaluation loops, and retrieval augmentation.' },
  { title: 'MLOps', description: 'Model tracking, reproducibility, and deployment workflows.' },
  { title: 'Product Thinking', description: 'Translating ML ideas into user-centric software products.' },
];

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
};

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="section-header">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default function App() {
  return (
    <div className="portfolio-shell">
      <div className="bg-glow glow-one" />
      <div className="bg-glow glow-two" />

      <header className="topbar">
        <nav className="nav container" aria-label="Main navigation">
          <a href="#home" className="brand" aria-label="Manoj home">
            <span className="brand-mark">{personal.initials}</span>
            <span>{personal.firstName}</span>
          </a>

          <div className="nav-links" aria-label="Section links">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <main id="home">
        <section className="hero container">
          <motion.div className="hero-copy" {...fadeInUp}>
            <span className="eyebrow badge-inline">
              <Sparkles size={14} />
              Available for AI + product engineering
            </span>

            <h1>
              I build <span>intelligent products</span> that turn ideas into measurable impact.
            </h1>

            <p className="hero-subtitle">
              {personal.headline}
            </p>

            <div className="hero-actions">
              <a href="#projects" className="primary-btn">
                View work <ArrowRight size={18} />
              </a>
              <a href="#contact" className="secondary-btn">
                Let&apos;s connect
              </a>
            </div>

            <div className="mini-metrics" aria-label="Career highlights">
              <div>
                <strong>4th</strong>
                <span>Year student</span>
              </div>
              <div>
                <strong>8.41</strong>
                <span>CGPA</span>
              </div>
              <div>
                <strong>6+</strong>
                <span>Projects</span>
              </div>
            </div>
          </motion.div>

          <motion.div className="hero-panel" {...fadeInUp} transition={{ duration: 0.65, ease: 'easeOut', delay: 0.08 }}>
            <div className="terminal-card">
              <div className="terminal-header">
                <span className="dot red" />
                <span className="dot yellow" />
                <span className="dot green" />
              </div>

              <div className="terminal-body">
                <p className="terminal-line">
                  <span className="prompt">~/manoj</span> skills --focus AI
                </p>
                <div className="chip-row">
                  <span>Python</span>
                  <span>LLMs</span>
                  <span>ML</span>
                  <span>FastAPI</span>
                </div>
                <div className="terminal-list">
                  <div>
                    <CheckCircle2 size={16} />
                    End-to-end AI product design
                  </div>
                  <div>
                    <CheckCircle2 size={16} />
                    Data-first problem solving
                  </div>
                  <div>
                    <CheckCircle2 size={16} />
                    Product-minded engineering
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <motion.section id="about" className="about container" {...fadeInUp}>
          <SectionHeader
            eyebrow="About"
            title="Engineering student with a product mindset."
            description="I enjoy translating messy real-world problems into polished, data-backed systems — from intelligent dashboards to AI workflows and scalable product experiences."
          />

          <div className="about-grid">
            <div className="about-card gradient-panel">
              <p>
                I am currently pursuing my B.E. in Artificial Intelligence & Data Science at BMS College of Engineering, with a strong focus on machine learning, analytics, systems thinking, and applied product development.
              </p>
              <p>
                My work sits at the intersection of data science, AI, and software engineering — building tools that help humans think better, decide faster, and ship smarter.
              </p>
            </div>

            <div className="about-card info-card">
              <div className="info-row">
                <MapPin size={18} />
                <span>{personal.location}</span>
              </div>
              <div className="info-row">
                <School size={18} />
                <span>{personal.university}</span>
              </div>
              <div className="info-row">
                <Award size={18} />
                <span>{personal.degree}</span>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section id="projects" className="container" {...fadeInUp}>
          <SectionHeader
            eyebrow="Flagship work"
            title="AI products and data systems built to solve real problems."
            description="Each project blends engineering depth with a practical product lens — from adaptive interview prep to analytics-heavy urban systems."
          />

          <div className="flagship-card">
            <div className="flagship-copy">
              <span className="eyebrow">Featured project</span>
              <h3>{featuredProject.title}</h3>
              <p>{featuredProject.subtitle}</p>

              <div className="tech-row">
                {featuredProject.stack.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <div className="flagship-pipeline" aria-label="Project pipeline">
                {featuredProject.pipeline?.map((step, index) => (
                  <div key={step} className="pipeline-step">
                    <span>{index + 1}</span>
                    <small>{step}</small>
                  </div>
                ))}
              </div>
            </div>

            <div className="flagship-detail">
              <div className="detail-block">
                <Rocket size={18} />
                <div>
                  <strong>Problem</strong>
                  <p>{featuredProject.problem}</p>
                </div>
              </div>
              <div className="detail-block">
                <Cpu size={18} />
                <div>
                  <strong>Approach</strong>
                  <p>{featuredProject.approach}</p>
                </div>
              </div>
              <div className="detail-block">
                <CheckCircle2 size={18} />
                <div>
                  <strong>Learning</strong>
                  <p>{featuredProject.learned}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article key={project.id} className="project-card">
                <div className="project-header">
                  <div>
                    <span className="project-category">{project.category}</span>
                    <h3>{project.title}</h3>
                  </div>
                  {project.githubUrl ? (
                    <a href={project.githubUrl} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} GitHub repository`}>
                      <GitBranch size={18} />
                    </a>
                  ) : null}
                </div>

                <p className="project-subtitle">{project.subtitle}</p>
                <p>{project.description}</p>

                <div className="tech-row">
                  {project.stack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <details>
                  <summary>Case study</summary>
                  <div className="case-study">
                    <p>
                      <strong>Problem:</strong> {project.problem}
                    </p>
                    <p>
                      <strong>Approach:</strong> {project.approach}
                    </p>
                    <p>
                      <strong>Challenge:</strong> {project.techChallenge}
                    </p>
                  </div>
                </details>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section id="skills" className="container" {...fadeInUp}>
          <SectionHeader
            eyebrow="Skill stack"
            title="Tools and problem-solving systems I use."
            description="I build with a mix of analytical depth, practical software engineering, and AI-first product thinking."
          />

          <div className="skills-grid">
            {skillGroups.map((group) => {
              const Icon = skillIcons[group.icon] ?? Code2;

              return (
                <div key={group.category} className="skill-card">
                  <div className="skill-header">
                    <Icon size={18} />
                    <h3>{group.category}</h3>
                  </div>
                  <div className="skill-pills">
                    {group.skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.section>

        <motion.section id="experience" className="container" {...fadeInUp}>
          <SectionHeader
            eyebrow="Experience"
            title="Applied learning through internships and analytics work."
            description="My experience has centered on building practical skills in data storytelling, experimentation, and problem structuring."
          />

          <div className="timeline">
            {experiences.map((exp) => (
              <div key={exp.id} className="timeline-item">
                <div className="timeline-dot" aria-hidden="true" />
                <div className="timeline-content">
                  <div className="timeline-meta">
                    <span>{exp.period}</span>
                    <span>{exp.type}</span>
                  </div>
                  <h3>{exp.role}</h3>
                  <p className="company">{exp.company}</p>
                  <ul>
                    {exp.description.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section id="education" className="container" {...fadeInUp}>
          <SectionHeader
            eyebrow="Education"
            title="Academic foundation in AI, data, and engineering." 
            description="I’m building a strong technical base with both theoretical rigor and applied project work."
          />

          <div className="edu-grid">
            <article className="edu-card">
              <div className="edu-header">
                <GraduationCap size={20} />
                <div>
                  <h3>{education.degree}</h3>
                  <p>{education.field}</p>
                </div>
              </div>
              <div className="edu-meta">
                <span>{education.institution}</span>
                <span>{education.location}</span>
                <span>{education.period}</span>
              </div>
              <div className="cgpa-box">
                <strong>{education.cgpa}</strong>
                <span>{education.cgpaNote}</span>
              </div>
            </article>

            <article className="edu-card certifications-card">
              <div className="edu-header">
                <Award size={20} />
                <div>
                  <h3>Certifications</h3>
                  <p>Professional learning milestones</p>
                </div>
              </div>

              <ul className="cert-list">
                {certifications.map((certification) => (
                  <li key={certification.title}>
                    <CheckCircle2 size={15} />
                    <span>
                      <strong>{certification.title}</strong>
                      <small>{certification.issuer}</small>
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </motion.section>

        <motion.section id="github" className="container" {...fadeInUp}>
          <SectionHeader
            eyebrow="GitHub"
            title="Code, experiments, and project iterations."
            description="I keep building, documenting, and refining ideas in public so the work remains practical and transparent."
          />

          <div className="github-panel">
            <div className="github-profile">
              <img src={githubProfile.avatarUrl} alt={githubProfile.username} />
              <div>
                <h3>{githubProfile.username}</h3>
                <p>{githubProfile.bio}</p>
              </div>
            </div>

            <div className="github-stats">
              <div>
                <strong>{githubProfile.publicRepos}</strong>
                <span>Repos</span>
              </div>
              <div>
                <strong>{githubProfile.followers}</strong>
                <span>Followers</span>
              </div>
              <div>
                <strong>{githubProfile.following}</strong>
                <span>Following</span>
              </div>
            </div>
          </div>

          <div className="repo-grid">
            {featuredRepos.map((repo) => (
              <article key={repo.name} className="repo-card">
                <div className="repo-head">
                  <FolderGit2 size={18} />
                  <a href={repo.url} target="_blank" rel="noreferrer">
                    {repo.name}
                  </a>
                  <ExternalLink size={14} />
                </div>

                <p>{repo.description}</p>

                <div className="repo-meta">
                  <span className="lang-dot" />
                  <span>{repo.language}</span>
                  <span>★ {repo.stars}</span>
                  <span>⎇ {repo.forks}</span>
                </div>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section className="container" {...fadeInUp}>
          <SectionHeader
            eyebrow="Learning lab"
            title="Topics I am actively exploring next."
            description="My focus is to keep deepening the systems, research, and product thinking behind modern AI and data applications."
          />

          <div className="learning-grid">
            {learningLabTopics.map((item) => (
              <article key={item.title} className="learning-card">
                <BookOpen size={18} />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section className="container" {...fadeInUp}>
          <SectionHeader
            eyebrow="Problem solving"
            title="Data structures and algorithm practice."
            description="I consistently work on core problem-solving patterns to strengthen precision, structure, and complexity reasoning."
          />

          <div className="dsa-box">
            <div className="dsa-panel">
              <div className="dsa-metric">
                <strong>150+</strong>
                <span>Problems solved</span>
              </div>
              <div className="dsa-metric">
                <strong>8</strong>
                <span>Core patterns</span>
              </div>
            </div>

            <div className="dsa-topics">
              {dsaTopics.map((topic) => (
                <span key={topic}>{topic}</span>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section id="contact" className="container" {...fadeInUp}>
          <SectionHeader
            eyebrow="Contact"
            title="Let’s build something useful together."
            description="I’m open to collaborations, internships, research conversations, and product-minded engineering opportunities."
          />

          <div className="contact-card">
            <div className="contact-copy">
              <p>
                If you want to discuss AI products, data-driven systems, product engineering, or collaborative opportunities, I’d love to connect.
              </p>
              <div className="contact-actions">
                <a href={`mailto:${personal.email}`} className="primary-btn">
                  <Mail size={18} />
                  Email me
                </a>
                <a href={personal.resumeUrl} target="_blank" rel="noreferrer" className="secondary-btn">
                  <ClipboardCheck size={18} />
                  View resume
                </a>
              </div>
            </div>

            <div className="social-links" aria-label="Social media links">
              {socialLinks.map((link) => {
                const Icon = socialIconMap[link.icon] ?? Code2;
                return (
                  <a key={link.name} href={link.url} target="_blank" rel="noreferrer" aria-label={link.name}>
                    <Icon size={18} />
                    <span>{link.name}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </motion.section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} {personal.name}</span>
        </div>
      </footer>
    </div>
  );
}
