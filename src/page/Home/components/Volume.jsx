import { useRef, useState } from "react";
import Svg_volume from "../../../svg/Svg_volume";
import { AnimatePresence, motion } from "framer-motion";
import useClickOutside from "../../../Hooks/useClickOutside";
import useSound from "use-sound";
import { Howl } from "howler";

export default function Volume({ darkMode, volume, setVolume }) {
  const [open, setOpen] = useState(false);
  const volumeRef = useRef();
  const [soundVolume, {stopVolume}] = useSound("/assets/sound/bumper_end.wav",{volume : volume})

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



  var soundOpen = new Howl({
    src: ["/assets/sound/confirmation_negative.wav"],
    volume : volume,
    preload : true
  });

  var soundClose = new Howl({
    src: ["/assets/sound/confirmation_positive.wav"],
    volume : volume,
    preload : true
  });
  return (
    <div ref={volumeRef} className=" flex flex-col justify-center items-center">
      <div
        onClick={() => {setOpen(!open), open ? soundOpen.play() : soundClose.play()}}
        className=" w-7 h-3 flex items-center"
      >
        <Svg_volume darkMode={darkMode} />
      </div>
      <div className="absolute top-20">
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
              className=""
            >
              <div className="  h-2 flex rounded overflow-hidden">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={persen}
                  className=" bg-black w-36 flex justify-center h-auto"
                  onMouseDown={() => stopVolume()}
                  onMouseUp={() => soundVolume()}
                  onTouchEnd={() => soundVolume()}
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
