<template><div><h1 id="next-js-学习" tabindex="-1"><a class="header-anchor" href="#next-js-学习" aria-hidden="true">#</a> Next js 学习</h1>
<p>官方网址： <a href="https://www.nextjs.cn/" target="_blank" rel="noopener noreferrer">https://www.nextjs.cn/<ExternalLinkIcon/></a></p>
<h2 id="项目创建" tabindex="-1"><a class="header-anchor" href="#项目创建" aria-hidden="true">#</a> 项目创建</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>
<span class="token function">pnpm</span> create next-app <span class="token parameter variable">--typescript</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置选择" tabindex="-1"><a class="header-anchor" href="#配置选择" aria-hidden="true">#</a> 配置选择</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 项目名称</span>
√ What is your project named? <span class="token punctuation">..</span>. my-app
<span class="token comment"># 是否使用EsLint</span>
√ Would you like to use ESLint? <span class="token punctuation">..</span>. No / Yes
<span class="token comment"># 是否使用Tailwind</span>
√ Would you like to use Tailwind CSS? <span class="token punctuation">..</span>. No / Yes
<span class="token comment"># 是否启动src目录，不使用文件将创建在根目录</span>
√ Would you like to use <span class="token variable"><span class="token variable">`</span>src/<span class="token variable">`</span></span> directory? <span class="token punctuation">..</span>. No / Yes
<span class="token comment"># 是否使用应用路由器</span>
√ Would you like to use App Router? <span class="token punctuation">(</span>recommended<span class="token punctuation">)</span> <span class="token punctuation">..</span>. No / Yes
<span class="token comment"># 是否使用别名</span>
√ Would you like to customize the default <span class="token function">import</span> <span class="token builtin class-name">alias</span> <span class="token punctuation">(</span>@/*<span class="token punctuation">)</span>? <span class="token punctuation">..</span>. No / Yes
<span class="token comment"># 设置别名</span>
√ What <span class="token function">import</span> <span class="token builtin class-name">alias</span> would you like configured? <span class="token punctuation">..</span>. @/*

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="项目结构" tabindex="-1"><a class="header-anchor" href="#项目结构" aria-hidden="true">#</a> 项目结构</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>
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
│      next.svg
│      vercel.svg
│
└─src
    └─app
            favicon.ico
            globals.css
            layout.tsx
            page.tsx

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="启动问题" tabindex="-1"><a class="header-anchor" href="#启动问题" aria-hidden="true">#</a> 启动问题</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>
<span class="token comment"># 问题1 => 解决方案：重新 pnpm install</span>
node:internal/modules/cjs/loader:998
  throw err<span class="token punctuation">;</span>
  ^

Error: Cannot <span class="token function">find</span> module <span class="token string">'xxx\node_modules\next\dist\bin\next'</span>
    at Function.Module._resolveFilename <span class="token punctuation">(</span>node:internal/modules/cjs/loader:995:15<span class="token punctuation">)</span>
    at Function.Module._load <span class="token punctuation">(</span>node:internal/modules/cjs/loader:841:27<span class="token punctuation">)</span>
    at Function.executeUserEntryPoint <span class="token punctuation">[</span>as runMain<span class="token punctuation">]</span> <span class="token punctuation">(</span>node:internal/modules/run_main:81:12<span class="token punctuation">)</span>
    at node:internal/main/run_main_module:22:47 <span class="token punctuation">{</span>
  code: <span class="token string">'MODULE_NOT_FOUND'</span>,
  requireStack: <span class="token punctuation">[</span><span class="token punctuation">]</span>

<span class="token comment"># 问题2 => node版本问题，升级版本或者使用nvm管理node版本（推荐）</span>
You are using Node.js <span class="token number">16.19</span>.0. For Next.js, Node.js version <span class="token operator">>=</span> v18.17.0 is required.

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="修改启动端口" tabindex="-1"><a class="header-anchor" href="#修改启动端口" aria-hidden="true">#</a> 修改启动端口</h2>
<div class="language-package.json line-numbers-mode" data-ext="package.json"><pre v-pre class="language-package.json"><code>
 &quot;scripts&quot;: {
    &quot;dev&quot;: &quot;next dev -p 3214&quot;,
    ...
  }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


