import Footer from '@/module/shared/Footer'
import Navbar from '@/module/shared/Navbar'


export default function CommeonLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto h-[calc(100vh_-_70px)] p-4">
        {children}
      </div>
      <Footer />
    </div>
  )
}
