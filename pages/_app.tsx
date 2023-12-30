// 全てのページで共通の処理を実行する場合は、_app.tsx に記述する
//component はアクティブなページを表す。
//pageProps は事前にページをロードしておき、ページに渡すデータを表す。
import '../styles/global.css';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}