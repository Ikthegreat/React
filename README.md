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
