import { useEffect, useMemo, useRef, useState } from "react";
import useEventListener from "./useEventListener";
import { useCycle } from "framer-motion";
import { signal } from "@preact/signals-react";

export default function useOpenSideBar() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const sideBarRef = useRef(null);
  

  useEventListener("keydown", e => {
    if (e.key === "Home") {
      toggleOpen();
    } 
  })


  return {isOpen , sideBarRef, toggleOpen}
}