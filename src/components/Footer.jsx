import React from 'react';
import Image from 'next/image';
// import Link from 'next/link';


const Footer = () => {
    return (
        <div className="footer">
            <div className="intro-footer">
                <div className="brand">
                    <Image src="/icons/abaystreet.svg" width={180} height={36} />
                    <small>© 2021 Mediahosting, Inc.</small>
                </div>
                <div className="links">
                    {/* <ul className="us">
                        <li><Link href="/"><a>Mediahosting-те сабақ беру</a></Link></li>
                        <li><Link href="/"><a>Қосымшаны жүктеп алыңыз</a></Link></li>
                        <li><Link href="/"><a>Біз жайлы</a></Link></li>
                        <li><Link href="/"><a>Біздің координата</a></Link></li>
                    </ul>
                    <ul className="career">
                        <li><Link href="/"><a>Карьера</a></Link></li>
                        <li><Link href="/"><a>Блог</a></Link></li>
                        <li><Link href="/"><a>Анықтама және көмек</a></Link></li>
                        <li><Link href="/"><a>Серіктестік</a></Link></li>
                    </ul>
                    <ul className="privacy">
                        <li><Link href="/"><a>Қолдану ережелері</a></Link></li>
                        <li><Link href="/"><a>Құпиялылық саясаты</a></Link></li>
                        <li><Link href="/"><a>Сайт картасы</a></Link></li>
                        <li><Link href="/"><a>Қол жетімділік мәлімдемесі</a></Link></li>
                    </ul> */}
                </div>
            </div>
        </div>
    )
}

export default Footer;