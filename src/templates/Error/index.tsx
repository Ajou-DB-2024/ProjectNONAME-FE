"use client";

import { useEffect } from "react";

// global state
import states from "@/core/zustand/states";

// constants

// types
type ErrorTemplateProps = {
  message: string
}

// components


const ErrorTemplate: React.FC<ErrorTemplateProps> = ({ message }) => {

  const { errorAlert } = states.useGlobalAlertQueue();
  useEffect(() => {
    errorAlert(undefined, message, [
      { text: "재시도", mode: "sub", onClick: () => {
        window.location.reload()
      } }
    ]);
  }, []);

  return <></>
};

export default ErrorTemplate