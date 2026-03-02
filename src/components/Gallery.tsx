import { motion } from 'motion/react';

const IMAGES = [
  "https://images.pexels.com/photos/14615064/pexels-photo-14615064.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/32894759/pexels-photo-32894759.jpeg?auto=compress&cs=tinysrgb&w=800"
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-stone-50 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-stone-500 uppercase tracking-widest text-sm font-medium">Portfolio</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-serif text-stone-900">Recent Work</h2>
          <div className="w-24 h-[1px] bg-stone-300 mx-auto mt-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {IMAGES.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg group"
            >
              <img 
                src={src} 
                alt={`Hair styling portfolio result ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
