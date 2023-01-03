import Head from "next/head";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Blog from "../../components/Blog";
import { categories, rootUrl } from "../../constants";

export async function getStaticPaths() {
  return {
    paths: categories.map(({ catIds }) => {
      return { params: { category: catIds } };
    }),
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  let [blogRes] = await Promise.all([
    fetch(
      rootUrl +
        "/posts?per_page=12&_embed&_fields=id,title,excerpt,modified,slug,_links,_embedded&categories=" +
        params.category
    ),
  ]);
  [blogRes] = await Promise.all([blogRes.json()]);

  const blogs = blogRes.map((blog) => {
    return {
      id: blog.id,
      slug: blog.slug,
      image: blog._embedded["wp:featuredmedia"]
        ? blog._embedded["wp:featuredmedia"][0].source_url
        : null,
      category: blog._embedded["wp:term"][0]
        .map((category) => category.name.replace(/&amp;/g, "&"))
        .join(", "),
      title: blog.title.rendered,
      text: blog.excerpt.rendered,
      publish: blog.modified,
      writer:
        "Penulis: " +
        blog._embedded["author"].map((author) => author.name).join(", "),
    };
  });

  return {
    props: {
      blogs,
      categories: categories,
    },
  };
}

export default function Home({ blogs, categories }) {
  return (
    <div>
      <Head>
        <title>Blogs - KHS</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/logo.ico' />
      </Head>
      <Navbar />
      <Blog blogs={blogs} categories={categories} />
      <Footer />
    </div>
  );
}