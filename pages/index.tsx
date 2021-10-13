import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const [pageTitle, setPageTitle]= useState("My APp")
  return (
    <div className={styles.container}>
      <Head>
        <title>{pageTitle?pageTitle:'saxon'}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
          <div className="h-120 w-full shadow-lg bg-white">

          </div>
          <div className="flex w-full space-x-4 px-4 py-4">
            <div className="h-40 w-40 rounded-lg shadow-lg bg-white"></div>
            <div className="h-40 w-40 rounded-lg shadow-lg bg-white"></div>
            <div className="h-40 w-40 rounded-lg shadow-lg bg-white"></div>
            <div className="h-40 w-40 rounded-lg shadow-lg bg-white"></div>
            <div className="h-40 w-40 rounded-lg shadow-lg bg-white"></div>
            <div className="h-40 w-40 rounded-lg shadow-lg bg-white"></div>
            <div className="h-40 w-40 rounded-lg shadow-lg bg-white"></div>
            <div className="h-40 w-40 rounded-lg shadow-lg bg-white"></div>
            <div className="h-40 w-40 rounded-lg shadow-lg bg-white"></div>
            <div className="h-40 w-40 rounded-lg shadow-lg bg-white"></div>
            <div className="h-40 w-40 rounded-lg shadow-lg bg-white"></div>
          </div>


          <div className="flex w-full space-x-4 px-4 pb-4">
            <div className="h-120 w-120 rounded-lg shadow-lg bg-white"></div>
            <div className="h-120 w-full rounded-lg shadow-lg bg-white"></div>
          </div>

          <div className="flex w-full space-x-4 px-4 pb-4">
            <div className="h-120 w-120 rounded-lg shadow-lg bg-white"></div>
            <div className="h-120 w-120 rounded-lg shadow-lg bg-white"></div>
            <div className="h-120 w-120 rounded-lg shadow-lg bg-white"></div>
            <div className="h-120 w-120 rounded-lg shadow-lg bg-white"></div>
          </div>
          <div className="flex w-full space-x-4 px-4 py-4">
            <div className="h-40 w-40 rounded-lg shadow-lg bg-white"></div>
            <div className="h-40 w-40 rounded-lg shadow-lg bg-white"></div>
            <div className="h-40 w-40 rounded-lg shadow-lg bg-white"></div>
            <div className="h-40 w-40 rounded-lg shadow-lg bg-white"></div>
            <div className="h-40 w-40 rounded-lg shadow-lg bg-white"></div>
            <div className="h-40 w-40 rounded-lg shadow-lg bg-white"></div>
            <div className="h-40 w-40 rounded-lg shadow-lg bg-white"></div>
            <div className="h-40 w-40 rounded-lg shadow-lg bg-white"></div>
            <div className="h-40 w-40 rounded-lg shadow-lg bg-white"></div>
            <div className="h-40 w-40 rounded-lg shadow-lg bg-white"></div>
            <div className="h-40 w-40 rounded-lg shadow-lg bg-white"></div>
          </div>

          <div className="flex w-full space-x-4 px-4 py-4">
            <div className="h-100 w-100 rounded-lg shadow-lg flex flex-wrap justify-center space-x-4 items-center">
              <div className="h-40 w-40 rounded-lg shadow-lg bg-white"></div>
              <div className="h-40 w-40 rounded-lg shadow-lg bg-white"></div>
              <div className="h-40 w-40 rounded-lg shadow-lg bg-white"></div>
              <div className="h-40 w-40 rounded-lg shadow-lg bg-white"></div>

            </div>

          </div>


      </main>


    </div>
  )
}

export default Home
