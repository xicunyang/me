(function () {
  function rem() {
    let fontSize = '';
    let screenWidth = document.documentElement.clientWidth;

    // if(screenWidth > 750) {
    //   // screenWidth = 750;
    // }
    fontSize = screenWidth;
    document.documentElement.style.fontSize = `${fontSize}px`;
  }
  rem();
  window.onresize = rem;
})();
