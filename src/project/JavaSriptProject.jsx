import { motion } from "framer-motion"
import Project_model from "../components/ProjectModel"


export default function JavaSriptProject({setModal}) {
  return (
    <motion.div layout className=" absolute w-screen">
      <motion.div layout className=" py-3">
        <Project_model
          setModal={() => setModal(4)}
          img={"/src/assets/quoute-generator/Desain tanpa judul (2).webp"}
        />
      </motion.div>
      <motion.div layout className=" py-3">
        <Project_model
          setModal={() => setModal(2)}
          img={"/src/assets/my_interior/interior.webp"}
        />
      </motion.div>
    </motion.div>
  )
}
