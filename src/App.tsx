import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, Instagram, Facebook, Twitter, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---
interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
}

const PRODUCTS: Product[] = [
  { id: 1, title: "Sac à main en cuir 'Sienna'", price: 189, category: "Sacs", image: "https://picsum.photos/seed/bag1/600/800" },
  { id: 2, title: "Montre Classique Or Rose", price: 245, category: "Montres", image: "https://picsum.photos/seed/watch1/600/800" },
  { id: 3, title: "Boucles d'oreilles 'Aura'", price: 75, category: "Bijoux", image: "https://picsum.photos/seed/jewelry1/600/800" },
  { id: 4, title: "Lunettes de soleil 'Aviateur'", price: 120, category: "Lunettes", image: "https://picsum.photos/seed/glasses1/600/800" },
  { id: 5, title: "Collier Perle de Culture", price: 110, category: "Bijoux", image: "https://picsum.photos/seed/jewelry2/600/800" },
  { id: 6, title: "Pochette de soirée Velours", price: 95, category: "Sacs", image: "https://picsum.photos/seed/bag2/600/800" },
  { id: 7, title: "Montre Chronographe Acier", price: 299, category: "Montres", image: "https://picsum.photos/seed/watch2/600/800" },
  { id: 8, title: "Lunettes 'Cat Eye' Noires", price: 135, category: "Lunettes", image: "https://picsum.photos/seed/glasses2/600/800" },
];

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-serif font-bold tracking-widest uppercase">L'Élégance</div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-12 text-sm font-medium uppercase tracking-widest">
          <a href="#" className="hover:text-gold transition-colors">Accueil</a>
          <a href="#boutique" className="hover:text-gold transition-colors">Boutique</a>
          <a href="#contact" className="hover:text-gold transition-colors">Contact</a>
        </div>

        <div className="flex items-center space-x-6">
          <button className="relative p-2 hover:text-gold transition-colors">
            <ShoppingBag size={20} />
            <span className="absolute top-0 right-0 bg-gold text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">0</span>
          </button>
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white border-t border-stone-100 shadow-xl md:hidden"
          >
            <div className="flex flex-col p-8 space-y-6 text-center text-sm font-medium uppercase tracking-widest">
              <a href="#" onClick={() => setIsOpen(false)} className="hover:text-gold">Accueil</a>
              <a href="#boutique" onClick={() => setIsOpen(false)} className="hover:text-gold">Boutique</a>
              <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-gold">Contact</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=2000" 
          alt="Hero Background" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-6">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="block text-sm uppercase tracking-[0.3em] mb-4 font-medium"
        >
          Nouvelle Collection
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-serif italic mb-8"
        >
          Accessoires qui subliment votre style
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a 
            href="#boutique" 
            className="inline-flex items-center space-x-3 bg-white text-stone-900 px-10 py-4 rounded-full text-sm font-medium uppercase tracking-widest hover:bg-gold hover:text-white transition-all duration-300 group"
          >
            <span>Découvrir</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const FeaturedCategories = () => {
  const categories = [
    { name: 'Sacs', image: 'https://picsum.photos/seed/cat-bags/800/1000' },
    { name: 'Bijoux', image: 'https://picsum.photos/seed/cat-jewelry/800/1000' },
    { name: 'Lunettes', image: 'https://picsum.photos/seed/cat-glasses/800/1000' },
    { name: 'Montres', image: 'https://picsum.photos/seed/cat-watches/800/1000' },
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-serif italic mb-4">Produits Phares</h2>
        <div className="w-20 h-px bg-gold mx-auto"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((cat, idx) => (
          <motion.div 
            key={cat.name}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="relative group cursor-pointer overflow-hidden rounded-2xl aspect-[3/4]"
          >
            <img 
              src={cat.image} 
              alt={cat.name} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-white text-2xl font-serif italic tracking-wider">{cat.name}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const ProductGrid = () => {
  return (
    <section id="boutique" className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 space-y-4 md:space-y-0">
          <div>
            <span className="text-gold text-sm uppercase tracking-widest font-semibold mb-2 block">Notre Sélection</span>
            <h2 className="text-4xl font-serif italic">La Collection Exclusive</h2>
          </div>
          <div className="flex space-x-8 text-sm font-medium uppercase tracking-widest text-stone-400">
            <button className="text-stone-900 border-b border-stone-900 pb-1">Tout</button>
            <button className="hover:text-stone-900 transition-colors pb-1">Sacs</button>
            <button className="hover:text-stone-900 transition-colors pb-1">Bijoux</button>
            <button className="hover:text-stone-900 transition-colors pb-1">Montres</button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {PRODUCTS.map((product, idx) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-beige-light mb-6">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <button className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 py-3 rounded-lg text-xs font-bold uppercase tracking-widest opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 hover:bg-gold hover:text-white">
                  Ajouter au panier
                </button>
              </div>
              <div className="text-center">
                <p className="text-[10px] uppercase tracking-widest text-gold font-bold mb-1">{product.category}</p>
                <h3 className="text-sm font-medium mb-2 group-hover:text-gold transition-colors">{product.title}</h3>
                <p className="font-serif italic text-lg">{product.price} €</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="bg-stone-900 text-white pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div className="space-y-6">
          <div className="text-2xl font-serif font-bold tracking-widest uppercase">L'Élégance</div>
          <p className="text-stone-400 text-sm leading-relaxed">
            L'Élégance est votre destination privilégiée pour des accessoires raffinés qui capturent l'essence du luxe minimaliste.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 rounded-full border border-stone-700 flex items-center justify-center hover:bg-gold hover:border-gold transition-all">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-stone-700 flex items-center justify-center hover:bg-gold hover:border-gold transition-all">
              <Facebook size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-stone-700 flex items-center justify-center hover:bg-gold hover:border-gold transition-all">
              <Twitter size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest mb-8">Navigation</h4>
          <ul className="space-y-4 text-sm text-stone-400">
            <li><a href="#" className="hover:text-gold transition-colors">Accueil</a></li>
            <li><a href="#boutique" className="hover:text-gold transition-colors">Boutique</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">À Propos</a></li>
            <li><a href="#contact" className="hover:text-gold transition-colors">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest mb-8">Service Client</h4>
          <ul className="space-y-4 text-sm text-stone-400">
            <li><a href="#" className="hover:text-gold transition-colors">Livraison & Retours</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">FAQ</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Guide des Tailles</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Mentions Légales</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest mb-8">Contact</h4>
          <ul className="space-y-4 text-sm text-stone-400">
            <li className="flex items-start space-x-3">
              <MapPin size={18} className="text-gold shrink-0" />
              <span>15 Rue de la Paix, 75002 Paris, France</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone size={18} className="text-gold shrink-0" />
              <span>+33 (0)1 23 45 67 89</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail size={18} className="text-gold shrink-0" />
              <span>contact@lelegance.fr</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-12 border-t border-stone-800 text-center text-[10px] uppercase tracking-[0.2em] text-stone-500">
        &copy; {new Date().getFullYear()} L'Élégance Accessoires. Tous droits réservés.
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedCategories />
      <ProductGrid />
      <Footer />
    </div>
  );
}
