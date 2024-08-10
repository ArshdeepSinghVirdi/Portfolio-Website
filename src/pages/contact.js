import React from 'react'
import Layout from "../components/Layout"
import Head from 'next/head'
import Contact from "../components/Contact/Contact.jsx"
import TransitionEffect from '../components/TransitionEffect.js'

const contact = () => {
    return (
        <>
          <Head>
            <title>Arshdeep Singh | Contact Page</title>
            <meta name="description" content="any description" />
          </Head>
          <TransitionEffect/>
          <main style={{ margin: 0, padding: 0 }}>
            <Layout>
            <Contact />
            </Layout>
          </main>
        </>
  )
}

export default contact
