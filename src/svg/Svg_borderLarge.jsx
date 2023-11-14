import { motion } from "framer-motion";

export default function Svg_borderLarge({ darkMode }) {
  const pathCircleVariants = {
    from: {
      opacity: 0,
      pathLength: 0,
    },
    to: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };
  return (
    <div className=" mx-4">
      <svg
        id="e2zE5csYOyT1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 1920 1080"
        shapeRendering="geometricPrecision"
        textRendering="geometricPrecision"
      >
        <motion.g
          stroke={darkMode ? "#e0e1dd" : "#0d1b2a"}
        >
          <motion.line
            variants={pathCircleVariants}
            initial="from"
            animate="to"
            x1="0"
            y1="-300"
            x2="0"
            y2="540"
            transform="translate(0 300)"
            fill="none"
            strokeWidth="3"
          />
          <motion.line
            variants={pathCircleVariants}
            initial="from"
            animate="to"
            x1="-960"
            y1="0"
            x2="960"
            y2="0"
            transform="translate(960 840)"
            fill="none"
            strokeWidth="3"
          />
          <image
            href="assets/fotoprofil-removebg-preview.png"
            width={"65%"}
            height={"65%"}
            y={100}
            x={-150}
          />
          
          <motion.line
            variants={pathCircleVariants}
            initial="from"
            animate="to"
            x1="0"
            y1="540"
            x2="0"
            y2="-300"
            transform="translate(1920 300)"
            fill="none"
            strokeWidth="3"
          />
          <motion.line
            variants={pathCircleVariants}
            initial="from"
            animate="to"
            x1="960"
            y1="0"
            x2="-960"
            y2="0"
            transform="translate(960 0)"
            fill="none"
            strokeWidth="3"
          />
          <g >
          <motion.line
            x1="0"
            y1="0"
            x2="-957"
            y2="0"
            transform="translate(960 785)"
            stroke={darkMode ? "#0d1b2a" : "#edf6f9"}
            strokeWidth="100"
          />
          <motion.line
            variants={pathCircleVariants}
            initial="from"
            animate="to"
            x1="-135"
            y1="0"
            x2="530"
            y2="0"
            transform="translate(296 760)"
            fill="none"
            strokeWidth="20"
          />
          <motion.line
            variants={pathCircleVariants}
            initial="from"
            animate="to"
            x1="-135"
            y1="0"
            x2="530"
            y2="0"
            transform="translate(296 800)"
            fill="none"
            strokeWidth="20"
          />
          <g fill={darkMode ? "#e0e1dd" : "#0d1b2a"}>
          <text fontSize={"40"} y={"770"} x={"50"}>
            HP :
          </text>
          <text fontSize={"40"} y={"810"} x={"48"}>
            MP :
          </text>
        </g>
            </g>
          <motion.line
            variants={pathCircleVariants}
            initial="from"
            animate="to"
            x1="0"
            y1="-540"
            x2="0"
            y2="540"
            transform="matrix(-1 0 0 0.786748 960 415.15608)"
            fill="none"
            strokeWidth="3"
          />
         
          <g
            fill={darkMode ? "#e0e1dd" : "#0d1b2a"}
            className=""
            width={"100%"}
            height={"100%"}
            transform="translate(1700,10)"
          >
            <text fontSize={35} x={-200} y={100}>
              Front-end Developer
            </text>
            <image
              data-tooltip="React"
              href="assets/icons/icons8-javascript (1).svg"
              x={100}
              y={130}
              width={"5%"}
              height={"5%"}
            />
            <image
              href="assets/icons/icons8-react.svg"
              y={220}
              width={"5%"}
              height={"5%"}
            />
            <image
              href="assets/icons/icons8-tailwind-css.svg"
              x={100}
              y={220}
              width={"5%"}
              height={"5%"}
            />
            <image
              href="assets/icons/framer.svg"
              y={300}
              width={"5%"}
              height={"5%"}
            />
            <image
              href="assets/icons/daisyui-logomark.svg"
              x={100}
              y={300}
              width={"5%"}
              height={"5%"}
            />
            <image
              href="assets/icons/icons8-visual-studio.svg"
              x={100}
              y={380}
              width={"5%"}
              height={"5%"}
            />
            <image
              href="assets/icons/cloud-api.svg"
              x={100}
              y={460}
              width={"5%"}
              height={"5%"}
            />
            <image
              href="assets/icons/icons8-git.svg"
              x={0}
              y={460}
              width={"5%"}
              height={"5%"}
            />
            <image
              href="assets/icons/icons8-css3 (1).svg"
              x={-100}
              y={460}
              width={"5%"}
              height={"5%"}
            />
            <image
              href="assets/icons/icons8-html (1).svg"
              x={-200}
              y={460}
              width={"5%"}
              height={"5%"}
            />
          </g>
          
          <motion.path
          variants={pathCircleVariants}
          initial="from"
          animate="to"
          fill={darkMode ? "#0d1b2a" : "#edf6f9"}
            d="M0,440q560,0,520,0L680,240"
            transform="translate(0-240)"
            strokeWidth="3"
          />
        </motion.g>
        <motion.text
          fontSize={"48"}
          x={30}
          fill={darkMode ? "#e0e1dd" : "#0d1b2a"}
          y={100}
        >
          yon adilla muchammad
        </motion.text>
        <motion.text
          fontSize={"80"}
          fill={darkMode ? "#e0e1dd" : "#0d1b2a"}
          y={130}
          x={650}
        >
          LV : 99
        </motion.text>
        <g
            fill={darkMode ? "#e0e1dd" : "#0d1b2a"}
            transform="translate(1000,100)"
            fontSize={"30"}
          >
            <text>Role</text>
            <text y={80}>Sihir</text>
            <text y={160}>Rangkaian Sihir</text>
            <text y={240}>Arsip Ilmu Sihir</text>
            <text y={320}>Senjata</text>
            <text y={400}>Lain</text>
          </g>
      </svg>
    </div>
  );
}
