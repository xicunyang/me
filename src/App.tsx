import React from "react";
import "./App.less";
import Picture from "./components/picture";
import MePPT from "./components/me-ppt";
import Products from "./components/products";
import code61 from "./../assets/61-code.png";
import miniCode from "./../assets/mini-code.png";
import code520 from "./../assets/520-code.png";

const callMe = [
  {
    title: "掘金",
    url: "https://juejin.cn/user/1802854802668446",
  },
  {
    title: "Github",
    url: "https://github.com/xicunyang",
  },
  {
    title: "bilibili",
    url: "https://space.bilibili.com/396601399?spm_id_from=333.1007.0.0",
  },
  {
    title: "简书",
    url: "https://www.jianshu.com/u/367746e792f6",
  },
  {
    title: "微信",
    url: "https://picture-voice-1301404888.cos.ap-nanjing.myqcloud.com/me/wechat.jpg",
  },
];
const App = () => {
  console.log(location.href);

  return (
    <div className="me">
      <Picture />
      <MePPT />
      <Products
        title="项目"
        list={[
          {
            title: "Fuckdoc",
            jumpUrl: "https://juejin.cn/post/7091583162597244941",
          },
          {
            title: "MY-61",
            desc: (
              <div>
                <img src={code61} width="240px" height="" />
              </div>
            ),
          },
          {
            title: "MY-520",
            desc: (
              <div>
                <img src={code520} width="240px" height="" />
              </div>
            ),
          },
          {
            title: "历旧弥新",
            desc: (
              <div>
                <img src={miniCode} width="240px" height="" />
              </div>
            ),
          },
          {
            title: "基于机器学习的二维码识别器",
            jumpUrl: "https://juejin.cn/post/7041505141106688030",
          },
          {
            title: "Beauty-Enum",
            desc: (
              <div>
                <div>一款让你项目中的枚举值活起来的工具</div>
                <div style={{marginTop: "10px"}}>开发中...</div>
              </div>
            ),
            width: 345,
          },
        ]}
      />
      <Products
        title="文章"
        list={[
          {
            title: "（来瞧瞧）它或许可以减轻你在维护组件文档时的痛苦",
            jumpUrl: "https://juejin.cn/post/7091583162597244941",
          },
          {
            title: "机器学习 + 浏览器插件 = 东半球最好用的二维(条形)码识别器",
            jumpUrl: "https://juejin.cn/post/7041505141106688030",
          },
          {
            title: "手把手带你实现 “在浏览器上进行目标检测”",
            jumpUrl: "https://juejin.cn/post/7044717306823311368",
          },
          {
            title: "手把手教你使用Vuex",
            jumpUrl: "https://www.jianshu.com/p/9b2859dc05ea",
          },
          {
            title: "手把手：部署Vue项目到Linux服务器",
            jumpUrl: "https://www.jianshu.com/p/a0e0311d6259",
          },
        ]}
      />
      <Products
        title="视频"
        list={[
          {
            title: "大年初一的天安门升旗VLOG",
            jumpUrl:
              "https://www.bilibili.com/video/BV1Go4y197HF?spm_id_from=333.999.0.0",
          },
          {
            title: "实践教学:部署Vue项目到Linux服务器",
            jumpUrl:
              "https://www.bilibili.com/video/BV1YE411E7Xr?spm_id_from=333.999.0.0",
          },
          {
            title: "（来瞧瞧）它或许可以减轻你在维护组件文档时的痛苦",
            jumpUrl:
              "https://www.bilibili.com/video/BV1x54y1f77y?spm_id_from=333.999.0.0",
          },
          {
            title: "惊！fuckdoc上热搜啦？！好像有新功能出没！",
            jumpUrl:
              "https://www.bilibili.com/video/BV1QL4y1c7uq?spm_id_from=333.999.0.0",
          },
          {
            title: "实践教学:自动化部署 (CI & CD)Jenkins+GitHub+Vue",
            jumpUrl:
              "https://www.bilibili.com/video/BV1dE41147bX?spm_id_from=333.999.0.0",
          },
          {
            disDit: true,
            title: "...",
          },
        ]}
      />

      <div className="footer">
        <div className="call-me">
          {callMe.map((item, idx) => {
            return (
              <span
                key={idx}
                onClick={() => {
                  window.open(item.url);
                }}
              >
                {item.title}
                {idx + 1 !== callMe.length && " · "}
              </span>
            );
          })}
        </div>

        <div className="slogan">
          木头 · 一个喜欢取悦自己的开发同学 · 2022-06 · 北京
        </div>
      </div>
    </div>
  );
};

export default App;
