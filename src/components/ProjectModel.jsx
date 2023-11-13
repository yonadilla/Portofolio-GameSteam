import { motion } from "framer-motion"


function Project_model(props, ref) {
    const { img, filtered, upDownRef, currentUpDownIndex, index, setModal } = props
    
  return (
    <motion.div layout>
        <button onClick={setModal}>
            <img src={img} alt="" className=""/>
        </button>
    </motion.div>
  )
}


export default Project_model