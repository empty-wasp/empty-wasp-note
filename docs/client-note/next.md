# Next js 学习

官方网址： <https://www.nextjs.cn/>

## 项目创建

```shell

pnpm create next-app --typescript

```

## 配置选择

```shell
# 项目名称
√ What is your project named? ... my-app
# 是否使用EsLint
√ Would you like to use ESLint? ... No / Yes
# 是否使用Tailwind
√ Would you like to use Tailwind CSS? ... No / Yes
# 是否启动src目录，不使用文件将创建在根目录
√ Would you like to use `src/` directory? ... No / Yes
# 是否使用应用路由器(app应用路由器和pages页面路由器，不习惯可以选择no)
√ Would you like to use App Router? (recommended) ... No / Yes
# 是否使用别名
√ Would you like to customize the default import alias (@/*)? ... No / Yes
# 设置别名
√ What import alias would you like configured? ... @/*

```

## 项目结构

```shell

next-project.
│  .eslintrc.json
│  .gitignore
│  catalogTree.txt
│  next-env.d.ts
│  next.config.js
│  package.json
│  pnpm-lock.yaml
│  postcss.config.js
│  README.md
│  tailwind.config.ts
│  tsconfig.json
│
├─.next
│
├─node_modules
│
├─public
│
└─src
    └─pages

```

## 启动问题

```shell

# 问题1 => 解决方案：重新 pnpm install
node:internal/modules/cjs/loader:998
  throw err;
  ^

Error: Cannot find module 'xxx\node_modules\next\dist\bin\next'
    at Function.Module._resolveFilename (node:internal/modules/cjs/loader:995:15)
    at Function.Module._load (node:internal/modules/cjs/loader:841:27)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:22:47 {
  code: 'MODULE_NOT_FOUND',
  requireStack: []

# 问题2 => node版本问题，升级版本或者使用nvm管理node版本（推荐）
You are using Node.js 16.19.0. For Next.js, Node.js version >= v18.17.0 is required.

```

## 修改启动端口

```package.json

 "scripts": {
    "dev": "next dev -p 3214",
    ...
  }

```
