import React from 'react';
import Layout from "../hocs/layouts";
import { motion } from "framer-motion";

const Agree = () => {
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
        <Layout>
            <motion.div 
                className="main-container"
                initial="hidden" 
                animate="visible" 
                variants={variants}
                transition={{duration: 1}}
            >
                <div className="agree-block">
                    <h1>Пайдаланушы келісімі</h1>
                    <small>
                        Пайдаланушы келісімі aBay st. компаниясы мен сайтты қамтитын 
                        Mediahosting онлайн – платформасында бейне, құжат, фото, ақпарат 
                        және өзге де материалдарды орналастыру және пайдалану жөніндегі 
                        онлайн-платформаны пайдаланушы жеке тұлға (бұдан әрі – пайдаланушы) 
                        арасындағы қатынастарды реттейді.
                    </small>
                    <div className="terms">
                        <h2>1. ТЕРМИНДЕР МЕН АНЫҚТАМАЛАР</h2>
                        <small>
                            <strong>Mediahosting онлайн-платформасы</strong> – компанияның иелігінде кез 
                            келген тұлғаға сайт және (немесе) қосымша арқылы оларға қол жеткізуге мүмкіндік 
                            беретін, тіркелмеген тұлғалар тобына кейбір қолжетімді ақпарат пен контентті 
                            қамтитын, Интернет арқылы жұмыс істейтін және пайдаланушыларға ақпарат пен 
                            контентті қарау мүмкіндігін беретін аппараттық-бағдарламалық кешен.
                        </small>
                        <small>
                            <strong>Қосымша</strong> - бұл iOS, Android операциялық жүйелерін басқаратын 
                            мобильді құрылғылар үшін жасалған, осы Пайдаланушы келісімін толық сақтай отырып, 
                            қосымшалар дүкені арқылы пайдаланушыға қол жетімді платформаның бөлігі болып 
                            табылатын мобильді қосымша.
                        </small>
                        <small>
                            <strong>Сайт</strong> - мына мекенжай бойынша орналасқан Интернет-ресурс 
                            (URL): mediahosting.abaystreet.com немесе abaystreet.com, платформаның бөлігі.
                        </small>
                        <small>
                            <strong>Профиль</strong> - қолжетімді функционал мен интерфейс шеңберінде 
                            платформамен және компаниямен пайдаланушының өзара іс-қимыл жасауына арналған 
                            платформадағы және (немесе) қосымшадағы Пайдаланушының дербес ақпараттық кеңістігі. 
                            Пайдаланушыға профильге кіру платформада және (немесе) қосымшада тіркеуден сәтті 
                            өткеннен кейін беріледі.
                        </small>
                        <small>
                            <strong>Пайдаланушы</strong> - сайтты және (немесе) қосымшаны қоса алғанда, 
                            Платформа сервистерін пайдаланатын жеке тұлға.
                        </small>
                    </div>
                    
                </div>
                
                
            </motion.div>
        </Layout>
    )
}

export default Agree;