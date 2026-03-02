import { PRICING_CATEGORIES } from '../constants';
import { motion } from 'motion/react';
import { Scissors, Sparkles, Wind, Star } from 'lucide-react';

interface ServicesProps {
  onOpenModal: () => void;
}

export default function Services({ onOpenModal }: ServicesProps) {
  const getCategoryIcon = (title: string) => {
    if (title.toLowerCase().includes('cut')) return Scissors;
    if (title.toLowerCase().includes('colour')) return Sparkles;
    if (title.toLowerCase().includes('style') || title.toLowerCase().includes('styling')) return Wind;
    return Star;
  };

  return (
    <section id="services" className="py-24 bg-stone-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-30">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-stone-200 blur-3xl"></div>
        <div className="absolute top-[40%] -left-[10%] w-[40%] h-[40%] rounded-full bg-stone-200 blur-3xl"></div>
        <Scissors className="absolute top-[10%] left-[5%] text-stone-200 w-24 h-24 opacity-20 rotate-45" />
        <Wind className="absolute bottom-[10%] right-[5%] text-stone-200 w-32 h-32 opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <span className="text-stone-500 uppercase tracking-widest text-xs md:text-sm font-semibold">Freelance & Mobile</span>
          <h2 className="mt-4 text-5xl md:text-6xl font-serif text-stone-900 italic">Price List</h2>
          <p className="mt-4 text-stone-500 max-w-2xl mx-auto font-light text-lg">
            Professional salon services brought to your door.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {PRICING_CATEGORIES.map((category, categoryIndex) => {
            const Icon = getCategoryIcon(category.title);
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
                className="bg-white/80 backdrop-blur-md p-6 md:p-8 rounded-3xl shadow-sm border border-white/50 hover:shadow-lg transition-all duration-500 group flex flex-col"
              >
                <div className="flex items-center gap-4 mb-6 pb-4 border-b border-stone-100">
                  <div className="p-3 bg-stone-100 rounded-full text-stone-800 group-hover:bg-stone-900 group-hover:text-white transition-colors duration-500 shrink-0">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-serif text-stone-800 italic">
                    {category.title}
                  </h3>
                </div>
                
                <ul className="space-y-4 flex-grow">
                  {category.items.map((item) => (
                    <li key={item.name} className="flex items-end justify-between gap-3">
                      <div className="flex flex-col">
                        <span className="text-stone-700 font-medium text-base">
                          {item.name}
                        </span>
                      </div>
                      
                      {/* Dotted Leader */}
                      <div className="flex-grow border-b-2 border-dotted border-stone-300/50 mb-1.5 min-w-[20px]"></div>
                      
                      <span className="text-stone-900 font-serif text-lg font-semibold whitespace-nowrap">
                        {item.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-16 max-w-3xl mx-auto">
          <div className="bg-stone-100/80 backdrop-blur-sm p-6 rounded-2xl text-center border border-stone-200/50">
            <p className="text-stone-600 font-medium text-sm md:text-base">
              <span className="font-serif italic text-lg mr-2">Note:</span> 
              Kids services must be booked in conjunction with at least 1 adult service.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <button
            onClick={onOpenModal}
            className="group relative inline-flex items-center justify-center px-10 py-4 bg-stone-900 text-white rounded-full overflow-hidden transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 cursor-pointer"
          >
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
            <span className="relative font-medium tracking-wide">Book an Appointment</span>
          </button>
        </div>
      </div>
    </section>
  );
}
