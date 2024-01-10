import { AppProps } from "next/app"
import Header from "../Header"
import Head from "next/head"

interface LayoutProps {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Guzcode</title>
      </Head>
      <Header />
      <main className="mx-auto w-[90%] max-w-[855px] pt-5">{children}</main>
    </>
  )
}
