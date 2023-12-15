import { useRef, useState } from "react";
import Svg_volume from "../../../svg/Svg_volume";
import { AnimatePresence, motion } from "framer-motion";
import { useSessionStorage } from "../../../Hooks/useStorage";
import useClickOutside from "../../../Hooks/useClickOutside";
import useUpdateEffect from "../../../Hooks/useUpdateEffect";
import useSound from "use-sound";

export default function Volume({ darkMode, volume, setVolume }) {
  const [open, setOpen] = useState(false);
  const volumeRef = useRef();
  const [soundVolume, {stopVolume}] = useSound("/src/sound/bumper_end.wav",{volume : volume})

  const persen = volume * 100;
  const handleVolumeChange = (e) => {
    const newVolume = e.target.value / 100;
    setVolume(newVolume);
  };


  useClickOutside(volumeRef, () => {
    if (open) {
      setOpen(false);
    }
  });

    function soundClick () {

      if (open) {
        let soundOpen = new Audio("/assets/sound/confirmation_negative.wav");
        soundOpen.play();
        soundOpen.volume = volume;
      } else {
        let soundClose = new Audio("/assets/sound/confirmation_positive.wav");
      soundClose.play();
      soundClose.volume = volume;
    }
  }
    

  
  return (
    <div ref={volumeRef} className="">
      <div
        onClick={() => {setOpen(!open), soundClick()}}
        className=" w-7 h-3 flex items-center"
      >
        <Svg_volume darkMode={darkMode} />
      </div>
      <div className=" absolute right-2 top-4 lg:right-28 -rotate-90">
        <AnimatePresence mode="wait">
          {open && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { type: "spring", duration: 1 },
              }}
              exit={{
                opacity: 0,
                transition: { type: "spring", duration: 1 },
              }}
              className="flex justify-start flex-col items-stretch"
            >
              <div className=" w-48 h-2 flex rounded overflow-hidden">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={persen}
                  className=" bg-black rotate-90 absolute w-24 h-auto"
                  onMouseDown={() => stopVolume()}
                  onMouseUp={() => soundVolume()}
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
