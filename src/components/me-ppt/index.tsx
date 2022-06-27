import React from "react";
import bodymovin, {AnimationItem} from "lottie-web";

import "./style.less";

var animation: AnimationItem;
const PauseArr = [
  // 5, // 名字
  22, // 喜存
  41, // 存喜
  82, // 善存
  97, // 杨老师
  140, // 杨哥
  157, // 喜哥
  172, // 存哥
  // 210, // 待全部
  231, // 全部
];

let RunPauseArr = [...PauseArr];
const MePPT = () => {
  const [clickHere, setClickHere] = React.useState(true);
  const [pptDone, setPPTDone] = React.useState(false);

  React.useEffect(() => {
    if (animation) return;

    animation = bodymovin.loadAnimation({
      container: document.getElementById("lottie") as any, // Required
      path: "https://picture-voice-1301404888.cos.ap-nanjing.myqcloud.com/me/me.json", // Required
      renderer: "svg", // Required
      loop: true, // Optional
      autoplay: false, // Optional
      name: "Hello World", // Name for future reference. Optional.
    });

    // animation.addEventListener("data_ready", () => {
    //   const res = animation.getDuration(true);
    // });

    animation.addEventListener("loopComplete", () => {
      RunPauseArr = [...PauseArr];
    });
  }, []);

  React.useEffect(() => {
    const listener = (res) => {
      const time = Math.floor(res.currentTime);

      if (RunPauseArr.includes(time)) {
        if (time === 231) {
          setPPTDone(true);
        }
        animation.pause();
        RunPauseArr[RunPauseArr.indexOf(time)] = -1;
      }
    };

    animation.addEventListener("enterFrame", listener);

    return () => {
      animation.removeEventListener("enterFrame", listener);
    };
  }, []);

  return (
    <div className="me-ppt">
      <div
        id="lottie"
        onClick={() => {
          if (pptDone) {
            console.log("done");
          } else {
            animation.play();
          }
        }}
      ></div>

      <div
        className={`hover-tip ${clickHere ? "" : "hide"}`}
        onClick={() => {
          setClickHere(false);
          animation.play();
        }}
      >
        Click Click And Click Here!
      </div>
    </div>
  );
};

export default MePPT;
