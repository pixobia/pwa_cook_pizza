import React, { useEffect, useState } from "react";
import { Button } from "./Button";

const UpdateButton = () => {
  const [showBtn, setShowBtn] = useState(false);

  const listenForWaitingServiceWorker = (reg, callback) => {
    console.log(reg);
    function awaitStateChange() {
      reg.installing.addEventListener("statechange", function () {
        if (this.state === "installed") callback(reg);
      });
    }
    if (!reg) return;
    if (reg.waiting) return callback(reg);
    if (reg.installing) awaitStateChange();
    reg.addEventListener("updatefound", awaitStateChange);
  };

  const showUpdateButton = (reg) => {
    if (reg) {
      setShowBtn(true);
    }
  };

  const handle = (reg) => {
    reg.waiting.postMessage("skipWaiting");
  };

  let refreshing;
  navigator.serviceWorker.addEventListener("controllerchange", () => {
    if (refreshing) return;
    refreshing = true;
    window.location.reload(true);
  });

  useEffect(() => {
    navigator.serviceWorker.register("sw.js").then((reg) => {
      listenForWaitingServiceWorker(reg, showUpdateButton);
    });
  }, []);

  if (showBtn) {
    return <Button>Update</Button>;
  }

  return null;
};

export default UpdateButton;
