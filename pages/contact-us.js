import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactUs from "../components/ContactUs";

export default function Contact() {
  return (
    <div>
      <Head>
        <title>ContactUs - KHS</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/logo.ico' />
      </Head>
      <Navbar />
      <ContactUs />
      <Footer />
    </div>
  );
}
