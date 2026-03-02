import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { CONTACT_INFO } from '../constants';

export default function WhatsAppButton() {
  // Format phone number for WhatsApp API (remove leading 0, add 44)
  const formattedPhone = CONTACT_INFO.phone.replace(/^0/, '44').replace(/\s/g, '');
  const whatsappUrl = `https://wa.me/${formattedPhone}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow flex items-center gap-2 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} fill="white" className="text-white" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-in-out whitespace-nowrap font-medium">
        Ask anything
      </span>
    </motion.a>
  );
}
