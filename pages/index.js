import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout'
import utilsStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  console.log('now');
  const allPostData = getSortedPostsData();
  return {
    props: {
      allPostData,
    },
  };
}

const  Home =({ allPostData }) => {
  console.log('allpost', allPostData);
  return (
    <Layout home >
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilsStyles.headingMd}>
        <Link href="/posts/first-post">

          <a>[Your Self Introduction]</a>
        </Link>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilsStyles.headingMd} ${utilsStyles.padding1px}`}>
        <h2 className={utilsStyles.headingLg} >Blog</h2>
        <ul className={utilsStyles.list}>
          {allPostData.map(({ id, date, title }) => (
            <li className={utilsStyles.listItem} key={id}>
              {title} <br /> {id} <br /> {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
 
export default Home