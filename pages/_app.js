import { ToastContainer } from 'react-toastify';
import Layout from '../components/layout/Layout';
import '../styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';
// import 'tw-elements';
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <ToastContainer autoClose={3000} />
    </Layout>
  );
}

export default MyApp;
