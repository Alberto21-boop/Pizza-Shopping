# React + TypeScript + Vite

![image](https://github.com/Alberto21-boop/Pizza-Shopping/assets/85910024/71b43460-ed5b-40f5-a65f-a5ed94fa1ce2)


This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

Mais tecnologias utilizadas neste projeto:

Para iniciar o projeto devemos criar o projeto com o seguinte comando:
pnpm create vite@latest

Depois entre na pasta pizzashop-web , e rode o seguinte comando para instalar as dependencias do projeto
pnpm i

Em seguida vamos começar a instalar os pacotes para estilizarmos a nossa aplicação:
pnpm add -D tailwindcss postcss autoprefixer

npx tailwindcss init -p

E para suportar as importações que configuramos no tsconfig.json vamos baixar o seguinte pacote:
pnpm i @types/node -D 

Feito isso vamos baixar mais um pacote, e assim inicializar o shadcn:
pnpm dlx shadcn-ui@latest init

Devido estarmos trabalhando com shadcn, iremos baixar apenas os components que iremos
trabalhar, ou seja, é só baixar os components para a nossa aplicação , e neste caso
vamos instalar o botão:
pnpm dlx shadcn-ui@latest add button


Uma vez feito isso , chegou a hora de instalar o ESLint com o seguinte comando:
pnpm i eslint @rocketseat/eslint-config -D


Pos istalação do ESLint, vamos instalar o Prettie:
pnpm i -D prettier-plugin-tailwindcss


E para organizar os imports de nossa aplicação, vamos instalar o seguinte plugn:
pnpm i -D eslint-plugin-simple-import-sort

Para trabalharmos com as rotas dentro de nosso projeto, vamos instalar o bom e velho react router dom:
pnpm i react-router-dom localforage match-sorter sort-by

Após instalar e configurar as rotas, antes de trabalharmos com algumas outras coisas , vamos instalar mais um pacote para alterarmos as metatags do react
pnpm i react-helmet-async

Depois de codar um pouco, vamos adicionar um input no component sign-in, e por isso vamos inatalar o seguinte pacote do shadcn:
pnpm dlx shadcn-ui@latest add input label

Agora é importante instalarmos a biblioteca para os formularios, e com o zod para a validação e transformação de dados com o seguinte comando:
pnpm i react-hook-form zod @hookform/resolvers

E depois iremos instalar uma biblioteca para os toasts de nossa aplicação, é muito 
legal trabalhar com o sonner, toast simples e rapido.
pnpm i sonner


