import { AppProps } from "next/app"
import Header from "../Header"

interface LayoutProps {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-[855px]">{children}</main>
    </>
  )
}
