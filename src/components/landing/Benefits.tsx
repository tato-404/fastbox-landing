import { Reveal } from "./Reveal";

// Imagens em /public/images/ — substitua os arquivos (.svg ou .jpg) para trocar.
const cards = [
  {
    title: "Snacks",
    img: "/images/snacks.svg",
    desc: "Salgadinhos, chocolates e barras de cereal sempre à mão.",
  },
  {
    title: "Bebidas",
    img: "/images/bebidas.svg",
    desc: "Água, refrigerantes, sucos e energéticos gelados 24h.",
  },
  {
    title: "Higiene",
    img: "/images/higiene.svg",
    desc: "Itens essenciais de higiene pessoal sem precisar sair de casa.",
  },
];

export function Benefits() {
  return (
    <section id="beneficios" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-widest text-primary font-semibold">
              O que tem na FastBox
            </span>
            <h2
              className="mt-4 font-extrabold tracking-tight leading-tight"
              style={{ fontSize: "clamp(2rem, 4.2vw, 3.25rem)" }}
            >
              Um mix completo, <span className="text-glow">na hora que precisar</span>.
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 120}>
              <article className="group relative overflow-hidden rounded-3xl border border-border/60 bg-card glow-hover">
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={c.img}
                    alt={c.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      // Fallback caso a imagem ainda não exista
                      (e.currentTarget as HTMLImageElement).style.display = "none";
                    }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">{c.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
