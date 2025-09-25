import Footer from '@/components/module/shared/Footer';
import Navbar from '@/components/module/shared/Navbar';

export default function CommeonLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto min-h-[calc(100vh_-_70px)] p-4">
        {children}
      </div>
      <Footer />

    </div>
  )
}
