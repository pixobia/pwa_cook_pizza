import React, { useEffect, useState } from "react";
import { Button } from "./Button";

const UpdateButton = () => {

  const [showBtn, setShowBtn] = useState(false);
  const [regis, setRegis] = useState(null);

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("sw.js").then((reg) => {
        listenForWaitingServiceWorker(reg, showUpdateButton);
      });
    }
  }, []);

  const listenForWaitingServiceWorker = (reg, callback) => {
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
      setRegis(reg);
      setShowBtn(true);
    }
  };

  const update = () => {
    console.log("update button triggered")
    regis.waiting.postMessage("skipWaiting");
  };
  if (showBtn) {
    return <Button onClick={update}>Update</Button>;
  }

  return null;
};

export default UpdateButton;
