import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from "framer-motion";


const Main = () => {

    // For motion
    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    }

    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    }

    return (
        <motion.div 
            className="main-container"
            initial="hidden" 
            animate="visible" 
            variants={variants}
            transition={{duration: 1}} 
        >
            <Image src="/icons/logo.png" width={5276} height={730} />
            <motion.h1
                initial="hidden" 
                animate="visible" 
                variants={item}
                transition={{duration: 0.5}}
            >Заманауи білім беру платформасы</motion.h1>
            <motion.p
                initial="hidden" 
                animate="visible" 
                variants={item}
                transition={{duration: 1}}
            >Mediahosting - бұл заманауи технологиялармен өңделген, озық ақпарат берудің жетілдірілген онлайн платформасы. </motion.p>
            <motion.div className="link"
                initial="hidden" 
                animate="visible" 
                variants={item}
                transition={{duration: 1}}
            >
                <Link href="http://mediahosting.abaystreet.com"><a target="_blank" rel="noopener noreferrer">Жылдам старт</a></Link>
            </motion.div>
        </motion.div>
    )
}

export default Main;