import { useRef } from "react";
import Svg_volume from "../svg/Svg_volume";
import { AnimatePresence, motion } from "framer-motion";
import { useSessionStorage } from "../Hooks/useStorage";
import useClickOutside from "../Hooks/useClickOutside";
import { useSignal } from "@preact/signals-react";

export default function Volume({darkMode}) {
  const volumeOpen = useSignal(false)

  const [volume, setVolume] = useSessionStorage("volume", 0.7);
  const volumeRef = useRef();
  const persen = volume * 100;
  const handleVolumeChange = (e) => {
    const newVolume = e.target.value / 100;
    setVolume(newVolume);
  };

  useClickOutside(volumeRef, () => {
    if (volumeOpen.value) {
      volumeOpen.value = false;
    }
  });

  return (
    <div ref={volumeRef} className="">
      <div
        onClick={() => volumeOpen.value = !volumeOpen.value}
        className=" w-7 h-3 flex items-center"
      >
        <Svg_volume darkMode={darkMode} />
        
      </div>
      <div className=" absolute top-20 right-2">
        <AnimatePresence mode="wait">
          {volumeOpen.value && (
            <motion.div
              initial={{ y: -150 }}
              animate={{ y: 0 }}
              exit={{ y: 1000 }}
              className="flex justify-start flex-col items-stretch"
            >
              <div className=" w-48 h-2 flex rounded overflow-hidden">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={persen}
                  className=" bg-black rotate-90 absolute w-24 h-auto"
                  onChange={handleVolumeChange}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
