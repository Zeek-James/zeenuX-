import React, { useState } from "react";
import { Toast } from "./Toast";

export const Hambuger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const rot = isOpen ? "close nav_Btn" : "nav_Btn";

  return (
      <div className={rot} onClick={toggle}>
      <Toast />
      <Toast />
      <Toast />
    </div>
  );
};
