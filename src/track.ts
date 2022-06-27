import axios from "axios";

export const reportLog = ({
  where = "unknown",
  videoName = "",
  msg = "",
  fullUrl = "",
}) => {
  try {
    // axios.get(
    //   `https://my-61.cn-guangzhou.log.aliyuncs.com/logstores/track/track?APIVersion=0.6.0&where=${where}&videoName=${videoName}&msg=${msg}&loc=${location.href}&fullUrl=${fullUrl}`
    // );
  } catch (e) {}
};
