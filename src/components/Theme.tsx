import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Theme = () => {
  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => {
    setIsOn(!isOn);
    if (!isOn) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "");
    }
  };
  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      setIsOn(true);
      document.documentElement.classList.add("dark");
    }
  }, []);
  return (
    <div
      className={
        isOn
          ? "flex w-14 h-8 m-2 p-1 bg-zinc-400 rounded-full items-center justify-end"
          : "flex w-14 h-8 m-2 p-1 bg-zinc-600 rounded-full items-center justify-start"
      }
      onClick={toggleSwitch}
    >
      <motion.div
        className="w-6 h-6 rounded-full bg-sky-50"
        layout
        transition={spring}
      />
    </div>
  );
};

export default Theme;
