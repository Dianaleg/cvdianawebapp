import React, { useState } from "react";
import {
  ArrowRight,
  Award,
  BookOpen,
  Brain,
  Briefcase,
  CheckCircle2,
  ChevronRight,
  Cpu,
  Database,
  Globe,
  Languages,
  Linkedin,
  Layers,
  Lightbulb,
  LineChart,
  Mail,
  MessageSquare,
  Phone,
  Sparkles,
  Star,
  Terminal,
  Target,
  Users,
  Zap,
} from "lucide-react";
import hero from './assets/hero.png';
import photoshop from './assets/photoshop.png';
import lightroom from './assets/lightroom.png';
import affinity from './assets/affinity.png';
import canva from './assets/canva.png';
import figmaLogo from './assets/figma.png';
import woocommerce from './assets/woocommerce.png';
import capcut from './assets/capcut.png';
import davinciresolve from './assets/davinciresolve.png';
import chatgpt from './assets/chatgpt.png';
import lovable from './assets/lovable.png';
import cursorLogo from './assets/cursor.png';
import nanobanana from './assets/nanobanana.jpg';

/**
 * IMPORTANTE (sin side-effects):
 * No cargues Google Fonts desde JS (document/head) dentro del módulo.
 * Añade los <link> de Google Fonts en /index.html (en <head>).
 */

const PROFILE_FALLBACK_IMAGE =
  "";

function setSafeImageFallback(e, fallbackSrc) {
  const img = e.currentTarget;
  // Evita bucles si también falla el fallback
  img.onerror = null;
  img.src = fallbackSrc;
}

const EXPERIENCE = [
  {
    id: 1,
    role: "Directora de Marketing y Desarrollo de Negocio",
    company: "Muutos evolution consulting SLU",
    period: "03/23 - 03/26",
    category: "main",
    description:
      "Responsable de la estrategia de marketing, posicionamiento y desarrollo de negocio. Liderazgo de proyectos de innovación, innovación abierta, emprendimiento y digitalización, aplicando metodologías ágiles.",
    highlights: [
      "Coordinación y formación del equipo de marketing junior.",
      "Impartición de formaciones, talleres y mentorías a emprendedores.",
      "Programas en universidades y formación profesional.",
      "Optimización de procesos mediante IA aplicada al negocio.",
    ],
  },
  {
    id: 2,
    role: "Partner & Business Development",
    company: "Ziga Group",
    period: "10/22 - 03/23",
    category: "main",
    description:
      "Desarrollo de proyecto empresarial propio y apoyo en la creación de modelos de negocio escalables, diagramas de procesos, cronogramas y estrategias de crecimiento.",
    highlights: [
      "Diseño de modelos de negocio escalables y operativos.",
      "Implementación de estrategias de marketing digital y growth.",
    ],
  },
  {
    id: 5,
    role: "CEO & Founder",
    company: "Eranimal Startup",
    period: "10/17 - 01/21",
    category: "main",
    description:
      "Análisis de mercado y desarrollo del plan de negocio B2B2C, incluyendo modelo económico, inversión inicial y estrategia de marketing. Gestión integral del proyecto: operaciones, logística, administración y finanzas.",
    highlights: [
      "Lanzamiento de tienda online e-commerce con expansión internacional.",
      "Estrategia de branding y posicionamiento en el nicho de mercado.",
      "Participación en programas de aceleración para startups.",
    ],
  },
  {
    id: 3,
    role: "Brand Manager",
    company: "Citroën, Peugeot y Opel",
    period: "03/22 - 07/22",
    category: "main",
    description:
      "Responsable de diseñar, crear y analizar las campañas de pago online automatizadas y la publicidad offline con foco a la captación de leads.",
    highlights: [
      "Gestión de presupuestos y planes de marketing de +10K/mes.",
      "Gestión de redes sociales y organización de eventos con partners.",
      "Automatización de embudos de captación de alta conversión.",
    ],
  },
  {
    id: 4,
    role: "Responsable de Marketing",
    company: "Inmobiliaria Finques Imperial",
    period: "02/21 - 02/22",
    category: "main",
    description:
      "Creación de estrategias de captación de leads para portales inmobiliarios y branding para apertura de nueva línea de negocio.",
    highlights: [
      "Producción y edición de fotografía y vídeo profesional para web.",
      "Diseño de cartelería publicitaria y materiales de marca.",
      "Gestión de presencia en portales inmobiliarios líderes.",
      "Decoración de viviendas, homestaging y grabación profesional.",
    ],
  },
  {
    id: 6,
    role: "Content Creator & Personal Branding",
    company: "Marca personal Linkedin",
    period: "07/25 - Actualidad",
    category: "extra",
    description:
      "Creación de contenido y estrategia de marca personal compartiendo conocimiento sobre marketing, emprendimiento e innovación.",
    highlights: [
      "Desarrollo de una comunidad digital activa en redes profesionales.",
      "Estrategias de visibilidad y posicionamiento como líder de opinión.",
    ],
  },
  {
    id: 7,
    role: "Formadora en Marketing, IA & Metodologías Ágiles",
    company: "Muutos evolution consulting SLU",
    period: "03/23 - 03/26",
    category: "extra",
    description:
      "Impartición de formación especializada en inteligencia artificial aplicada a procesos de marketing y design thinking.",
    highlights: [
      "Optimización de procesos de marketing mediante herramientas de IA.",
      "Creación de asistentes personalizados (GPTs) y automatización de flujos.",
      "Talleres de innovación para institutos y programas de emprendimiento.",
    ],
  },
  {
    id: 8,
    role: "Profesora Universitaria Adjunta",
    company: "LCI Barcelona",
    period: "09/23 - 11/23",
    category: "extra",
    description:
      "Tutora de cursos en la escuela de moda LCI, impartiendo la asignatura de Gestión de Empresa.",
    highlights: [
      "Formación, corrección y evaluación de proyectos empresariales.",
      "Mentoría a estudiantes sobre estructura y organización corporativa.",
    ],
  },
  {
    id: 10,
    role: "Desarrollo de negocio y marketing",
    company: "Redessa",
    period: "11/2020 - 06/2021",
    category: "education",
    description:
      "Programa especializado en estrategias de crecimiento empresarial y optimización de canales de marketing.",
    highlights: ["Formación técnica en planes de negocio y expansión comercial."],
  },
  {
    id: 11,
    role: "Emprendimiento y desarrollo de negocio",
    company: "Cátedra URV",
    period: "10/2017 - 10/2020",
    category: "education",
    description:
      "Formación integral en la creación de startups y gestión estratégica de nuevas líneas de negocio.",
    highlights: ["Validación de modelos de negocio y metodologías de innovación."],
  },
  {
    id: 12,
    role: "Nutrición y dietética veterinaria",
    company: "Esneca",
    period: "10/2018 - 04/2020",
    category: "education",
    description:
      "Especialización técnica enfocada en el sector animal, complementando la visión de negocio para el proyecto Eranimal.",
    highlights: ["Conocimientos profundos sobre dietética y salud veterinaria."],
  },
];

const SKILLS_LIST = [
  "Growth marketing",
  "IA aplicada a marketing y negocio",
  "Posicionamiento de marca",
  "Desarrollo de negocio",
  "Innovación y emprendimiento",
  "Metodologías ágiles",
  "Gestión de equipos y proyectos",
  "Optimización de procesos",
  "Organización de eventos",
  "Formación y mentorías",
];

const SOFT_SKILLS_LIST = [
  { name: "Liderazgo", icon: Award },
  { name: "Gestión de equipos", icon: Users },
  { name: "Toma de decisiones", icon: Target },
  { name: "Organización", icon: Layers },
  { name: "Creatividad", icon: Lightbulb },
  { name: "Analítica", icon: LineChart },
];

const LANGUAGES_LIST = [
  { name: "Español", level: "Nativo", percentage: 100 },
  { name: "Catalán", level: "Nativo", percentage: 100 },
  { name: "Inglés", level: "B2", percentage: 85 },
  { name: "Rumano", level: "Nativo", percentage: 100 },
];

const TOOLS_DATA = {
  "Diseño y contenido digital": [
    { name: "Illustrator", customUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/500px-Adobe_Illustrator_CC_icon.svg.png", color: "FF9A00" },
    { name: "Photoshop", customIcon: photoshop },
    { name: "Lightroom", customIcon: lightroom },
    { name: "Affinity", customIcon: affinity },
    { name: "Canva", customIcon: canva }
  ],
  "Web, UX/UI y e-commerce": [
    { name: "Figma", customIcon: figmaLogo },
    { name: "WordPress", slug: "wordpress", color: "21759B" },
    { name: "Elementor", slug: "elementor", color: "92003B" },
    { name: "WooCommerce", customIcon: woocommerce }
  ],
  "Edición y creación de vídeo": [
    { name: "Capcut", customIcon: capcut },
    { name: "DaVinci Resolve", customIcon: davinciresolve }
  ],
  "Gestión de proyectos y organización": [
    { name: "Trello", slug: "trello", color: "0052CC" },
    { name: "Airtable", slug: "airtable", color: "18BFFF" },
    { name: "Asana", slug: "asana", color: "F06A6A" },
    { name: "Miro", slug: "miro", color: "FFD02F" }
  ],
  "LLMs y herramientas de IA generativa": [
    { name: "ChatGPT", customIcon: chatgpt },
    { name: "Gemini", slug: "googlegemini", color: "8E75FF" },
    { name: "GitHub", slug: "github", color: "181717" },
    { name: "NanoBanana", customIcon: nanobanana }
    
  ],
  "Vibe Coding": [
    { name: "Lovable", customIcon: lovable },
    { name: "Cursor", customIcon: cursorLogo }
  ]
};

const AI_LAB_DEMO_MESSAGES = [
  {
    role: "ai",
    text: "Demo estática del AI Lab: en esta versión pública no hay IA conectada (sin API keys).",
  },
  {
    role: "user",
    text: "¿Cómo enfocarías una estrategia de crecimiento para una startup early-stage?",
  },
  {
    role: "ai",
    text: "Empezaría por definir ICP y propuesta de valor, instrumentar métricas (funnel) y priorizar 2-3 palancas de adquisición con experimentación semanal.",
  },
];

const ToolLogo = ({ tool }) => {
  const [hasError, setHasError] = useState(false);

  if (tool.customIcon) {
    return (
      <div className="flex flex-col items-center">
        <img
          src={tool.customIcon}
          alt={tool.name}
          className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
        />
      </div>
    );
  }

  if (tool.slug && !hasError) {
    return (
      <div className="flex flex-col items-center">
        <img
          src={`https://cdn.simpleicons.org/${tool.slug}/${tool.color}`}
          alt={tool.name}
          className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
          onError={() => setHasError(true)}
          loading="lazy"
          decoding="async"
        />
      </div>
    );
  }

  const Icon = tool.fallback || Globe;
  return (
    <Icon
      size={36}
      style={{ color: `#${tool.color}` }}
      className="group-hover:scale-110 transition-transform duration-300"
    />
  );
};

const App = () => {
  const [activeFilter, setActiveFilter] = useState("main");
  const filteredExperience = EXPERIENCE.filter((exp) => exp.category === activeFilter);

  return (
    <div className="min-h-screen bg-gray-50 text-slate-800 font-['Poppins'] selection:bg-teal-100">
      {/* NAVEGACIÓN */}
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center text-white font-bold">
            DG
          </div>
          <span className="font-['Playfair_Display'] text-xl tracking-tight">
            Diana Ghiocel
          </span>
        </div>

        <div className="hidden md:flex space-x-8 text-sm font-semibold text-slate-500">
          <a href="#experiencia" className="hover:text-teal-600 transition-colors">
            Trayectoria profesional
          </a>
          <a href="#skills" className="hover:text-teal-600 transition-colors">
            Skills
          </a>
          <a href="#tools" className="hover:text-teal-600 transition-colors">
          ⭐ Fav Tools
          </a>
          <a
            href="#ia"
            className="hover:text-teal-600 transition-colors flex items-center gap-1"
          >
            <Sparkles size={14} className="text-teal-500" /> AI Lab
          </a>
        </div>

        <div className="flex gap-4">
          <a
            href="https://linkedin.com/in/dianaaleg"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Perfil de LinkedIn"
            className="p-2 text-slate-400 hover:text-teal-600 transition-colors"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </nav>

      {/* SECCIÓN HERO */}
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700">
          <div className="inline-flex items-center px-4 py-1.5 bg-teal-50 text-teal-700 rounded-full text-xs font-bold tracking-widest uppercase border border-teal-100">
            Marketing & Business Director
          </div>
          <h1 className="text-5xl lg:text-7xl font-['Playfair_Display'] leading-[1.1] text-slate-900">
            Construyo y hago crecer{" "}
            <span className="text-teal-600 italic">proyectos digitales.</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
            Trabajando en marketing, emprendimiento e innovación con emprendedores y startups
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="mailto:dianalegx@gmail.com"
              className="px-8 py-4 bg-[#ea2c81] text-white rounded-full font-semibold hover:opacity-90 transition-all shadow-xl flex items-center gap-2"
            >
              <Mail size={18} /> Contactar con Diana
            </a>

            <a
              href="https://wa.me/34693013614"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#25D366] text-white rounded-full font-semibold hover:opacity-90 transition-all shadow-xl flex items-center gap-2"
            >
              <Phone size={18} /> WhatsApp
            </a>
          </div>
        </div>

        <div className="relative group animate-in fade-in slide-in-from-right duration-700">
          <div className="absolute -inset-4 bg-teal-500/10 rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity"></div>

          <div className="relative aspect-[4/5] bg-slate-200 rounded-3xl overflow-hidden border-8 border-white shadow-2xl">
            <img
              src={hero}
              alt="Diana Ghiocel"
              className="w-full h-full object-cover transition-all duration-700 scale-105 group-hover:scale-100"
              onError={(e) => setSafeImageFallback(e, PROFILE_FALLBACK_IMAGE)}
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="absolute -bottom-10 -right-6 md:-right-10 bg-white p-6 rounded-2xl shadow-2xl max-w-[340px] border border-slate-50 animate-bounce-slow z-10">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2.5 bg-teal-500 text-white rounded-xl shadow-lg shadow-teal-200">
                <Sparkles size={20} />
              </div>
              <div className="font-bold text-slate-900 text-lg">10 años de experiencia</div>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Estrategia, marketing, branding, crecimiento, innovación y mentoring a
              emprendedores
            </p>
          </div>
        </div>
      </section>

      {/* TRAYECTORIA */}
      <section id="experiencia" className="py-24 max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <h2 className="text-4xl font-['Playfair_Display'] text-slate-900 mb-4 tracking-tight font-bold underline decoration-teal-500/30">
              Trayectoria profesional
            </h2>
            <div className="h-1.5 w-16 bg-teal-500 rounded-full"></div>
          </div>

          <div className="flex flex-wrap gap-3">
            {[
              { id: "main", label: "Experiencias" },
              { id: "extra", label: "Complementarias" },
              { id: "education", label: "Estudios" },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`px-8 py-3 rounded-full text-xs font-bold transition-all duration-300 border-2 ${
                  activeFilter === f.id
                    ? f.id === "main"
                      ? "bg-teal-500 text-white border-teal-500 shadow-xl"
                      : f.id === "extra"
                      ? "bg-[#ea2c81] text-white border-[#ea2c81] shadow-xl"
                      : "bg-[#c99a5b] text-white border-[#c99a5b] shadow-xl"
                    : "bg-white text-slate-400 border-slate-100 hover:border-slate-200"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-16 relative">
          <div
            className={`absolute left-[23px] top-6 bottom-6 w-[3px] opacity-20 transition-colors duration-500 ${
              activeFilter === "main"
                ? "bg-teal-500"
                : activeFilter === "extra"
                ? "bg-[#ea2c81]"
                : "bg-[#c99a5b]"
            }`}
          ></div>

          {filteredExperience.map((exp) => (
            <div
              key={exp.id}
              className="relative pl-20 group animate-in fade-in slide-in-from-bottom duration-500"
            >
              <div
                className={`absolute left-0 top-1 w-12 h-12 bg-white border-4 rounded-2xl flex items-center justify-center z-10 transition-all duration-500 shadow-lg ${
                  activeFilter === "main"
                    ? "border-slate-100 group-hover:border-teal-500 group-hover:bg-teal-500 group-hover:text-white"
                    : activeFilter === "extra"
                    ? "border-slate-100 group-hover:border-[#ea2c81] group-hover:bg-[#ea2c81] group-hover:text-white"
                    : "border-slate-100 group-hover:border-[#c99a5b] group-hover:bg-[#c99a5b] group-hover:text-white"
                }`}
              >
                {activeFilter === "main" ? (
                  <Briefcase size={22} />
                ) : activeFilter === "extra" ? (
                  <Star size={22} />
                ) : (
                  <BookOpen size={22} />
                )}
              </div>

              <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500">
                <div className="flex flex-col lg:flex-row justify-between mb-6 gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-1">{exp.role}</h3>
                    <div
                      className={`flex items-center gap-2 font-semibold ${
                        activeFilter === "main"
                          ? "text-teal-600"
                          : activeFilter === "extra"
                          ? "text-[#ea2c81]"
                          : "text-[#c99a5b]"
                      }`}
                    >
                      <Globe size={16} /> {exp.company}
                    </div>
                  </div>

                  <span className="text-sm font-bold text-slate-400 bg-slate-50 px-5 py-2 rounded-full self-start border border-slate-100">
                    {exp.period}
                  </span>
                </div>

                <p
                  className="text-slate-600 mb-8 leading-relaxed text-lg font-light italic border-l-4 pl-6"
                  style={{
                    borderColor:
                      activeFilter === "main"
                        ? "#14b8a6"
                        : activeFilter === "extra"
                        ? "#ea2c81"
                        : "#c99a5b",
                  }}
                >
                  "{exp.description}"
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {exp.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-slate-500">
                      <ChevronRight size={16} className="mt-1 text-slate-300" />
                      <span className="leading-relaxed">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS & IDIOMAS */}
      <section id="skills" className="py-24 bg-white border-y border-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20 text-center">
            <h2 className="text-4xl font-['Playfair_Display'] mb-4 text-slate-900 font-bold">
              Skills, Soft Skills e Idiomas
            </h2>
            <div className="h-1.5 w-20 bg-teal-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Skills */}
            <div className="p-8 rounded-[2.5rem] border border-slate-100 bg-gray-50/50 shadow-sm hover:shadow-xl transition-all">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-teal-500 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-teal-100">
                  <Brain size={24} />
                </div>
                <h3 className="text-xl font-bold">Skills</h3>
              </div>

              <ul className="space-y-3">
                {SKILLS_LIST.map((skill, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-600">
                    <CheckCircle2 size={16} className="text-teal-500 flex-shrink-0" />
                    <span className="text-sm font-medium">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Soft Skills */}
            <div className="p-8 rounded-[2.5rem] border border-slate-100 bg-gray-50/50 shadow-sm hover:shadow-xl transition-all">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-[#ea2c81] text-white rounded-2xl flex items-center justify-center shadow-lg shadow-pink-100">
                  <Users size={24} />
                </div>
                <h3 className="text-xl font-bold">Soft Skills</h3>
              </div>

              <div className="space-y-3">
                {SOFT_SKILLS_LIST.map((skill, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 bg-white rounded-2xl border border-slate-100 shadow-sm"
                  >
                    <div className="p-1.5 bg-pink-50 text-[#ea2c81] rounded-xl">
                      <skill.icon size={18} />
                    </div>
                    <span className="text-sm font-semibold text-slate-700">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Idiomas */}
            <div className="p-8 rounded-[2.5rem] border border-slate-100 bg-gray-50/50 shadow-sm hover:shadow-xl transition-all">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-[#c99a5b] text-white rounded-2xl flex items-center justify-center shadow-lg shadow-yellow-100">
                  <Languages size={24} />
                </div>
                <h3 className="text-xl font-bold">Idiomas</h3>
              </div>

              <div className="space-y-6">
                {LANGUAGES_LIST.map((lang, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between items-center text-sm">
                      <span className="font-bold text-slate-700">{lang.name}</span>
                      <span className="text-slate-400 font-medium">{lang.level}</span>
                    </div>
                    <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#c99a5b] rounded-full transition-all duration-1000"
                        style={{ width: `${lang.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TOOLS */}
      <section id="tools" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20 text-center">
            <h2 className="text-4xl font-['Playfair_Display'] mb-4 text-slate-900 font-bold">
            ⭐ Fav Tools
            </h2>
            <div className="h-1.5 w-20 bg-teal-500 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-24">
            {Object.entries(TOOLS_DATA).map(([category, tools], index) => (
              <div key={index} className="animate-in fade-in duration-700">
                <h3 className="text-sm uppercase tracking-[0.2em] font-bold text-slate-400 mb-12 text-center border-b border-slate-200 pb-4 inline-block mx-auto flex w-fit">
                  {category}
                </h3>

                <div className="flex flex-wrap justify-center gap-8 md:gap-14">
                  {tools.map((tool, i) => (
                    <div key={i} className="flex flex-col items-center group">
                      <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center shadow-md border border-slate-100 group-hover:border-teal-400 group-hover:-translate-y-2 group-hover:shadow-lg transition-all duration-300 overflow-hidden">
                        <ToolLogo tool={tool} />
                      </div>
                      <span className="mt-4 text-[10px] font-bold text-slate-400 group-hover:text-slate-900 transition-colors uppercase tracking-widest">
                        {tool.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI LAB (UI DEMO SIN CHAT/IA) */}
      <section id="ia" className="py-24 bg-slate-900 text-white relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-teal-500/5 blur-[120px] pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center mb-12">
            <div className="p-4 bg-teal-500/20 rounded-3xl text-teal-400 mb-6 border border-teal-500/30">
              <Brain size={40} />
            </div>
            <h2 className="text-5xl font-['Playfair_Display'] mb-4 tracking-tight font-bold italic">
              AI Intelligence Lab
            </h2>
            <p className="text-slate-400 text-lg font-light leading-relaxed max-w-2xl">
              Sección demo: mantiene la UI del laboratorio de IA, pero sin chat real ni llamadas
              externas (portfolio público sin API keys).
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8 md:p-10 backdrop-blur-md min-h-[500px]">
            <div className="animate-in fade-in slide-in-from-right-4 duration-500">
              <div className="flex items-center gap-4 mb-6">
                <MessageSquare size={28} className="text-[#c99a5b]" />
                <h3 className="text-2xl font-bold tracking-tight">Entrevista a mi Clon IA ✨</h3>
              </div>

              <p className="text-slate-300 mb-8 text-sm">
                Demo estática: el chat está desactivado en esta web pública.
              </p>

              <div className="bg-[#0f172a] border border-white/10 rounded-3xl h-[400px] flex flex-col overflow-hidden shadow-inner">
                <div className="flex-1 overflow-y-auto p-6 space-y-6">
                  {AI_LAB_DEMO_MESSAGES.map((msg, idx) => (
                    <div
                      key={idx}
                      className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                      {msg.role === "ai" && (
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#c99a5b] to-yellow-600 flex items-center justify-center text-xs font-bold mr-3 flex-shrink-0 mt-1 shadow-lg text-white">
                          DG
                        </div>
                      )}
                      <div
                        className={`max-w-[75%] rounded-2xl p-4 text-sm leading-relaxed ${
                          msg.role === "user"
                            ? "bg-[#c99a5b] text-white rounded-tr-sm shadow-md"
                            : "bg-slate-800 text-slate-200 border border-white/10 rounded-tl-sm shadow-sm"
                        }`}
                      >
                        {msg.text}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-slate-900 border-t border-white/10 flex gap-3">
                  <input
                    type="text"
                    placeholder="Demo: input desactivado (sin IA conectada)"
                    readOnly
                    onKeyDown={(e) => {
                      // Sustitución de onKeyPress (deprecated) -> onKeyDown
                      if (e.key === "Enter") e.preventDefault();
                    }}
                    className="flex-1 bg-white/5 border border-white/10 rounded-full px-6 py-3 text-sm focus:outline-none focus:border-[#c99a5b] text-white placeholder-slate-400 transition-colors"
                  />

                  <button
                    type="button"
                    disabled
                    aria-disabled="true"
                    className="w-12 h-12 bg-[#c99a5b]/60 rounded-full flex items-center justify-center text-white shadow-lg shadow-yellow-500/10 cursor-not-allowed"
                    title="Demo estática: chat desactivado"
                  >
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-20 bg-white border-t border-slate-100 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-600 rounded-2xl flex items-center justify-center text-white font-bold mx-auto mb-8 shadow-2xl">
            DG
          </div>
          <h2 className="text-3xl font-['Playfair_Display'] text-slate-900 mb-4 font-bold">
            Diana Ghiocel
          </h2>

          <div className="flex justify-center gap-10 text-slate-400 mb-12">
            <a
              href="mailto:dianalegx@gmail.com"
              className="hover:text-teal-600 transition-all hover:scale-110"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
            <a
              href="tel:+34693013614"
              className="hover:text-teal-600 transition-all hover:scale-110"
              aria-label="Teléfono"
            >
              <Phone size={24} />
            </a>
            <a
              href="https://linkedin.com/in/dianaaleg"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-600 transition-all hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
          </div>

          <p className="text-[11px] text-slate-300 uppercase tracking-[0.3em] font-bold">
            © 2026 Diana Ghiocel • Marketing & Business Director • Tarragona, ES
          </p>
        </div>
      </footer>

      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
        html { scroll-behavior: smooth; }
      `}</style>
    </div>
  );
};

export default App;
