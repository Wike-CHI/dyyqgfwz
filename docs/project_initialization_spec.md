# OpenSpec: Tree House Brewing 复刻项目初始化规范

**Version**: 1.0
**Status**: Draft
**Author**: Assistant
**Date**: 2026-01-31

## 1. 目标 (Objective)
初始化 "Tree House Brewing Clone" 项目的开发环境，建立前后端分离的 Monorepo 风格目录结构。前端采用 Next.js (App Router) 还原高保真 UI，后端采用 Node.js (Express/TypeScript) 处理业务逻辑。

## 2. 目录结构 (Directory Structure)

项目根目录: `/Users/johnny/Desktop/大友元气官网`

```text
/
├── docs/                   # 项目文档 (Layout Analysis, Tech Stack)
├── frontend/               # Next.js 前端应用
│   ├── src/
│   │   ├── app/            # App Router 页面
│   │   ├── components/     # UI 组件
│   │   └── lib/            # 工具函数
│   ├── public/             # 静态资源
│   ├── tailwind.config.ts  # 样式配置
│   └── next.config.js      # Next.js 配置
└── backend/                # Node.js 后端应用
    ├── src/
    │   ├── controllers/    # 控制器
    │   ├── routes/         # 路由定义
    │   └── services/       # 业务逻辑
    ├── package.json
    └── tsconfig.json
```

## 3. 前端初始化规范 (Frontend Specification)

*   **框架**: Next.js 14+ (App Router)
*   **语言**: TypeScript
*   **样式**: Tailwind CSS (预设) + CSS Modules (用于复杂 Grid)
*   **代码规范**: ESLint + Prettier
*   **初始化命令**:
    ```bash
    npx create-next-app@latest frontend \
      --typescript \
      --tailwind \
      --eslint \
      --app \
      --src-dir \
      --import-alias "@/*" \
      --use-npm
    ```

## 4. 后端初始化规范 (Backend Specification)

*   **运行时**: Node.js (LTS)
*   **框架**: Express (v4.x) - 轻量级，适合快速开发。
*   **语言**: TypeScript
*   **核心依赖**:
    *   `express`: Web 框架
    *   `cors`: 跨域处理
    *   `dotenv`: 环境变量管理
*   **开发依赖**:
    *   `typescript`: 编译器
    *   `ts-node`: 开发环境运行
    *   `nodemon`: 自动重启
    *   `@types/express`, `@types/node`: 类型定义
*   **初始化步骤**:
    1.  创建 `backend` 目录。
    2.  `npm init -y` 生成 package.json。
    3.  安装依赖。
    4.  配置 `tsconfig.json` 和 `nodemon.json`。
    5.  创建基础 `src/server.ts` 入口文件。

## 5. 执行计划 (Execution Plan)

1.  **Phase 1: Environment Setup**
    - [ ] 检查 Node.js 环境。
    - [ ] 确认目标目录清洁度。

2.  **Phase 2: Frontend Bootstrapping**
    - [ ] 执行 `create-next-app`。
    - [ ] 验证 `frontend/package.json`。
    - [ ] 清理默认页面内容，建立基础布局骨架。

3.  **Phase 3: Backend Bootstrapping**
    - [ ] 创建后端目录结构。
    - [ ] 初始化 `package.json`。
    - [ ] 编写 Hello World API (`/api/health`)。

4.  **Phase 4: Integration Verification**
    - [ ] 前端运行 `npm run dev` (Port 3000)。
    - [ ] 后端运行 `npm run dev` (Port 4000)。
    - [ ] 验证前后端连通性。
