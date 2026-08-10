# FinAnalytics — React

Dashboard de análise de mercado financeiro construído em **uma única stack: React + JavaScript**.

## Stack

- React
- Vite
- Recharts
- Lucide React
- CSS puro

Não existe Python, FastAPI, Tailwind, banco ou serviço separado. O projeto é um único frontend estático, o que simplifica bastante o deploy na Vercel.

> Os números exibidos são dados fictícios para prototipação.

## Rodar localmente

Requer Node.js 18+.

```bash
npm install
npm run dev
```

Abra o endereço mostrado pelo Vite, normalmente:

```text
http://localhost:5173
```

## Build de produção

```bash
npm run build
npm run preview
```

## Deploy na Vercel

1. Suba esta pasta para um repositório do GitHub.
2. Na Vercel, clique em **Add New → Project**.
3. Importe o repositório.
4. Não defina Root Directory diferente da raiz.
5. A Vercel detectará o Vite.
6. Clique em **Deploy**.

Não é necessário `vercel.json`, backend ou configuração de múltiplos serviços.

## Próxima evolução

Para dados financeiros reais, a recomendação é adicionar uma API externa posteriormente. O frontend pode consumir essa API sem precisar mudar a arquitetura do projeto.
