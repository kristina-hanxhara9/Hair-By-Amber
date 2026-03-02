import { useState } from 'react';
import type { FormEvent, ChangeEvent } from 'react';
import { X, Calendar, Clock, User, Phone, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PRICING_CATEGORIES } from '../constants';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    notes: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to a backend.
    // Here we'll simulate a success state.
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
      setFormData({ name: '', phone: '', service: '', date: '', notes: '' });
    }, 3000);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden pointer-events-auto">
              {/* Header */}
              <div className="bg-stone-900 text-white p-6 flex justify-between items-center">
                <div>
                  <h3 className="font-serif text-2xl">Book a Consultation</h3>
                  <p className="text-stone-400 text-sm mt-1">Let's discuss your perfect look</p>
                </div>
                <button 
                  onClick={onClose}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Body */}
              <div className="p-6 md:p-8">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h4 className="text-2xl font-serif text-stone-900 mb-2">Request Sent!</h4>
                    <p className="text-stone-600">
                      Thank you, {formData.name}. I'll be in touch shortly to confirm your consultation.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-1">Full Name</label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" size={18} />
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:ring-2 focus:ring-stone-900 focus:border-transparent outline-none transition-all"
                          placeholder="Jane Doe"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-1">Phone Number</label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" size={18} />
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:ring-2 focus:ring-stone-900 focus:border-transparent outline-none transition-all"
                          placeholder="07XXX XXXXXX"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-stone-700 mb-1">Service Interest</label>
                        <div className="relative">
                          <select
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            className="w-full pl-3 pr-8 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:ring-2 focus:ring-stone-900 focus:border-transparent outline-none transition-all appearance-none"
                          >
                            <option value="">Select a service...</option>
                            {PRICING_CATEGORIES.flatMap(cat => cat.items).map(item => (
                              <option key={item.name} value={item.name}>{item.name}</option>
                            ))}
                            <option value="Other">Other / Not Sure</option>
                          </select>
                          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                            <svg className="w-4 h-4 text-stone-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-stone-700 mb-1">Preferred Date</label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" size={18} />
                          <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            className="w-full pl-10 pr-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:ring-2 focus:ring-stone-900 focus:border-transparent outline-none transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-1">Additional Notes</label>
                      <div className="relative">
                        <MessageSquare className="absolute left-3 top-3 text-stone-400" size={18} />
                        <textarea
                          name="notes"
                          rows={3}
                          value={formData.notes}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:ring-2 focus:ring-stone-900 focus:border-transparent outline-none transition-all resize-none"
                          placeholder="Any specific requirements or questions?"
                        ></textarea>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-stone-900 text-white py-4 rounded-lg font-medium hover:bg-stone-800 transition-colors mt-2"
                    >
                      Request Consultation
                    </button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
