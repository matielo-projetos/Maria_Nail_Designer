# Maria Nail Designer - Landing Page

Landing page estática (HTML + CSS + JavaScript puro), mobile-first, sem frameworks,
sem dependências e sem imagens externas. Projeto isolado: nada é importado de outros projetos.

## Como visualizar

Abra o arquivo `index.html` no navegador (duplo clique) ou rode um servidor local simples:

```powershell
# opção 1 - Python
python -m http.server 8080

# opção 2 - Node (se instalado)
npx --yes serve .
```

Depois acesse `http://localhost:8080`.

## Onde alterar WhatsApp, Instagram, Google Maps e domínio

Tudo fica em **`js/config.js`** (arquivo único):

| O que | Chave em `js/config.js` |
|---|---|
| Número do WhatsApp (só dígitos: 55 + DDD + número) | `whatsapp` |
| Mensagens dos botões de WhatsApp | `whatsappMessages` (`agenda`, `combo`, `agendar`) |
| Instagram (usuário, sem `@`) | `instagram` |
| Google Maps | `maps` |
| Domínio do site | `domain` |

O domínio também aparece (para SEO) em:

- `index.html` -> `<link rel="canonical">`, `og:url` e JSON-LD (`"url"`)
- `robots.txt` -> linha `Sitemap:`
- `sitemap.xml` -> `<loc>`

## Estrutura

```
index.html      página completa + SEO + JSON-LD
css/style.css   estilos (mobile-first)
js/config.js    >>> links e domínio (edite aqui) <<<
js/main.js      menu mobile + aplicação dos links
favicon.svg     favicon leve em SVG
robots.txt      regras para buscadores
sitemap.xml     sitemap com uma URL
```

## Observações

- Nenhum telefone, endereço completo ou avaliação foi inventado.
- O botão de sorteio aponta para o Instagram (ajuste em `js/config.js` se houver link próprio de sorteio).
- O Google Maps usa link de busca por "Lagoa da Conceição, Florianópolis - SC".
