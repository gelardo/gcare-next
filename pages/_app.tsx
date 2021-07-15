// @ts-ignore
import React from 'react';
import { AppProps } from 'next/app'
import Layout from "./components/Layout";
import {AuthProvider} from "./hooks";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <AuthProvider>
            <Layout >
                <Component {...pageProps} />
            </Layout>
        </AuthProvider>
    )
}

export default MyApp
