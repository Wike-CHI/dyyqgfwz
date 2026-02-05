# Tree House Brewing 网站布局分析与实现指南

本文档基于对 `https://treehousebrew.com/` 及其子页面 `https://treehousebrew.com/order-ahead` 的技术分析，详细拆解其视觉设计、布局结构及实现方案，供开发借鉴。

## 1. 核心设计理念

该网站采用了**沉浸式视觉体验**与**模块化网格系统**相结合的设计。整体风格现代、简洁，强调高质量摄影图片的展示，辅以清晰的排版。

### 关键特征：
*   **全宽视觉流 (Full-width Visual Flow)**: 页面内容通常占据屏幕大部分宽度，Hero 区域全屏展示。
*   **流体网格引擎 (Fluid Grid Engine)**: 使用了高密度的 CSS Grid 系统（约 24 列），允许元素自由定位、重叠和跨越列数，打破了传统 12 列网格的僵硬感。
*   **功能性极简主义**: 在 "Order Ahead" 等功能页面，设计回归极简，通过清晰的表格和直观的按钮引导用户操作。

## 2. 布局结构技术拆解

### 2.1 整体架构
页面采用了经典的垂直堆叠结构，但每个区块（Section）内部使用了复杂的网格布局。

```mermaid
graph TD
    A[Sticky Header / Overlay Header] --> B[Hero Section (Full Screen Media)]
    B --> C[Content Section (Grid Layout)]
    C --> D[Functional Section (Table/List Layout)]
    D --> E[Footer]
```

### 2.2 网格系统 (The Grid)
这是首页等展示页面的核心。

*   **容器属性**: `display: grid`
*   **列定义 (Columns)**: 使用了非常细粒度的列定义，例如：
    `grid-template-columns: 48px repeat(24, 46px) 48px;` (示意，实际监测到约 24-26 列)
    两侧有固定宽度的 Gutter，中间是均分的列。
*   **间距 (Gap)**: `11px` 或 `0px`（视具体模块而定）。
*   **优势**: 这种高密度网格允许设计师将图片设置为占据 10 列，文本占据 8 列，并且可以精确控制留白（Offset），甚至实现图文叠加效果。

### 2.3 功能页布局 (Order Ahead 页面分析)
在 `order-ahead` 页面，布局策略发生了变化，从“自由网格”转向“结构化列表”。

*   **核心组件**: 位置选择表格 (Location Table)
    *   **实现方式**: 原生 HTML `<table>` 元素 (或者具有 `display: table` 特性的结构)。
    *   **宽度**: 约 `920px`，居中显示。
    *   **样式**:
        *   `border-collapse: collapse`
        *   表头 (Thead) 清晰，列出 "Order Type" 和 "Location"。
        *   行 (Row) 高度一致，提供清晰的视觉扫描路径。
*   **交互按钮**: "Purchase To Go"
    *   **设计**: 极简风格，无背景色或透明背景，强调文字本身。
    *   **字体**: `Poppins` (Light/300)，保持了品牌的一致性。
    *   **布局**: 按钮嵌入在表格单元格中，与位置名称对齐。

### 2.4 电商列表页布局 (Merch Page Analysis)
在 `merch.treehousebrew.com` 子站点，为了适应大量商品展示，布局策略采用了**固定宽度的多列网格**。

*   **容器架构**:
    *   **Class**: `.content-grid`
    *   **总宽度**: 约 `960px` (桌面端)。
    *   **布局模式**: `display: grid`
    *   **列配置**: 三列等宽布局。
        `grid-template-columns: 296px 296px 296px;`
    *   **间距**:
        *   行间距 (Row Gap): `48px` (保持呼吸感)
        *   列间距 (Column Gap): `36px`
*   **视觉层级**:
    *   图片位于顶部，强调产品细节。
    *   文本信息（标题+价格）位于下方，居中或左对齐。
    *   **字体变化**: 与主站不同，Merch 站点主要使用了 **`Libre Franklin`** 字体。
        *   产品标题: `16px`, Regular (400), 黑色。
        *   价格: `16px`, Regular, 黑色。

### 2.5 信息展示页布局 (Visiting Page Analysis)
在 `treehousebrew.com/visiting-charlton-1` 等信息页面，采用了 **Zig-Zag (左右交替)** 布局模式，用于有节奏地展示 "图片 + 文本" 信息块。

*   **实现基础**: 依然基于核心的 Fluid Grid Engine (24列)。
*   **布局逻辑**:
    *   **行 (Row)**: 每一行包含一个图片块和一个文本块。
    *   **交替 (Alternating)**:
        *   奇数行: 图片在左 (e.g., Grid Col 1-12)，文本在右 (e.g., Grid Col 14-24)。
        *   偶数行: 文本在左，图片在右。
    *   **垂直对齐**: 文本块通常垂直居中对齐。
*   **排版细节**:
        *   **标题 (H3)**: 使用 `Poppins` (Bold, 700), 大小约 `33px`。注意这里与首页的 `Metropolis` 略有不同，`Poppins` 显得更具功能性和亲和力。
        *   **正文**: 清晰的段落文本，行高适中。

### 2.6 活动聚合页布局 (Events Page Analysis)
在 `treehousebrew.com/events-treehouse` 页面，为了展示多个活动空间和价目表，采用了**Carousel (轮播)** 与 **Card Grid (卡片网格)** 相结合的模式。

*   **轮播组件 (Carousel)**:
    *   **用途**: 展示多个场地的详细介绍（图片+标题+描述+按钮）。
    *   **宽度**: `1280px` (接近全宽)。
    *   **背景**: 纯白背景。
    *   **交互**: 包含 "Previous" / "Next" 按钮。
*   **价格卡片网格 (Pricing Grid)**:
    *   **容器**: 3列布局 (`grid-template-columns: 365.867px 365.867px 365.867px`)。
    *   **间距**: `20px`。
    *   **卡片样式**:
        *   透明背景 (依赖页面背景)。
        *   **排版**: 垂直堆叠 (Flex Column)。
        *   **标题**: `Poppins` (Bold, 700), `39.04px`。
        *   **价格/内容**: 简洁的文本列表。

### 2.7 招聘页布局 (Careers Page Analysis)
在 `treehousebrew.com/join-our-team` 页面，"Why work at Tree House?" 区域展示了另一种经典的信息排版模式——**多列文本网格 (Multi-column Text Grid)**。

*   **布局结构**:
    *   **容器**: `display: grid`
    *   **列配置**: 3列等宽布局。
        `grid-template-columns: 339.203px 339.203px 339.203px;` (约等于 `repeat(3, 1fr)`)
    *   **间距 (Gap)**: `60px` (较大的列间距，显著区分不同内容块)。
*   **内容单元 (Item)**:
    *   **组成**: 图片 (上方) + 标题 (H2) + 正文段落。
    *   **对齐**: 左对齐。
    *   **图片**: 宽度自适应 (100% of column width)。
*   **排版细节**:
    *   **标题**: `Poppins` (Bold, 700), `19.072px` (~1.2rem)。
    *   **正文**: `Poppins`, `14.464px` (~0.9rem), 行高 `26px` (约 1.8倍行高，易读性极佳)。

## 3. 视觉风格规范 (Design System)

### 3.1 色彩 (Color Palette)
网站使用了深沉的色调来衬托鲜艳的图片，并用高亮色作为点缀。

*   **主色调 (深蓝/夜空蓝)**: 
    - `rgb(52, 57, 77)` (主要背景/深色块)
    - `rgb(1, 0, 72)` (深邃蓝)
*   **强调色 (琥珀/橙黄)**: 
    - `rgb(236, 158, 5)` (按钮、图标、高亮文字)
    - `rgb(248, 172, 8)` (浅一点的橙色)
*   **文本色**: 
    - `rgb(47, 47, 47)` (正文深灰)
    - `rgb(0, 0, 0)` (功能性文字，如表格内容)

### 3.2 排版 (Typography)
使用了现代几何无衬线字体，传递专业、干净的感觉。

*   **主要字体**: `Metropolis`, `Poppins`
    - `Poppins` 被广泛用于表格内容和按钮文本，具有优秀的易读性。
    - `Metropolis` 用于标题。
*   **备用字体**: `Arial`, `Helvetica`

## 4. 实现建议 (How to Replicate)

### 场景 A: 营销/展示页面 (使用 Grid)

```css
.grid-section {
  display: grid;
  // 模拟 24 列网格
  grid-template-columns: minmax(20px, 1fr) repeat(22, minmax(0, 1fr)) minmax(20px, 1fr);
  gap: 1rem;
  max-width: 1400px;
  margin: 0 auto;
}
```

### 场景 B: 功能/列表页面 (使用 Table)

对于类似 "Order Ahead" 的页面，建议回归简单的 Table 布局，或者使用 Flexbox 模拟列表。

```html
<div class="location-list-container">
  <table class="location-table">
    <thead>
      <tr>
        <th>Order Type</th>
        <th>Location</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a href="#" class="btn-link">Purchase To Go</a></td>
        <td>Charlton</td>
      </tr>
      <tr>
        <td><a href="#" class="btn-link">Purchase To Go</a></td>
        <td>Tewksbury</td>
      </tr>
      <!-- 更多行... -->
    </tbody>
  </table>
</div>
```

```css
.location-table {
  width: 100%;
  max-width: 920px;
  margin: 0 auto;
  border-collapse: collapse;
  
  th {
    text-align: left;
    padding: 1rem;
    font-family: 'Metropolis', sans-serif;
    font-weight: 700;
    border-bottom: 2px solid #eee;
  }
  
  td {
    padding: 1rem;
    border-bottom: 1px solid #eee;
    font-family: 'Poppins', sans-serif;
  }
  
  .btn-link {
    color: inherit;
    text-decoration: none;
    font-weight: 300;
    &:hover {
      text-decoration: underline;
    }
  }
}
```

### 场景 C: 电商列表页面 (Merch Grid)

适用于商品展示页，强调规范和整齐。

```html
<div class="merch-grid">
  <!-- 商品卡片 1 -->
  <div class="product-card">
    <a href="#" class="product-image-link">
      <img src="/img/feiyunxiaomai.jpeg" alt="Product Name">
    </a>
    <div class="product-info">
      <p class="product-title">飞云江小麦</p>
      <p class="product-price">¥14/500ML</p>
    </div>
  </div>
  <!-- 更多卡片... -->
</div>
```

```css
.merch-grid {
  display: grid;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  /* 3列固定宽度布局 */
  grid-template-columns: repeat(3, 1fr); 
  /* 或者精确像素: grid-template-columns: 296px 296px 296px; */
  column-gap: 36px;
  row-gap: 48px;
}

.product-card {
  display: flex;
  flex-direction: column;
  
  .product-image-link {
    display: block;
    margin-bottom: 1rem;
    img {
      width: 100%;
      height: auto;
      display: block;
    }
  }

  .product-info {
    font-family: 'Libre Franklin', sans-serif;
    color: #000;
    
    .product-title {
      font-size: 16px;
      font-weight: 400;
      margin: 0 0 0.5rem 0;
    }
    
    .product-price {
      font-size: 16px;
      margin: 0;
    }
  }
}

/* 移动端响应式 */
@media (max-width: 768px) {
  .merch-grid {
    grid-template-columns: 1fr; /* 单列 */
    padding: 0 20px;
  }
}
}

### 场景 D: 信息展示页面 (Zig-Zag Layout)

适用于 "关于我们"、"参观指南" 等图文并茂的页面。

```css
.zigzag-section {
  display: flex;
  flex-direction: column;
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.zigzag-row {
  display: flex;
  align-items: center;
  gap: 2rem;
  
  /* 默认: 图片在左，文本在右 */
  .image-block { flex: 1; }
  .text-block { flex: 1; }
  
  img {
    width: 100%;
    height: auto;
    border-radius: 4px; /* 可选 */
  }

  h3 {
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 2rem;
    margin-bottom: 1rem;
  }
}

/* 偶数行反转: 文本在左，图片在右 */
.zigzag-row:nth-child(even) {
  flex-direction: row-reverse;
}

@media (max-width: 768px) {
  .zigzag-row, 
  .zigzag-row:nth-child(even) {
    flex-direction: column; /* 移动端总是垂直堆叠 */
  }
}
}

### 场景 E: 复杂内容展示 (Carousel & Cards)

适用于活动、服务介绍等需要聚合大量信息的页面。

```css
.events-container {
  max-width: 1280px;
  margin: 0 auto;
}

/* 价格/服务卡片网格 */
.pricing-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 4rem;
}

.pricing-card {
  display: flex;
  flex-direction: column;
  /* 卡片本身无边框/背景，依靠排版 */
  
  h2 {
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 2.5rem; /* ~40px */
    margin-bottom: 1rem;
  }
  
  .price-info {
    font-size: 1.2rem;
    line-height: 1.6;
  }
}

/* 移动端适配 */
@media (max-width: 1024px) {
  .pricing-grid {
    grid-template-columns: 1fr; /* 移动端单列 */
  }
}
```

### 场景 F: 多列文本网格 (Text Columns)

适用于 "团队介绍"、"价值观"、"福利列表" 等以阅读为主的内容区域。

```css
.text-columns-grid {
  display: grid;
  /* 3列布局，列宽相等 */
  grid-template-columns: repeat(3, 1fr);
  gap: 60px; /* 较大的间距 */
  max-width: 1200px;
  margin: 4rem auto;
  padding: 0 20px;
}

.text-column-item {
  display: flex;
  flex-direction: column;
  text-align: left;

  img {
    width: 100%;
    height: auto;
    margin-bottom: 1.5rem;
    object-fit: cover;
  }

  h3 {
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 1.2rem;
    margin-bottom: 1rem;
    color: #000;
  }

  p {
    font-family: 'Poppins', sans-serif;
    font-size: 0.9rem;
    line-height: 1.8; /* 宽松的行高，适合阅读 */
    color: #333;
  }
}

/* 移动端适配 */
@media (max-width: 900px) {
  .text-columns-grid {
    grid-template-columns: 1fr; /* 移动端单列 */
    gap: 40px;
  }
}
```

## 5. 总结
Tree House Brewing 网站体系展示了六种截然不同的布局策略的完美融合：
1.  **展示层 (Homepage)**: 使用高自由度的 **CSS Grid (Fluid Engine)**，打破常规，强调视觉冲击力。
2.  **功能层 (Order Ahead)**: 使用结构化的 **Table** 布局，强调信息获取效率和操作便捷性。
3.  **电商层 (Merch Shop)**: 使用标准的 **3列固定 Grid** 布局，配合 `Libre Franklin` 字体，提供清晰、规范的购物体验。
4.  **信息层 (Visiting)**: 使用有节奏的 **Zig-Zag (交替)** 布局，引导用户阅读图文故事。
5.  **聚合层 (Events)**: 使用 **Carousel + Card Grid**，在有限空间内展示丰富的内容层级。
6.  **阅读层 (Careers)**: 使用 **Multi-column Text Grid**，通过大间距和舒适行高，提供杂志般的阅读体验。

在复刻时，应根据页面的目标（是“吸引用户”、“引导转化”、“商品展示”、“信息传达”、“内容聚合”还是“深度阅读”）灵活切换这六种模式。
