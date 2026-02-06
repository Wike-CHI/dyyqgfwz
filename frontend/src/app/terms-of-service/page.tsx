import React from 'react';
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <NavBar />
      
      <main className="flex-grow pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-metropolis font-bold text-3xl md:text-4xl mb-2 text-primary-dark">服务条款</h1>
          <p className="text-gray-500 font-poppins text-sm mb-12">最后更新日期：{new Date().toLocaleDateString('zh-CN')}</p>
          
          <div className="prose prose-lg max-w-none font-poppins text-gray-600 prose-headings:font-metropolis prose-headings:font-bold prose-headings:text-primary-dark prose-a:text-accent-amber hover:prose-a:text-primary-dark transition-colors">
            <p>
              欢迎访问大友元气官网。本网站由大友元气酿造公司（以下简称“我们”或“大友元气”）运营。使用本网站即表示您同意遵守以下条款和条件（以下简称“服务条款”）。如果您不同意这些条款，请勿使用本网站。
            </p>

            <h3>1. 使用资格</h3>
            <p>
              本网站的内容涉及酒精饮品。您必须达到所在司法管辖区的法定饮酒年龄（在中国大陆为18周岁或以上）方可访问和使用本网站。通过使用本网站，您声明并保证您已达到法定饮酒年龄。
            </p>

            <h3>2. 知识产权</h3>
            <p>
              本网站上的所有内容，包括但不限于文字、图像、徽标、视频、音频、设计和代码，均为大友元气或其内容提供商的财产，受中国及国际版权法、商标法和其他知识产权法律的保护。未经我们书面许可，您不得复制、分发、修改或使用这些内容。
            </p>

            <h3>3. 用户行为</h3>
            <p>在使用本网站时，您同意：</p>
            <ul>
              <li>不利用本网站进行任何非法活动。</li>
              <li>不发布任何虚假、误导、诽谤、淫秽或侵犯他人权利的内容。</li>
              <li>不干扰或破坏本网站的安全性或正常运行。</li>
              <li>不使用自动化工具（如机器人、爬虫）抓取本网站数据。</li>
            </ul>

            <h3>4. 产品信息与订单</h3>
            <p>
              我们尽力确保网站上的产品描述、价格和库存信息准确无误。然而，我们不保证所有信息均完全准确、完整或最新。我们保留随时更改产品信息、价格或拒绝/取消订单的权利。如果因价格错误或其他原因导致订单无法履行，我们将通知您并办理退款。
            </p>

            <h3>5. 免责声明</h3>
            <p>
              本网站及其内容按“原样”提供。在法律允许的最大范围内，大友元气不提供任何明示或暗示的保证，包括但不限于适销性、特定用途适用性和不侵权的保证。我们不保证网站不会中断、没有错误或不含病毒。
            </p>

            <h3>6. 责任限制</h3>
            <p>
              在任何情况下，大友元气及其员工、合作伙伴不对因使用或无法使用本网站而产生的任何直接、间接、附带、特殊或后果性损害承担责任，即使我们已被告知发生此类损害的可能性。
            </p>

            <h3>7. 第三方链接</h3>
            <p>
              本网站可能包含指向第三方网站的链接。这些链接仅为方便您而提供，不代表我们认可这些网站的内容。我们不对第三方网站的内容或隐私惯例负责。
            </p>

            <h3>8. 条款修改</h3>
            <p>
              我们保留随时修改本服务条款的权利。修改后的条款将在本页面发布，并自发布之日起生效。您继续使用本网站将被视为接受修改后的条款。
            </p>

            <h3>9. 适用法律与争议解决</h3>
            <p>
              本服务条款受中华人民共和国法律管辖。与本条款有关的任何争议应通过友好协商解决；协商不成的，应提交至大友元气所在地有管辖权的人民法院诉讼解决。
            </p>

            <h3>10. 联系方式</h3>
            <p>
              如果您对本服务条款有任何疑问，请联系我们：
            </p>
            <ul>
              <li>地址：浙江省瑞安市铂瑞湾大友元气酿造公司</li>
              <li>邮箱：support@dayouyuanqi.com</li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
