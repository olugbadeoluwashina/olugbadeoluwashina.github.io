import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Bug, 
  Terminal, 
  ShieldCheck, 
  Smartphone, 
  Globe, 
  Database, 
  Mail, 
  Phone, 
  MapPin, 
  Code2, 
  CheckCircle2, 
  Layers, 
  Cpu,
  ExternalLink,
  Github,
  Linkedin,
  ChevronRight
} from "lucide-react";

const Section = ({ children, className = "", id }: { children: React.ReactNode; className?: string; id?: string }) => (
  <section id={id} className={`py-16 px-6 md:px-12 max-w-7xl mx-auto ${className}`}>
    {children}
  </section>
);

const Badge = ({ children }: { children: React.ReactNode; key?: React.Key }) => (
  <span className="px-3 py-1 text-xs font-mono bg-emerald-900/40 border border-emerald-500/30 rounded-full text-emerald-300 font-bold backdrop-blur-sm">
    {children}
  </span>
);

export default function App() {
  const [currentStackIndex, setCurrentStackIndex] = React.useState(0);
  const stackItems = [
    {
      title: "Deno",
      description: "Modern backend engineering with a focus on security and performance.",
      tag: "Backend"
    },
    {
      title: "Playwright",
      description: "Reliable end-to-end testing for modern web apps.",
      tag: "Automation"
    },
    {
      title: "TypeScript",
      description: "Type-safe development for scalable and maintainable codebases.",
      tag: "Language"
    }
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStackIndex((prev) => (prev + 1) % stackItems.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const experiences = [
    {
      company: "Shago Payment",
      role: "QA Automation Lead",
      period: "2025 – Present",
      achievements: [
        "Automated ~30 VAS API endpoints using Playwright, covering bill payments, gateway services, authentication, and transaction validation.",
        "Built and maintained a suite of 100+ automated API test cases including success, failure, and complex edge-case scenarios.",
        "Reduced API regression testing time by approximately 70–80% through full endpoint automation and CI/CD integration.",
        "Ensured 100% automated coverage of core VAS services prior to production releases, significantly improving release confidence.",
        "Performed manual validation for user and admin web interfaces to ensure seamless UX across all platforms."
      ],
      skills: ["Playwright", "API Testing", "Fintech", "VAS Services", "CI/CD"]
    },
    {
      company: "Alerzo Limited",
      role: "QA Engineer",
      period: "2023 – 2025",
      achievements: [
        "Automated core commerce flows of AlerzoShop mobile app using Appium (Android & iOS), ensuring stability across multiple device models.",
        "Achieved approximately 60–70% automation coverage of key user journeys including login, product browsing, cart, and checkout.",
        "Reduced mobile regression effort by ~40–50% through the implementation of a robust automated testing framework.",
        "Tested and validated Veedez Payments integration across mobile and admin systems, ensuring secure and reliable transaction processing.",
        "Performed manual validation for high-risk payment edge cases that required deep domain knowledge."
      ],
      skills: ["Appium", "Mobile Testing", "E-commerce", "Veedez Payments", "Cross-device Testing"]
    },
    {
      company: "Kuda",
      role: "QA Engineer",
      period: "2022 – 2023",
      achievements: [
        "Contributed to UI automation using Cypress and Playwright for mobile banking and admin platforms, improving overall system reliability.",
        "Performed comprehensive API validation using Postman and Axios to ensure data integrity across microservices.",
        "Improved regression efficiency through structured test case coverage and optimized test execution pipelines.",
        "Strengthened pre-release quality validation for financial operations workflows, reducing post-release defects by 30%."
      ],
      skills: ["Cypress", "Playwright", "Postman", "Axios", "Financial Ops"]
    },
    {
      company: "PalmPay Limited",
      role: "Quality Assurance Analyst",
      period: "2020 – 2022",
      achievements: [
        "Tested fintech mobile features including loans, collections, and embedded e-commerce for a high-growth user base.",
        "Conducted field testing with Sales teams to analyze real-world user behavior and identify usability bottlenecks.",
        "Executed functional, regression, and UAT testing prior to production releases, ensuring a high standard of quality for millions of users.",
        "Collaborated with product teams to define acceptance criteria and ensure alignment with user needs."
      ],
      skills: ["Manual Testing", "UAT", "Field Testing", "Fintech", "User Research"]
    },
    {
      company: "Transsion Holdings",
      role: "Software Tester",
      period: "2018 – 2020",
      achievements: [
        "Performed device-level software testing for smartphone hardware features including networking, biometrics, camera systems, and vSIM applications.",
        "Validated gaming performance (PUBG Mobile) and VR applications across multiple device models to ensure optimal user experience.",
        "Identified and reported critical hardware-software integration bugs, leading to improved device stability.",
        "Executed rigorous stress tests and performance benchmarks for upcoming smartphone releases."
      ],
      skills: ["Hardware Testing", "Biometrics", "Mobile Performance", "vSIM", "Stress Testing"]
    }
  ];

  const skills = [
    { category: "Automation", items: ["Playwright", "Cypress", "Appium", "Postman"] },
    { category: "Languages", items: ["TypeScript", "JavaScript", "Java", "Deno"] },
    { category: "Backend", items: ["Deno", "Node.js", "Express", "REST APIs", "GraphQL"] },
    { category: "Testing Types", items: ["Web", "API", "Mobile (iOS/Android)", "Regression", "POS"] },
    { category: "Databases", items: ["PostgreSQL", "MongoDB"] }
  ];

  return (
    <div className="min-h-screen technical-grid">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-emerald-900/50 bg-emerald-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-mono font-bold text-lg tracking-tighter flex items-center gap-2">
            <Terminal size={20} className="text-emerald-400" />
            <span className="text-emerald-50">OLUGBADE OLUWASHINA</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-bold text-emerald-400/60">
            <a href="#experience" className="hover:text-emerald-100 transition-colors">Experience</a>
            <a href="#skills" className="hover:text-emerald-100 transition-colors">Skills</a>
            <a href="#contact" className="hover:text-emerald-100 transition-colors">Contact</a>
          </div>
          <a 
            href="#contact"
            className="px-4 py-2 bg-emerald-500 text-emerald-950 text-xs font-bold rounded-full hover:bg-emerald-400 transition-colors"
          >
            HIRE ME
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <Section className="pt-32 md:pt-40">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/50 border border-emerald-500/30 text-xs font-mono text-emerald-400 mb-6 font-bold backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              AVAILABLE FOR NEW OPPORTUNITIES
            </div>
            <h1 className="text-5xl md:text-8xl font-bold tracking-tight leading-[0.85] mb-8 text-emerald-50 font-serif">
              Olugbade <br />
              <span className="text-emerald-500 font-normal italic">Oluwashina</span>
            </h1>
            <p className="text-xl text-emerald-100/80 max-w-lg mb-10 leading-relaxed font-medium">
              I'm a Software Quality Engineer with over 5 years of experience building resilience into Fintech and E-commerce products. 
              I specialize in elevating software excellence through rigorous automated testing and a deep commitment to high-quality user experiences.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#experience"
                className="px-8 py-4 bg-emerald-500 text-emerald-950 font-bold rounded-xl flex items-center gap-2 hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-950/50"
              >
                View Experience <ChevronRight size={18} />
              </a>
              <div className="flex items-center gap-4 px-4">
                <a href="#" className="text-emerald-500/40 hover:text-emerald-400 transition-colors"><Linkedin size={20} /></a>
                <a href="#" className="text-emerald-500/40 hover:text-emerald-400 transition-colors"><Github size={20} /></a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="aspect-square rounded-3xl bg-emerald-950/40 border border-emerald-500/20 p-8 flex flex-col justify-between overflow-hidden group shadow-sm relative backdrop-blur-md">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStackIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="h-full flex flex-col justify-between"
                >
                  <div className="flex justify-end items-start z-10">
                    <div className="text-right">
                      <div className="text-[10px] font-mono text-emerald-500/60 uppercase tracking-[0.2em] mb-1">Current Focus</div>
                      <div className="text-sm font-mono text-emerald-100 font-bold">{stackItems[currentStackIndex].title}</div>
                    </div>
                  </div>
                  
                  <div className="space-y-6 z-10">
                    <div className="text-sm text-emerald-100/70 leading-relaxed font-medium">
                      {stackItems[currentStackIndex].description}
                    </div>
                    <div className="flex gap-2">
                      {stackItems.map((_, i) => (
                        <div 
                          key={i} 
                          className={`h-1 rounded-full transition-all duration-500 ${i === currentStackIndex ? 'w-8 bg-emerald-500' : 'w-2 bg-emerald-900'}`} 
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Expertise Section */}
      <div className="bg-emerald-950/30 py-20 border-y border-emerald-500/10 backdrop-blur-sm">
        <Section>
          <div className="grid md:grid-cols-3 gap-16">
            <div className="space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-emerald-900/40 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shadow-sm backdrop-blur-md">
                <Globe size={28} />
              </div>
              <h3 className="text-2xl font-bold text-emerald-50 font-serif">Web Automation</h3>
              <p className="text-base text-emerald-100 leading-relaxed font-semibold">
                I leverage Playwright and Cypress to build robust, end-to-end web testing frameworks that survive complex user journeys and browser fragmentation.
              </p>
            </div>
            <div className="space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-emerald-900/40 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shadow-sm backdrop-blur-md">
                <Smartphone size={28} />
              </div>
              <h3 className="text-2xl font-bold text-emerald-50 font-serif">Mobile Resilience</h3>
              <p className="text-base text-emerald-100 leading-relaxed font-semibold">
                Using Appium, I ensure native and hybrid apps perform flawlessly across the diverse mobile landscape, from high-end devices to budget handsets.
              </p>
            </div>
            <div className="space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-emerald-900/40 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shadow-sm backdrop-blur-md">
                <Cpu size={28} />
              </div>
              <h3 className="text-2xl font-bold text-emerald-50 font-serif">Backend Integrity</h3>
              <p className="text-base text-emerald-100 leading-relaxed font-semibold">
                I validate high-traffic financial endpoints and develop backend solutions with Deno to optimize internal testing pipelines and reliability.
              </p>
            </div>
          </div>
        </Section>
      </div>

      {/* Experience Section */}
      <Section id="experience">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-emerald-50 font-serif">Professional Journey</h2>
          <div className="h-1.5 w-24 bg-emerald-500 rounded-full" />
        </div>

        <div className="space-y-20">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-[200px_1fr] gap-8 group"
            >
              <div className="text-sm font-mono text-emerald-400 pt-1 font-bold">
                {exp.period}
              </div>
              <div className="relative pl-8 border-l-2 border-emerald-900/50 group-last:border-transparent">
                <div className="absolute left-[-9px] top-2 w-4 h-4 rounded-full border-4 border-[#010a08] bg-emerald-900 group-hover:bg-emerald-500 transition-all duration-300" />
                <h3 className="text-3xl font-bold mb-2 text-emerald-50 font-serif tracking-tight">{exp.company}</h3>
                <div className="text-emerald-400 font-bold mb-8 uppercase tracking-widest text-xs">{exp.role}</div>
                
                <ul className="space-y-4 mb-10">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-emerald-50 text-base leading-relaxed flex gap-4 font-bold">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                      {achievement}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-3">
                  {exp.skills.map((skill, i) => (
                    <Badge key={i}>{skill}</Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Skills Section */}
      <div className="bg-emerald-950/20 py-24 border-t border-emerald-500/10 backdrop-blur-sm" id="skills">
        <Section>
          <div className="mb-20 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-emerald-50 font-serif">Technical Arsenal</h2>
            <p className="text-lg text-emerald-400 font-semibold italic">Tools and technologies I use to build and break software.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="p-8 rounded-3xl bg-emerald-900/20 border border-emerald-500/10 hover:border-emerald-500/30 transition-all duration-300 shadow-sm backdrop-blur-md">
                <h4 className="text-[10px] font-mono text-emerald-400 uppercase tracking-[0.2em] mb-8 font-bold">{skillGroup.category}</h4>
                <ul className="space-y-4">
                  {skillGroup.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-base font-bold text-emerald-50">
                      <CheckCircle2 size={16} className="text-emerald-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>
      </div>

      {/* Contact Section */}
      <Section id="contact" className="text-center">
        <div className="max-w-3xl mx-auto space-y-16">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-emerald-50 font-serif leading-[1.1]">
            Let's build something <br />
            <span className="text-emerald-500 italic">unbreakable.</span>
          </h2>
          <p className="text-xl text-emerald-100/70 font-semibold max-w-xl mx-auto">
            Currently open to QA Automation and Software Quality Assurance leadership opportunities where I can make a tangible impact.
            Based in Lagos, Nigeria & Remote.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 pt-8">
            <a href="mailto:olugbadeoluwashina@gmail.com" className="flex items-center gap-4 text-xl font-bold text-emerald-100 hover:text-emerald-500 transition-colors group">
              <div className="w-12 h-12 rounded-full bg-emerald-900/50 flex items-center justify-center group-hover:bg-emerald-900 transition-colors text-emerald-400">
                <Mail size={24} />
              </div>
              olugbadeoluwashina@gmail.com
            </a>
            <a href="tel:+2349067718695" className="flex items-center gap-4 text-xl font-bold text-emerald-100 hover:text-emerald-500 transition-colors group">
              <div className="w-12 h-12 rounded-full bg-emerald-900/50 flex items-center justify-center group-hover:bg-emerald-900 transition-colors text-emerald-400">
                <Phone size={24} />
              </div>
              (+234) 906-7718-695
            </a>
          </div>

          <div className="pt-12 flex justify-center gap-6">
            <Badge>Lagos, Nigeria</Badge>
            <Badge>Remote Friendly</Badge>
            <Badge>Full-time</Badge>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-12 border-t border-emerald-900/50 text-center bg-transparent">
        <div className="text-[10px] font-mono text-emerald-700 uppercase tracking-[0.2em] font-bold">
          &copy; 2026 OLUGBADE OLUWASHINA. BUILT WITH REACT & TAILWIND.
        </div>
      </footer>
    </div>
  );
}
