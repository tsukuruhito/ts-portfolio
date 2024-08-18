import { motion } from 'framer-motion';
import { useAtom } from 'jotai';
import { useEffect } from 'react';
import { darkModeAtom } from '../atom';

const Theme = () => {
    // const [darkMode, setDarkMode] = useAtom(darkModeAtom);
    // const toggleSwitch = () => {
    //     setDarkMode(!darkMode);
    //     if (!darkMode) {
    //         document.documentElement.classList.add('dark');
    //         localStorage.setItem('theme', 'dark');
    //     } else {
    //         document.documentElement.classList.remove('dark');
    //         localStorage.setItem('theme', '');
    //     }
    // };
    const spring = {
        type: 'spring',
        stiffness: 700,
        damping: 30,
    };

    // useEffect(() => {
    //     if (localStorage.getItem('theme') === 'dark') {
    //         setDarkMode(true);
    //         document.documentElement.classList.add('dark');
    //     }
    // }, [setDarkMode]);
    return (
        <div
        // className={
        //   darkMode
        //     ? "flex w-14 h-8 m-2 p-1 bg-zinc-400 rounded-full items-center justify-end"
        //     : "flex w-14 h-8 m-2 p-1 bg-zinc-600 rounded-full items-center justify-start"
        // }
        // onClick={toggleSwitch}
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
