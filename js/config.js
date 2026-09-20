/* ============================================================
   CONFIGURAÇÃO DE LINKS - Maria Nail Designer
   ------------------------------------------------------------
   ESTE É O ÚNICO ARQUIVO QUE VOCÊ PRECISA EDITAR PARA TROCAR:
   WhatsApp, Instagram, Google Maps e domínio.
   ============================================================ */

/* Disponibilizado em window para que js/main.js leia os valores. */
window.SITE_CONFIG = {

  /* --------------------------------------------------------
     1) WHATSAPP
     Formato: código do país + DDD + número, SOMENTE dígitos.
     Exemplo: "5548999999999"  (55 = Brasil, 48 = DDD)
     >>> SUBSTITUA o valor abaixo pelo número real. <<<
     -------------------------------------------------------- */
  whatsapp: "5500000000000",

  /* Mensagens pré-preenchidas dos botões de WhatsApp
     (agenda = CTA principal e CTA final, combo = promoção). */
  whatsappMessages: {
    agenda: "Olá, Maria! Vim pelo site e gostaria de consultar a agenda.",
    combo: "Olá, Maria! Vim pelo site e quero aproveitar o Combo Amigas (23% OFF) com uma amiga.",
    agendar: "Olá, Maria! Vim pelo site e gostaria de agendar um horário."
  },

  /* --------------------------------------------------------
     2) INSTAGRAM
     Apenas o nome de usuário, sem "@" e sem link.
     -------------------------------------------------------- */
  instagram: "marianaildesigner",

  /* --------------------------------------------------------
     3) GOOGLE MAPS
     Link de busca do Maps (não inventamos endereço completo).
     -------------------------------------------------------- */
  maps: "https://www.google.com/maps/search/?api=1&query=Lagoa+da+Concei%C3%A7%C3%A3o%2C+Florian%C3%B3polis+-+SC",

  /* --------------------------------------------------------
     4) DOMÍNIO
     Usado para canonical/Open Graph/JSON-LD quando a página é
     publicada. Também atualize robots.txt e sitemap.xml.
     -------------------------------------------------------- */
  domain: "https://www.marianaildesigner.com.br"
};
