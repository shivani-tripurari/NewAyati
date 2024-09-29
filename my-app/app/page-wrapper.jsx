"use client";

import {motion,AnimatePresence} from 'framer-motion';

export const PageWrapper = ({children}) => (
    <>
        <AnimatePresence>
            <motion.div
                initial={{opacity:0, y:20}}
                animate={{opacity:1, y:0}}
                transition={{ease:'easeInOut', duration: 0.75}}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    </>


);