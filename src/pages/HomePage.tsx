import SectionHeading from '../components/SectionHeading'

const stats = [
  { value: '120+', label: 'projetos entregues' },
  { value: '4.9/5', label: 'avaliação média' },
  { value: '18', label: 'especialistas em time' },
  { value: '96%', label: 'clientes recorrentes' },
]

const services = [
  {
    title: 'Branding & posicionamento',
    description:
      'Criação de identidade visual, narrativa e elementos que ajudam a marca a se destacar no mercado.',
  },
  {
    title: 'Sites institucionais',
    description:
      'Landing pages e sites corporativos modernos, rápidos e pensados para conversão.',
  },
  {
    title: 'E-commerce',
    description:
      'Loja virtual com arquitetura clara, UX otimizada e experiência de compra amigável.',
  },
  {
    title: 'UX/UI design',
    description:
      'Interfaces pensadas para facilitar a jornada do usuário e aumentar a retenção.',
  },
]

const projects = [
  {
    category: 'Startup',
    title: 'NovaWave',
    description: 'Plataforma de gestão para vendas e automação de rotina de times comerciais.',
    accent: 'from-cyan-500 to-blue-500',
  },
  {
    category: 'E-commerce',
    title: 'Luna Casa',
    description: 'Loja premium com foco em performance, conversão e storytelling de marca.',
    accent: 'from-violet-500 to-fuchsia-500',
  },
  {
    category: 'Serviços',
    title: 'BlueMinds',
    description: 'Site institucional para captação de clientes e apresentação de soluções digitais.',
    accent: 'from-emerald-500 to-teal-500',
  },
]

const process = [
  'Diagnóstico e objetivos',
  'Estratégia e wireframes',
  'Design e desenvolvimento',
  'Entregue e otimização',
]

const testimonials = [
  {
    quote:
      'A VM transformou nossa presença digital e trouxe clareza para a nossa proposta de valor. O resultado foi imediato.',
    name: 'Marina Souza',
    role: 'Fundadora · NovaWave',
  },
  {
    quote:
      'Equipe muito ágil, visual impecável e atenção aos detalhes. O site ficou além do que imaginávamos.',
    name: 'Rafael Costa',
    role: 'Diretor · BlueMinds',
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 font-black text-slate-950">
              VM
            </div>
            <div>
              <div className="text-lg font-bold tracking-tight">VM Recriação</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-slate-400">digital studio</div>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#servicos" className="transition hover:text-white">
              Serviços
            </a>
            <a href="#projects" className="transition hover:text-white">
              Projetos
            </a>
            <a href="#processo" className="transition hover:text-white">
              Processo
            </a>
            <a href="#contato" className="transition hover:text-white">
              Contato
            </a>
          </nav>

          <a
            href="#contato"
            className="rounded-full border border-cyan-400/40 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-100 transition hover:bg-cyan-500/20"
          >
            Fale conosco
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.18),transparent_28%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-28">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-cyan-200">
                Estratégia digital
              </span>

              <h1 className="mt-6 max-w-xl text-4xl font-black tracking-tight text-white md:text-6xl">
                Transformamos ideias em experiências que geram resultado.
              </h1>

              <p className="mt-6 max-w-lg text-lg leading-8 text-slate-300">
                Ajudamos marcas a crescer com identidade forte, sites modernos e interfaces que convertem
                atenção em relacionamento e vendas.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
                >
                  Ver projetos
                </a>
                <a
                  href="mailto:contato@vmstudio.com.br"
                  className="rounded-full border border-slate-700 bg-slate-900/80 px-6 py-3 text-sm font-semibold text-white transition hover:border-slate-500"
                >
                  Solicitar proposta
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-8 text-left">
                {stats.slice(0, 3).map((item) => (
                  <div key={item.label}>
                    <div className="text-2xl font-black text-white">{item.value}</div>
                    <div className="text-sm text-slate-400">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl shadow-cyan-950/40 backdrop-blur">
                <div className="rounded-[1.5rem] border border-slate-700 bg-slate-900 p-5">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      <span className="h-3 w-3 rounded-full bg-red-400" />
                      <span className="h-3 w-3 rounded-full bg-yellow-400" />
                      <span className="h-3 w-3 rounded-full bg-emerald-400" />
                    </div>
                    <span className="text-xs uppercase tracking-[0.2em] text-slate-400">dashboard</span>
                  </div>

                  <div className="mt-6 space-y-5">
                    <div className="rounded-2xl bg-gradient-to-r from-cyan-500/20 to-blue-500/10 p-4">
                      <div className="text-sm text-cyan-200">Performance geral</div>
                      <div className="mt-2 flex items-end justify-between">
                        <div className="text-3xl font-black text-white">+82%</div>
                        <div className="text-xs text-emerald-300">↑ 18,4% / mês</div>
                      </div>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="rounded-2xl border border-slate-700 bg-slate-950 p-4">
                        <div className="text-sm text-slate-400">Leads</div>
                        <div className="mt-2 text-2xl font-bold text-white">3.2k</div>
                        <div className="mt-3 h-20 rounded-xl bg-gradient-to-t from-cyan-500/30 to-slate-800" />
                      </div>

                      <div className="rounded-2xl border border-slate-700 bg-slate-950 p-4">
                        <div className="text-sm text-slate-400">Vendas</div>
                        <div className="mt-2 text-2xl font-bold text-white">64%</div>
                        <div className="mt-3 flex h-20 items-end gap-2">
                          {[32, 48, 56, 74, 92, 64].map((height, index) => (
                            <span
                              key={height + index}
                              className="flex-1 rounded-t-lg bg-gradient-to-t from-violet-500 to-cyan-400"
                              style={{ height: `${height}%` }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="servicos" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionHeading
            eyebrow="Serviços"
            title="Tudo que sua marca precisa para crescer online"
            description="Projetos estratégicos para fortalecer a presença digital e transformar visitas em oportunidades."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 transition hover:-translate-y-1 hover:border-cyan-500/40 hover:bg-slate-900"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 text-xl text-cyan-200">
                  ✦
                </div>
                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="border-y border-white/10 bg-slate-900/40">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <SectionHeading
              eyebrow="Projetos"
              title="Resultados que conectam estratégia, design e tecnologia"
              description="Trabalhamos com projetos orientados por experiência, clareza e performance para expansão de marcas."
            />

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="group overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-950"
                >
                  <div className={`h-48 bg-gradient-to-br ${project.accent} p-6`}>
                    <div className="flex h-full items-end justify-between">
                      <span className="rounded-full bg-slate-950/40 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-white/90">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-300">{project.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="processo" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionHeading
            eyebrow="Processo"
            title="Uma execução simples, clara e orientada para resultados"
            description="Cada etapa é pensada para reduzir ruído, aumentar velocidade e deixar a comunicação entre time e cliente mais eficiente."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {process.map((step, index) => (
              <div key={step} className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/10 text-sm font-bold text-cyan-200">
                  0{index + 1}
                </div>
                <h3 className="text-lg font-semibold text-white">{step}</h3>
              </div>
            ))}
          </div>
        </section>

        <section className="border-y border-white/10 bg-slate-900/60">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <SectionHeading
              eyebrow="Depoimentos"
              title="Marcas que confiaram na nossa visão"
              description="Nosso foco é criar experiências que reforcem a confiança da marca e ajudem na sua expansão."
            />

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {testimonials.map((item) => (
                <blockquote
                  key={item.name}
                  className="rounded-[2rem] border border-slate-800 bg-slate-950 p-8"
                >
                  <p className="text-lg leading-8 text-slate-200">“{item.quote}”</p>
                  <footer className="mt-6 border-t border-slate-800 pt-5">
                    <div className="font-semibold text-white">{item.name}</div>
                    <div className="text-sm text-slate-400">{item.role}</div>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="rounded-[2rem] border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 via-slate-900 to-violet-500/10 p-8 md:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <div className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-200">Próximo passo</div>
                <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
                  Vamos dar vida à sua próxima presença digital.
                </h2>
              </div>

              <a
                href="mailto:contato@vmstudio.com.br"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
              >
                Solicitar orçamento
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
