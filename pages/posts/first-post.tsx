import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '../../components/layout';

export default function FirstPost() {
    return (
        <Layout> {/*  引数があるときはこの形 */}
            <Head>
                <title>First Post</title> {/*  タブの表示変更 */}
            </Head>
            <Script
            src = "https://connect.facebook.net/en_US/sdk.js"
            strategy='lazyOnload' /*  lazyOnload でスクリプトの読み込みを遅らせる */
            onLoad={() =>
                console.log('script Loaded correctly, window.FB has been populated')
            } /* しっかりスクリプトの読み込みが完了したのちにjsコードを実行するために使用 */
            />
            <h1>First Post</h1>
            <h2>
                <Link href="/">
                    Back to home
                </Link>
            </h2>
        </Layout>
    )
}