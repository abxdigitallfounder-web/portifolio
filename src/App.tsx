import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react'
import { Linkedin, Github, ArrowLeft, ArrowRight, Trophy, X, ZoomIn, ZoomOut, Moon, Sun, Languages } from 'lucide-react'
import avatar from './avatar.jpg'
import premiacao1 from './premiacoes.png'
import premiacao2 from './metricas-info.png'
import metricasDrop from './metricas-drop.png'
import resultados from './resultados.jpg'

type Lang = 'pt' | 'en'

const LangContext = createContext<Lang>('pt')
const useLang = () => useContext(LangContext)

const i18n = {
  pt: {
    hello: 'Olá, eu sou',
    role: 'Gestor de Tráfego',
    downloadCV: 'Baixar CV',
    contact: 'Contato',
    sectionAbout: 'Sobre Mim',
    sectionMilestones: 'Marcos de Resultado',
    sectionTravel: 'Experiência Internacional',
    sectionExperience: 'Experiência',
    sectionProjects: 'Projetos',
    sectionEducation: 'Formação',
    sectionAwards: 'Premiações',
    sectionLanguages: 'Idiomas',
    about:
      'Gestor de Tráfego e Performance focado em Direct Response, com experiência consolidada na escala de e-commerces e infoprodutos. Como estudante de Administração, alio visão estratégica de negócios à execução técnica avançada em Meta Ads, Google Ads e na arquitetura de funis de vendas de alta conversão. Possuo expertise na otimização de métricas-chave (CPA, ROAS, LTV) e na implementação de trackeamento avançado, garantindo total precisão dos dados para a tomada de decisão. Com inglês avançado e forte base em automações e copywriting, busco ambientes de alta performance para escalar ofertas e maximizar o retorno sobre o investimento.',
    milestonesText:
      'Resultados construídos ao longo da minha trajetória como gestor de tráfego e vendedor independente no marketing digital.',
    travelText1:
      'Essa experiência representa um período de imersão pessoal e profissional, onde tive a oportunidade de viajar por mais de 11 países.',
    travelText2:
      'Durante esse tempo, desenvolvi meu inglês na prática, ampliando minha comunicação e adaptação em ambientes internacionais.',
    seeMore: 'Ver →',
    zoomIn: 'Aumentar zoom',
    zoomOut: 'Diminuir zoom',
    close: 'Fechar',
    prev: 'Anterior',
    next: 'Próximo',
    enlarge: 'Ampliar',
    enlargeResults: 'Ampliar imagem de resultados',
    resultsAlt: 'Marcos de Resultado',
    photo: 'Foto',
    goTo: 'Ir para',
    avatarAlt: 'Arthur Batista — Gestor de Tráfego e Performance',
    location: 'Goiânia, BR',
    toggleDark: 'Ativar modo escuro',
    toggleLight: 'Ativar modo claro',
    toggleLang: 'Mudar idioma',
    awardTitle: 'Placas de Faturamento',
    awardDesc: 'R$ 1.000.000, R$ 500.000 e R$ 100.000 faturados',
    languages: [
      { name: 'Português', level: 'Nativo', percent: 100 },
      { name: 'Inglês', level: 'Intermediário', percent: 55 },
    ],
    experiences: [
      {
        title: 'Gestor de Tráfego e Performance Sênior',
        period: ['2025', '2026'],
        company: 'ABX Digital',
        bullets: [
          'Conduzi pesquisas de mercado aprofundadas para identificar tendências e estruturar ofertas de alta conversão.',
          'Desenvolvi landing pages e apliquei técnicas de CRO para otimizar funis de vendas de ponta a ponta, tomando decisões baseadas em métricas de receita.',
          'Gerenciei operações de tráfego pago em alta escala no Facebook Ads e Google Ads, administrando eficientemente um grande volume diário de anúncios.',
          'Implementei tagueamento e rastreamento de dados avançado via Google Analytics 4 (GA4) para embasar análises precisas de performance e jornada do usuário.',
        ],
      },
      {
        title: 'Gestor de Tráfego Sênior',
        period: ['2023', '2025'],
        company: 'Shark E-commerce',
        bullets: [
          'Estruturei e executei estratégias de campanhas de anúncios em escala, com foco em aquisição e performance para e-commerce.',
          'Monitorei e otimizei métricas-chave (como CPA, ROAS e LTV), garantindo a eficiência do orçamento e o máximo retorno sobre o investimento.',
          'Desenvolvi e aprimorei funis de vendas completos, aplicando técnicas de CRO para maximizar a conversão em cada etapa da jornada do cliente.',
          'Gerenciei o fluxo de criação e validação de criativos publicitários, orientando a estratégias.',
        ],
      },
      {
        title: 'Assistente Administrativo',
        period: ['2022', '2023'],
        company: 'Fonte Irrigação',
        bullets: [
          'Profissional administrativo multitarefa, focado em otimizar processos.',
          'Suporte operacional a diferentes áreas, garantindo fluxo eficiente das rotinas.',
        ],
      },
    ],
    education: [
      { degree: 'Bacharelado em Administração', school: 'PUC Goiás', period: '2025 – 2029', gpa: 'Em curso' },
      { degree: 'Empreendedorismo em Marketing Digital', school: 'Harvard Business School Online', period: 'mai 2025 – jul 2025', gpa: 'Concluído' },
      { degree: 'Administração de negócios com Inteligência Artificial', school: 'Wharton Online', period: 'set 2025 – nov 2025', gpa: 'Concluído' },
      { degree: 'Marketing Digital e E-commerce', school: 'Google Career Certificates', period: 'jan 2026 – abr 2026', gpa: 'Concluído' },
    ],
    projects: [
      {
        title: 'Estrategista de Tráfego e Performance',
        period: '2025 – 2026',
        bullets: [
          'Atuei estrategicamente com a equipe no mapeamento de tendências de mercado para conceber e validar ofertas de infoprodutos focados no nicho de concursos públicos.',
          'Desenvolvi a arquitetura do funil de vendas de ponta a ponta, aplicando metodologias de CRO nas páginas para garantir a máxima retenção e conversão de usuários.',
          'Gerenciei o tráfego pago nas redes Meta (Facebook Ads) e Google Ads, operando uma esteira ágil de testes com alta rotatividade e gestão de 20 novos criativos/anúncios diários.',
          'Implementei o tagueamento avançado de eventos via Google Analytics 4 (GA4) e estruturei análises de comportamento e usabilidade com Microsoft Clarity para otimização contínua da jornada de compra.',
        ],
      },
      {
        title: 'Escala de E-commerce de Organização',
        period: '2023 – 2025',
        stats: ['CPL −42%', '+2400% tráfego'],
        description:
          'Escala massiva de volume (de 1.2k para 30k cliques diários) com redução de custo de aquisição. Operação alavancada por testes de novos formatos para expansão de público, tracking avançado, aumento de tier da conta e congruência total do funil.',
      },
      {
        title: 'Otimização de Performance B2B',
        period: '2023',
        stats: ['LTV +60%', 'CTR 2.4x'],
        description:
          'Implementação de eventos avançados de tracking, segmentações refinadas no Meta Ads e CRO em landing pages para gerar leads qualificados.',
      },
    ],
  },
  en: {
    hello: "Hi, I'm",
    role: 'Traffic Manager',
    downloadCV: 'Download CV',
    contact: 'Contact',
    sectionAbout: 'About Me',
    sectionMilestones: 'Result Milestones',
    sectionTravel: 'International Experience',
    sectionExperience: 'Experience',
    sectionProjects: 'Projects',
    sectionEducation: 'Education',
    sectionAwards: 'Awards',
    sectionLanguages: 'Languages',
    about:
      'Traffic and Performance Manager focused on Direct Response, with consolidated experience scaling e-commerces and info-products. As a Business Administration student, I combine strategic business vision with advanced technical execution on Meta Ads, Google Ads, and high-conversion sales funnel architecture. I have expertise in optimizing key metrics (CPA, ROAS, LTV) and implementing advanced tracking, ensuring data accuracy for decision-making. With advanced English and a strong foundation in automations and copywriting, I seek high-performance environments to scale offers and maximize ROI.',
    milestonesText:
      'Results built throughout my journey as a traffic manager and independent digital marketing seller.',
    travelText1:
      'This experience represents a period of personal and professional immersion, where I had the opportunity to travel through more than 11 countries.',
    travelText2:
      'During this time, I developed my English in practice, expanding my communication and adaptation in international environments.',
    seeMore: 'View →',
    zoomIn: 'Zoom in',
    zoomOut: 'Zoom out',
    close: 'Close',
    prev: 'Previous',
    next: 'Next',
    enlarge: 'Enlarge',
    enlargeResults: 'Enlarge results image',
    resultsAlt: 'Result Milestones',
    photo: 'Photo',
    goTo: 'Go to',
    avatarAlt: 'Arthur Batista — Traffic and Performance Manager',
    location: 'Goiânia, BR',
    toggleDark: 'Enable dark mode',
    toggleLight: 'Enable light mode',
    toggleLang: 'Change language',
    awardTitle: 'Revenue Plaques',
    awardDesc: 'R$ 1,000,000, R$ 500,000 and R$ 100,000 in revenue',
    languages: [
      { name: 'Portuguese', level: 'Native', percent: 100 },
      { name: 'English', level: 'Intermediate', percent: 55 },
    ],
    experiences: [
      {
        title: 'Senior Traffic and Performance Manager',
        period: ['2025', '2026'],
        company: 'ABX Digital',
        bullets: [
          'Conducted in-depth market research to identify trends and structure high-conversion offers.',
          'Developed landing pages and applied CRO techniques to optimize end-to-end sales funnels, making revenue-metric-based decisions.',
          'Managed large-scale paid traffic operations on Facebook Ads and Google Ads, efficiently handling a high daily volume of ads.',
          'Implemented advanced tagging and data tracking via Google Analytics 4 (GA4) to support precise performance and user journey analysis.',
        ],
      },
      {
        title: 'Senior Traffic Manager',
        period: ['2023', '2025'],
        company: 'Shark E-commerce',
        bullets: [
          'Structured and executed scalable ad campaign strategies focused on acquisition and performance for e-commerce.',
          'Monitored and optimized key metrics (such as CPA, ROAS, and LTV), ensuring budget efficiency and maximum ROI.',
          'Developed and refined complete sales funnels, applying CRO techniques to maximize conversion at each customer journey stage.',
          'Managed the creative production and validation flow, guiding strategy.',
        ],
      },
      {
        title: 'Administrative Assistant',
        period: ['2022', '2023'],
        company: 'Fonte Irrigação',
        bullets: [
          'Multi-tasking administrative professional focused on optimizing processes.',
          'Operational support across different areas, ensuring efficient routine flow.',
        ],
      },
    ],
    education: [
      { degree: "Bachelor's in Business Administration", school: 'PUC Goiás', period: '2025 – 2029', gpa: 'In progress' },
      { degree: 'Entrepreneurship in Digital Marketing', school: 'Harvard Business School Online', period: 'May 2025 – Jul 2025', gpa: 'Completed' },
      { degree: 'Business Administration with AI', school: 'Wharton Online', period: 'Sep 2025 – Nov 2025', gpa: 'Completed' },
      { degree: 'Digital Marketing and E-commerce', school: 'Google Career Certificates', period: 'Jan 2026 – Apr 2026', gpa: 'Completed' },
    ],
    projects: [
      {
        title: 'Traffic and Performance Strategist',
        period: '2025 – 2026',
        bullets: [
          'Worked strategically with the team mapping market trends to design and validate info-product offers focused on the public exams niche.',
          'Developed end-to-end sales funnel architecture, applying CRO methodologies on pages to ensure maximum retention and user conversion.',
          'Managed paid traffic on Meta (Facebook Ads) and Google Ads, running an agile testing pipeline with high turnover and management of 20 new creatives/ads per day.',
          'Implemented advanced event tagging via Google Analytics 4 (GA4) and structured behavior and usability analyses with Microsoft Clarity for continuous purchase journey optimization.',
        ],
      },
      {
        title: 'Organization E-commerce Scaling',
        period: '2023 – 2025',
        stats: ['CPL −42%', '+2400% traffic'],
        description:
          'Massive volume scaling (from 1.2k to 30k daily clicks) with reduced acquisition cost. Operation leveraged by tests of new formats for audience expansion, advanced tracking, account tier increase, and full funnel congruence.',
      },
      {
        title: 'B2B Performance Optimization',
        period: '2023',
        stats: ['LTV +60%', 'CTR 2.4x'],
        description:
          'Advanced tracking event implementation, refined Meta Ads segmentations, and landing page CRO to generate qualified leads.',
      },
    ],
  },
} as const

type Project = {
  title: string
  period: string
  stats?: readonly string[]
  description?: string
  bullets?: readonly string[]
  image?: string
  href?: string
}

const projectImages = [premiacao2, metricasDrop, undefined] as const

type Award = { src: string; title: string; description?: string }

function Carousel({ items }: { items: Award[] }) {
  const [index, setIndex] = useState(0)
  const openLightbox = useLightbox()
  const lang = useLang()
  const t = i18n[lang]
  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length)
  const next = () => setIndex((i) => (i + 1) % items.length)

  return (
    <div className="relative">
      <div className="relative overflow-hidden rounded-2xl bg-card shadow-sm ring-1 ring-line">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {items.map((a, i) => (
            <div key={i} className="w-full shrink-0">
              <button
                type="button"
                onClick={() => openLightbox({ src: a.src, alt: a.title })}
                className="block aspect-[16/10] w-full overflow-hidden bg-line transition hover:opacity-90"
                aria-label={`${t.enlarge} ${a.title}`}
              >
                <img
                  src={a.src}
                  alt={a.title}
                  className="h-full w-full cursor-zoom-in object-cover"
                />
              </button>
              <div className="px-4 py-3">
                <div className="flex items-center gap-2">
                  <Trophy className="h-4 w-4 text-accent" />
                  <h3 className="font-serif text-[15px]">{a.title}</h3>
                </div>
                {a.description && (
                  <p className="mt-1 text-[12px] text-muted">{a.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {items.length > 1 && (
          <>
            <button
              type="button"
              onClick={prev}
              aria-label={t.prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-1 text-ink/80 transition hover:scale-125 hover:text-ink"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label={t.next}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-ink/80 transition hover:scale-125 hover:text-ink"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </>
        )}
      </div>

      {items.length > 1 && (
        <div className="mt-3 flex items-center justify-center gap-1.5">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`${t.goTo} ${i + 1}`}
              className={
                'h-1.5 rounded-full transition-all ' +
                (i === index ? 'w-6 bg-accent' : 'w-1.5 bg-line hover:bg-muted')
              }
            />
          ))}
        </div>
      )}
    </div>
  )
}

const travelPhotoModules = import.meta.glob('./carrosel/*.{webp,jpg,jpeg,png}', {
  eager: true,
  import: 'default',
}) as Record<string, string>

// Ordem desejada: IMG_3184 primeiro, restante na ordem alfabética
const travelPhotosOrder = ['IMG_3184']
const travelPhotos: string[] = (() => {
  const entries = Object.entries(travelPhotoModules)
  const pinned: string[] = []
  travelPhotosOrder.forEach((name) => {
    const found = entries.find(([k]) => k.includes(name))
    if (found) pinned.push(found[1])
  })
  const rest = entries
    .filter(([k]) => !travelPhotosOrder.some((n) => k.includes(n)))
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, v]) => v)
  return [...pinned, ...rest]
})()

function PhotoCarousel({ items }: { items: string[] }) {
  const [index, setIndex] = useState(0)
  const openLightbox = useLightbox()
  const lang = useLang()
  const t = i18n[lang]
  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length)
  const next = () => setIndex((i) => (i + 1) % items.length)

  return (
    <div className="relative">
      <div className="relative overflow-hidden rounded-2xl bg-card shadow-sm ring-1 ring-line">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {items.map((src, i) => (
            <button
              key={i}
              type="button"
              onClick={() => openLightbox({ src, alt: `${t.photo} ${i + 1}` })}
              className="flex aspect-[4/5] w-full shrink-0 items-center justify-center overflow-hidden bg-stat-bg transition hover:opacity-90 sm:aspect-[4/3]"
              aria-label={`${t.enlarge} ${t.photo.toLowerCase()} ${i + 1}`}
            >
              <img
                src={src}
                alt={`${t.photo} ${i + 1}`}
                className="max-h-full max-w-full cursor-zoom-in object-contain"
              />
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={prev}
          aria-label={t.prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 p-1 text-ink/80 transition hover:scale-125 hover:text-ink"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={next}
          aria-label={t.next}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-ink/80 transition hover:scale-125 hover:text-ink"
        >
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>

      <div className="mt-3 flex items-center justify-center gap-1.5">
        {items.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`${t.goTo} ${i + 1}`}
            className={
              'h-1.5 rounded-full transition-all ' +
              (i === index ? 'w-6 bg-accent' : 'w-1.5 bg-line hover:bg-muted')
            }
          />
        ))}
      </div>
    </div>
  )
}

type LightboxItem = { src: string; alt?: string }
const LightboxContext = createContext<(item: LightboxItem) => void>(() => {})
const useLightbox = () => useContext(LightboxContext)

function Lightbox({
  item,
  onClose,
}: {
  item: LightboxItem | null
  onClose: () => void
}) {
  const [zoomed, setZoomed] = useState(false)
  const [origin, setOrigin] = useState('50% 50%')
  const lang = useLang()
  const t = i18n[lang]

  useEffect(() => {
    if (!item) return
    setZoomed(false)
    setOrigin('50% 50%')
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [item, onClose])

  if (!item) return null
  return (
    <div
      role="dialog"
      aria-modal="true"
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black/85 p-4 backdrop-blur-sm animate-fadeUp"
    >
      <div className="fixed right-4 top-4 z-10 flex items-center gap-2">
        <button
          type="button"
          aria-label={t.zoomOut}
          onClick={(e) => {
            e.stopPropagation()
            setOrigin('50% 50%')
            setZoomed(false)
          }}
          disabled={!zoomed}
          className="rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20 disabled:opacity-40"
        >
          <ZoomOut className="h-5 w-5" />
        </button>
        <button
          type="button"
          aria-label={t.zoomIn}
          onClick={(e) => {
            e.stopPropagation()
            setOrigin('50% 50%')
            setZoomed(true)
          }}
          disabled={zoomed}
          className="rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20 disabled:opacity-40"
        >
          <ZoomIn className="h-5 w-5" />
        </button>
        <button
          type="button"
          aria-label={t.close}
          onClick={onClose}
          className="rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
      <img
        src={item.src}
        alt={item.alt ?? ''}
        onClick={(e) => {
          e.stopPropagation()
          const rect = (e.currentTarget as HTMLImageElement).getBoundingClientRect()
          const x = ((e.clientX - rect.left) / rect.width) * 100
          const y = ((e.clientY - rect.top) / rect.height) * 100
          setOrigin(`${x}% ${y}%`)
          setZoomed((z) => !z)
        }}
        onMouseMove={(e) => {
          if (!zoomed) return
          const rect = (e.currentTarget as HTMLImageElement).getBoundingClientRect()
          const x = ((e.clientX - rect.left) / rect.width) * 100
          const y = ((e.clientY - rect.top) / rect.height) * 100
          setOrigin(`${x}% ${y}%`)
        }}
        style={{ transformOrigin: origin }}
        className={
          'max-h-[92vh] max-w-[95vw] rounded-xl object-contain shadow-2xl transition-transform duration-300 ease-out ' +
          (zoomed ? 'scale-[2.2] cursor-zoom-out' : 'scale-100 cursor-zoom-in')
        }
      />
    </div>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5 flex items-center gap-2.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
      <span>{children}</span>
      <span className="h-px flex-1 bg-line" />
    </div>
  )
}

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section className="border-b border-line px-5 py-8 last:border-b-0 md:px-8">
      <div className="mx-auto md:max-w-3xl">
        <SectionLabel>{label}</SectionLabel>
        {children}
      </div>
    </section>
  )
}

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            ;(e.target as HTMLElement).style.animationPlayState = 'running'
            obs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.1 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

function RevealCard({
  className = '',
  delay = 0,
  children,
}: {
  className?: string
  delay?: number
  children: React.ReactNode
}) {
  const ref = useReveal<HTMLDivElement>()
  return (
    <div
      ref={ref}
      className={`animate-fadeUp anim-paused opacity-0 ${className}`}
      style={{ animationDelay: `${delay}s`, animationFillMode: 'both' }}
      onAnimationStart={(e) => {
        ;(e.currentTarget as HTMLElement).style.opacity = '1'
      }}
    >
      {children}
    </div>
  )
}

export default function App() {
  const [lightbox, setLightbox] = useState<LightboxItem | null>(null)
  const open = useCallback((item: LightboxItem) => setLightbox(item), [])
  const close = useCallback(() => setLightbox(null), [])

  const [dark, setDark] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false
    const saved = localStorage.getItem('theme')
    if (saved) return saved === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  const userChoseLang = useRef(
    typeof window !== 'undefined' && !!localStorage.getItem('lang'),
  )
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window === 'undefined') return 'pt'
    const saved = localStorage.getItem('lang') as Lang | null
    if (saved === 'pt' || saved === 'en') return saved
    return navigator.language.toLowerCase().startsWith('pt') ? 'pt' : 'en'
  })
  const setLang = useCallback((updater: Lang | ((l: Lang) => Lang)) => {
    userChoseLang.current = true
    setLangState((prev) => {
      const next = typeof updater === 'function' ? (updater as (l: Lang) => Lang)(prev) : updater
      localStorage.setItem('lang', next)
      return next
    })
  }, [])

  useEffect(() => {
    if (userChoseLang.current) return
    const controller = new AbortController()
    fetch('https://ipwho.is/', { signal: controller.signal })
      .then((r) => r.json())
      .then((data: { success?: boolean; country_code?: string }) => {
        if (userChoseLang.current) return
        if (data && data.success !== false && data.country_code) {
          setLangState(data.country_code === 'BR' ? 'pt' : 'en')
        }
      })
      .catch(() => {})
    return () => controller.abort()
  }, [])

  useEffect(() => {
    const root = document.documentElement
    if (dark) root.classList.add('dark')
    else root.classList.remove('dark')
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  useEffect(() => {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en'
  }, [lang])

  const t = i18n[lang]
  const projects: Project[] = t.projects.map((p, i) => ({
    ...p,
    image: projectImages[i],
    href: '#',
  }))
  const awards: Award[] = [
    { src: premiacao1, title: t.awardTitle, description: t.awardDesc },
  ]

  return (
    <LangContext.Provider value={lang}>
    <LightboxContext.Provider value={open}>
    <Lightbox item={lightbox} onClose={close} />
    <div className="fixed right-4 top-4 z-40 flex items-center gap-2">
      <button
        type="button"
        onClick={() => setLang((l) => (l === 'pt' ? 'en' : 'pt'))}
        aria-label={t.toggleLang}
        className="flex items-center gap-1.5 rounded-full bg-card px-3 py-2 text-[11px] font-semibold uppercase tracking-wider text-ink shadow-lg ring-1 ring-line transition hover:scale-105"
      >
        <Languages className="h-3.5 w-3.5" />
        {lang === 'pt' ? 'PT' : 'EN'}
      </button>
      <button
        type="button"
        onClick={() => setDark((d) => !d)}
        aria-label={dark ? t.toggleLight : t.toggleDark}
        className="rounded-full bg-card p-2.5 text-ink shadow-lg ring-1 ring-line transition hover:scale-110"
      >
        {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      </button>
    </div>
    <main className="min-h-screen">
      {/* PROFILE */}
      <section
        id="profile"
        className="relative mx-auto flex flex-col items-center justify-center gap-10 overflow-hidden bg-bg px-6 py-8 font-poppins text-ink md:max-w-4xl md:flex-row md:gap-16 md:px-12 md:py-16"
      >
        <span className="pointer-events-none absolute -right-10 -top-16 h-56 w-56 rounded-full border border-ink/10" />
        <span className="pointer-events-none absolute -bottom-20 -left-8 h-44 w-44 rounded-full border border-ink/[0.06]" />

        {/* Profile picture */}
        <div
          className="relative animate-fadeUp"
          style={{ animationDelay: '0.05s' }}
        >
          <div className="rounded-full bg-gradient-to-br from-ink/10 to-ink/0 p-1 ring-1 ring-ink/15">
            <div className="h-56 w-56 overflow-hidden rounded-full md:h-72 md:w-72">
              <img
                src={avatar}
                alt={t.avatarAlt}
                className="h-full w-full scale-[1.6] object-cover object-[50%_0%]"
              />
            </div>
          </div>
        </div>

        {/* Text */}
        <div className="relative flex flex-col items-center text-center md:items-start md:text-left">
          <p
            className="mb-2 text-[13px] font-light tracking-wide text-ink/55 animate-fadeUp"
            style={{ animationDelay: '0.12s' }}
          >
            {t.hello}
          </p>
          <h1
            className="mb-2 text-[44px] font-bold leading-[1.05] tracking-[-0.02em] md:text-[56px] animate-fadeUp"
            style={{ animationDelay: '0.18s' }}
          >
            Arthur Batista
          </h1>
          <p
            className="mb-7 text-[15px] font-medium text-accent animate-fadeUp"
            style={{ animationDelay: '0.24s' }}
          >
            {t.role}
          </p>

          {/* Buttons */}
          <div
            className="mb-6 flex flex-wrap items-center justify-center gap-3 animate-fadeUp md:justify-start"
            style={{ animationDelay: '0.30s' }}
          >
            <a
              href="https://canva.link/xriwzx81ib5h89s"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-ink/30 bg-transparent px-6 py-2.5 text-[13px] font-medium text-ink transition hover:bg-ink hover:text-bg"
            >
              {t.downloadCV}
            </a>
            <a
              href="https://wa.me/5562981286765"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-ink px-6 py-2.5 text-[13px] font-medium text-bg transition hover:scale-[1.03]"
            >
              {t.contact}
            </a>
          </div>

          {/* Socials */}
          <div
            className="flex items-center gap-4 animate-fadeUp"
            style={{ animationDelay: '0.36s' }}
          >
            <a
              href="https://www.linkedin.com/in/arthur-batista-ba34b0338/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="My LinkedIn profile"
              className="rounded-full p-2 text-ink/70 ring-1 ring-ink/20 transition hover:scale-110 hover:text-ink hover:ring-ink/60"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="My Github profile"
              className="rounded-full p-2 text-ink/70 ring-1 ring-ink/20 transition hover:scale-110 hover:text-ink hover:ring-ink/60"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* SOBRE MIM */}
      <Section label={t.sectionAbout}>
        <p className="text-[13.5px] leading-relaxed text-muted">{t.about}</p>
      </Section>

      {/* MILESTONES */}
      <Section label={t.sectionMilestones}>
        <button
          type="button"
          onClick={() => open({ src: resultados, alt: t.resultsAlt })}
          className="mb-4 block aspect-[16/9] w-full overflow-hidden rounded-2xl bg-line ring-1 ring-line transition hover:opacity-90"
          aria-label={t.enlargeResults}
        >
          <img
            src={resultados}
            alt={t.resultsAlt}
            className="h-full w-full cursor-zoom-in object-cover"
          />
        </button>
        <p className="text-[13.5px] leading-relaxed text-muted">
          {t.milestonesText}
        </p>
      </Section>

      {/* TRAVEL */}
      <Section label={t.sectionTravel}>
        <PhotoCarousel items={travelPhotos} />
        <p className="mt-4 text-[13.5px] leading-relaxed text-muted">
          {t.travelText1}
        </p>
        <p className="mt-2 text-[13.5px] leading-relaxed text-muted">
          {t.travelText2}
        </p>
      </Section>

      {/* EXPERIENCE */}
      <Section label={t.sectionExperience}>
        {t.experiences.map((exp, i) => (
          <RevealCard
            key={exp.title + exp.company}
            delay={0.05 + i * 0.07}
            className="relative mb-3 overflow-hidden rounded-2xl bg-card p-5"
          >
            <span className="absolute left-0 top-0 h-full w-[3px] rounded-r bg-accent" />
            <div className="mb-1 flex items-start justify-between gap-2">
              <h3 className="flex-1 font-serif text-[17px] leading-tight">
                {exp.title}
              </h3>
              <div className="shrink-0 pt-0.5 text-right text-[10px] font-medium tracking-wide text-muted">
                {exp.period[0]}
                <br />
                {exp.period[1]}
              </div>
            </div>
            <div className="mb-3.5 text-xs font-semibold text-accent">
              {exp.company}
            </div>
            <ul className="flex flex-col gap-2">
              {exp.bullets.map((b) => (
                <li
                  key={b}
                  className="relative pl-3.5 text-[13px] leading-snug text-muted before:absolute before:left-0 before:top-px before:text-[11px] before:text-accent before:content-['→']"
                >
                  {b}
                </li>
              ))}
            </ul>
          </RevealCard>
        ))}
      </Section>

      {/* PROJECTS */}
      <Section label={t.sectionProjects}>
        {projects.map((p, i) => (
          <RevealCard
            key={p.title}
            delay={0.05 + i * 0.07}
            className="mb-3 overflow-hidden rounded-2xl bg-card ring-1 ring-line"
          >
            {p.image && (
              <button
                type="button"
                onClick={() => open({ src: p.image as string, alt: p.title })}
                className="block aspect-[16/9] w-full overflow-hidden bg-line transition hover:opacity-90"
                aria-label={`${t.enlarge} ${p.title}`}
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full cursor-zoom-in object-cover"
                />
              </button>
            )}
            <div className="p-5">
            <div className="mb-2 flex items-start justify-between gap-2">
              <h3 className="flex-1 font-serif text-base leading-tight">
                {p.title}
              </h3>
              {p.href && (
                <a
                  href={p.href}
                  className="rounded-full bg-accent-soft px-2.5 py-0.5 text-[11px] font-semibold text-accent transition hover:scale-105"
                >
                  {t.seeMore}
                </a>
              )}
            </div>
            <div className="mb-2.5 text-[11px] text-muted">{p.period}</div>
            {p.stats && p.stats.length > 0 && (
              <div className="flex flex-wrap gap-1.5">
                {p.stats.map((s) => (
                  <span
                    key={s}
                    className="rounded-full bg-stat-bg px-2.5 py-0.5 text-xs font-semibold text-ink"
                  >
                    {s}
                  </span>
                ))}
              </div>
            )}
            {p.description && (
              <p className="mt-2 text-[13px] leading-snug text-muted">
                {p.description}
              </p>
            )}
            {p.bullets && p.bullets.length > 0 && (
              <ul className="mt-2 flex flex-col gap-2">
                {p.bullets.map((b) => (
                  <li
                    key={b}
                    className="relative pl-3.5 text-[13px] leading-snug text-muted before:absolute before:left-0 before:top-px before:text-[11px] before:text-accent before:content-['→']"
                  >
                    {b}
                  </li>
                ))}
              </ul>
            )}
            </div>
          </RevealCard>
        ))}
      </Section>

      {/* EDUCATION */}
      <Section label={t.sectionEducation}>
        {t.education.map((e) => (
          <div
            key={e.degree}
            className="flex items-start justify-between gap-3 border-b border-line py-4 last:border-b-0"
          >
            <div>
              <div className="mb-0.5 font-serif text-[15px]">{e.degree}</div>
              <div className="text-xs text-muted">{e.school}</div>
            </div>
            <div className="shrink-0 text-right">
              <div className="mb-1 text-[11px] text-muted">{e.period}</div>
              <div className="text-[13px] font-bold text-accent">{e.gpa}</div>
            </div>
          </div>
        ))}
      </Section>

      {/* AWARDS */}
      <Section label={t.sectionAwards}>
        <Carousel items={awards} />
      </Section>

      {/* IDIOMAS */}
      <Section label={t.sectionLanguages}>
        <div className="flex flex-col gap-4">
          {t.languages.map((l) => (
            <div key={l.name}>
              <div className="mb-1.5 flex items-baseline justify-between">
                <span className="font-serif text-[15px]">{l.name}</span>
                <span className="text-[11px] text-muted">{l.level}</span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-line">
                <div
                  className="h-full rounded-full bg-accent transition-all"
                  style={{ width: `${l.percent}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="bg-ink px-6 py-10 text-center text-xs text-bg/50">
        <div className="mx-auto md:max-w-3xl">
          <strong className="mb-1.5 block font-serif text-[22px] font-normal text-bg">
            Arthur Batista
          </strong>
          arthurbatista12312@gmail.com · {t.location}
        </div>
      </footer>
    </main>
    </LightboxContext.Provider>
    </LangContext.Provider>
  )
}
