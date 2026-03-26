import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  Anchor,
  Droplets,
  Globe,
  Package,
  Phone,
  Ship,
  Menu,
  X,
  ArrowRight,
  CheckCircle2,
  Fish,
  Waves
} from 'lucide-react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-ocean-500 selection:text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-ocean-950/95 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Waves className="h-8 w-8 text-ocean-400" />
              <span className="text-2xl font-serif font-bold text-white tracking-tight">AquaTrade<span className="text-ocean-400">Global</span></span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-slate-200 hover:text-white transition-colors text-sm font-medium uppercase tracking-wider">About</a>
              <a href="#services" className="text-slate-200 hover:text-white transition-colors text-sm font-medium uppercase tracking-wider">Services</a>
              <a href="#products" className="text-slate-200 hover:text-white transition-colors text-sm font-medium uppercase tracking-wider">Products</a>
              <a href="#contact" className="bg-ocean-500 hover:bg-ocean-400 text-white px-6 py-2.5 rounded-full transition-all font-medium text-sm tracking-wide shadow-[0_0_15px_rgba(14,165,233,0.3)]">
                Get a Quote
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-ocean-950 border-t border-ocean-800 shadow-xl">
            <div className="px-4 pt-2 pb-6 space-y-1 flex flex-col">
              <a href="#about" className="text-slate-200 hover:text-white hover:bg-ocean-900 block px-3 py-4 rounded-md text-base font-medium" onClick={() => setMobileMenuOpen(false)}>About</a>
              <a href="#services" className="text-slate-200 hover:text-white hover:bg-ocean-900 block px-3 py-4 rounded-md text-base font-medium" onClick={() => setMobileMenuOpen(false)}>Services</a>
              <a href="#products" className="text-slate-200 hover:text-white hover:bg-ocean-900 block px-3 py-4 rounded-md text-base font-medium" onClick={() => setMobileMenuOpen(false)}>Products</a>
              <a href="#contact" className="bg-ocean-500 text-white block px-3 py-4 rounded-md text-base font-medium text-center mt-4" onClick={() => setMobileMenuOpen(false)}>Get a Quote</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/aq.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-ocean-950/90 via-ocean-900/70 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ocean-500/20 border border-ocean-400/30 text-ocean-200 text-xs font-semibold uppercase tracking-widest mb-6 backdrop-blur-sm">
              <Globe className="w-3 h-3" /> Global Import & Export
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-[1.1] mb-6">
              Mastering the Art of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-ocean-300 to-teal-200">Aquatic Environments</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl font-light leading-relaxed">
              We design, manufacture, and export world-class custom aquariums, alongside ethically sourced exotic marine and freshwater livestock.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#services" className="bg-ocean-500 hover:bg-ocean-400 text-white px-8 py-4 rounded-full transition-all font-medium text-center flex items-center justify-center gap-2 group">
                Explore Our Services
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full transition-all font-medium text-center">
                Contact Sales
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats/Trust Bar */}
      <section className="bg-ocean-950 border-y border-ocean-800 py-12 relative z-20 -mt-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-ocean-800/50">
            <motion.div {...fadeIn} transition={{ delay: 0.1 }}>
              <div className="text-4xl font-serif font-bold text-white mb-2">25+</div>
              <div className="text-ocean-300 text-sm uppercase tracking-wider font-medium">Years Experience</div>
            </motion.div>
            <motion.div {...fadeIn} transition={{ delay: 0.2 }}>
              <div className="text-4xl font-serif font-bold text-white mb-2">40+</div>
              <div className="text-ocean-300 text-sm uppercase tracking-wider font-medium">Countries Served</div>
            </motion.div>
            <motion.div {...fadeIn} transition={{ delay: 0.3 }}>
              <div className="text-4xl font-serif font-bold text-white mb-2">99%</div>
              <div className="text-ocean-300 text-sm uppercase tracking-wider font-medium">Live Arrival Rate</div>
            </motion.div>
            <motion.div {...fadeIn} transition={{ delay: 0.4 }}>
              <div className="text-4xl font-serif font-bold text-white mb-2">5k+</div>
              <div className="text-ocean-300 text-sm uppercase tracking-wider font-medium">Aquariums Built</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Primary Business: Aquariums */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn} className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1000&q=80"
                  alt="Custom Aquarium Manufacturing"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-ocean-900 text-white p-8 rounded-2xl shadow-2xl max-w-xs hidden md:block">
                <Anchor className="w-10 h-10 text-ocean-400 mb-4" />
                <h3 className="text-xl font-serif font-bold mb-2">Engineering Excellence</h3>
                <p className="text-sm text-ocean-100">Every tank is precision-engineered for structural integrity and optical clarity.</p>
              </div>
            </motion.div>

            <motion.div {...fadeIn}>
              <h2 className="text-sm font-bold text-ocean-600 uppercase tracking-widest mb-3">Our Core Business</h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6 leading-tight">
                Bespoke Aquarium Manufacturing
              </h3>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                At AquaTrade Global, our primary focus is the design, fabrication, and global export of premium acrylic and glass aquariums. From high-end residential displays to massive commercial installations, we deliver aquatic canvases that transform spaces.
              </p>

              <ul className="space-y-4 mb-10">
                {[
                  "Custom Acrylic & Starphire Glass Fabrication",
                  "Turnkey Filtration & Life Support Systems",
                  "Commercial Public Aquarium Installations",
                  "Global Crating & Freight Forwarding"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-ocean-500 shrink-0" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <a href="#contact" className="inline-flex items-center gap-2 text-ocean-600 font-semibold hover:text-ocean-800 transition-colors">
                Discuss your custom build <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-ocean-600 uppercase tracking-widest mb-3">Comprehensive Solutions</h2>
            <h3 className="text-4xl font-serif font-bold text-slate-900 mb-6">Beyond Manufacturing</h3>
            <p className="text-lg text-slate-600">We provide end-to-end services for the aquatic industry, ensuring your livestock and equipment arrive safely anywhere in the world.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Fish className="w-8 h-8 text-ocean-500" />,
                title: "Livestock Export/Import",
                desc: "Ethically sourced marine and freshwater fish, corals, and invertebrates. We handle all CITES documentation and health certifications."
              },
              {
                icon: <Ship className="w-8 h-8 text-ocean-500" />,
                title: "Global Logistics",
                desc: "Specialized cold-chain and live-animal freight forwarding. Our packing techniques ensure maximum survival rates during transit."
              },
              {
                icon: <Droplets className="w-8 h-8 text-ocean-500" />,
                title: "Life Support Systems",
                desc: "Design and supply of commercial-grade filtration, skimming, and water chemistry management systems for large-scale setups."
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                {...fadeIn}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 bg-ocean-50 rounded-2xl flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
                <p className="text-slate-600 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products/Livestock Bento Grid */}
      <section id="products" className="py-24 bg-ocean-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-sm font-bold text-ocean-400 uppercase tracking-widest mb-3">Our Catalog</h2>
              <h3 className="text-4xl font-serif font-bold mb-6">Premium Livestock & Systems</h3>
              <p className="text-ocean-100 text-lg">Browse our categories of export-ready aquatic life and pre-designed commercial aquarium systems.</p>
            </div>
            <button className="shrink-0 border border-ocean-700 hover:bg-ocean-800 px-6 py-3 rounded-full transition-colors font-medium text-sm">
              Download Full Catalog
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
            {/* Large Item */}
            <motion.div
              {...fadeIn}
              className="md:col-span-2 md:row-span-2 relative rounded-3xl overflow-hidden group"
            >
              <img
                src="https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=1200&q=80"
                alt="Marine Fish"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <div className="bg-ocean-500 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full inline-block mb-3">Wholesale</div>
                <h4 className="text-3xl font-serif font-bold mb-2">Exotic Marine Fish</h4>
                <p className="text-ocean-100 max-w-md">Quarantined, conditioned, and ready for global export. We source from sustainable fisheries worldwide.</p>
              </div>
            </motion.div>

            {/* Small Item 1 */}
            <motion.div
              {...fadeIn} transition={{ delay: 0.1 }}
              className="relative rounded-3xl overflow-hidden group"
            >
              <img
                src="https://images.unsplash.com/photo-1582967788606-a171c1080cb0?auto=format&fit=crop&w=600&q=80"
                alt="Corals"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h4 className="text-xl font-serif font-bold mb-1">Cultured Corals</h4>
                <p className="text-sm text-ocean-100">SPS, LPS, and Soft Corals with CITES permits.</p>
              </div>
            </motion.div>

            {/* Small Item 2 */}
            <motion.div
              {...fadeIn} transition={{ delay: 0.2 }}
              className="relative rounded-3xl overflow-hidden group bg-ocean-900 p-8 flex flex-col justify-center border border-ocean-800"
            >
              <Package className="w-12 h-12 text-ocean-400 mb-6" />
              <h4 className="text-2xl font-serif font-bold mb-3">Commercial Tanks</h4>
              <p className="text-ocean-100 mb-6">Standardized and custom acrylic holding systems for retail and wholesale facilities.</p>
              <a href="#contact" className="text-ocean-400 font-semibold flex items-center gap-2 hover:text-ocean-300 transition-colors mt-auto">
                View Specs <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div {...fadeIn}>
              <h2 className="text-sm font-bold text-ocean-600 uppercase tracking-widest mb-3">Partner With Us</h2>
              <h3 className="text-4xl font-serif font-bold text-slate-900 mb-6">Start Your Import/Export Journey</h3>
              <p className="text-lg text-slate-600 mb-10">
                Whether you need a custom 10,000-gallon public display or regular shipments of premium marine life, our team is ready to facilitate your global aquatic needs.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-ocean-50 rounded-full flex items-center justify-center shrink-0">
                    <Globe className="w-6 h-6 text-ocean-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Global Headquarters</h4>
                    <p className="text-slate-600">1200 Aquatic Way, Suite 100<br />Miami, FL 33101, USA</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-ocean-50 rounded-full flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-ocean-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Contact</h4>
                    <p className="text-slate-600">+1 (555) 019-8472<br />export@aquatradeglobal.com</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-200">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500 outline-none transition-all" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500 outline-none transition-all" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Company / Business Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500 outline-none transition-all" placeholder="Aquatic Retailers Inc." />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Inquiry Type</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500 outline-none transition-all bg-white">
                    <option>Custom Aquarium Manufacturing</option>
                    <option>Livestock Import/Export</option>
                    <option>Commercial Filtration Systems</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500 outline-none transition-all resize-none" placeholder="Tell us about your project or import needs..."></textarea>
                </div>
                <button className="w-full bg-ocean-600 hover:bg-ocean-700 text-white font-bold py-4 rounded-xl transition-colors shadow-lg shadow-ocean-600/20">
                  Submit Inquiry
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Waves className="h-6 w-6 text-ocean-500" />
                <span className="text-xl font-serif font-bold text-white tracking-tight">AquaTrade<span className="text-ocean-500">Global</span></span>
              </div>
              <p className="max-w-sm text-sm leading-relaxed">
                The premier partner for custom aquarium manufacturing and global exotic livestock logistics. Delivering aquatic excellence worldwide.
              </p>
            </div>
            <div>
              <h5 className="text-white font-bold mb-4">Services</h5>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-ocean-400 transition-colors">Aquarium Manufacturing</a></li>
                <li><a href="#" className="hover:text-ocean-400 transition-colors">Livestock Export</a></li>
                <li><a href="#" className="hover:text-ocean-400 transition-colors">Filtration Systems</a></li>
                <li><a href="#" className="hover:text-ocean-400 transition-colors">Global Logistics</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-bold mb-4">Company</h5>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-ocean-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-ocean-400 transition-colors">Sustainability</a></li>
                <li><a href="#" className="hover:text-ocean-400 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-ocean-400 transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
            <p>&copy; {new Date().getFullYear()} AquaTrade Global. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
