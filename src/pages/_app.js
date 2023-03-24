import '@/styles/globals.css';

// Note: MDB React & Next.js integration...!
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

// Note: Importing required components...!
import Layout from '@/components/layout';

const App = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;