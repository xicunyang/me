import React from "react";
import {useInterval} from "ahooks";
import "./style.less";

const longStr = `import { scanFile } from './../utils';
const sharp = require('sharp');
const path = require('path');
const cliProgress = require('cli-progress');
const colors = require('ansi-colors');
const deleteFile = require('delete');

async function startSharp() {
  const [imgFilePath] = await scanFile();
  const filtedImgPath = imgFilePath.filter((imgPath: string) => !imgPath.endsWith('.webp'));
  const imageTotal = filtedImgPath.length;

  if (imageTotal === 0) {
    console.log('\n');
    console.log(colors.green('🎉🎉🎉 已完成压缩 🎉🎉🎉'));
    console.log('\n');
    console.log(colors.green('fuckdoc 已将图片全部压缩为webp格式'));
    console.log('\n');
    return;
  }

  const progressBar = new cliProgress.SingleBar({
    format: 'fuckdoc 图片压缩 || {percentage}% || {value}/{total} images',
    barCompleteChar: '\u2588',
    barIncompleteChar: '\u2591',
    hideCursor: true,
    clearOnComplete: false
  });

  progressBar.start(imageTotal, 0);

  let sharpedCount = 0;
  filtedImgPath.forEach(async (imagePath: string) => {
    const imgPathArr = imagePath.split('.');
    imgPathArr[imgPathArr.length - 1] = 'webp';
    const webpImgPath = imgPathArr.join('.');

    sharp(imagePath).toFile(webpImgPath, (err, info) => {
      deleteFile.sync([imagePath]);
      sharpedCount += 1;
      progressBar.update(sharpedCount);

      if (sharpedCount >= imageTotal) {
        setTimeout(() => {
          progressBar.stop();

          console.log('\n');
          console.log(colors.green('🎉🎉🎉 压缩完毕 🎉🎉🎉'));
          console.log('\n');
          console.log(colors.green('fuckdoc 已将图片全部压缩为webp格式'));
          console.log('\n');
        }, 500);
      }
    });
  });
}

export default startSharp;
`;

const longStr2 = `
import "./style.less";

let globalPlayer: VideoJsPlayer;

const getVideoName = (url: string) => {
  const arr = url.split("/");
  if (arr.length) {
    return arr[arr.length - 1];
  }
  return "";
};

const TV = () => {
  const [playerBtnRotate, setPlayerBtnRotate] = React.useState(0);
  const [fengshanPlay, setFengshanPlay] = React.useState(true);

  const [currentIndex, setCurrentIndex] = React.useState(-1);
  const [videoList, setVideoList] = React.useState([]);

  const [initDone, setInitDone] = React.useState(false);

  React.useEffect(() => {
    axios
      .get(
        "https://service-flhd4txn-1301404888.bj.apigw.tencentcs.com/release/my-61"
      )
      .then((res) => {
        const list = res?.data || [];

        setVideoList(list);

        setInitDone(true);
      });
  }, []);

  const handlePlay = (url: string) => {
    if (!url || !initDone) {
      alert("慢一点~");
      return;
    }
    if (currentIndex === -1) {
      setCurrentIndex(0);
      setTimeout(() => {
        globalPlayer = videojs(
          "my-player",
          {
            controlBar: false,
            controls: false,
            liveui: false,
            bigPlayButton: false,
          },
          function onPlayerReady() {
            console.log("can play");
            this.play();

            reportLog({
              where: "play",
              videoName: getVideoName(videoList[0]),
              fullUrl: videoList[0],
            });
          }
        );
      }, 100);
    } else {
      reportLog({
        where: "play",
        videoName: getVideoName(url),
        fullUrl: url,
      });
      globalPlayer?.src(url);
      globalPlayer?.play();
    }
  };

  return (
    <div className="TV">
      <div className="bg">
        <img src={bg} alt="" />
      </div>
      <img
        className={fengshanye {fengshanPlay ? "play" : ""}}
        src={fengshanye}
        alt=""
      />
      <img className="fengshanzhao" src={fengshanzhao} alt="" />
      <div className="video">
        {currentIndex !== -1 && (
          <video
            id="my-player"
            className="video-js"
            preload="auto"
            poster={dianshipingmu}
            webkit-playsinline="true"
            playsinline="true"
            x-webkit-airplay="allow"
            x5-video-player-type="h5"
            x5-video-player-fullscreen="true"
            x5-video-orientation="portraint"
          >
            <source src={videoList[0] || ""} type="video/mp4"></source>
          </video>
        )}
      </div>
      <img className="dianshi" src={dianshi} alt="" />
      <img className="dengguang" src={dengguang} alt="" />

      <img className="dengguang2" src={dengguang2} alt="" />
      <img className="yizi" src={yizi} alt="" />
      <img className="yanjing" src={yanjing} alt="" />

      {/* 电视换台按钮 */}
      <div
        className="tv-player"
        style={{
        }}
        onClick={() => {
          if (!videoList.length) {
            alert("慢一点~");
            return;
          }
          const nextIndex = currentIndex + 1;
          if (nextIndex < videoList.length) {
            handlePlay(videoList[nextIndex]);
            setCurrentIndex(nextIndex);
          } else {
            handlePlay(videoList[0]);
            setCurrentIndex(0);
          }
          setPlayerBtnRotate(playerBtnRotate + 90);
        }}
      >
        <div className="player-button"></div>
      </div>

      {/* 风扇操作区域 */}
      <div
        className="fengshan-control"
        onClick={() => {
          reportLog({
            where: "fengshan",
          });
          setFengshanPlay(!fengshanPlay);
        }}
      ></div>

      {/* 提示按键区 */}
      {currentIndex === -1 && (
        <div className="tishianniu">按一下电视开关试试看</div>
      )}
    </div>
  );
};

export default TV;
`;
const code: React.FC<{
  codeStr: string;
  isLaptop?: boolean;
}> = ({codeStr, isLaptop}) => {
  const [index, setIndex] = React.useState(0);
  const [str, setStr] = React.useState("");
  const pre = React.useRef();

  useInterval(() => {
    let str = "";
    let originStr = isLaptop ? longStr2 : longStr;
    const random = Math.floor(Math.random() * 9);
    if (index + random > originStr.length) {
      setIndex(0);
      str = originStr;
    } else {
      str = originStr.substring(0, index + random - 1);
      setIndex(index + random);
    }
    setStr(str);

    pre.current.scrollTop = pre.current.scrollHeight;
  }, 30);

  return (
    <pre className="code-pre" ref={pre}>
      {str}
    </pre>
  );
};

export default code;
