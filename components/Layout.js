import React from 'react';
import Head from 'next/head';
import cx from 'classnames';

class Layout extends React.Component {
    static async getInitialProps(ctx) {
        return {
            path: ctx.query,
        }
    }

    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {      
        return (
            <div className={cx('main')}>
                <Head>
                    <title>curaete</title>
                    <link rel="shortcut icon" href={process.env.BACKEND_URL + 'static/favicon.ico'} />
                </Head>
                <div className={cx('main-layout')}>
                    { this.props.children }
                </div>
            </div>
        )
    }
}

export default Layout;