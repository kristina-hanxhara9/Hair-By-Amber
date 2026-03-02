import { Scissors, Sparkles, User, Calendar, Phone, MapPin, Facebook, Instagram } from 'lucide-react';

export const CONTACT_INFO = {
  name: "Hair by Amber",
  phone: "07922 836399",
  location: "Mobile Hairdresser covering Slough & Surrounding Areas",
  facebook: "https://www.facebook.com/HairbyAmbs/",
  priceRange: "££"
};

export const PRICING_CATEGORIES = [
  {
    title: "Cutting Services",
    items: [
      { name: "Wet Cut", price: "£20" },
      { name: "Cut and Blowdry", price: "£35" },
      { name: "Kids Cut (12 and under)", price: "£20" }
    ]
  },
  {
    title: "Colour Services",
    items: [
      { name: "Root Tint", price: "£30" },
      { name: "T-Section Highlights", price: "£35" },
      { name: "Half Head Highlights", price: "£50" },
      { name: "Full Head Highlights", price: "£70" },
      { name: "Balayage", price: "£70" },
      { name: "Money Piece", price: "£15" },
      { name: "Toner", price: "£18" },
      { name: "Root Smudge", price: "£18" }
    ]
  },
  {
    title: "Styling Services",
    items: [
      { name: "Blowdry", price: "£25" },
      { name: "Pincurls (Pins Left In)", price: "£30" },
      { name: "Plaits", price: "£20" }
    ]
  }
];

export const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];
