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
