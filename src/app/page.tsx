import Home from '@/app/module/home/home';
import Footer from '@/app/module/shared/Footer';
import Navbar from '@/app/module/shared/Navbar';

export default function HomePage() {
  return (
    <div className=''>
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}
