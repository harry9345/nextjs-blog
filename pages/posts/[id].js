import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head';
import Date from '../../components/date';
import utilsStyles from '../../styles/utils.module.css'

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    console.log("post Data : ", postData);
    return {
        props: {
            postData
        }
    }
}

export async function getStaticPaths() {
    const paths = getAllPostIds();
    console.log("paths : ", paths);
    return {
        paths,
        fallback: false,
    };
}

const Post = ({ postData }) => {
    console.log("post  : ", postData);
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className={utilsStyles.headingXl}>
                    {postData.title}
                </h1>
                <div className={utilsStyles.lightText}>
                    <Date dateString={postData.date} />
                </div>

                <br />
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
        </Layout>
    )
}

export default Post 