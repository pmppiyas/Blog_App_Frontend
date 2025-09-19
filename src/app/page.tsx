import Home from '@/module/home/home';
import Footer from '@/module/shared/Footer';
import Navbar from '@/module/shared/Navbar';

export default function HomePage() {
  return (
    <div className=''>
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}
