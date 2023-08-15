import Header from '@containers/Header';
import '@styles/globals.scss';

export default function App({ Component, pageProps }) {
  return <>
    <Header />
    <Component {...pageProps} />
  </>
}
