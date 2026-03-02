import { useState, useEffect } from 'react';
import { Menu, X, Scissors } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { NAV_LINKS, CONTACT_INFO } from '../constants';
import ConsultationModal from './ConsultationModal';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed w-full z-40 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <a href="#" className="flex items-center gap-2 group">
                <div className="bg-brand-500 text-white p-2 rounded-full transition-transform group-hover:scale-110 shadow-md">
                  <Scissors size={20} />
                </div>
                <span className={`font-serif text-2xl font-medium tracking-wide ${scrolled ? 'text-stone-900' : 'text-stone-900 lg:text-white'}`}>
                  {CONTACT_INFO.name}
                </span>
              </a>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm uppercase tracking-widest font-medium hover:text-brand-500 transition-colors ${scrolled ? 'text-stone-900' : 'text-white'}`}
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={() => setIsModalOpen(true)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all cursor-pointer shadow-sm hover:shadow-md ${
                  scrolled 
                    ? 'bg-brand-500 text-white hover:bg-brand-600' 
                    : 'bg-white text-stone-900 hover:bg-brand-50'
                }`}
              >
                Book Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 rounded-md ${scrolled ? 'text-stone-900' : 'text-stone-900 lg:text-white'}`}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-stone-100"
            >
              <div className="px-4 pt-2 pb-8 space-y-1">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-4 text-base font-medium text-stone-900 hover:bg-stone-50 border-b border-stone-100"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="pt-4 px-3">
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      setIsModalOpen(true);
                    }}
                    className="block w-full text-center bg-brand-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-brand-600 cursor-pointer shadow-md"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      
      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
