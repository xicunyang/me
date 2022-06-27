import React from "react";
import "./style.less";
import MainPic from "./../../../assets/main.png";
import Sun from "./../../../assets/sun.png";
import Moon from "./../../../assets/moon.png";
import Yun from "./../../../assets/yun.png";
import DiaoLightLight from "./../../../assets/diao-light-light.png";
import DiaoLight from "./../../../assets/diao-light.png";
import LightDark from "./../../../assets/light-dark.png";
import Xingxing from "./../../../assets/xingxing.png";
import Haoyun from "./../../../assets/haoyun.png";
import SunBtn from "./../../../assets/sun_btn.png";
import MoonBtn from "./../../../assets/moon_btn.png";
import ChuanghuFengjing from "./../../../assets/chuanghufengjing.png";
import guitarMp3 from "./../../../assets/guitar.mp3";
import peopleMp3 from "./../../../assets/dahaqian.mp3";
import kaidengMp3 from "./../../../assets/kaideng.mp3";
import jianpanMp3 from "./../../../assets/jianpan.mp3";
import Code from "../code";

const Picture = () => {
  const [sunUp, setSunUp] = React.useState(true);
  const [moonUp, setMoonUp] = React.useState<undefined | boolean>(undefined);
  const [moonSecUp, setMoonSecUp] = React.useState<undefined | boolean>(
    undefined
  );
  const [isAnimating, setIsAnimating] = React.useState(false);

  const handleClick = () => {
    if (isAnimating) {
      return;
    }
    setIsAnimating(true);
    setSunUp(!sunUp);
    setMoonUp(!moonUp);
    setTimeout(() => {
      const audio = new Audio(kaidengMp3);
      audio.play();
      setMoonSecUp(!moonSecUp);
    }, 500);
    setTimeout(() => {
      setIsAnimating(false);
    }, 1500);
  };

  React.useEffect(() => {
    const click = document.querySelector("#click");
    click && click.click();
  }, []);

  return (
    <div className="picture">
      <div
        id="click"
        onClick={() => {
          console.log("click");
          const audio = new Audio(jianpanMp3);
          audio.loop = true;
          audio.play();
        }}
      ></div>
      {/* 黑天 */}
      <div className="dark-sky"></div>

      {/* 白天 */}
      <div className={`light-sky ${sunUp && "show"}`}></div>

      {/* 星星 */}
      <img
        src={Xingxing}
        className={`xingxing ${moonUp && "show"} ${sunUp && "hide"}`}
      />

      {/* 太阳 */}
      <div className={`sun-wrapper ${sunUp ? "sun-up" : "sun-down"}`}>
        <img className="sun" src={Sun} alt="" />
      </div>

      {/* 月亮 */}
      <div
        className={`moon-wrapper ${
          moonUp === undefined ? "" : moonUp ? "moon-up" : "moon-down"
        }`}
      >
        <img className="moon" src={Moon} />
      </div>

      {/* 行走的云 */}
      <div className={`yun-wrapper ${sunUp && "show"}`}>
        {[0.7, 0.4, 0.5, 0.4, 0.8, 0.3, 0.5, 0.7, 0.3, 0.7].map((item, idx) => {
          return (
            <img
              key={idx}
              className="yun-img"
              src={Yun}
              style={{opacity: item}}
            />
          );
        })}
      </div>

      {/* 窗户风景 */}
      <img src={ChuanghuFengjing} className="chuanghufengjing" />

      {/* 主屏幕代码 */}
      <div className="main-screen-code">
        <Code codeStr="" />
      </div>

      {/* 笔记本电脑屏幕代码 */}
      <div className="laptop-screen-code">
        <Code codeStr="" isLaptop />
      </div>

      {/* 主房间 */}
      <img className="main-pic" src={MainPic} />

      {/* 好运 */}
      <img
        className="haoyun"
        src={Haoyun}
        onClick={() => {
          alert("你获得了好运！");
        }}
      />

      {/* 吊灯的灯光 */}
      <img
        src={DiaoLightLight}
        className={`diao-light-light ${moonSecUp && "show"}`}
      />

      {/* 吊灯的阴影 */}
      <img src={LightDark} className={`light-dark ${moonSecUp && "show"}`} />

      {/* 吊灯 */}
      <img
        src={DiaoLight}
        className="diao-light"
        onClick={() => {
          handleClick();
        }}
      />

      {/* 切换按钮 */}
      <div className="switch-wrapper">
        <div className="btns">
          {/* 移动的边框 */}
          <div
            className={`border ${sunUp ? "border-sun" : "border-moon"}`}
          ></div>

          {/* 太阳 */}
          <div
            className={`sun-btn-unique switch-btn ${sunUp && "active"}`}
            onClick={handleClick}
          >
            <img src={SunBtn} />
          </div>

          {/* 月亮 */}
          <div
            className={`switch-btn right ${moonUp && "active"}`}
            onClick={handleClick}
          >
            <img src={MoonBtn} />
          </div>
        </div>
      </div>

      {/* 点击太阳 */}
      <div className="click-sun" onClick={handleClick}></div>

      {/* 点击吉他 */}
      <div
        className="click-guitar"
        onClick={() => {
          const audio = new Audio(guitarMp3);
          audio.play();
        }}
      ></div>

      <div
        className="head"
        onClick={() => {
          const audio = new Audio(peopleMp3);
          audio.play();
        }}
      ></div>
    </div>
  );
};

export default Picture;
