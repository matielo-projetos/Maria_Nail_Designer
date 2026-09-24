# Maria Nail Designer - Landing Page

Landing page estática (HTML + CSS + JavaScript puro), mobile-first, sem frameworks,
sem dependências e sem imagens externas. Projeto isolado: nada é importado de outros projetos.

## Como visualizar

A landing page fica em `lagoa-da-conceicao/index.html`. Abra esse arquivo no navegador
(duplo clique) ou rode um servidor local a partir da raiz do projeto:

```powershell
# opção 1 - Python
python -m http.server 8080

# opção 2 - Node (se instalado)
npx --yes serve .
```

Depois acesse `http://localhost:8080/lagoa-da-conceicao`.

O `index.html` da raiz apenas redireciona para `/lagoa-da-conceicao`.

## URL definitiva

- Landing: `https://marianaildesigner.site/lagoa-da-conceicao`
- Canônica (sem www): `https://marianaildesigner.site/lagoa-da-conceicao`
- `www.marianaildesigner.site` também funciona, mas redireciona para a versão sem www.

## Onde alterar WhatsApp, Instagram, Google Maps e domínio

Tudo fica em **`js/config.js`** (arquivo único):

| O que | Chave em `js/config.js` |
|---|---|
| Número do WhatsApp (só dígitos: `55` + DDD + número) — **configurado** | `whatsapp` |
| Mensagens dos botões de WhatsApp | `whatsappMessages` (`agenda`, `combo`, `agendar`, `float`) |
| Instagram (usuário, sem `@`) | `instagram` |
| Google Maps | `maps` |
| Link direto do sorteio | `sorteio` |
| Domínio do site | `domain` |

> **Pendente:** `whatsapp` está vazio porque nenhum número foi fornecido.
> Enquanto estiver vazio, os botões de WhatsApp e o botão flutuante ficam
> visíveis porém inertes (não levam a número incorreto) e o botão flutuante
> permanece oculto. Ao preencher o número, tudo é ativado automaticamente.
> A agenda também é pendente: "Consultar agenda" abre o WhatsApp (sem integração real de agenda).

O domínio também aparece (para SEO) em:

- `lagoa-da-conceicao/index.html` -> `<link rel="canonical">`, `og:url` e JSON-LD (`"url"`)
- `index.html` (raiz, redirecionamento) -> `canonical` e destino do redirect
- `robots.txt` -> linha `Sitemap:`
- `sitemap.xml` -> `<loc>`

## Estrutura

```
index.html                    redirecionamento para /lagoa-da-conceicao
lagoa-da-conceicao/index.html landing page (URL definitiva) + SEO + JSON-LD
css/style.css                 estilos (mobile-first)
js/config.js                  >>> links e domínio (edite aqui) <<<
js/main.js                    menu mobile + links + botão flutuante de WhatsApp
favicon.svg                   favicon leve em SVG
robots.txt                    regras para buscadores
sitemap.xml                   sitemap com a URL definitiva
```

## Observações

- Nenhum telefone, endereço completo ou avaliação foi inventado.
- O botão de sorteio aponta para o link direto configurado em `js/config.js` (`sorteio`).
- O Google Maps usa o link direto configurado em `js/config.js` (`maps`).
