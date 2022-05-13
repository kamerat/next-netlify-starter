import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

/**
 * Redirects users landing on root to region based on cookie value
 */
function redirectRootToRegion() {
    const rawCookies = ctx?.req?.headers?.cookie ?? '';
    const region = 'no'

    if (region) {
        ctx.res.writeHead(302, {
            Location: `/${region}`,
        });
        ctx.res.end();
    }
}

function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}

Home.getInitialProps = async (ctx) => {
    redirectRootToRegion(ctx);
    return {};
};
export default Home
