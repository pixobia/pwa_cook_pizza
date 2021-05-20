let deferredPrompt;

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

// const listenForWaitingServiceWorker = (reg, callback) => {
//     function awaitStateChange() {
//         reg.installing.addEventListener("statechange", function () {
//             if (this.state === "installed") callback(reg);
//             console.log("here")
//         });
//     }
//     if (!reg) return;
//     if (reg.waiting) return callback(reg);
//     if (reg.installing) awaitStateChange();
//     console.log("update found");
//     reg.addEventListener("updatefound", awaitStateChange);
// };
//
// const showUpdateButton = (reg) => {
//     if (reg) {
//         let button = document.querySelector("#update");
//         button.addEventListener("click", () => {
//             reg.waiting.postMessage("skipWaiting");
//         });
//         button.style.display = "inline";
//     }
// };
//
// window.addEventListener("load", () => {
//     console.log("hello loaded");
//     navigator.serviceWorker.register("sw.js").then((reg) => {
//         listenForWaitingServiceWorker(reg, showUpdateButton);
//     });
// });
//
// let refreshing;
// navigator.serviceWorker.addEventListener("controllerchange", () => {
//     if (refreshing) return;
//     refreshing = true;
//     window.location.reload(true);
// });
