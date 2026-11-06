
import { useState } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "5538999999999";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name");
    const phone = formData.get("phone");
    const email = formData.get("email");
    const interest = formData.get("interest");

    const message = `
Olá! Tenho interesse no empreendimento Iago Nogueira.

*Dados do interessado:*
Nome: ${name}
Telefone: ${phone}
E-mail: ${email}

*Tipo de interesse:*
${interest}

Gostaria de receber mais informações sobre o empreendimento.
    `.trim();

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    setSubmitted(true);
    form.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">

      <input
        name="name"
        type="text"
        placeholder="Nome completo"
        required
        className="w-full border p-4"
      />

      <input
        name="phone"
        type="tel"
        placeholder="Telefone / WhatsApp"
        required
        className="w-full border p-4"
      />

      <input
        name="email"
        type="email"
        placeholder="Seu e-mail"
        required
        className="w-full border p-4"
      />

      <select
        name="interest"
        required
        defaultValue=""
        className="w-full border p-4"
      >
        <option value="" disabled>
          Selecione seu interesse
        </option>
        <option>Comprar para morar</option>
        <option>Comprar para investir</option>
        <option>Conhecer as plantas</option>
        <option>Agendar uma visita</option>
      </select>

      <label className="flex gap-3 text-xs text-stone-500">
        <input type="checkbox" required />
        Concordo com a Política de Privacidade.
      </label>

      <button
        type="submit"
        className="w-full bg-emerald-900 text-white py-5 flex justify-center items-center gap-3 hover:bg-emerald-950 transition"
      >
        <MessageCircle size={19} />
        Quero receber informações
        <ArrowRight size={18} />
      </button>

      {submitted && (
        <p className="text-sm text-emerald-800 text-center">
          O WhatsApp foi aberto. Finalize o envio da mensagem por lá!
        </p>
      )}
    </form>
  );
}
