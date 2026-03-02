import { CONTACT_INFO } from '../constants';
import { Scissors } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-400 py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="bg-stone-800 p-2 rounded-full">
              <Scissors size={16} className="text-white" />
            </div>
            <span className="font-serif text-xl text-white">{CONTACT_INFO.name}</span>
          </div>
          
          <div className="text-sm text-center md:text-right">
            <p>&copy; {new Date().getFullYear()} {CONTACT_INFO.name}. All rights reserved.</p>
            <p className="mt-1 text-stone-600">Designed for professional excellence.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
