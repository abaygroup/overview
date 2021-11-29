import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from "framer-motion";

const Header = () => {

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
        <div className="header">
            <motion.div className="intro-header"
                initial="hidden" 
                animate="visible" 
                variants={variants}
                transition={{duration: 1}}
            >
                <div className="logo">
                    <Link href="/"><a><Image src="/icons/abaystreet.svg" width={180} height={36} /></a></Link>
                </div>
                <nav>
                    <Link href="/"><a>Mediahosting</a></Link>
                    <Link href="/overview"><a>Шолу</a></Link>
                    <Link href="/partners"><a>Серіктестік</a></Link>
                    <Link href="/about"><a>Біз жайлы</a></Link>
                </nav>
                <div className="auth">
                    <Link href="http://mediahosting.abaystreet.com/accounts/login"><a>Кіру</a></Link>
                    <Link href="http://mediahosting.abaystreet.com/accounts/register"><a>Регистрация</a></Link>
                </div>
            </motion.div>
        </div>
    )
}

export default Header;