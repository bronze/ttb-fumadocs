# Thompson Total Branding

Republicação do **The Thompson Way of Total Branding (TTB)**, a metodologia de planejamento de marca da J. Walter Thompson, em uma plataforma moderna de documentação.

Em 2014 o Jurandir Craveiro converteu o conteúdo original do CD para a web. Esse site saiu do ar e hoje só existe no Web Archive; todo o conteúdo que sobreviveu foi recuperado de lá e convertido para Markdown.

- **Backup do site do Jura:** https://web.archive.org/web/20180716190000/http://jura.com.br/jwt/Fset001.htm
- **Menção ao TTB:** https://www.jura.com.br/premio-gp-formadores/
- **Site:** https://ttb.carlosbronze.com.br

## Conteúdo

O conteúdo fica em `content/docs`, organizado pelas etapas do Planning Cycle:

- Where Are We Now
- Why Are We There
- Where Could We Be
- How Can We Get There
- Are We Getting There

O [`CONTENT-TRACKER.md`](./CONTENT-TRACKER.md) relaciona cada página do site arquivado com o arquivo correspondente aqui, e lista as páginas que nunca foram arquivadas (e por isso não puderam ser recuperadas).

## Desenvolvimento

Feito com [Fumadocs](https://fumadocs.dev) e Next.js. Usa pnpm.

```bash
pnpm install   # instala as dependências e gera o .source/
pnpm dev       # servidor local em http://localhost:3000
pnpm build     # build de produção
pnpm lint      # ESLint
```
