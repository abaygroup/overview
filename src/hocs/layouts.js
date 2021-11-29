import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = (props) => {
    return (
        <React.Fragment>
            <Head>
                <title>{props.title}</title>
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.13.1/css/all.css" integrity="sha384-xxzQGERXS00kBmZW/6qxqJPyxW3UR0BPsL4c8ILaIWXva5kFi7TxkIIaMiKtqV1Q" crossOrigin="anonymous" />
                <meta name="description" content={props.content} />
                <link rel="shortcut icon" href="/icons/icon64.png" />
            </Head>
            <div id="root">
                <div className="root-wrapper">
                    <Header />
                    {props.children}
                    <Footer />
                </div>
            </div>
        </React.Fragment>
    )
}

Layout.defaultProps = {
    title: "Қош келдіңіз - aBay street",
    content: "© aBay st: Біз әрдайым жаңа технологиялар арқылы адамдарды бір-бірімен байланыстыруға тырысамыз!"
}

export default Layout;