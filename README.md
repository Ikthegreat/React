<details>
<summary>React 특강</summary>

---

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

</details>

<details>
<summary>Nomadcoders</summary>

---

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

# React-Router

### errorElement

문제 발생 시 해당하는 Component를 화면에 보여줄 수 있다.

이를 Child Component에도 추가하여 해당 Component에서 발생한 문제에 대해 다른 컴포넌트들을 보호할 수 있다.

### useNavigate

Vue 에서의 location.push 와 비슷한 기능

함수를 통해서 특정 event 발생 시 페이지를 이동시킬 수 있다.

# React-Hooks

- useEffect는 ComponentDidMount, ComponentWillMount, ComponentDidUpdate 역할

```
useEffect(function, dependency)
```

</details>

<details>
<summary>'t cha Project</summary>

---

컴포넌트 다이어그램
![Component_Diagram](./Image/Component.drawio.png)

---

### 프로토타이핑 (목업)

- Home

  ![](./Image/HOME.png)

<details>
<summary>나머지 페이지</summary>

- Navber

  ![](./Image/Navbar.png)

- Trainer List

  ![](./Image/PT_List.png)

- Trainer List (날짜 선택하여 필터링)

  ![](./Image/PT_List-1.png)

- Trainer Detail (Info)

  ![](<./Image/PT_Detail_INFO%20(L).png>)

- Trainer Detail (Review)

  ![](<./Image/PT_Detail_RV%20(R).png>)

- User MyPage

  ![](./Image/User%20MyPage.png)

- User Info Edit Page

  ![](./Image/User_Info_Edit.png)

- Bookmarked Trainer

  ![](./Image/BookMarked%20Trainer.png)

- User Schedule

  ![](./Image/User_Calender.png)

- My Review

  ![](./Image/My_Review_List.png)

- Chat List

  ![](./Image/My_Chatting_List.png)

- Trainer MyPage

  ![](./Image/Trainer%20MyPage.png)

- Trainer Info Edit

  ![](./Image/Trainer_Info_Edit.png)

- Trainer Schedule

  ![](./Image/Trainer_Calender.png)

- Auth

  ![](./Image/Login.png)

- PT Room (Mobile Web)

  ![](./Image/PT_Mobile.png)

- PT Room (Mobile Web)

  ![](./Image/PT_Mobile-1.png)

- PT Room (PC Web)

  ![](./Image/PT_PC.png)

- 고객센터 (공지사항)

  ![](<./Image/Customer_Center%20(L).png>)

- 고객센터 (Q&A)

  ![](<./Image/Customer_Center%20(R).png>)

  </details>

## Project 공통 적용사항

기본 컬러 및 컨셉

![](./Image/Color.png)

## 써드파티 라이브러리 선택 고민

전역 상태 관리 라이브러리를 선택하는데에 있어 고민을 했다.

### Redux와 Recoil의 차이점 정리

![](/Image/Redux_vs_Recoil.png)

- Redux

  - 먼저 나온 상태 관리 라이브러리
  - 중앙 집중식 Storage와 상태 업데이트를 위한 Reducer를 사용
  - 단방향 데이터 흐름
  - React 메인 개발자인 Dan이 유지보수를 진행하고 있음

  - 장점

    - 오래된 역사, 탄탄한 커뮤니티 (대중적)
    - 미들웨어를 활용한 여러 비동기, 로그 작업 등의 처리
    - 단방향 데이터 흐름을 따르기에, Reducer 등의 단위 테스트가 비교적 쉽다

  - 단점

    - 구조가 너무 복잡하다
      - 간단한 웹앱을 만들 때에도 Action, Reducer, Action Creator 등의 코드를 모두 작성해야한다
    - State가 변경될 때 Component를 업데이트 해주는 반응형 메커니즘이 기본적으로 탑재되지 않아, React의 자체 메커니즘을 활용하거나 추가 외부 라이브러리 사용이 필요함

- Recoil

  - 비교적 최근에 나온 상태 관리 라이브러리
  - Facebook사에서 개발, 가장 React스러운 상태관리라는 철학
  - Recoil의 경우 Next.js와 조금 더 친숙한 편이기도 함

    ![](/Image/Recoil.png)

- 장점

  - 간단한 구조
  - 작은 프로젝트를 시작하는데 큰 보일러 플레이트가 필요하지 않다
  - Component가 렌더링되는 시기, 상태 등을 세밀하게 제어할 수 있다
    - 이를 통해 성능 최적화 등에도 사용 가능
  - 동적인 기능 구현에 유리

- 단점

  - 사용자 커뮤니티가 비교적 빈약
  - 시작은 쉬울 수 있으나, Recoil의 상태관리 자체가 세분화 되어있어 디버깅 또는 테스트에 어려움을 느낄 수 있다

---

### Redux와 비교했을 때 Recoil의 이점

- Redux의 복잡한 코드
  Redux 를 사용하고자 할 때 마주하는 가장 큰 어려움은 복잡한 코드다. Redux 를 활용하기 위해서는 action, dispatcher, reducer, store 등 구현해야 할 기본 코드 들이 큰 편이다. 이는 보일러 플레이트를 활용해서 해결할 수 있는 문제지만, 만약 여러 개발자가 공동 작업 할 때 컨벤션을 적용하지 않고 코드를 작성할 경우 자기만 알아볼 수 있는 구조의 코드를 작성하게 된다.

- 간단한 Recoil 의 개념
  Redux 를 이해하고 사용하려면 공부해야 할 것들이 많다. 데이터의 흐름을 추상화 하여서 익히려고 하여도 여러가지 복잡한 흐름을 이해하는 건 쉽지 않다. 이에 반해서 Recoil 에서 state 를 관리하는 방법은 굉장히 간단해 보인다.

- 쉽게 사용하는 비동기 로직
  Redux 에서 비동기를 활용하기 위해서는 middleware 을 활용한다. 비동기 통신을 한다면 통신의 결과가 Success 일수도 있고 Fail 일 수도 있다. 이를 구분하여 state 관리를 해야하는데, 이를 쉽게 하기 위해서 Redux 에서는 Redux-thunk 혹은 Redux-saga 같은 미들웨어를 활용한다. 하지만 Recoil 에서는 내장된 개념인 selector 을 활용해 추가적인 미들웨어의 사용 없이 쉽게 비동기 로직을 구현할 수 있다.

---

참고

- https://velog.io/@duroomi/%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC-Recoil-vs-Redux

- https://blog.toktokhan.dev/react-%EC%83%81%ED%83%9C%EA%B4%80%EB%A6%AC-%EC%B5%9C%EA%B0%95%EC%9E%90%EB%8A%94-f0753ad7d186

추가

React-Query 관련 글

- https://tech.kakaopay.com/post/react-query-1/

### 결론

```
위 내용처럼 다양한 정보들을 찾아보았지만, 글로는 대부분 이해해도 크게 와닿지 않는다는 느낌이 많이 들어 "요즘 이걸 많이 쓰니 쓰자" 와 같은 이유로 선택하기보단 각 Tool들의 장단점을 확인하고 내 프로젝트에 어울리는 Tool을 선택하는 것이 맞다는 생각이 들었다.

일단 오래 쓰여왔으며, 대중적이고, 개발자 풀이 크게 형성되어 있는 Redux를 공부하며 장단점을 스스로 느껴보고, 지속적으로 어떤 프로젝트나 상황에 어떤 라이브러리가 용이할지에 대해 스스로 판단할 수 있는 실력을 기르는 것이 중요하다고 생각되었다.
```

</details>

<details>
<summary>구글링</summary>

# React.StrictMode

useEffect Hook 사용 시 Test를 위해 console.log로 Test 진행하였으나, Console창에 2번 렌더링되는 현상 발생하여 찾아보았다

```
useEffect가 2번 이상 연속으로 발생하는 경우 원인

1. 해당 컴포넌트가 페이지내에서 2번 이상 사용되는 경우

2. 상위 트리에서 언마운트 혹은 리마운트가 발생하는 경우
- 이런 경우는 보통 상위 컴포넌트에서 key가 변경되거나 할 때 발생한다고 하며 해결하기 위해서는 문제가 되는 상위 컴포넌트를 찾기 위해 컴포넌트를 하나씩 거슬러 올라가며 useEffect를 통해 테스트해봐야 한다.

3. Strict mode를 사용했을 경우

React의 Strict mode는 개발 단계에서 개발자의 코드를 확인하여 사전에 발생할 수 있는 에러를 파악해 예기치 못한 오류를 막기 위해 사용하는데 이를 위해 일부 메소드가 2번씩 호출된다.

생명주기 메소드들과 render, constructor, setState등의 메소드가 해당되며
특히 CRA 환경 일 경우 설치 후 기본으로 StrictMode가 적용되어있기 때문에 index.js에서 React.StrictMode라는 컴포넌트가 App을 감싸고 있는지 확인해보아야 한다.

Strict mode는 개발 단계에서만 적용되기 때문에 실제 배포시에는 원래대로 한번만 렌더링이 발생합니다.

따라서 만약 개발 단계에서 초기 렌더링이 중복으로 발생하면 안되는 상황일 경우 임시로 index.js에서 <React.StrictMode> 컴포넌트를 잠시 주석처리하고 진행
```

# import React from "react"

React 프로젝트 생성 시 App.tsx 등에 `import React from "react"`가 붙지만 생략해도 동작하는 것에 궁금증이 생김

```
브라우저는 HTML, CSS, JavaScript만 읽을 수 있기 때문에 우리가 작성한 React를 읽지 못한다. 따라서 React로 작성한 코드를 브라우저가 읽을 수 있도록 변환해주어야한다.

React에서 JSX 문법을 사용하는데, 이 JSX 문법을 자바스크립트로 변환시킬 때 JSX transformer를 사용해 JSX로 작성된 React 메소드를 변환시킨다. 이때 객체인 React를 가져오기 위해서 import React from ‘react’를 맨 위에 작성해 React를 불러오게 되면 객체 React를 통해 React 메소드를 작성할 수 있게 된다.
```

### JSX

```
// JSX

import React from 'react'
import ReactDOM from 'react-dom'

function App() {
  return <h1>Hello React!</h1>
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)

// JSX -> JS

import React from 'react'
import ReactDOM from 'react-dom'

function App() {
  return React.createElemet("h1",null,"Hello React!");
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

이처럼 JSX는 React라는 객체의 메소드를 이용하여 구성요소들을 생성하기 때문에 문서의 위에 import React from ‘react’를 작성해 해당 JSX가 객체React를 받아오고 React를 유효한 JavaScript로 변환할 수 있도록 해준다.

## 생략 가능 여부

이는 작성하고 있는 컴포넌트가 상위 컴포넌트 인지 하위 컴포넌트 인지 파악하고 만약 상위 컴포넌트에 import React from ‘react’가 작성되었다면 하위에서는 생략해도 작동이 된다.

물론 생략하지 않아도 작동하는데에는 아무런 지장이 없다. 추후 웹팩을 통해 최적화된 코드로 작성되므로 중복에 대한 비효율성은 걱정하지 않아도 된다.

## React 버전 17부터 생략 가능

2020년 10월 20일에 릴리즈된 React v17를 보면, React 내부적으로 JSX transformer가 JSX를 React 요소로 변환하는 작업을 거치기 때문에 모든 컴포넌트에 import React from ‘react’를 작성하지 않아도 된다

```
// JSX

function App() {
  return <h1>Hello React!</h1>
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)

// JSX -> JS

import { jsx as _jsx } from "react/jsx-runtime"

function App() {
  return _jsx("h1", { children: "Hello React!" })
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

위의 예시와는 달라진 모습으로 변환된 모습을 볼 수 있다.

</details>
