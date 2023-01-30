import { motion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
const SceneChange = ({ children }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, pointerEvents: "none", filter: "blur(5px)" }}
      animate={{ opacity: 1, pointerEvents: "auto", filter: "blur(0px)" }}
      exit={{ opacity: 0, pointerEvents: "none", filter: "blur(15px)" }}
      transition={{ ease: "easeInOut", duration: 0.5 }}
      className="relative"
    >
      {children}
    </motion.div>
  );
};
export default SceneChange;
