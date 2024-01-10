import { Layout } from "@/components/Layout"
import "@/styles/globals.css"

import { Inter, Montserrat } from "next/font/google"

import type { AppProps } from "next/app"
import Head from "next/head"

const inter = Inter({ subsets: ["latin"] })
const montserrat = Montserrat({ subsets: ["latin"] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="description" content="Guzcode's personal website" />
        <meta
          name="keywords"
          content="Guzcode, Guzman, Juan Camilo Guzman, Guzman"
        />
        <meta name="author" content="Juan Camilo Guzman" />
        <meta name="theme-color" content="#35495E" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link href="/favicon.ico" rel="shortcut icon" />
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <style jsx global>
        {`
          :root {
            --inter-font: ${inter.style.fontFamily};
            --montserrat-font: ${montserrat.style.fontFamily};
          }
        `}
      </style>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
