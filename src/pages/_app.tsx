import "@/styles/globals.css"

import { Inter, Montserrat } from "@next/font/google"

import type { AppProps } from "next/app"

const inter = Inter({ subsets: ['latin'] })
const montserrat = Montserrat({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --inter-font: ${inter.style.fontFamily};
            --inter-font: ${montserrat.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
  )
}
