import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/6503332/pexels-photo-6503332.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Stylist working"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Secondary Image - Overlapping */}
            <div className="absolute -bottom-12 -right-12 w-2/3 aspect-square rounded-2xl overflow-hidden border-4 border-white shadow-2xl hidden md:block">
              <img
                src="https://images.pexels.com/photos/10318043/pexels-photo-10318043.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Hair detail"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-stone-100 rounded-full -z-10 hidden md:block"></div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-stone-500 uppercase tracking-widest text-sm font-medium">About The Stylist</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-serif text-stone-900 mb-8">Passion for Hair, <br/>Dedication to Style</h2>
            
            <div className="space-y-6 text-stone-600 text-lg leading-relaxed font-light">
              <p>
                Welcome to Hair by Amber. I am a freelance mobile hairdresser bringing the salon experience directly to you. I believe that your hair is your best accessory, and my mission is to help you wear it with confidence.
              </p>
              <p>
                With years of experience in the industry, I specialize in creating bespoke looks that not only follow the latest trends but are perfectly tailored to suit your individual features and lifestyle.
              </p>
              <p>
                Based in Slough and covering surrounding areas, I offer a relaxed and professional service in the comfort of your own home. Whether you're looking for a subtle refresh or a complete transformation, you're in safe hands.
              </p>
            </div>

            <div className="mt-10 pt-8 border-t border-stone-100 flex items-center gap-4">
              <div className="flex flex-col">
                <span className="font-serif text-2xl text-stone-900">Amber</span>
                <span className="text-sm text-stone-500 uppercase tracking-wider">Lead Stylist & Owner</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
