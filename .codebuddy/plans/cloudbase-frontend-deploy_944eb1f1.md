---
name: cloudbase-frontend-deploy
overview: 将大友元气官网前端部署到腾讯云开发 CloudBase 静态托管
todos:
  - id: build-project
    content: 执行 npm run build 构建项目，生成 out/ 静态文件
    status: completed
  - id: deploy-cloudbase
    content: 使用 [integration:tcb] 将 out/ 目录部署到 CloudBase 静态托管
    status: completed
    dependencies:
      - build-project
  - id: verify-deployment
    content: 验证部署结果，确认网站可正常访问
    status: completed
    dependencies:
      - deploy-cloudbase
---

## 项目概述

将大友元气官网前端部署到腾讯云开发 CloudBase 静态托管服务。

## 核心需求

- 部署 Next.js 16 + React 19 + Tailwind CSS 构建的静态网站
- 项目已配置静态导出（output: 'export'），构建输出目录为 out/
- 仅需部署前端静态资源，后端 Express 服务不需要部署
- 利用 CloudBase 静态托管实现快速、稳定的网站访问

## 技术栈

- 前端框架：Next.js 16 + React 19 + Tailwind CSS
- 构建输出：静态导出（output: 'export'），输出目录 out/
- 部署平台：腾讯云开发 CloudBase 静态托管

## 部署架构

### 部署流程

```mermaid
flowchart LR
    A[本地项目] --> B[构建: npm run build]
    B --> C[生成 out/ 目录]
    C --> D[CloudBase 静态托管]
    D --> E[线上访问]
```

### 部署方案

1. **静态托管配置**：使用 CloudBase 静态托管服务部署 out/ 目录内容
2. **域名配置**：可选择使用 CloudBase 默认域名或绑定自定义域名
3. **缓存策略**：静态资源启用 CDN 缓存，提升访问速度

## 实施细节

### 构建配置检查

项目 next.config.js 已正确配置：

- `output: 'export'` - 启用静态导出
- `images.unoptimized: true` - 静态导出时禁用图片优化
- 构建输出目录为 out/

### 部署步骤

1. 执行 `npm run build` 生成静态文件
2. 使用 CloudBase CLI 或控制台上传 out/ 目录
3. 配置访问域名和 HTTPS 证书

## Agent Extensions

### Integration

- **tcb**: 腾讯云开发 CloudBase 平台
- Purpose: 部署前端静态网站到 CloudBase 静态托管服务
- Expected outcome: 成功将 out/ 目录部署到 CloudBase，获得可访问的线上地址