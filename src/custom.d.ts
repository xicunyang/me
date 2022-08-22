declare module '*.png' {
  // eslint-disable-next-line
  const content: any;
  export default content;
}

declare module '*.mp3' {
  // eslint-disable-next-line
  let content: any;
  export default content;
}
