/* Maria Nail Designer - JavaScript mínimo.
   Apenas: menu mobile, links configuráveis e ano do rodapé. */

(function () {
  "use strict";

  var config = window.SITE_CONFIG || {};

  /* ---------- 1. Links configuráveis ---------- */

  /* Número do WhatsApp válido = apenas dígitos, com código do país (12 ou 13).
     Sem número válido, nada aponta para telefone incorreto. */
  function whatsappNumero() {
    var digitos = String(config.whatsapp || "").replace(/\D/g, "");
    return digitos.length >= 12 ? digitos : "";
  }

  function whatsappUrl(mensagem) {
    var numero = whatsappNumero();
    if (!numero) { return null; }

    var base = "https://wa.me/" + numero;
    return mensagem ? base + "?text=" + encodeURIComponent(mensagem) : base;
  }

  function mensagem(chave) {
    var mensagens = config.whatsappMessages || {};
    return mensagens[chave];
  }

  function instagramUrl() {
    var usuario = String(config.instagram || "").replace(/^@/, "").replace(/\//g, "");
    return usuario ? "https://www.instagram.com/" + usuario + "/" : null;
  }

  var LINKS = {
    agenda: function () { return whatsappUrl(mensagem("agenda")); },
    combo: function () { return whatsappUrl(mensagem("combo")); },
    agendar: function () { return whatsappUrl(mensagem("agendar")); },
    sorteio: instagramUrl,
    instagram: instagramUrl,
    maps: function () { return config.maps || null; }
  };

  /* Link ainda sem destino definido: fica visível, mas inerte. */
  function marcarPendente(el) {
    el.setAttribute("aria-disabled", "true");
    el.classList.add("is-pending");
    el.addEventListener("click", function (evento) {
      evento.preventDefault();
    });
  }

  function aplicarLinks() {
    var elementos = document.querySelectorAll("[data-link]");

    Array.prototype.forEach.call(elementos, function (el) {
      var chave = el.getAttribute("data-link");
      var resolver = LINKS[chave];
      if (!resolver) { return; }

      var url = resolver();
      if (!url) {
        marcarPendente(el);
        return;
      }

      el.setAttribute("href", url);

      // Links externos abrem em nova aba com segurança
      if (/^https?:/i.test(url)) {
        el.setAttribute("target", "_blank");
        el.setAttribute("rel", "noopener");
      }
    });
  }

  /* ---------- 2. Botão flutuante de WhatsApp ---------- */

  function iniciarBotaoFlutuante() {
    var botao = document.querySelector(".wa-float");
    if (!botao) { return; }

    var url = whatsappUrl(mensagem("float"));
    if (!url) {
      // Sem número configurado: o botão permanece oculto.
      botao.hidden = true;
      return;
    }

    botao.setAttribute("href", url);
    botao.hidden = false;
  }

  /* ---------- 3. Menu mobile ---------- */

  function iniciarMenu() {
    var botao = document.querySelector(".nav-toggle");
    var menu = document.getElementById("menu-principal");
    if (!botao || !menu) { return; }

    function fechar() {
      menu.classList.remove("is-open");
      botao.setAttribute("aria-expanded", "false");
      botao.setAttribute("aria-label", "Abrir menu");
    }

    botao.addEventListener("click", function () {
      var aberto = menu.classList.toggle("is-open");
      botao.setAttribute("aria-expanded", aberto ? "true" : "false");
      botao.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu");
    });

    // Fecha ao clicar em um item do menu
    menu.addEventListener("click", function (evento) {
      if (evento.target.closest("a")) { fechar(); }
    });

    // Fecha com a tecla Esc
    document.addEventListener("keydown", function (evento) {
      if (evento.key === "Escape") { fechar(); }
    });
  }

  /* ---------- 4. Ano do rodapé ---------- */

  function atualizarAno() {
    var alvo = document.querySelector("[data-year]");
    if (alvo) { alvo.textContent = String(new Date().getFullYear()); }
  }

  /* ---------- Inicialização ---------- */

  function iniciar() {
    aplicarLinks();
    iniciarBotaoFlutuante();
    iniciarMenu();
    atualizarAno();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", iniciar);
  } else {
    iniciar();
  }
})();
