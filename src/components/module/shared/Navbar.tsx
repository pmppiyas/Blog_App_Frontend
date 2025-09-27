"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "../../../../public/icon/logo";

export default function Navbar() {
  const pathName = usePathname();
  const session = useSession();

  const navigationLinks = [
    { href: "/", label: "Home" },
    ...(session.status === "authenticated"
      ? [{ href: "/dashboard", label: "Dashboard" }]
      : []),
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
    { href: "/about", label: "About Us" },
  ];

  return (
    <header className="border-b px-4 md:px-6">
      <div className="flex h-16 items-center justify-between gap-4">
        {/* Left side */}
        <div className="flex items-center gap-2">
          {/* Mobile menu trigger */}
          <Popover>
            <PopoverTrigger asChild>
              <Button className="group size-8 md:hidden" variant="ghost" size="icon">
                <svg
                  className="pointer-events-none"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4 12L20 12" />
                  <path d="M4 12H20" />
                  <path d="M4 12H20" />
                </svg>
              </Button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-36 p-1 md:hidden">
              <NavigationMenu className="max-w-none *:w-full">
                <NavigationMenuList className="flex-col items-start gap-0 md:gap-2">
                  {navigationLinks.map((link, index) => {
                    const isActive = pathName === link.href;
                    return (
                      <NavigationMenuItem key={index} className="w-full">
                        <Link href={link.href}>
                          <Button variant={isActive ? "secondary" : "ghost"} size="sm" className="w-full">
                            {link.label}
                          </Button>
                        </Link>
                      </NavigationMenuItem>
                    );
                  })}
                </NavigationMenuList>
              </NavigationMenu>
            </PopoverContent>
          </Popover>

          {/* Logo */}
          <div className="flex items-center gap-6">
            <Link href="/" className="text-primary hover:text-primary/90">
              <Logo />
            </Link>
          </div>
        </div>

        {/* Right side */}
        <div className="flex gap-6 items-center">
          {/* Desktop Navigation */}
          <NavigationMenu className="max-md:hidden">
            <NavigationMenuList className="gap-2">
              {navigationLinks.map((link, index) => {
                const isActive = pathName === link.href;
                return (
                  <NavigationMenuItem key={index}>
                    <Link href={link.href}>
                      <Button variant={isActive ? "secondary" : "ghost"} size="sm">
                        {link.label}
                      </Button>
                    </Link>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Search Input */}
          <Input placeholder="Search..." className="max-w-[160px]" />

          {/* Auth Buttons */}
          {session.status === "authenticated" ? (
            <h2 className="text-sm">Welcome, {session.data?.user?.name}</h2>
          ) : (
            <div className="flex items-center gap-2">
              <Link href="/login">
                <Button variant="ghost" size="sm" className="text-sm">Sign In</Button>
              </Link>
              <Link href="/register">
                <Button size="sm" className="text-sm">Sign Up</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}