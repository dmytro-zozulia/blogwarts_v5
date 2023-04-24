if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("../sw_cached_pages.js")
      .then((reg) => console.log("Service Worker:registered"))
      .catch((err) => console.log(`Service worker : error : ${err}`));
  });
}
