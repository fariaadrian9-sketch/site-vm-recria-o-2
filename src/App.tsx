export default function App() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-slate-100">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 inline-flex items-center rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-sm font-medium text-sky-200">
          Figma Make App
        </div>

        <h1 className="max-w-3xl text-4xl font-black tracking-tight text-white md:text-6xl">
          Build the next great idea with a clean React + Vite starter.
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-slate-300">
          This project is ready for design-driven front-end work, quick iteration, and a polished
          Tailwind-based interface.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            ['React', 'Modern component architecture with fast development loops.'],
            ['Vite', 'Lightning-fast builds and instant feedback.'],
            ['Tailwind', 'Utility-first styling for responsive UIs.'],
          ].map(([title, description]) => (
            <article
              key={title}
              className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 shadow-lg shadow-slate-950/30"
            >
              <h2 className="text-xl font-semibold text-white">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
