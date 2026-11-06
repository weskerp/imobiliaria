
import { useState } from "react";
import {
  Menu,
  X,
  ArrowUpRight,
  ArrowRight,
  MapPin,
  BedDouble,
  CarFront,
  Maximize,
  Check,
  Phone,
  MessageCircle,
  ChevronDown,
  Building2,
  Trees,
  ShieldCheck,
  Waves,
  Sun,
  CalendarDays,
} from "lucide-react";

import { FaInstagram, FaFacebook } from "react-icons/fa";

// ==========================================
// CONFIGURAÇÕES DO EMPREENDIMENTO
// ==========================================

const PROPERTY = {
  name: "Iago Nogueira",
  subtitle: "RESIDENCIAL",
  location: "Montes Claros - MG",
  whatsapp: "5538998861089",
  email: "contato@villaau rora.com.br".replace(" ", ""),
};

// ==========================================
// DADOS
// ==========================================

const gallery = [
  {
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1000",
    title: "Arquitetura contemporânea",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1000",
    title: "Ambientes integrados",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1000",
    title: "Detalhes sofisticados",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1000",
    title: "Espaços de convivência",
  },
];

const plans = [
  {
    name: "Planta A",
    description: "Apartamento compacto",
    area: "68 m²",
    bedrooms: "2 quartos",
    parking: "1 vaga",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800",
  },
  {
    name: "Planta B",
    description: "Apartamento família",
    area: "92 m²",
    bedrooms: "3 quartos",
    parking: "2 vagas",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
  },
  {
    name: "Planta C",
    description: "Apartamento premium",
    area: "125 m²",
    bedrooms: "3 suítes",
    parking: "2 vagas",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800",
  },
];

const features = [
  {
    icon: Trees,
    title: "Área verde",
    description: "Paisagismo planejado e contato com a natureza.",
  },
  {
    icon: Waves,
    title: "Lazer completo",
    description: "Espaços de lazer para toda a família.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança",
    description: "Estrutura planejada para mais tranquilidade.",
  },
  {
    icon: Sun,
    title: "Iluminação natural",
    description: "Ambientes projetados para aproveitar a luz natural.",
  },
];

// ==========================================
// COMPONENTES
// ==========================================

function SectionTitle({ eyebrow, title, description, light = false }) {
  return (
    <div className="max-w-2xl mb-12">
      <span
        className={`text-xs font-semibold tracking-[0.25em] uppercase ${
          light ? "text-amber-300" : "text-emerald-800"
        }`}
      >
        {eyebrow}
      </span>

      <h2
        className={`font-serif text-4xl md:text-5xl mt-4 leading-tight ${
          light ? "text-white" : "text-stone-900"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-5 leading-relaxed ${
            light ? "text-stone-300" : "text-stone-500"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

function WhatsAppButton({ children = "Fale com um consultor", className = "" }) {
  const message = encodeURIComponent(
    "Olá! Gostaria de receber informações sobre o empreendimento Iago Nogueira."
  );

  return (
    <a
      href={`https://wa.me/${PROPERTY.whatsapp}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-3 bg-emerald-800 hover:bg-emerald-900 text-white px-7 py-4 text-sm font-medium transition-all ${className}`}
    >
      <MessageCircle size={18} />
      {children}
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    ["O empreendimento", "#sobre"],
    ["Galeria", "#galeria"],
    ["Plantas", "#plantas"],
    ["Localização", "#localizacao"],
  ];

  return (
    <header className="absolute top-0 left-0 w-full z-50 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-5 md:px-10 h-20 flex items-center justify-between">
        <a href="#" className="text-white">
          <span className="block font-serif text-2xl tracking-widest">
            Iago Nogueira
          </span>
          <span className="text-[9px] tracking-[0.45em] uppercase">
            Residencial
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-white/90 text-sm hover:text-amber-300 transition"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <WhatsAppButton className="!py-3">
            Agendar visita
            <ArrowUpRight size={16} />
          </WhatsAppButton>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-white p-2"
          aria-label="Abrir menu"
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <nav className="lg:hidden bg-stone-950 p-6 flex flex-col gap-5">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="text-white text-sm"
            >
              {label}
            </a>
          ))}
          <WhatsAppButton />
        </nav>
      )}
    </header>
  );
}

// ==========================================
// HERO
// ==========================================

function Hero() {
  return (
    <section className="relative min-h-[680px] h-screen max-h-[900px] flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=2000')",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-black/10" />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-5 md:px-10 pt-24">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-3 text-amber-300 text-xs tracking-[0.3em] uppercase mb-8">
            <span className="w-10 h-px bg-amber-300" />
            Um novo jeito de viver
          </span>

          <h1 className="font-serif text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05]">
            Seu novo
            <br />
            capítulo começa
            <br />
            <span className="italic text-amber-200">aqui.</span>
          </h1>

          <p className="text-white/80 text-base md:text-lg max-w-xl mt-8 leading-relaxed">
            Um empreendimento exclusivo, pensado para proporcionar
            conforto, sofisticação e qualidade de vida em cada detalhe.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <a
              href="#plantas"
              className="bg-amber-200 text-stone-900 px-8 py-4 text-sm font-semibold flex items-center justify-center gap-3 hover:bg-amber-100 transition"
            >
              Conheça os apartamentos
              <ArrowUpRight size={18} />
            </a>

            <WhatsAppButton className="!bg-white/10 backdrop-blur-md border border-white/40 hover:!bg-white/20">
              Fale com um consultor
            </WhatsAppButton>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-5 md:left-10 flex items-center gap-3 text-white/70 text-xs tracking-widest">
        <MapPin size={16} />
        {PROPERTY.location}
      </div>

      <a
        href="#sobre"
        className="hidden md:flex absolute bottom-8 right-10 items-center gap-3 text-white/70 text-xs tracking-widest"
      >
        ROLE PARA DESCOBRIR
        <ChevronDown size={18} />
      </a>
    </section>
  );
}

// ==========================================
// SOBRE
// ==========================================

function About() {
  return (
    <section id="sobre" className="py-24 md:py-32 bg-[#f8f7f3]">
      <div className="max-w-7xl mx-auto px-5 md:px-10 grid md:grid-cols-2 gap-14 items-center">
        <div>
          <SectionTitle
            eyebrow="Mais que um endereço"
            title="Um lugar para chamar de seu."
            description="O Iago Nogueira nasce para transformar a maneira de viver. Um projeto arquitetônico que une elegância, funcionalidade e bem-estar em uma localização privilegiada."
          />

          <div className="grid grid-cols-2 gap-7 mt-10">
            {[
              ["68 a 125 m²", "Plantas inteligentes"],
              ["2 a 3", "Dormitórios"],
              ["Lazer", "Espaços exclusivos"],
              ["Premium", "Acabamento"],
            ].map(([value, label]) => (
              <div key={label} className="border-t border-stone-300 pt-4">
                <h3 className="font-serif text-2xl text-emerald-900">
                  {value}
                </h3>
                <p className="text-stone-500 text-xs mt-2">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1100"
            alt="Interior sofisticado do empreendimento"
            className="w-full h-[480px] md:h-[600px] object-cover"
          />

          <div className="absolute -bottom-6 -left-3 md:-left-8 bg-emerald-900 text-white p-7 md:p-10 max-w-[230px]">
            <Building2 size={30} className="text-amber-200 mb-5" />
            <p className="font-serif text-2xl">Arquitetura com propósito.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==========================================
// GALERIA
// ==========================================

function Gallery() {
  return (
    <section id="galeria" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <SectionTitle
          eyebrow="Galeria de imagens"
          title="Cada detalhe encanta."
          description="Conheça os ambientes, a arquitetura e os espaços cuidadosamente planejados para você."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {gallery.map((item, index) => (
            <div
              key={item.title}
              className={`relative group overflow-hidden ${
                index === 0 ? "md:row-span-2" : ""
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className={`w-full object-cover group-hover:scale-105 transition duration-700 ${
                  index === 0 ? "h-full min-h-[400px]" : "h-[260px]"
                }`}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

              <span className="absolute bottom-6 left-6 text-white font-serif text-2xl">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==========================================
// PLANTAS
// ==========================================

function FloorPlans() {
  return (
    <section id="plantas" className="py-24 md:py-32 bg-[#f3f1eb]">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <SectionTitle
          eyebrow="Conheça as opções"
          title="Um espaço do seu jeito."
          description="Encontre a planta que combina com seu estilo de vida. Ambientes planejados para aproveitar cada metro quadrado."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="bg-white group hover:-translate-y-2 transition duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={plan.image}
                  alt={`Referência visual da ${plan.name}`}
                  loading="lazy"
                  className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
                />
                <span className="absolute top-5 left-5 bg-emerald-900 text-white text-xs px-4 py-2 tracking-widest">
                  {plan.name}
                </span>
              </div>

              <div className="p-7">
                <h3 className="font-serif text-2xl text-stone-900">
                  {plan.description}
                </h3>

                <div className="flex flex-wrap gap-5 mt-6 text-stone-500 text-xs">
                  <span className="flex items-center gap-2">
                    <Maximize size={16} />
                    {plan.area}
                  </span>
                  <span className="flex items-center gap-2">
                    <BedDouble size={16} />
                    {plan.bedrooms}
                  </span>
                  <span className="flex items-center gap-2">
                    <CarFront size={16} />
                    {plan.parking}
                  </span>
                </div>

                <a
                  href={`https://wa.me/${PROPERTY.whatsapp}?text=${encodeURIComponent(
                    `Olá! Gostaria de receber a planta ${plan.name} do Iago Nogueira.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-between items-center border-t border-stone-200 mt-7 pt-5 text-emerald-900 text-sm font-medium"
                >
                  Solicitar planta
                  <ArrowUpRight size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="text-xs text-stone-400 mt-6">
          Imagens ilustrativas. Plantas, metragens e características
          deverão ser substituídas pelas informações oficiais do projeto.
        </p>
      </div>
    </section>
  );
}

// ==========================================
// DIFERENCIAIS
// ==========================================

function Differentials() {
  return (
    <section className="py-24 md:py-32 bg-emerald-950">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <SectionTitle
          eyebrow="Diferenciais"
          title="Pensado para viver melhor."
          description="Mais do que um imóvel, uma experiência completa de conforto, praticidade e bem-estar."
          light
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-16">
          {features.map(({ icon: Icon, title, description }) => (
            <div key={title} className="border-t border-white/20 pt-7">
              <Icon size={34} className="text-amber-200 mb-7" />
              <h3 className="font-serif text-2xl text-white">{title}</h3>
              <p className="text-white/60 text-sm mt-4 leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==========================================
// LOCALIZAÇÃO
// ==========================================

function Location() {
  return (
    <section id="localizacao" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-10 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <SectionTitle
            eyebrow="Localização privilegiada"
            title="Perto de tudo. Perto do que importa."
            description="Uma localização estratégica, com fácil acesso aos principais serviços, comércios e pontos de interesse da cidade."
          />

          <div className="space-y-5 mt-9">
            {[
              "Próximo a supermercados",
              "Fácil acesso a escolas e universidades",
              "Região com infraestrutura completa",
              "Acesso facilitado às principais avenidas",
            ].map((item) => (
              <div key={item} className="flex gap-3 items-center text-stone-600">
                <Check size={19} className="text-emerald-800" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>

          <WhatsAppButton className="mt-10">
            Consultar localização
            <ArrowUpRight size={18} />
          </WhatsAppButton>
        </div>

        <div className="h-[400px] md:h-[500px] bg-stone-100 overflow-hidden">
          <iframe
            title="Localização do empreendimento"
            src="https://www.google.com/maps?q=Montes+Claros+MG&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

// ==========================================
// PORTFÓLIO DEMONSTRATIVO
// ==========================================

function Portfolio() {
  const examples = [
    {
      title: "Residencial contemporâneo",
      category: "Lançamento residencial",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900",
    },
    {
      title: "Conceito alto padrão",
      category: "Empreendimento premium",
      image:
        "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=900",
    },
    {
      title: "Projeto urbanístico",
      category: "Apresentação imobiliária",
      image:
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=900",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-[#f8f7f3]">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <SectionTitle
          eyebrow="Apresentação visual"
          title="Projetos que inspiram."
          description="Referências de apresentação visual para diferentes perfis de empreendimentos imobiliários."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {examples.map((example) => (
            <div key={example.title} className="group">
              <div className="overflow-hidden">
                <img
                  src={example.image}
                  alt={example.title}
                  loading="lazy"
                  className="w-full h-72 object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <p className="text-emerald-800 text-xs tracking-widest uppercase mt-5">
                {example.category}
              </p>
              <h3 className="font-serif text-2xl text-stone-900 mt-2">
                {example.title}
              </h3>
            </div>
          ))}
        </div>

        <p className="text-xs text-stone-400 mt-7">
          Referências visuais demonstrativas, não representam trabalhos
          anteriores comprovados do profissional.
        </p>
      </div>
    </section>
  );
}

// ==========================================
// CONTATO
// ==========================================

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const name = formData.get("name");
    const phone = formData.get("phone");
    const email = formData.get("email");
    const interest = formData.get("interest");

    const message = encodeURIComponent(
      `Olá! Tenho interesse no Iago Nogueira.\n\n` +
      `Nome: ${name}\n` +
      `Telefone: ${phone}\n` +
      `E-mail: ${email}\n` +
      `Interesse: ${interest}`
    );

    window.open(
      `https://wa.me/${PROPERTY.whatsapp}?text=${message}`,
      "_blank",
      "noopener,noreferrer"
    );

    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <section id="contato" className="py-24 md:py-32 bg-emerald-950">
      <div className="max-w-7xl mx-auto px-5 md:px-10 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-amber-300 text-xs tracking-[0.25em] uppercase">
            Atendimento exclusivo
          </span>

          <h2 className="font-serif text-5xl md:text-6xl text-white mt-6 leading-tight">
            Seu próximo endereço está aqui.
          </h2>

          <p className="text-white/60 mt-7 leading-relaxed max-w-md">
            Cadastre seus dados e receba informações sobre disponibilidade,
            plantas, condições comerciais e agendamento de visitas.
          </p>

          <div className="mt-12 space-y-6">
            <div className="flex gap-4 items-center text-white">
              <Phone className="text-amber-200" />
              <div>
                <p className="text-xs text-white/50">Atendimento</p>
                <p className="text-sm">WhatsApp comercial</p>
              </div>
            </div>

            <div className="flex gap-4 items-center text-white">
              <MapPin className="text-amber-200" />
              <div>
                <p className="text-xs text-white/50">Localização</p>
                <p className="text-sm">{PROPERTY.location}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-7 md:p-12">
          <h3 className="font-serif text-3xl text-stone-900">
            Receba mais informações
          </h3>

          <p className="text-stone-500 text-sm mt-3 mb-8">
            Preencha o formulário e nossa equipe entrará em contato.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="text-xs text-stone-600 block mb-2">
                Nome completo
              </label>
              <input
                name="name"
                type="text"
                placeholder="Digite seu nome"
                required
                className="w-full bg-stone-50 border border-stone-200 px-4 py-4 text-sm outline-none focus:border-emerald-800"
              />
            </div>

            <div>
              <label className="text-xs text-stone-600 block mb-2">
                Telefone / WhatsApp
              </label>
              <input
                name="phone"
                type="tel"
                placeholder="(38) 99999-9999"
                required
                className="w-full bg-stone-50 border border-stone-200 px-4 py-4 text-sm outline-none focus:border-emerald-800"
              />
            </div>

            <div>
              <label className="text-xs text-stone-600 block mb-2">
                E-mail
              </label>
              <input
                name="email"
                type="email"
                placeholder="seu@email.com"
                required
                className="w-full bg-stone-50 border border-stone-200 px-4 py-4 text-sm outline-none focus:border-emerald-800"
              />
            </div>

            <div>
              <label className="text-xs text-stone-600 block mb-2">
                O que você procura?
              </label>
              <select
                name="interest"
                required
                defaultValue=""
                className="w-full bg-stone-50 border border-stone-200 px-4 py-4 text-sm outline-none focus:border-emerald-800"
              >
                <option value="" disabled>
                  Selecione uma opção
                </option>
                <option>Comprar para morar</option>
                <option>Comprar para investir</option>
                <option>Conhecer as plantas</option>
                <option>Agendar uma visita</option>
              </select>
            </div>

            <label className="flex gap-3 items-start text-xs text-stone-500 leading-relaxed">
              <input type="checkbox" required className="mt-1 accent-emerald-800" />
              Autorizo o contato da equipe comercial e concordo com a
              Política de Privacidade.
            </label>

            <button
              type="submit"
              className="w-full bg-emerald-900 hover:bg-emerald-950 text-white py-5 flex items-center justify-center gap-3 text-sm font-semibold transition"
            >
              Quero receber informações
              <ArrowRight size={18} />
            </button>

            {submitted && (
              <p className="text-emerald-800 text-sm text-center">
                Formulário preparado! Continue o atendimento pelo WhatsApp.
              </p>
            )}
          </form>

          <p className="text-[10px] text-stone-400 text-center mt-5">
            Seus dados serão utilizados para atendimento comercial,
            conforme a Política de Privacidade.
          </p>
        </div>
      </div>
    </section>
  );
}

// ==========================================
// FOOTER
// ==========================================

function Footer() {
  return (
    <footer className="bg-stone-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="flex flex-col md:flex-row justify-between gap-10 pb-10 border-b border-white/10">
          <div>
            <h3 className="font-serif text-3xl tracking-widest">
              Iago Nogueira
            </h3>
            <p className="text-white/40 text-[10px] tracking-[0.4em] mt-2 uppercase">
              Residencial
            </p>
            <p className="text-white/50 text-sm mt-5">
              Um novo capítulo começa aqui.
            </p>
          </div>

          <div>
            <p className="text-xs text-white/40 uppercase tracking-widest mb-5">
              Navegação
            </p>
            <div className="flex flex-col gap-3 text-sm text-white/70">
              <a href="#sobre">O empreendimento</a>
              <a href="#galeria">Galeria</a>
              <a href="#plantas">Plantas</a>
              <a href="#contato">Contato</a>
              <a href="/privacidade">Política de Privacidade</a>
            </div>
          </div>

          <div>
            <p className="text-xs text-white/40 uppercase tracking-widest mb-5">
              Fale conosco
            </p>
            <WhatsAppButton>Conversar no WhatsApp</WhatsAppButton>
            <div className="flex gap-4 mt-6 text-white/60">
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" aria-label="Facebook"><FaFacebook /></a>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row justify-between gap-3 text-xs text-white/30">
          <p>© {new Date().getFullYear()} Iago Nogueira. Todos os direitos reservados.</p>
          <p>Desenvolvido com atenção a cada detalhe.</p>
        </div>
      </div>
    </footer>
  );
}

// ==========================================
// APP PRINCIPAL
// ==========================================

export default function App() {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <About />
      <Gallery />
      <FloorPlans />
      <Differentials />
      <Location />
      <Portfolio />
      <Contact />
      <Footer />

      {/* WhatsApp flutuante */}
      <a
        href={`https://wa.me/${PROPERTY.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale pelo WhatsApp"
        className="fixed bottom-5 right-5 z-50 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-xl transition hover:scale-110"
      >
        <MessageCircle size={27} />
      </a>
    </main>
  );
}
