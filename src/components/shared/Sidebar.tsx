"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, PlusCircle, LogOut, Menu, User2Icon } from "lucide-react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Toggle Button */}
      <Button
        variant="outline"
        className="fixed top-4 left-4 z-50 md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu className="h-5 w-5" />
      </Button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 h-screen w-64 flex-col border-r bg-foreground text-background transition-transform duration-300 flex justify-between ${isOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 md:static md:flex`}
      >
        {/* Top navigation */}
        <nav className="flex-1 space-y-2  pt-16 md:pt-4 p-4">
          <Link
            href="/"
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium hover:bg-background hover:text-foreground"
          >
            <Home className="h-4 w-4" />
            Home
          </Link>

          <Link
            href="/dashboard/blogs"
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium hover:bg-background hover:text-foreground"
          >
            <PlusCircle className="h-4 w-4" />
            All Blogs
          </Link>

          <Link
            href="/dashboard/create_blog"
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium hover:bg-background hover:text-foreground"
          >
            <PlusCircle className="h-4 w-4" />
            Create Blog
          </Link>

          <Link
            href="/dashboard/profile"
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium hover:bg-background hover:text-foreground"
          >
            <User2Icon className="h-4 w-4" />
            Profile
          </Link>
        </nav>

        {/* Bottom action */}
        <div className="p-4 border-t border-background/70">
          <Button
            variant="destructive"
            className="w-full justify-start gap-2 cursor-pointer"
            onClick={() => {
              console.log("Logout clicked");
            }}
          >
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </div>
      </aside>
    </>
  );
}