/* ============================================================
   CONFIGURAÇÃO DE LINKS - Maria Nail Designer
   ------------------------------------------------------------
   ESTE É O ÚNICO ARQUIVO QUE VOCÊ PRECISA EDITAR PARA TROCAR:
   WhatsApp, Instagram, Google Maps, Sorteio e domínio.
   ============================================================ */

/* Disponibilizado em window para que js/main.js leia os valores. */
window.SITE_CONFIG = {

  /* --------------------------------------------------------
     1) WHATSAPP
     Formato: código do país + DDD + número, SOMENTE dígitos.
     Exemplo de formato: "55" + DDD + número, SOMENTE dígitos.
     -------------------------------------------------------- */
  whatsapp: "5548988290707",

  /* Mensagens pré-preenchidas dos botões de WhatsApp
     (agenda = CTA principal e CTA final, combo = promoção,
      float = botão flutuante). */
  whatsappMessages: {
    agenda: "Olá, Maria! Gostaria de consultar os horários disponíveis para agendamento.",
    combo: "Olá, Maria! Quero aproveitar a promoção Combo Amigas de 23% OFF.",
    agendar: "Olá, Maria! Gostaria de agendar um horário.",
    float: "Olá, Maria! Gostaria de agendar um horário."
  },

  /* --------------------------------------------------------
     2) INSTAGRAM
     Apenas o nome de usuário, sem "@" e sem link.
     -------------------------------------------------------- */
  instagram: "maariaeduardafreitas",

  /* --------------------------------------------------------
     3) SORTEIO
     Link direto do post do sorteio no Instagram.
     -------------------------------------------------------- */
  sorteio: "https://www.instagram.com/p/Ddl70AgR5Jd/?stkn=MWVvMWdnNHhkd2w4eg==",

  /* --------------------------------------------------------
     4) GOOGLE MAPS
     Link de busca do Maps (não inventamos endereço completo).
     -------------------------------------------------------- */
  maps: "https://maps.google.com/maps/place//data=!4m2!3m1!1s0x95273eb0aaeb2f2d:0x1516eaa44f18f56?entry=s&sa=X&ved=2ahUKEwjUvr7WpIWXAxVcO7kGHTZWNQQQ4kB6BAgeEAA&hl=pt",

  /* --------------------------------------------------------
     5) DOMÍNIO
     Domínio definitivo (sem www). A landing é publicada em:
     https://marianaildesigner.site/lagoa-da-conceicao
     Também atualize canonical/og:url/JSON-LD em
     lagoa-da-conceicao/index.html, robots.txt e sitemap.xml.
     -------------------------------------------------------- */
  domain: "https://marianaildesigner.site"
};
