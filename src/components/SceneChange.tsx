import { motion } from "framer-motion";
import { useAtom } from "jotai";
import Image from "next/future/image";
import { sceneAtom } from "../atom";

const SceneChange = () => {
  const [scene, setScene] = useAtom(sceneAtom);
  return (
    <motion.div
      className="
        fixed bg-gradient-to-b from-white via-stone-300 to-stone-200 z-50 pointer-events-none"
      initial={{
        opacity: 0,
        width: "100%",
        height: "100%",
      }}
      animate={
        scene && {
          clipPath: [
            "inset(0% 0% 100% 0%)",
            "inset(0% 0% 0% 0%)",
            "inset(100% 0% 0% 0%)",
          ],
          opacity: [1, 1, 1],
          transition: { duration: 2, ease: [0.6, 0.05, -0.01, 0.9] },
        }
      }
      onAnimationComplete={() => {
        setScene(false);
      }}
    >
      <Image
        src="/transition.jpg"
        alt="transition"
        fill
        className="object-cover opacity-20 backdrop-blur-md"
      />
    </motion.div>
  );
};
export default SceneChange;
