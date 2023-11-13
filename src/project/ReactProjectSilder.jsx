import { motion } from "framer-motion";
import Project_model from "../components/ProjectModel";

export default function ReactProjectSilder({ setModal }) {
  return (
    <motion.div layout className=" absolute w-screen">
      <motion.div layout className=" py-3">
        <Project_model
          setModal={() => setModal(1)}
          img={"/src/assets/website Gif.webp"}
        />
      </motion.div>
      <motion.div layout className=" py-3">
        <Project_model
          setModal={() => setModal(2)}
          img={"/src/assets/Tic-tac-to.webp"}
        />
      </motion.div>
    </motion.div>
  );
}
