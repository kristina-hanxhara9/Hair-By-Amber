import { Phone, MapPin, Facebook, Mail, Clock } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import { motion } from 'motion/react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-stone-900 text-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-stone-400 uppercase tracking-widest text-sm font-medium">Get in Touch</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-serif text-white mb-8">Book Your Appointment</h2>
            <p className="text-stone-400 text-lg mb-12 max-w-md">
              Ready for a fresh look? Contact me today to schedule your consultation or appointment.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-white/5 rounded-full border border-white/10">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-serif text-xl mb-1">Phone</h3>
                  <p className="text-stone-400 mb-2">Call or text for bookings</p>
                  <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="text-xl font-medium text-white hover:text-stone-300 transition-colors">
                    {CONTACT_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="p-4 bg-white/5 rounded-full border border-white/10">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-serif text-xl mb-1">Service Area</h3>
                  <p className="text-stone-400 mb-2">Mobile Hairdresser</p>
                  <p className="text-xl font-medium text-white">
                    Slough & Surrounding Areas
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="p-4 bg-white/5 rounded-full border border-white/10">
                  <Facebook className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-serif text-xl mb-1">Social</h3>
                  <p className="text-stone-400 mb-2">Follow for latest work</p>
                  <a 
                    href={CONTACT_INFO.facebook} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xl font-medium text-white hover:text-stone-300 transition-colors underline decoration-stone-600 underline-offset-4"
                  >
                    Visit Facebook Page
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Opening Hours / Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-stone-800 p-8 md:p-12 rounded-3xl border border-white/5"
          >
            <h3 className="text-2xl font-serif text-white mb-8 flex items-center gap-3">
              <Clock size={24} className="text-stone-400" />
              Opening Hours
            </h3>
            
            <div className="space-y-4">
              {[
                { day: "Monday", hours: "Closed" },
                { day: "Tuesday", hours: "9:00 AM - 6:00 PM" },
                { day: "Wednesday", hours: "9:00 AM - 6:00 PM" },
                { day: "Thursday", hours: "9:00 AM - 8:00 PM" },
                { day: "Friday", hours: "9:00 AM - 6:00 PM" },
                { day: "Saturday", hours: "9:00 AM - 4:00 PM" },
                { day: "Sunday", hours: "Closed" },
              ].map((schedule) => (
                <div key={schedule.day} className="flex justify-between items-center py-3 border-b border-white/5 last:border-0">
                  <span className="text-stone-300 font-medium">{schedule.day}</span>
                  <span className={`font-mono text-sm ${schedule.hours === 'Closed' ? 'text-stone-500' : 'text-white'}`}>
                    {schedule.hours}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-white/10 text-center">
              <p className="text-stone-400 text-sm">
                * Late appointments available upon request
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
