import Head from 'next/head';
import About from './about/index';

const Home = () => (
  <>
    <Head>
      <title>روئية الريادة</title>
      <meta name="description" content="روئية الريادة" />
      <link rel="icon" href="/imgs/logo.svg" />
    </Head>

    <main>
      <About />
    </main>
  </>
);

export default Home;
