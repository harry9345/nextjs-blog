import Head from 'next/head';
import Link from 'next/link';
import Date from '../components/date';
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

const  Home = ({
  allPostData
}: {
  allPostData: {
    date: string
    title: string
    id: string
  }[]
}) => {
  
  return (
    <Layout home >
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilsStyles.headingMd}>
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
              <Link href={`/posts/${id}`}>
                <a>{title} </a>
              </Link>
              <br />
              <small className={utilsStyles.lightText}>

                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
export default Home
