## express-boilerplate

for nodejs express based web application

<br />

Node.js Express 웹 어플리케이션을 위한 보일러플레이트

express-generator 프로젝트 기반으로 FE, BE 각각을 구성

**`FE`** `/public`으로 번들링되는 파일들이 브라우저 엔트리가 되는 구조

**`BE`** 백엔드 서비스와 라우터를 구현하고 `app.mjs`에서 사용하는 구조

<br />

### client

`/src` 디렉토리에 CSR 등 클라이언트 쪽에서 일어나야 할 동작 구현

```bash
.
├── bin                     # entry for app.mjs
├── app.mjs
│
├── src                     # source files to be bundled
│   ├── assets
│   ├── css
│   │   └── style.scss
│   └── js
│       └── index.js
│
├── webpack.config.js       # webpack config
└── babel.config.json
```

```bash
npm run start # nodemon ./bin/www
npm run dev # rm -rf public && webpack --mode development
npm run prod  # rm -rf public && webpack --mode production
```

<br />

SSR 사용하려면 의존성을 변경하고 `webpack.config.pug.js`를 기본 설정으로 사용

```bash
npm uninstall -D html-webpack-plugin mini-css-extract-plugin
npm i -D pug-plugin
```

<br />

### server

```bash
.
├── bin                     # entry for app.mjs
├── app.mjs
│
├── config
│   └── env.mjs             # config object using dotenv
└── api                     # 3 layer architecture
    └── user
        ├── controller.mjs
        ├── data.mjs
        └── service.mjs
```

```bash
npm run start # nodemon ./bin/www
```
