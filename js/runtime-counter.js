(function () {
    const createTime = new Date('2025-04-15 22:22:22'.replace(/-/g, "/"));
    function updateRuntime() {
      const now = new Date();
      const diff = now - createTime;
  
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
  
      const runtimeEl = document.getElementById("runtime");
      if (runtimeEl) {
        runtimeEl.innerText = `本站已运行 ${days} 天 ${hours} 小时 ${minutes} 分钟 ${seconds} 秒`;
      }
    }
  
    updateRuntime();
    setInterval(updateRuntime, 1000);
  })();
  