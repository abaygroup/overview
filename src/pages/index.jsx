import Header from "../components/Header";
import Layout from "../hocs/layouts";
import Main from '../components/Main';
import Footer from "../components/Footer";

const Index = () => {
    return (
        <>
            <Layout>
                <Header />
                <Main />
                <Footer />
            </Layout>
        </>
    )
}

export default Index;