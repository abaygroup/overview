import React from 'react';
import Head from 'next/head';

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
                {props.children}
            </div>
        </React.Fragment>
    )
}

Layout.defaultProps = {
    title: "Қош келдіңіз - aBay street",
    content: ""
}

export default Layout;