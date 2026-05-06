## FastBox — Landing Page

Landing moderna, tema escuro com verde neon (#00ff88), construída em uma única rota (`/`) usando o template atual. Sem backend, sem chamadas externas — o formulário apenas simula envio com toast.

### Identidade visual

- Fundo quase preto (`#0a0a0a`), texto branco, acento `#00ff88`.
- Tipografia: Inter (Google Fonts), pesos 400/600/800. Hero em tamanho enorme (clamp 2.5rem → 5rem).
- Bordas arredondadas (rounded-2xl), bastante respiro, sombras com glow verde (`shadow-[0_0_40px_rgba(0,255,136,0.25)]`).
- Animações suaves de fade/slide ao entrar na viewport e hover com leve scale/glow.

Tokens vão para `src/styles.css` (variáveis `--background`, `--primary`, `--ring` em oklch + utilitário `.glow`).

### Estrutura da página (rota única `/`)

Tudo renderizado em `src/routes/index.tsx`, montando componentes separados em `src/components/landing/`:

```text
Navbar (fixa, blur)
 └─ Logo "Fast" + "Box" (verde) | Links: Sobre, Como funciona, Benefícios, FAQ, Contato | CTA "Solicitar instalação"

Hero
 └─ Gradiente radial verde sutil
 └─ H1: "Tenha um mercado 24h dentro do seu condomínio — sem complicação" ("24h" em verde glow)
 └─ Subtítulo + 2 CTAs (verde sólido / outline verde)

Sobre — "O que é a FastBox" (2 colunas)
 ├─ Esquerda: título com "dentro do condomínio" em verde, parágrafo, lista com ícones (lucide: Box, Smartphone, ShieldCheck)
 └─ Direita: card com "24h" gigante + texto

Como funciona — 3 passos curtos (cards numerados)

Benefícios — Grid de 3 cards com imagem (Snacks, Bebidas, Higiene)
 └─ Imagens em /public/images/{snacks,bebidas,higiene}.jpg
 └─ Hover: zoom suave na imagem + borda glow verde

FAQ — Accordion (shadcn) com 4–5 perguntas comuns

Contato
 ├─ Bloco CTA: "Quer levar a FastBox para o seu condomínio?" + botão grande "Falar agora no WhatsApp"
 └─ Formulário (Nome, Email, Mensagem) → onSubmit chama toast.success("Recebemos seus dados, vamos te chamar no WhatsApp") e limpa campos

Footer simples (logo + copyright + links âncora)

WhatsAppFloat — botão fixo bottom-right, verde neon, animação pulse
```

### Navegação

A navbar usa âncoras com scroll suave (`#sobre`, `#como-funciona`, `#beneficios`, `#faq`, `#contato`) — todas as seções vivem na home, conforme o briefing pediu uma landing única. `scroll-behavior: smooth` no html.

### Comportamento

- Formulário: validação leve no client (campos obrigatórios, email válido), simula envio com `setTimeout` 600ms e dispara `toast` (sonner já disponível). Nenhuma requisição.
- Botões "Solicitar instalação", "Falar no WhatsApp" e flutuante: abrem `https://wa.me/5511999999999?text=...` (placeholder, com comentário `// TODO: trocar pelo número real`).
- Animações de entrada: hook `useInView` simples com IntersectionObserver aplicando classe `opacity-100 translate-y-0`.

### Arquivos a criar/editar

- `src/routes/index.tsx` — substitui o placeholder, monta as seções.
- `src/components/landing/Navbar.tsx`
- `src/components/landing/Hero.tsx`
- `src/components/landing/About.tsx`
- `src/components/landing/HowItWorks.tsx`
- `src/components/landing/Benefits.tsx` (cards com imagens)
- `src/components/landing/Faq.tsx`
- `src/components/landing/Contact.tsx` (CTA + formulário)
- `src/components/landing/Footer.tsx`
- `src/components/landing/WhatsAppFloat.tsx`
- `src/components/landing/Reveal.tsx` (wrapper de animação on-scroll)
- `src/lib/contact.ts` — constante `WHATSAPP_NUMBER = "5511999999999"` para troca fácil.
- `src/styles.css` — ajusta tokens para tema dark neon e adiciona utilitários `.text-glow`, `.btn-glow`.
- `src/routes/__root.tsx` — atualiza `<title>`, `<meta description>` e adiciona `<Toaster />` (sonner) + classe `dark` no `<html>`.
- `public/images/snacks.jpg`, `bebidas.jpg`, `higiene.jpg` — placeholders (imagens cinza com label) para você substituir depois.

### Detalhes técnicos

- Mantemos TanStack Start (template do projeto), tudo em uma rota — funciona como SPA visual e faz deploy normalmente.
- Sem dependências novas: `lucide-react`, `sonner`, shadcn `accordion/button/input/textarea/label` já existem.
- Responsivo mobile-first: navbar vira menu hamburguer (Sheet do shadcn) abaixo de `md`, grids colapsam para 1 coluna, hero ajusta tamanho com `clamp()`.
- Acessibilidade: `aria-label` no botão flutuante, foco visível verde, contraste AA no texto principal.

### Pronto para deploy

Como mantemos o template do projeto, o deploy continua funcionando normalmente pelo botão Publish do Lovable (ou Vercel via repo conectado). Nenhuma variável de ambiente necessária.
