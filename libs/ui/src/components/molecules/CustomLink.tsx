'use client'
import { ForwardRefRenderFunction, forwardRef } from 'react'
import NextLink, { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'

import { ChevronRight } from 'lucide-react'
import { cn } from '../../util'

const CustomLinkComponent: ForwardRefRenderFunction<
  HTMLAnchorElement,
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> &
    LinkProps
> = ({ children, href, className, ...props }, ref) => {
  const pathname = usePathname()
  const active = pathname === href

  return (
    <NextLink
      href={href}
      ref={ref}
      className={cn(
        active ? 'font-semibold text-primary' : '',
        'flex gap-1 transition-all relative',
        className,
      )}
      {...props}
    >
      {active ? <ChevronRight className="absolute right-full" /> : null}{' '}
      {children}
    </NextLink>
  )
}

export const Link = forwardRef(CustomLinkComponent)
