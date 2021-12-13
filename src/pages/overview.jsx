import Layout from "../hocs/layouts";
import { motion } from "framer-motion";

const Overview = () => {
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
                <h1>Шолу парақшасы</h1>
            </motion.div>
        </Layout>
    )
}

export default Overview;