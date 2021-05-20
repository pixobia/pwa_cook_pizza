import React, { useEffect, useState } from "react";
import { Button } from "./Button";

const InstallButton = () => {
  const [supportsPWA, setSupportsPWA] = useState(false);
  const [promptInstall, setPromptInstall] = useState(null);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      console.log("PWA is supported!");
      setSupportsPWA(true);
      setPromptInstall(e);
    };
    window.addEventListener("beforeinstallprompt", handler);

    //return () => window.removeEventListener("transitionend", handler);
  }, []);

  const install = (e) => {
    e.preventDefault();
    if (!promptInstall) {
      return;
    }
    promptInstall.prompt();
  };
  if (!supportsPWA) {
    return null;
  }
  return <Button onClick={install}>Installieren</Button>;
};

export default InstallButton;
