import ActiveLink from "../ActiveLink"
import Link from "next/link"
import MainIcon from "@/assets/icons/MainIcon"
import React from "react"

const Header = () => {
  return (
    <header className="mx-auto mt-[14px] flex h-[70px] w-[90%] max-w-[854px] items-center justify-between md:mt-[70px]">
      <div className="flex items-center justify-center">
        <Link href="/">
          <MainIcon />
        </Link>
      </div>
      <nav>
        <ul className="flex gap-12">
          <ActiveLink
            href="/blog"
            className="border-b-2 border-b-transparent text-lg font-bold text-light transition-all hover:border-pink md:text-2xl"
            activeClassName="!border-pink"
          >
            Blog
          </ActiveLink>
          <ActiveLink
            href="/contact"
            className="border-b-2 border-b-transparent text-lg font-bold text-light transition-all hover:border-pink md:text-2xl"
            activeClassName="!border-pink"
          >
            Contact
          </ActiveLink>
        </ul>
      </nav>
    </header>
  )
}

export default Header
