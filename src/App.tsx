import { useState } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import Services from '@/pages/Services';
import Partners from '@/pages/Partners';
import Contacts from '@/pages/Contacts';

type Page = 'home' | 'services' | 'partners' | 'contacts';

export default function App() {
  const [activePage, setActivePage] = useState<Page>('home');

  const handleNavigate = (page: string) => {
    setActivePage(page as Page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'services':
        return <Services onNavigate={handleNavigate} />;
      case 'partners':
        return <Partners onNavigate={handleNavigate} />;
      case 'contacts':
        return <Contacts />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <TooltipProvider>
      <Toaster />
      <div className="min-h-screen flex flex-col">
        <Navbar activePage={activePage} onNavigate={handleNavigate} />
        <main className="flex-1">
          {renderPage()}
        </main>
        <Footer onNavigate={handleNavigate} />
      </div>
    </TooltipProvider>
  );
}
