import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-background">
      {/* Top Gradient */}
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="w-[40rem] h-[40rem] rounded-full blur-3xl bg-gradient-to-tr from-orange-200 dark:from-orange-800/30 to-transparent opacity-20 dark:opacity-10" />
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 pointer-events-none">
        <div className="w-[40rem] h-[40rem] rounded-full blur-3xl bg-gradient-to-bl from-orange-200 dark:from-orange-800/30 to-transparent opacity-20 dark:opacity-10" />
      </div>

      {/* Main Content */}
      <main className="relative z-10 flex items-center justify-center min-h-[calc(100vh_-_70px)] px-4">
        <section className="text-center max-w-4xl mx-auto space-y-6  h-full">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider uppercase text-orange-600 dark:text-orange-400 bg-orange-100 dark:bg-orange-900/30 rounded-full">
            Qupe Finance
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-foreground leading-tight">
            Stay Ahead in{" "}
            <span className="text-orange-500">Tech & Innovation</span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore the latest breakthroughs, startup stories, developer tools, and AI trends—all in one place. Curated for curious minds and future builders.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
            <Link href="/blog">
              <Button variant="secondary" className="w-full sm:w-auto">
                Read Top Stories
              </Button>
            </Link>
            <Link href="/subscribe">
              <Button variant="default" className="w-full sm:w-auto">
                Subscribe for Updates
              </Button>
            </Link>

          </div>
        </section>
      </main>
    </div>
  );
}