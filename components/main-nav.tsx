"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function MainNav() {
  const pathname = usePathname()

  const routes = [
    {
      href: "/",
      label: "Home",
      active: pathname === "/",
    },
    {
      href: "/blogs",
      label: "Blogs",
      active: pathname === "/blogs" || pathname.startsWith("/blogs/"),
    },
    {
      href: "/about",
      label: "About",
      active: pathname === "/about",
    },
  ]

  return (
    <nav className="flex items-center gap-8 h-full">
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-foreground relative h-full flex items-center",
            route.active ? "text-foreground" : "text-muted-foreground"
          )}
        >
          {route.label}
          {route.active && (
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary" />
          )}
        </Link>
      ))}
    </nav>
  )
}
