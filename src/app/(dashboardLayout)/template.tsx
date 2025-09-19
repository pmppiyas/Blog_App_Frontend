import { Button } from '@/components/ui/button';
import Header from '@/components/ui/header'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Link from "next/link";
import { Menu } from "lucide-react";


export default function DashboardLayout({ children }: { children: React.ReactNode }) {

  const dashboardLinks = <>
    <Link href="/">
      <Button variant={'outline'}>Home</Button></Link>
    <Link href="/dashboard">
      <Button variant={'outline'}>Dashboard</Button></Link>
    <Link href="/profile">
      <Button variant={'outline'}>Profile</Button></Link>
    <Link href="/settings">
      <Button variant={'outline'}>Setting</Button></Link>
  </>


  return (
    <div>
      <aside className="hidden lg:block  border-r bg-card w-max py-12 px-10">
        <nav className="flex flex-col gap-4">
          {dashboardLinks}
        </nav>
      </aside>


      <div className="lg:hidden p-2">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-max py-12 px-10">
            <nav className="flex flex-col gap-4 ">
              {dashboardLinks}
            </nav>
          </SheetContent>
        </Sheet>
      </div>

      {/* Page Content */}
      <main className="flex-1  overflow-y-auto h-[calc(100vh_-_70px)]  p-6">
        {children}
      </main>

    </div>
  )
}
