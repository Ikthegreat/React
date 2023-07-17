# React 특강

`//@ts-nocheck` : TypeScript 오류 미검출

## package.json

```
  "scripts": {
    "dev": "pnpm watch | pnpm serve",
    "serve": "live-server --host=localhost --port=3000 --no-browser",
    "compile": "tsc -p tsconfig.json",
    "watch": "pnpm compile --watch"
  },
```

## tsconfig.json

```
tsc --init
```

위 명령어 실행 시 Default 상태로 생성

```
{
  "compilerOptions": {
    "baseUrl": ".",
    "outDir": "scripts",
    "target": "ES2017",
    "module": "ESNext",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  },
  "include": ["src/**/*.ts"],
  "exclude": ["node_modules", "scripts", "dist"]
}
```

## TypeScript : Type 추론 가능

## Interface

```
interface Options {
  // required
  option1: number;
  // optional
  option2?: boolean;
}
```

- interface 내의 요소들은 기본적으로 required
- 변수명 뒤에 ? 를 붙여 optional 속성으로 작성 가능

또는

```
interface Options {
  // required
  option1: number;
  // required
  option2: boolean;
}

const defaultOptions: Partial<Options> = {
  option1: 0
}
```

- Partial<인터페이스> 적용 시 인터페이스 내 옵션들이 전부 optional

## Routing

- 리액트 라우터 설치

```
$ npm install react-router-dom
```

- 프로젝트에 라우터 적용

```
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
```

- 컴포넌트 만들기

```
src/pages/Home.js

import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/about">About</Link>
    </div>
  );
};

export default Home;
```

```
src/pages/About.js

const About = () => {
  return (
    <div>
      <h1>About</h1>
    </div>
  );
};

export default About;
```

```
src/App.js

import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default App;
```

## Route

```
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
</Routes>
```

Vue의 `router/index.js` 에 Route 구조를 적용한 후 사용한 것과 비슷하게
React의 경우 App.js에 Route 구조를 지정하고 사용하는 것이 일반적인 흐름

```
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/articles" element={<Articles />}>
    <Route path=":id" element={<Article />} />
  </Route>
</Routes>
```

위와 같은 중첩 형태도 구현 가능

# Nomadcoders-React

JavaScript는 strongly-typed 언어가 아님

TypeScript는 JavaScript에 안전장치를 추가한 strongly-typed 언어

기존에 리액트 프로젝트에 타입스크립트를 추가하기

1. npm install --save typescript @types/node @types/react @types/react-dom @types/jest
2. src 폴더 안에 있던 App.js와 index.js 파일을 App.tsx와 index.tsx 로 바꾼다.
3. "npx tsc --init" 명령어로 tsconfig.json 파일 생성한 후, tsconfig.json 파일에 "jsx": "react-jsx"추가

---

{
"compilerOptions": {
......
"jsx": "react-jsx"
}
}

---

4. src/index.tsx에서 수정

---

import ReactDOM from "react-dom/client"

## const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

5. npm i --save-dev @types/styled-components

### DefinitelyTyped

https://github.com/DefinitelyTyped/DefinitelyTyped

- TypeScript 작업 시 대부분의 필요한 type definition들을 얻을 수 있음

## TypeScript

```
useState<type1 | type2>()
```

위처럼 Type을 세팅하여 State의 Type을 여러가지로 세팅도 가능하다
