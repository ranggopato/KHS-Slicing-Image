import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Monitor from "../components/Monitor";

export default function Client() {
  return (
    <div>
      <Head>
        <title>Monitor - KHS</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/logo.ico' />
      </Head>
      <Navbar />
      <Monitor />
      <Footer />
    </div>
  );
}
