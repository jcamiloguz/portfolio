import { AppProps } from "next/app"
import Header from "../Header"

interface LayoutProps {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main className="mx-auto w-[90%] max-w-[855px] pt-5">{children}</main>
    </>
  )
}
