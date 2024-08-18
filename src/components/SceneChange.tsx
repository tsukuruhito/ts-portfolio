import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

type Props = {
    children: ReactNode;
};
const SceneChange = ({ children }: Props) => {
    return (
        <motion.div
            initial={{ opacity: 0, pointerEvents: 'none' }}
            animate={{ opacity: 1, pointerEvents: 'initial', filter: 'none' }}
            exit={{ opacity: 0, pointerEvents: 'none', filter: 'blur(5px)' }}
            transition={{ ease: 'easeInOut', duration: 0.5 }}
            className="relative"
        >
            {children}
        </motion.div>
    );
};
export default SceneChange;
