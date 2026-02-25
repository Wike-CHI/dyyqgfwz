

# 大油元气 - Tree House Brewing 复刻项目

## 📖 项目简介

大油元气是一个基于 Tree House Brewing 网站风格的开源项目，采用现代 Web 技术栈进行开发。本项目旨在复刻 Tree House Brewing 网站的视觉设计和交互体验，同时保持代码的模块化和可扩展性。

## ✨ 功能特点

- **沉浸式首页** - 全屏视觉体验，动态背景媒体展示
- **多布局组件** - 支持瀑布流、栅格、 Zig-Zag 等多种布局模式
- **响应式设计** - 完美适配各种屏幕尺寸
- **模块化架构** - 组件高度可复用，便于维护和扩展
- **TypeScript 支持** - 完整的类型定义，提升开发体验

## 🛠 技术栈

| 类别 | 技术选型 |
|------|----------|
| 前端框架 | Next.js (App Router) |
| 样式方案 | Tailwind CSS + CSS Modules |
| 后端语言 | Node.js (TypeScript) |
| 字体 | Poppins / Ma Shan Zheng / Libre Franklin / Metropolis |

## 📁 项目结构

```
dayou-yuanqi/
├── backend/                 # 后端服务
│   ├── src/
│   │   └── server.ts       # 服务入口
│   ├── package.json
│   └── tsconfig.json
├── frontend/                # 前端应用
│   ├── src/
│   │   ├── app/            # Next.js App Router 页面
│   │   │   ├── api/        # API 路由
│   │   │   ├── careers/    # 招聘页面
│   │   │   ├── merch/      # 商品页面
│   │   │   ├── order-ahead/# 预订页面
│   │   │   ├── visiting/   # 参观页面
│   │   │   └── page.tsx    # 首页
│   │   ├── components/     # React 组件
│   │   │   └── layout/     # 布局组件
│   │   └── globals.css     # 全局样式
│   ├── public/             # 静态资源
│   │   ├── fonts/          # 字体文件
│   │   └── img/            # 图片资源
│   ├── tailwind.config.ts
│   └── package.json
├── docs/                    # 项目文档
│   ├── layout_analysis.md  # 布局分析
│   ├── project_initialization_spec.md
│   └── tech_stack.md       # 技术选型
└── openspec/               # OpenSpec 变更规范
```

## 🚀 快速开始

### 环境要求

- Node.js 18+
- npm / yarn / pnpm

### 安装依赖

```bash
# 安装前端依赖
cd frontend
npm install

# 安装后端依赖
cd ../backend
npm install
```

### 启动开发服务器

```bash
# 启动前端 (端口 3000)
cd frontend
npm run dev

# 启动后端 (端口 3001)
cd backend
npm run dev
```

### 构建生产版本

```bash
# 前端构建
cd frontend
npm run build

# 后端构建
cd backend
npm run build
```

## 📄 页面概览

| 页面 | 路径 | 说明 |
|------|------|------|
| 首页 | `/` | 沉浸式视觉展示，包含视频、引用等模块 |
| 预订 | `/order-ahead` | 门店位置列表展示 |
| 商品 | `/merch` | 商品网格展示 |
| 参观 | `/visiting` | 信息展示页面，采用 Zig-Zag 布局 |
| 招聘 | `/careers` | 招聘信息页面 |

## 🧩 核心组件

### 布局组件

| 组件名 | 功能说明 |
|--------|----------|
| `HeroSection` | 全屏英雄区域，支持背景媒体和叠加导航 |
| `Footer` | 站点底部导航 |
| `NavBar` | 顶部导航栏，支持透明/非透明状态 |
| `ContentGrid` | 内容栅格布局 |
| `FluidGrid` | 流体栅格系统 |
| `MasonryGrid` | 瀑布流网格布局 |
| `ProductGrid` | 商品展示网格 |
| `LocationTable` | 位置信息表格 |
| `ZigZagSection` | Zig-Zag 交替布局 |
| `MultiColumnText` | 多列文本展示 |

## 📚 文档指南

项目文档位于 `docs/` 目录：

- **layout_analysis.md** - Tree House Brewing 网站布局分析与实现指南
- **project_initialization_spec.md** - 项目初始化规范
- **tech_stack.md** - 技术选型建议

## 📋 开发规范

本项目遵循 OpenSpec 变更管理规范，所有重大变更都需经过以下流程：

1. **Proposal** - 变更提案，说明变更原因和影响
2. **Design** - 详细设计文档
3. **Specs** - 具体规格说明
4. **Tasks** - 实现任务清单

## 📄 许可证

本项目仅供学习和研究使用。

## 🚀 部署信息

### Cloudflare Pages 部署（推荐）

| 项目 | 详情 |
|------|------|
| 部署平台 | Cloudflare Pages |
| 域名 | www.perfectlifeexperience.com |
| 部署类型 | 静态网站托管 + Serverless Functions |
| Git 仓库 | https://github.com/Wike-CHI/dyyq |
| 访问地址 | https://www.perfectlifeexperience.com |
| 成本 | 免费（无限带宽和请求） |

#### Cloudflare Pages 部署步骤

**1. 注册 Cloudflare 账户**

- 访问：https://dash.cloudflare.com/sign-up
- 使用邮箱注册账户
- 选择 FREE 计划

**2. 添加域名到 Cloudflare**

- 登录 Cloudflare Dashboard
- 点击 "Add a Site"
- 输入域名：`perfectlifeexperience.com`
- 选择 FREE 计划
- Cloudflare 会自动扫描现有 DNS 记录
- 记录 Cloudflare 提供的 nameservers（格式：`xxx.ns.cloudflare.com`）

**3. 在域名注册商更新 Nameservers**

- 登录阿里云域名控制台
- 找到域名 `perfectlifeexperience.com`
- 修改 DNS 服务器为 Cloudflare 提供的 nameservers
- 保存更改（通常需要 2-24 小时生效）

**4. 创建 Cloudflare Pages 项目**

- Cloudflare Dashboard → Pages → Create a project
- 选择 "Connect to Git"
- 授权 GitHub 并选择 `dyyq` 仓库
- 配置构建设置：
  ```
  Project name: dyyq
  Production branch: main
  Framework preset: Next.js
  Build command: cd frontend && npm run build
  Build output directory: frontend/out
  Root directory: /
  Node.js version: 18
  ```
- 点击 "Save and Deploy"
- 等待首次部署完成（3-5 分钟）

**5. 配置自定义域名**

- Pages → 项目 → Custom domains
- 点击 "Set up a custom domain"
- 输入：`www.perfectlifeexperience.com`
- 点击 "Activate domain"
- Cloudflare 会自动创建 DNS 记录并颁发 SSL 证书（15-30 分钟）

**6. 验证部署**

```bash
# 检查 DNS 解析
dig www.perfectlifeexperience.com

# 访问网站
curl -I https://www.perfectlifeexperience.com

# 测试 API 端点
curl https://www.perfectlifeexperience.com/api/health
```

#### 本地开发命令

```bash
# 构建前端
cd frontend
npm run build

# 本地预览构建结果
npm run preview

# 使用 Wrangler 本地测试 Cloudflare Functions
npm install -g wrangler
wrangler pages dev frontend/out --watch
```

#### 自动部署

配置完成后，每次推送到 GitHub `main` 分支会自动触发部署：

```bash
git add .
git commit -m "Your commit message"
git push origin main
```

Cloudflare Pages 会自动：
1. 拉取最新代码
2. 运行构建命令
3. 部署到全球 CDN
4. 更新自定义域名

---

### CloudBase 腾讯云开发部署（已废弃）

| 项目 | 详情 |
|------|------|
| 部署平台 | 腾讯云开发 CloudBase |
| 环境 ID | `dyyq-0gxfchpt0a88ca22` |
| 部署类型 | 静态网站托管 |
| 访问地址 | https://dyyq-0gxfchpt0a88ca22-1402837521.tcloudbaseapp.com |
| 最后部署 | 2026-02-06 |
| 状态 | 已迁移至 Cloudflare Pages |

> **注意：** 腾讯云开发部署已废弃，请使用 Cloudflare Pages 进行部署。

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request，共同完善项目。