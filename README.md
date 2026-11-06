<p align="center"><img src=".github/assets/banner.svg" alt="Camilly Oliveira" width="100%" /></p>

<p align="center"><a href="https://github.com/T-Lucas43">Perfil</a> · <a href="https://github.com/T-Lucas43?tab=repositories">Mais projetos</a> · <a href="https://www.linkedin.com/in/tarcisio-lucas-io">LinkedIn</a></p>

---

# Camilly Oliveira Advocacia

Site institucional responsivo da advogada Camilly Oliveira, desenvolvido com React, TypeScript, Vite e CSS tradicional.

## Desenvolvimento local

Requisitos: Node.js 20 ou superior.

```bash
npm install
npm run dev
```

## Validação e produção

```bash
npm run lint
npm run build
npm run preview
```

A build de produção é gerada na pasta `dist`.

## Deploy na Vercel

O projeto inclui `vercel.json` com as configurações necessárias:

- Framework: Vite
- Instalação: `npm ci`
- Build: `npm run build`
- Diretório de saída: `dist`

Na Vercel, importe o repositório `T-Lucas43/Site_Camilly`. Nenhuma variável de ambiente é necessária para a versão atual.

## Dados editáveis

Os dados profissionais, links e conteúdos das áreas de atuação estão centralizados em `src/data/siteContent.ts`.

O WhatsApp e o Instagram já estão configurados. E-mail e endereço permanecem vazios porque ainda não foram informados.
