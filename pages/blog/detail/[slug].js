import Head from "next/head";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import BlogDetail from "../../../components/BlogDetail";
import { rootUrl } from "../../../constants";

export async function getStaticPaths() {
  let [blogRes] = await Promise.all([
    fetch(rootUrl + "/posts?per_page=10&_fields=slug"),
  ]);
  [blogRes] = await Promise.all([blogRes.json()]);
  return {
    paths: blogRes.map((el) => ({ params: el })),
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  let [blogRes] = await Promise.all([
    fetch(rootUrl + "/posts?per_page=1&_embed&slug=" + params.slug),
  ]);
  [blogRes] = await Promise.all([blogRes.json()]);

  const blog = blogRes[0];

  return {
    props: {
      blog,
    },
  };
}

export default function Detail({ blog }) {
  return (
    <div>
      <Head>
        <title>Blog - KHS</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/logo.ico' />
      </Head>
      <Navbar />
      <BlogDetail blog={blog} />
      <Footer />
    </div>
  );
}