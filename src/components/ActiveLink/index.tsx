import Link, { LinkProps } from "next/link"
import React, { PropsWithChildren, useEffect, useState } from "react"

import { useRouter } from "next/router"

type ActiveLinkProps = LinkProps & {
  className?: string
  activeClassName: string
}

const ActiveLink = ({
  children,
  activeClassName,
  className,
  ...props
}: PropsWithChildren<ActiveLinkProps>) => {
  const { asPath, isReady } = useRouter()
  const [computedClassName, setComputedClassName] = useState(className)

  useEffect(() => {
    if (isReady) {
      const linkPathname = new URL(
        (props.as || props.href) as string,
        location.href
      ).pathname

      const activePathname = new URL(asPath, location.href).pathname

      const newClassName =
        linkPathname === activePathname
          ? `${className} ${activeClassName}`.trim()
          : className

      if (newClassName !== computedClassName) {
        setComputedClassName(newClassName)
      }
    }
  }, [
    asPath,
    isReady,
    props.as,
    props.href,
    activeClassName,
    className,
    computedClassName,
  ])

  return (
    <li className={computedClassName}>
      <Link {...props}>{children}</Link>
    </li>
  )
}

export default ActiveLink
