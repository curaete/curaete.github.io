import Layout from '../components/Layout';
import '../css/main.css';

function Application({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default Application;