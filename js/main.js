/* Maria Nail Designer - JavaScript mínimo.
   Apenas: menu mobile, links configuráveis e ano do rodapé. */

(function () {
  "use strict";

  var config = window.SITE_CONFIG || {};

  /* ---------- 1. Links configuráveis ---------- */

  function whatsappUrl(mensagem) {
    var numero = String(config.whatsapp || "").replace(/\D/g, "");
    var base = "https://wa.me/" + numero;
    return mensagem ? base + "?text=" + encodeURIComponent(mensagem) : base;
  }

  function instagramUrl() {
    var usuario = String(config.instagram || "").replace(/^@/, "").replace(/\//g, "");
    return "https://www.instagram.com/" + usuario + "/";
  }

  var LINKS = {
    agenda: function () {
      return whatsappUrl(config.whatsappMessages && config.whatsappMessages.agenda);
    },
    combo: function () {
      return whatsappUrl(config.whatsappMessages && config.whatsappMessages.combo);
    },
    agendar: function () {
      return whatsappUrl(config.whatsappMessages && config.whatsappMessages.agendar);
    },
    sorteio: instagramUrl,
    instagram: instagramUrl,
    maps: function () {
      return config.maps || "#";
    }
  };

  function aplicarLinks() {
    var elementos = document.querySelectorAll("[data-link]");

    Array.prototype.forEach.call(elementos, function (el) {
      var chave = el.getAttribute("data-link");
      var resolver = LINKS[chave];
      if (!resolver) { return; }

      var url = resolver();
      if (!url || url === "#") { return; }

      el.setAttribute("href", url);

      // Links externos abrem em nova aba com segurança
      if (/^https?:/i.test(url)) {
        el.setAttribute("target", "_blank");
        el.setAttribute("rel", "noopener");
      }
    });
  }

  /* ---------- 2. Menu mobile ---------- */

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

  /* ---------- 3. Ano do rodapé ---------- */

  function atualizarAno() {
    var alvo = document.querySelector("[data-year]");
    if (alvo) { alvo.textContent = String(new Date().getFullYear()); }
  }

  /* ---------- Inicialização ---------- */

  function iniciar() {
    aplicarLinks();
    iniciarMenu();
    atualizarAno();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", iniciar);
  } else {
    iniciar();
  }
})();
