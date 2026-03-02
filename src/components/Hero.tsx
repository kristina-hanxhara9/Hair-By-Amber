import { motion } from 'motion/react';
import { CONTACT_INFO } from '../constants';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/7755528/pexels-photo-7755528.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Hair Salon Aesthetic"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-stone-200 uppercase tracking-[0.2em] text-sm md:text-base mb-4 font-medium">
            Freelance Mobile Hairdresser
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 leading-tight">
            {CONTACT_INFO.name}
          </h1>
          <p className="text-stone-200 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Professional salon experience in the comfort of your own home. 
            Covering Slough and surrounding areas.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="px-8 py-4 bg-white text-stone-900 rounded-full font-medium tracking-wide hover:bg-stone-100 transition-colors"
            >
              Book Appointment
            </a>
            <a
              href="#services"
              className="px-8 py-4 border border-white text-white rounded-full font-medium tracking-wide hover:bg-white/10 transition-colors"
            >
              View Price List
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <div className="w-[1px] h-12 bg-white/30">
            <div className="w-full h-1/2 bg-white animate-bounce" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
