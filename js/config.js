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
     Exemplo de formato: "55" + DDD + número, SOMENTE dígitos.
     >>> PENDENTE: nenhum número foi fornecido ainda, por isso
     está vazio. Enquanto estiver vazio, os botões de WhatsApp
     e o botão flutuante ficam INATIVOS (não levam a número
     incorreto). Preencha para ativar tudo de uma vez. <<<
     -------------------------------------------------------- */
  whatsapp: "",

  /* Mensagens pré-preenchidas dos botões de WhatsApp
     (agenda = CTA principal e CTA final, combo = promoção,
      float = botão flutuante). */
  whatsappMessages: {
    agenda: "Olá, Maria! Vim pelo site e gostaria de consultar a agenda.",
    combo: "Olá, Maria! Vim pelo site e quero aproveitar o Combo Amigas (23% OFF) com uma amiga.",
    agendar: "Olá, Maria! Vim pelo site e gostaria de agendar um horário.",
    float: "Olá, Maria! Vim pelo site e gostaria de agendar um horário."
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
     Domínio definitivo (sem www). A landing é publicada em:
     https://marianaildesigner.site/lagoa-da-conceicao
     Também atualize canonical/og:url/JSON-LD em
     lagoa-da-conceicao/index.html, robots.txt e sitemap.xml.
     -------------------------------------------------------- */
  domain: "https://marianaildesigner.site"
};
