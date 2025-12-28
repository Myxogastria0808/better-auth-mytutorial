# Server

## DBスキーマの更新

1. `better-auth`のスキーマの更新

`auth-schema.ts`が自動更新 (生成) される。

```sh
pnpm run better-auth:generate
```

2. `drizzle`で定義したスキーマの更新

```sh
pnpm run drizzle:generate
```

3. マイグレーション

```sh
pnpm run drizzle:migrate
```
