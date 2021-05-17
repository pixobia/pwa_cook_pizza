if ("serviceWorker" in navigator) {
  console.log("we support SW");
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("./sw.js")
      .then((reg) => {
        console.log("SW registration was successfull!!", reg.scope);
      })
      .catch((err) => {
        console.log("it was not successful!!");
      });
  });
}
