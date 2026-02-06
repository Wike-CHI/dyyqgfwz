import React from 'react';
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <NavBar />
      
      <main className="flex-grow pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-metropolis font-bold text-3xl md:text-4xl mb-2 text-primary-dark">隐私政策</h1>
          <p className="text-gray-500 font-poppins text-sm mb-12">最后更新日期：{new Date().toLocaleDateString('zh-CN')}</p>
          
          <div className="prose prose-lg max-w-none font-poppins text-gray-600 prose-headings:font-metropolis prose-headings:font-bold prose-headings:text-primary-dark prose-a:text-accent-amber hover:prose-a:text-primary-dark transition-colors">
            <p>
              大友元气酿造公司（以下简称“我们”或“大友元气”）深知个人信息对您的重要性，并致力于保护您的隐私安全。本隐私政策旨在向您说明我们在您使用大友元气官网及相关服务时如何收集、使用、存储和保护您的个人信息。
            </p>

            <h3>1. 我们收集的信息</h3>
            <p>在您使用我们的服务时，我们可能会收集以下类型的信息：</p>
            <ul>
              <li><strong>个人身份信息：</strong> 当您进行预约、购买商品、订阅通讯或联系我们时，我们可能会收集您的姓名、联系电话、电子邮箱地址、配送地址等信息。</li>
              <li><strong>设备与日志信息：</strong> 我们可能会自动收集您访问我们网站时使用的设备信息（如IP地址、浏览器类型、操作系统）以及您的浏览行为记录。</li>
              <li><strong>Cookie 和同类技术：</strong> 我们使用 Cookie 技术来提升您的浏览体验，记住您的偏好设置，并分析网站流量。</li>
            </ul>

            <h3>2. 信息的使用</h3>
            <p>我们收集的信息将用于以下目的：</p>
            <ul>
              <li>处理您的订单、预约请求及提供客户服务。</li>
              <li>向您发送关于大友元气的产品更新、活动邀请及营销资讯（您可以随时选择退订）。</li>
              <li>改进我们的网站功能、产品质量及用户体验。</li>
              <li>遵守法律法规的要求及维护网络安全。</li>
            </ul>

            <h3>3. 信息的共享与披露</h3>
            <p>我们承诺不会出售您的个人信息。但在以下情况下，我们可能会共享您的信息：</p>
            <ul>
              <li><strong>服务提供商：</strong> 我们可能会与协助我们要务运营的第三方服务商（如物流公司、支付处理机构）共享必要信息。</li>
              <li><strong>法律要求：</strong> 在法律法规、法律程序或政府主管部门强制要求的情况下，我们可能会披露您的个人信息。</li>
            </ul>

            <h3>4. 信息安全</h3>
            <p>
              我们采取合理可行的技术安全措施和管理措施来保护您的个人信息，防止未经授权的访问、披露、使用、修改、损坏或丢失。尽管我们尽力保护您的隐私，但请注意互联网传输并非绝对安全。
            </p>

            <h3>5. 您的权利</h3>
            <p>根据相关法律法规，您对自己的个人信息享有以下权利：</p>
            <ul>
              <li>查询、更正或补充您的个人信息。</li>
              <li>要求删除您的个人信息。</li>
              <li>撤回您的同意（例如退订营销邮件）。</li>
            </ul>

            <h3>6. 未成年人保护</h3>
            <p>
              我们的服务主要面向成年人。如果您未满18周岁，请在监护人的陪同下使用我们的网站，且不要向我们提供个人信息。由于酒精饮品的特殊性，我们不向未成年人推销或销售酒精产品。
            </p>

            <h3>7. 隐私政策的更新</h3>
            <p>
              我们可能会不时更新本隐私政策。更新后的政策将发布在本页面上，并注明更新日期。建议您定期查看本页面以了解我们最新的隐私保护实践。
            </p>

            <h3>8. 联系我们</h3>
            <p>
              如果您对本隐私政策有任何疑问或建议，请通过以下方式联系我们：
            </p>
            <ul>
              <li>地址：浙江省瑞安市铂瑞湾大友元气酿造公司</li>
              <li>邮箱：privacy@dayouyuanqi.com</li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
