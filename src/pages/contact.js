import React from 'react';
import Layout from "../components/Layout";
import Head from 'next/head';
import Contact from "../components/Contact/Contact.jsx";
import TransitionEffect from '../components/TransitionEffect.js';
import Image from 'next/image';
import profile from "../../public/Arsh2.png";

const contact = () => {
  return (
    <>
      <Head>
        <title>Arshdeep Singh | Contact Page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main style={{ margin: 0, padding: 0 }}>
        <Layout>
          <div className="absolute top-0 left-5">
            <Image src={profile} alt="Arsh" className="w-20 h-25" />
          </div>
          <Contact />
        </Layout>
      </main>
    </>
  )
}

export default contact;
