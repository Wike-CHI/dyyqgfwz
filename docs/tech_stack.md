# Tree House Brewing 复刻项目技术选型建议

基于对 Tree House Brewing 网站的[深度布局分析](layout_analysis.md)，该网站具有**高视觉保真度**、**复杂网格布局**、**图片密集**以及**混合内容类型**（展示、电商、信息聚合）的特点。

为了完美复刻其体验并保证开发效率，建议采用以下技术栈：

## 1. 核心推荐栈 (The Modern Standard)

这是目前构建高性能、SEO 友好型品牌官网的主流选择。

*   **前端框架**: **Next.js (React)**
*   **编程语言**: **TypeScript**
*   **样式方案**: **Tailwind CSS** + **CSS Modules**
*   **后端/CMS**: **Node.js (NestJS)** 或 **Headless CMS (Strapi/Sanity)**

---

## 2. 详细选型理由

### A. 前端框架: Next.js (App Router)

*   **为什么选它？**
    1.  **图片优化 (Crucial)**: Tree House 网站 90% 的视觉冲击力来自高清大图。Next.js 自带的 `next/image` 组件可以自动处理图片压缩、懒加载和格式转换（WebP/AVIF），这对复刻站点的加载速度至关重要。
    2.  **混合渲染模式**:
        *   **SSG (静态生成)**: 用于 "Visiting", "About", "Careers" 等信息页面，保证秒开和 SEO。
        *   **SSR (服务端渲染)**: 用于 "Order Ahead", "Events" 等需要实时库存或状态的页面。
    3.  **路由与布局嵌套**: Next.js 13+ 的 App Router 允许我们轻松定义全局布局（Sticky Header）和嵌套布局（例如电商部分的侧边栏或过滤器），完美契合网站的结构。

### B. 样式方案: Tailwind CSS + CSS Modules

*   **为什么是混合方案？**
    *   **Tailwind CSS**: 用于处理 80% 的通用样式，如字体 (Poppins/Metropolis)、颜色 (Brand Blue/Orange)、间距和响应式断点。开发速度极快。
    *   **CSS Modules**: 用于处理那 **20% 的特殊布局**。我们在布局分析中发现的 `24列流体网格` 和 `Zig-Zag` 布局非常复杂，用 Tailwind 的 utility classes 写会很乱。使用 CSS Modules (或者 Tailwind 的 `config` 扩展) 可以更精确地定义 `grid-template-columns: repeat(24, 1fr)` 这种特殊需求。

### C. 后端语言: Node.js (TypeScript)

*   **推荐框架**: **NestJS** (企业级) 或 **Express** (轻量级)
*   **为什么选它？**
    1.  **全栈统一语言**: 前后端都使用 TypeScript，类型定义（如 `Product`, `Event`, `Location`）可以复用，减少 Bug。
    2.  **高并发处理**: "Order Ahead" 功能可能面临高并发请求，Node.js 的非阻塞 I/O 非常适合处理订单流。
    3.  **生态丰富**: 连接数据库（PostgreSQL/MongoDB）、支付网关（Stripe）、地图服务等都有成熟的库。

### D. 替代方案 (Headless CMS)

如果你不想从零开发后台管理系统（上传图片、写博客、发布活动），强烈建议引入 **Headless CMS**。

*   **推荐**: **Strapi** (自托管) 或 **Contentful** (SaaS)
*   **优势**: 它们提供现成的后台界面，你只需要通过 API 获取内容并在 Next.js 中渲染。这能将开发时间缩短一半。

---

## 3. 架构设计图

```mermaid
graph TD
    User[用户] --> CDN[Vercel Edge / CDN]
    CDN --> Next[Next.js Frontend Server]
    
    subgraph "Frontend (Next.js)"
        Page[Pages (Home, Order, Events)]
        Comp[Components (Grid, Card, Table)]
        Style[Tailwind + CSS Modules]
    end
    
    Next -- API Request --> Backend[Node.js API / Headless CMS]
    Next -- Image Opt --> ImageService[Image Optimization]
    
    subgraph "Backend Services"
        Auth[Auth Service]
        Order[Order System]
        CMS[Content Management]
    end
    
    Backend --> DB[(Database - PostgreSQL)]
```

## 4. 开发路线图建议

1.  **初始化**: 使用 `create-next-app` 搭建项目骨架，配置 TypeScript 和 Tailwind。
2.  **基建**: 
    *   配置字体 (Metropolis, Poppins)。
    *   定义 `tailwind.config.js` 中的颜色变量。
    *   **核心任务**: 封装 `FluidGrid` 组件，复刻那个 24 列网格系统。
3.  **组件开发**:
    *   开发原子组件: `Button` (Ghost/Solid), `Typography` (H1-H6).
    *   开发区块组件: `HeroSection`, `ZigZagRow`, `ProductCard`, `LocationTable`.
4.  **页面组装**:
    *   先做静态页 (Visiting, Careers) 验证布局。
    *   再做动态页 (Order, Events) 对接数据。

## 5. 总结

**推荐配置**: **Next.js + TypeScript + Tailwind CSS**

这套组合是目前复刻此类“设计驱动型”网站的最优解，既能还原复杂的视觉效果，又能保证优秀的性能和可维护性。
