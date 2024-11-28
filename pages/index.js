import { getPostData } from '../lib/posts';

export default function Home({ postData }) {
  return (
    <div>
      <h1>{postData.title}</h1>
      <p>{postData.date}</p>
      <div dangerouslySetInnerHTML={{ __html: postData.content }} />
    </div>
  );
}

// Fetch the markdown data during build time
export async function getStaticProps() {
  const postData = getPostData();
  return {
    props: {
      postData,
    },
  };
}
