
import React, { useState } from 'react';
import { Home, User, Briefcase, ShieldCheck, Menu, X, Instagram, Linkedin, MessageCircle, ArrowRight, Video, Info } from 'lucide-react';
import HomePage from './pages/Home';
import ClinicaPage from './pages/Clinica';
import RHPage from './pages/RH';
import SaudeMentalPage from './pages/SaudeMental';
import QuemSouPage from './pages/QuemSou';

type Page = 'home' | 'rh' | 'saudemental' | 'clinica' | 'quemsou';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage />;
      case 'rh': return <RHPage />;
      case 'saudemental': return <SaudeMentalPage />;
      case 'clinica': return <ClinicaPage />;
      case 'quemsou': return <QuemSouPage />;
      default: return <HomePage />;
    }
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'rh', label: 'Consultoria RH', icon: Briefcase },
    { id: 'saudemental', label: 'NR1 Saúde Mental', icon: ShieldCheck },
    { id: 'clinica', label: 'Psicologia Clínica', icon: Info },
    { id: 'quemsou', label: 'Quem Sou', icon: User },
  ];

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-secondary">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-secondary/80 backdrop-blur-md border-b border-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div 
              className="flex items-center cursor-pointer group"
              onClick={() => navigateTo('home')}
            >
              <div className="relative">
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-serif text-2xl shadow-lg shadow-primary/20 group-hover:scale-105 transition-all">
                  L
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-dark rounded-full border-2 border-white"></div>
              </div>
              <div className="ml-3">
                <span className="text-xl font-serif font-bold text-dark tracking-tight block leading-none">Louisiane Aurora</span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-primary leading-none">Psicologia & Estratégia</span>
              </div>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => navigateTo(item.id as Page)}
                  className={`text-sm font-medium transition-all hover:text-primary ${
                    currentPage === item.id ? 'text-primary' : 'text-dark/60'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button className="bg-dark text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-dark/90 transition-all shadow-xl shadow-dark/10 flex items-center gap-2 group">
                Contato <MessageCircle size={16} className="group-hover:rotate-12 transition-transform" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-dark p-2 hover:bg-primary/5 rounded-lg transition-colors"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden absolute w-full bg-white border-b border-secondary shadow-2xl transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}>
          <div className="px-4 pt-4 pb-8 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => navigateTo(item.id as Page)}
                className={`flex items-center w-full px-4 py-4 rounded-xl text-left transition-all ${
                  currentPage === item.id ? 'bg-primary/10 text-primary font-bold' : 'text-dark/60 hover:bg-secondary/50'
                }`}
              >
                <item.icon size={20} className="mr-4" />
                {item.label}
              </button>
            ))}
            <div className="pt-4 px-4">
              <button className="w-full bg-dark text-white py-4 rounded-xl font-bold uppercase tracking-widest text-xs shadow-xl flex items-center justify-center gap-3">
                <MessageCircle size={18} /> WhatsApp
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        <div className="page-transition">
          {renderPage()}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-dark text-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-16">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white font-serif text-3xl">L</div>
                <div className="ml-4">
                  <h3 className="text-2xl font-serif font-bold text-white">Louisiane Aurora</h3>
                  <p className="text-xs uppercase tracking-[0.2em] font-bold text-primary">Psicologia & Estratégia RH</p>
                </div>
              </div>
              <p className="text-secondary/60 max-w-sm leading-relaxed mb-10 text-sm italic">
                Apoiando mulheres exaustas a encontrarem seu centro e organizações a estruturarem processos inteligentes, unindo a sensibilidade clínica à inteligência estratégica.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all group">
                  <Instagram size={20} className="group-hover:scale-110 transition-transform" />
                </a>
                <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all group">
                  <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
                </a>
                <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all group">
                  <MessageCircle size={20} className="group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-serif text-xl mb-8 flex items-center gap-2 text-white">
                <ArrowRight size={18} className="text-primary" /> Navegação
              </h4>
              <ul className="space-y-4 text-sm text-secondary/60">
                {navItems.map(item => (
                  <li key={item.id}>
                    <button 
                      onClick={() => navigateTo(item.id as Page)}
                      className="hover:text-primary transition-colors hover:translate-x-1 inline-block"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-xl mb-8 flex items-center gap-2 text-white">
                <ArrowRight size={18} className="text-primary" /> Especialidades
              </h4>
              <ul className="space-y-4 text-sm text-secondary/60">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5"></div>
                  <span>Terapia Cognitivo-Comportamental</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5"></div>
                  <span>Consultoria de RH Estratégico</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5"></div>
                  <span>Saúde Mental e NR1</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-widest font-bold text-secondary/30">
            <p>© 2024 Louisiane Aurora. Todos os direitos reservados.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-primary transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-primary transition-colors">Privacidade</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;