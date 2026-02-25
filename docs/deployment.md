# Cloudflare Pages 部署完整指南

本文档详细介绍如何将项目部署到 Cloudflare Pages，包括完整的设置步骤、配置说明和故障排除方法。

## 目录

1. [为什么选择 Cloudflare Pages](#为什么选择-cloudflare-pages)
2. [部署前准备](#部署前准备)
3. [分步部署指南](#分步部署指南)
4. [API 路由处理](#api-路由处理)
5. [性能优化](#性能优化)
6. [故障排除](#故障排除)
7. [回滚计划](#回滚计划)

---

## 为什么选择 Cloudflare Pages

### 优势

- **完全免费** - 无限带宽、无限请求、无隐藏费用
- **全球 CDN** - 300+ 节点，包括香港、新加坡等亚太节点
- **国内访问良好** - 虽然不是国内 CDN，但亚太节点对国内访问友好
- **自动 HTTPS** - 免费 SSL/TLS 证书，自动续期
- **Git 集成** - 推送代码自动部署，无需手动操作
- **预览部署** - 每个 PR 自动生成预览链接
- **Serverless Functions** - 支持无服务器函数（API 路由）
- **无需备案** - 域名托管在海外，无需国内备案

### 成本对比

| 平台 | 免费额度 | 超出费用 | 国内访问 |
|------|---------|---------|---------|
| Cloudflare Pages | 无限 | $0 | 良好 |
| Vercel | 100GB/月 | 按量计费 | 一般 |
| Netlify | 100GB/月 | 按量计费 | 一般 |
| 腾讯云开发 | 5GB/月 | 较贵 | 优秀 |
| 阿里云 OSS | 需备案 | 较贵 | 优秀 |

---

## 部署前准备

### 1. 环境检查

确保你的开发环境满足以下要求：

```bash
# 检查 Node.js 版本（需要 18+）
node --version

# 检查 Git 版本
git --version

# 检查 npm 版本
npm --version
```

### 2. 本地构建测试

在部署前，先在本地测试构建：

```bash
# 进入前端目录
cd frontend

# 清理旧的构建产物
rm -rf .next out

# 安装依赖（如果还没有）
npm install

# 运行构建
npm run build

# 检查输出
ls -la out/
```

你应该看到以下文件：
- `index.html` - 首页
- `careers.html` - 招聘页面
- `merch.html` - 商品页面
- `visiting.html` - 参观页面
- `order-ahead.html` - 预订页面
- `_next/` - Next.js 静态资源
- `fonts/` - 字体文件
- `img/` - 图片资源

### 3. Git 仓库准备

确保代码已推送到 GitHub：

```bash
# 检查远程仓库
git remote -v

# 查看当前分支
git branch

# 如果还没有 GitHub 远程仓库，添加它
git remote add github https://github.com/Wike-CHI/dyyq.git

# 推送代码到 GitHub
git push github main

# 设置默认上游分支
git branch --set-upstream-to=github/main main
```

### 4. 域名准备

确认你拥有以下域名的管理权限：
- `perfectlifeexperience.com` - 根域名
- `www.perfectlifeexperience.com` - www 子域名

---

## 分步部署指南

### 步骤 1：注册 Cloudflare 账户

#### 1.1 创建账户

1. 访问：https://dash.cloudflare.com/sign-up
2. 填写注册信息：
   - **Email**: 你的邮箱地址
   - **Password**: 设置强密码
3. 点击 "Create Account"
4. 验证邮箱（检查收到的验证邮件）

#### 1.2 选择计划

- 选择 **FREE** 计划
- 免费计划已包含所有必要功能
- 无需绑定信用卡

### 步骤 2：添加域名到 Cloudflare

#### 2.1 添加站点

1. 登录 Cloudflare Dashboard：https://dash.cloudflare.com
2. 点击 "Add a Site" 或 "Add Site"
3. 输入域名：`perfectlifeexperience.com`
4. 点击 "Add Site"

#### 2.2 选择计划

- 选择 **FREE** 计划
- 点击 "Continue"

#### 2.3 扫描 DNS 记录

Cloudflare 会自动扫描现有 DNS 记录：
- 检查扫描结果
- 确保所有记录都正确
- 如果有 A 记录指向 IP，可以暂时保留
- 点击 "Continue"

#### 2.4 记录 Nameservers

在最后一步，Cloudflare 会显示两个 nameserver 地址：

```
xxx.ns.cloudflare.com
yyy.ns.cloudflare.com
```

**重要操作：**
1. 截图保存这两个地址
2. 复制到记事本或其他地方
3. 下一步需要用到这些地址

#### 2.5 快速完成

- 选择 "I'll add my own nameservers manually"
- 点击 "Continue"
- 记住这两个 nameserver，稍后需要在域名注册商处修改

### 步骤 3：在域名注册商更新 Nameservers

#### 3.1 登录阿里云域名控制台

1. 访问：https://dc.console.aliyun.com
2. 使用阿里云账户登录

#### 3.2 找到域名

1. 在左侧菜单点击 "域名"
2. 找到域名：`perfectlifeexperience.com`
3. 点击 "管理"

#### 3.3 修改 DNS 服务器

1. 找到 "DNS 服务器" 或 "DNS 管理"
2. 点击 "修改 DNS 服务器"
3. 选择 "自定义 DNS 服务器"
4. 删除现有的 nameservers
5. 添加 Cloudflare 提供的两个 nameservers：
   - 第一个：`xxx.ns.cloudflare.com`
   - 第二个：`yyy.ns.cloudflare.com`
6. 点击 "确定" 或 "保存"

#### 3.4 等待 DNS 传播

DNS 传播通常需要 2-24 小时，但通常在 1-2 小时内完成。

**检查传播状态：**

使用以下工具检查 DNS 传播：
- https://www.whatsmydns.net/
- https://dnschecker.org/

输入 `perfectlifeexperience.com`，查看全球解析状态。

**本地测试：**

```bash
# 检查 DNS 解析
dig perfectlifeexperience.com

# 或使用 nslookup
nslookup perfectlifeexperience.com

# 应该返回 Cloudflare 的 IP 地址
```

### 步骤 4：创建 Cloudflare Pages 项目

#### 4.1 访问 Pages

1. 在 Cloudflare Dashboard 左侧菜单找到 "Pages"
2. 点击 "Create a project"

#### 4.2 连接 Git 仓库

1. 选择 "Connect to Git"
2. 点击 "Connect GitHub"
3. 授权 Cloudflare 访问你的 GitHub 账户
4. 选择仓库：`Wike-CHI/dyyq`

#### 4.3 配置构建设置

填写以下信息：

| 设置项 | 值 | 说明 |
|--------|-----|------|
| Project name | `dyyq` | 项目名称（可以自定义） |
| Production branch | `main` | 生产分支名称 |
| Framework preset | `Next.js` | 框架选择 |
| Build command | `cd frontend && npm run build` | 构建命令 |
| Build output directory | `frontend/out` | 输出目录 |
| Root directory | `/` | 根目录（项目根目录） |
| Node.js version | `18` | Node.js 版本 |

#### 4.4 环境变量

当前项目不需要环境变量。如果需要，可以添加：

```
NODE_VERSION = 18
```

#### 4.5 开始部署

1. 检查所有设置是否正确
2. 点击 "Save and Deploy"
3. 等待首次部署完成（3-5 分钟）

#### 4.6 查看部署结果

- Cloudflare 会分配临时域名：`dyyq.pages.dev`
- 点击访问该域名
- 确认网站正常运行

### 步骤 5：配置自定义域名

#### 5.1 添加自定义域名

1. 在 Pages 项目中，点击 "Custom domains"
2. 点击 "Set up a custom domain"
3. 输入：`www.perfectlifeexperience.com`
4. 点击 "Activate domain"

#### 5.2 DNS 自动配置

Cloudflare 会自动：
1. 在 DNS 设置中创建 CNAME 记录
2. 配置：`www` → `dyyq.pages.dev`
3. 自动颁发 SSL/TLS 证书（15-30 分钟）

#### 5.3 根域名配置（可选）

如果需要支持 `perfectlifeexperience.com`（无 www）：

1. 点击 "Add custom domain"
2. 输入：`perfectlifeexperience.com`
3. Cloudflare 会自动配置

#### 5.4 等待证书生成

SSL 证书生成需要 15-30 分钟：
- 在 Custom domains 页面查看状态
- 状态变为 "Active" 表示证书已生成

### 步骤 6：验证部署

#### 6.1 基本访问测试

```bash
# 测试首页
curl -I https://www.perfectlifeexperience.com

# 测试各个页面
curl -I https://www.perfectlifeexperience.com/careers
curl -I https://www.perfectlifeexperience.com/merch
curl -I https://www.perfectlifeexperience.com/visiting
curl -I https://www.perfectlifeexperience.com/order-ahead

# 应该返回 200 状态码
```

#### 6.2 DNS 解析测试

```bash
# 检查 DNS 解析
dig www.perfectlifeexperience.com

# 应该返回 Cloudflare 的 IP 地址
```

#### 6.3 SSL 证书测试

1. 在浏览器访问：https://www.perfectlifeexperience.com
2. 检查地址栏的锁图标
3. 点击锁图标查看证书详情
4. 确认证书有效，由 Cloudflare 颁发

#### 6.4 浏览器手动测试

打开浏览器，访问 https://www.perfectlifeexperience.com，检查：

- [ ] 首页正常加载
- [ ] 所有导航链接工作
- [ ] 图片和字体正确显示
- [ ] 移动端响应式设计正常
- [ ] 浏览器控制台无错误

#### 6.5 API 端点测试

```bash
# 测试健康检查 API
curl https://www.perfectlifeexperience.com/api/health

# 应该返回 JSON：
# {"status":"ok","timestamp":"...","message":"API running on Cloudflare Pages"}
```

---

## API 路由处理

### 问题说明

Next.js 的 API Routes（在 `src/app/api/` 目录下）在静态导出时无法正常工作，因为它们依赖 Node.js 运行时。

### 解决方案：Cloudflare Pages Functions

Cloudflare Pages Functions 提供了无服务器函数功能，可以处理 API 请求。

#### 创建健康检查 API

1. **创建 Functions 目录**

```bash
mkdir -p frontend/functions/api
```

2. **创建 Function 文件**

创建 `frontend/functions/api/health.ts`：

```typescript
export async function onRequest() {
  return new Response(
    JSON.stringify({
      status: 'ok',
      timestamp: new Date().toISOString(),
      message: 'API running on Cloudflare Pages'
    }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store, must-revalidate'
      }
    }
  );
}
```

3. **本地测试**

```bash
# 安装 Wrangler CLI
npm install -g wrangler

# 本地运行 Pages Functions
wrangler pages dev frontend/out --watch

# 测试 API
curl http://localhost:8788/api/health
```

4. **部署**

- Git commit 并推送到 GitHub
- Cloudflare Pages 自动重新部署
- Functions 自动激活

5. **验证**

```bash
# 测试生产环境 API
curl https://www.perfectlifeexperience.com/api/health
```

#### Function 路由规则

Cloudflare Pages Functions 的路由规则：

| Function 文件 | 访问路径 |
|--------------|----------|
| `functions/api/health.ts` | `/api/health` |
| `functions/api/user.ts` | `/api/user` |
| `functions/api/[id].ts` | `/api/123` (动态路由) |

---

## 性能优化

### 1. 启用 Cloudflare 缓存

在 Cloudflare Dashboard：

1. 选择域名：`perfectlifeexperience.com`
2. 点击 "Caching"
3. 配置以下设置：

```
Caching level: Standard
Browser Cache TTL: 4 hours
Always Online: On
```

### 2. 配置缓存规则

创建缓存规则以优化静态资源：

1. 进入 "Caching" → "Cache Rules"
2. 创建规则：
   - **名称**: Static Assets
   - **匹配**: URL 匹配 `*fonts/*`, `*img/*`, `*_next/static/*`
   - **操作**: Cache, Edge Cache TTL: 1 month

### 3. 安全配置

在 "SSL/TLS" 页面：

```
SSL/TLS: Full (strict)
Always Use HTTPS: On
Automatic HTTPS Rewrites: On
Minimum TLS Version: 1.2
```

### 4. 压缩配置

Cloudflare 自动压缩：
- HTML
- CSS
- JavaScript
- 纯文本

无需额外配置。

### 5. 图片优化建议

虽然 Next.js 图片优化在静态导出时被禁用，但你可以：

1. **手动优化图片**
   - 使用 TinyPNG 压缩 PNG：https://tinypng.com/
   - 使用 Squoosh 压缩 JPEG：https://squoosh.app/
   - 转换为 WebP 格式（更小）

2. **使用 CDN 加速**
   - Cloudflare 自动缓存图片
   - 全球 CDN 加速

---

## 故障排除

### 问题 1：构建失败

**症状：**
Cloudflare Pages 构建失败，日志显示错误

**解决方案：**

1. 检查构建日志：
   - Pages 项目 → Builds → 点击失败的构建 → 查看日志

2. 本地复现：
   ```bash
   cd frontend
   rm -rf .next out node_modules
   npm install
   npm run build
   ```

3. 常见问题：
   - **依赖错误**：检查 `package.json` 中的依赖
   - **Node.js 版本**：确保使用 Node.js 18+
   - **内存不足**：Next.js 构建可能需要 1-2GB 内存

### 问题 2：页面 404

**症状：**
访问页面返回 404 Not Found

**解决方案：**

1. 检查构建输出目录：
   - 确认设置的是 `frontend/out` 而不是 `out`

2. 检查 next.config.js：
   ```javascript
   output: 'export'  // 必须启用
   ```

3. 检查文件命名：
   - 文件名区分大小写
   - 确保文件名正确（例如：`careers.html` 不是 `Career.html`）

### 问题 3：API 路由 404

**症状：**
`/api/health` 返回 404

**解决方案：**

1. 确认 Function 文件存在：
   ```bash
   ls -la frontend/functions/api/health.ts
   ```

2. 检查文件语法：
   - TypeScript 语法必须正确
   - 必须导出 `onRequest` 函数

3. 查看函数日志：
   - Pages 项目 → Functions → Real-time logs

4. 本地测试：
   ```bash
   wrangler pages dev frontend/out --watch
   curl http://localhost:8788/api/health
   ```

### 问题 4：DNS 不生效

**症状：**
域名无法解析，访问显示错误

**解决方案：**

1. 检查 nameservers：
   - 登录阿里云域名控制台
   - 确认 nameservers 是 Cloudflare 提供的地址

2. 检查 DNS 传播：
   - 访问 https://www.whatsmydns.net/
   - 输入域名查看全球传播状态

3. 清除本地 DNS 缓存：

   **macOS:**
   ```bash
   sudo dscacheutil -flushcache
   sudo killall -HUP mDNSResponder
   ```

   **Windows:**
   ```cmd
   ipconfig /flushdns
   ```

   **Linux:**
   ```bash
   sudo systemd-resolve --flush-caches
   ```

4. 等待时间：
   - DNS 传播最长需要 48 小时
   - 通常在 2-6 小时内完成

### 问题 5：SSL 证书错误

**症状：**
浏览器显示 SSL 证书警告

**解决方案：**

1. 等待证书生成：
   - SSL 证书生成需要 15-30 分钟
   - 在 Custom domains 页面查看状态

2. 检查域名状态：
   - 确认 DNS 已正确解析到 Cloudflare
   - 确认域名已激活

3. 强制重新颁发证书：
   - 删除自定义域名
   - 重新添加自定义域名

4. 检查 SSL/TLS 设置：
   - 设置为 "Full (strict)"
   - 不是 "Flexible"

### 问题 6：图片加载失败

**症状：**
图片显示为破图或无法加载

**解决方案：**

1. 确认图片路径：
   - 检查 HTML 中的图片路径
   - 确保路径正确（相对路径）

2. 确认图片存在：
   ```bash
   ls -la frontend/out/img/
   ls -la frontend/out/public/img/
   ```

3. 检查 next.config.js：
   ```javascript
   images: {
     unoptimized: true  // 必须为 true
   }
   ```

4. 检查远程图片：
   - 确认 remotePatterns 包含正确的域名
   - 确认远程图片可访问

### 问题 7：性能慢

**症状：**
网站加载速度慢，特别是从国内访问

**解决方案：**

1. 启用 Cloudflare 缓存：
   - Caching level: Standard
   - Browser Cache TTL: 4 hours

2. 优化图片：
   - 压缩图片文件
   - 使用 WebP 格式

3. 使用 Cloudflare Analytics：
   - 分析性能瓶颈
   - Dashboard → Analytics & Logs

4. 考虑升级计划：
   - Pro 计划：$20/月，包含图片优化
   - Enterprise：包含中国网络节点

---

## 回滚计划

### 场景 1：DNS 配置错误

**症状：**
域名无法解析，网站无法访问

**回滚步骤（5 分钟）：**

1. 登录阿里云域名控制台
2. 找到域名：`perfectlifeexperience.com`
3. 将 nameservers 改回原始值
4. 或将 A/CNAME 记录指向原来的服务器

**验证：**
```bash
dig www.perfectlifeexperience.com
curl https://dyyq-0gxfchpt0a88ca22-1402837521.tcloudbaseapp.com
```

### 场景 2：Cloudflare Pages 部署失败

**症状：**
构建错误或页面无法访问

**回滚步骤：**

1. 在 Cloudflare Pages 禁用自定义域名
2. 在阿里云 DNS 将域名指回腾讯云开发
3. 保留腾讯云开发部署至少 7 天

**恢复：**
- 修复构建问题
- Git commit fix
- Cloudflare 自动重新部署
- 重新启用自定义域名

### 场景 3：性能不满足需求

**症状：**
国内访问速度过慢

**缓解措施：**

1. 启用 Cloudflare 缓存
2. 优化图片和静态资源
3. 考虑使用 Cloudflare Workers
4. 监控 Cloudflare Analytics

**回滚：**
- 如无法接受，回滚到腾讯云开发
- 或考虑混合方案（Cloudflare + 国内 CDN）

---

## 维护建议

### 日常维护

1. **定期检查部署状态**
   - 查看 Cloudflare Pages 构建日志
   - 检查 Analytics 数据

2. **监控性能**
   - 使用 Cloudflare Web Analytics
   - 定期测试页面加载速度

3. **更新依赖**
   ```bash
   cd frontend
   npm update
   npm test
   git push origin main
   ```

4. **备份 DNS 配置**
   - 定期导出 DNS 记录
   - 保存到安全位置

### 安全建议

1. **启用 Cloudflare 安全功能**
   - Bot Fight Mode: On
   - Security Level: Medium
   - Challenge Passage: 30 minutes

2. **定期检查**
   - SSL/TLS 证书状态
   - DNS 记录是否被篡改
   - 异常流量模式

3. **访问控制**
   - 启用 Two-Factor Authentication (2FA)
   - 限制 API 访问（如需要）

---

## 常见问题

### Q: Cloudflare Pages 真的完全免费吗？

A: 是的，免费计划包括：
- 无限带宽
- 无限请求
- 无限站点数
- 免费 SSL 证书
- 全球 CDN
- DDoS 防护

### Q: 国内访问速度如何？

A: Cloudflare 有香港、新加坡等亚太节点，国内访问速度良好。虽然不如国内 CDN，但对大部分用户来说是可以接受的。

### Q: 需要备案吗？

A: 不需要。Cloudflare 是海外服务，域名托管在 Cloudflare 无需国内备案。

### Q: 如何更新网站？

A: 只需要推送到 GitHub：
```bash
git add .
git commit -m "Update website"
git push origin main
```
Cloudflare Pages 会自动部署。

### Q: 可以使用自定义域名吗？

A: 可以，免费计划支持无限自定义域名。

### Q: SSL 证书免费吗？

A: 是的，Cloudflare 自动颁发和续期 SSL 证书，完全免费。

---

## 相关资源

- [Cloudflare Pages 官方文档](https://developers.cloudflare.com/pages)
- [Cloudflare Pages Functions 文档](https://developers.cloudflare.com/pages/functions/)
- [Next.js 静态导出指南](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [Cloudflare 社区论坛](https://community.cloudflare.com/)
- [DNS 传播检查工具](https://www.whatsmydns.net/)

---

## 更新日志

- **2026-02-24**: 创建文档，添加完整部署指南
- **2026-02-24**: 添加 API 路由处理方案
- **2026-02-24**: 添加故障排除和性能优化建议

---

如有问题或建议，请提交 Issue 或 Pull Request。
