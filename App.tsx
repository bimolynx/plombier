import React, { useState, useEffect, useRef } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Star, 
  CheckCircle2, 
  ChevronRight, 
  MessageSquare, 
  ArrowRight, 
  Menu, 
  X, 
  ShieldCheck 
} from 'lucide-react';
import { 
  ARTISAN_INFO, 
  REASSURANCE_ITEMS, 
  SERVICES, 
  REVIEWS, 
  ACHIEVEMENTS 
} from './constants';
import { Button, Input, TextArea, Select } from './components/UI';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  // Auto-scroll reviews
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReviewIndex((prev) => (prev + 1) % REVIEWS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => setFormStatus('success'), 1500);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans overflow-x-hidden">
      {/* Header / Nav */}
      <header className="sticky top-0 z-50 glass-morphism border-b border-gray-100 py-4 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('top')}>
            <div className="bg-blue-600 p-2 rounded-lg">
              <ShieldCheck className="text-white w-6 h-6" />
            </div>
            <span className="text-xl font-extrabold text-blue-900 tracking-tight">
              CYP <span className="text-blue-600 font-normal">Plomberie</span>
            </span>
          </div>
          
          <nav className="hidden md:flex gap-8 items-center font-medium">
            <button onClick={() => scrollToSection('services')} className="hover:text-blue-600 transition-colors">Services</button>
            <button onClick={() => scrollToSection('avis')} className="hover:text-blue-600 transition-colors">Avis</button>
            <button onClick={() => scrollToSection('gallerie')} className="hover:text-blue-600 transition-colors">Réalisations</button>
            <a href={ARTISAN_INFO.phoneHref} className="bg-blue-600 text-white px-5 py-2 rounded-full flex items-center gap-2 hover:bg-blue-700 transition-all">
              <Phone className="w-4 h-4" /> {ARTISAN_INFO.phone}
            </a>
          </nav>

          <button className="md:hidden text-blue-900" aria-label="Menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-b border-gray-100 p-6 flex flex-col gap-6 md:hidden shadow-xl animate-in fade-in slide-in-from-top-4">
            <button onClick={() => scrollToSection('services')} className="text-lg font-medium text-left">Nos Services</button>
            <button onClick={() => scrollToSection('avis')} className="text-lg font-medium text-left">Avis Clients</button>
            <button onClick={() => scrollToSection('devis')} className="text-lg font-medium text-blue-600 text-left">Demander un Devis</button>
            <a href={ARTISAN_INFO.phoneHref} className="w-full py-4 bg-blue-600 text-white rounded-xl text-center font-bold flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" /> Appeler le {ARTISAN_INFO.phone}
            </a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="top" className="relative min-h-[85vh] flex items-center pt-10 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?auto=format&fit=crop&q=80&w=1600" 
            alt="Artisan plombier au travail" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="max-w-2xl animate-in slide-in-from-left-8 duration-700">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white-300 text-black-700 rounded-full text-sm font-semibold mb-6 border border-white-100">
              <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
              Lundi au Samedi 8h 18h
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-blue-900 leading-tight mb-6">
              Votre plombier de confiance à <span className="text-blue-600">Annecy et alentours</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed">
              Intervention rapide, tarifs transparents et travail soigné par un artisan local passionné. Plus de 10 ans d'expérience à votre service.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a href={ARTISAN_INFO.phoneHref} className="flex-1">
                <Button fullWidth className="text-lg py-5">
                  <Phone className="w-5 h-5" /> Appeler maintenant
                </Button>
              </a>
              <Button variant="secondary" fullWidth className="text-lg py-5" onClick={() => scrollToSection('devis')}>
                Demander un devis gratuit
              </Button>
            </div>

            {/* Google Trust Badge */}
            <div className="bg-white/90 backdrop-blur-sm p-4 rounded-2xl border border-white shadow-sm flex items-center gap-4 max-w-sm">
              <div className="flex -space-x-2">
                {[1,2,3,4].map(i => (
                  <img key={i} src={`https://picsum.photos/40/40?random=${i+10}`} className="w-8 h-8 rounded-full border-2 border-white" alt="" />
                ))}
              </div>
              <div>
                <div className="flex text-yellow-400">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
                </div>
                <p className="text-xs font-bold text-gray-800">4.9/5 • avis Google vérifiés</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Reassurance Section Inspired by Image */}
      <section className="bg-[#f3f5f7] py-8 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
            {REASSURANCE_ITEMS.map((item, index) => (
              <div key={index} className="flex items-center gap-3 animate-in fade-in duration-700">
                <div className="shrink-0">
                  {item.icon}
                </div>
                <span className="font-bold text-sm md:text-base text-gray-500 tracking-wide uppercase">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-blue-900 mb-4">Nos Services de Plomberie</h2>
            <div className="h-1.5 w-20 bg-blue-600 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nous intervenons sur tous vos besoins en plomberie, de l'urgence au projet de rénovation sur-mesure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 group">
                <div className="h-56 overflow-hidden relative">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <h3 className="text-white font-bold text-xl">{service.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="avis" className="py-20 bg-blue-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 p-10 opacity-10 pointer-events-none">
          <MessageSquare size={200} />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-black mb-4">Nos clients nous font confiance</h2>
              <div className="flex items-center gap-2">
                <div className="flex text-yellow-400">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <span className="font-bold">Note de 4.9/5 sur Google</span>
              </div>
            </div>
            <a 
              href="https://www.google.com/maps/place/CYP+Plomberie/@45.5520529,5.9638032,8z/data=!4m17!1m8!3m7!1s0x27271009c3a46225:0x13a97322a3a52361!2sCYP+Plomberie!8m2!3d45.5520529!4d5.9638032!10e1!16s%2Fg%2F11yv6y0kdm!3m7!1s0x27271009c3a46225:0x13a97322a3a52361!8m2!3d45.5520529!4d5.9638032!9m1!1b1!16s%2Fg%2F11yv6y0kdm?authuser=0&hl=fr&entry=ttu&g_ep=EgoyMDI2MDIwNC4wIKXMDSoASAFQAw%3D%3D" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-200 hover:text-white transition-colors underline decoration-blue-700"
            >
              Consulter tous nos avis Google <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="relative min-h-[350px]">
            {REVIEWS.map((review, index) => (
              <div 
                key={review.id}
                className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${
                  index === currentReviewIndex 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 translate-x-12 pointer-events-none'
                }`}
              >
                <div className="bg-white/10 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl">
                  {/* Star rating for each review */}
                  <div className="flex text-yellow-400 mb-6">
                    {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-5 h-5 fill-current" />)}
                  </div>
                  
                  <p className="text-xl md:text-2xl italic mb-8 leading-relaxed">
                    "{review.text}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center font-bold text-lg">
                      {review.author[0]}
                    </div>
                    <div>
                      <p className="font-bold text-lg">{review.author}</p>
                      <p className="text-blue-300 text-sm uppercase tracking-wider">{review.date} • AVIS GOOGLE VÉRIFIÉ</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-2 mt-8 justify-center">
            {REVIEWS.map((_, index) => (
              <button 
                key={index}
                aria-label={`Voir l'avis ${index + 1}`}
                onClick={() => setCurrentReviewIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentReviewIndex ? 'w-8 bg-white' : 'w-2 bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery / Achievements */}
      <section id="gallerie" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-blue-900 mb-4">Nos Travaux Réalisés</h2>
            <div className="h-1.5 w-20 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ACHIEVEMENTS.map((item) => (
              <div key={item.id} className="relative group overflow-hidden rounded-2xl h-80 shadow-lg">
                <img 
                  src={item.image} 
                  alt={item.label} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-white font-bold text-lg text-center">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-blue-900 mb-8 leading-tight">
                Pourquoi choisir <span className="text-blue-600">CYP Plomberie</span> ?
              </h2>
              
              <div className="space-y-6">
                {[
                  { title: "Proximité Géographique", desc: "Basés à Annecy, nous arrivons chez vous en un temps record." },
                  { title: "Relation Humaine", desc: "Un interlocuteur unique qui connaît vos installations et votre historique." },
                  { title: "Conseils Honnêtes", desc: "Nous ne réparons que ce qui est nécessaire, sans frais cachés." },
                  { title: "Transparence des Tarifs", desc: "Devis validé avant chaque intervention pour une sérénité totale." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1 shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-blue-900 mb-1">{item.title}</h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-blue-100">
               <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-200">
                    <Phone className="text-white w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-2">Une Urgence ?</h3>
                  <p className="text-gray-500">Appelez-nous directement pour un dépannage immédiat.</p>
               </div>
               <a href={ARTISAN_INFO.phoneHref}>
                 <Button fullWidth className="text-xl py-6 rounded-2xl">
                   {ARTISAN_INFO.phone}
                 </Button>
               </a>
               <p className="text-center mt-6 text-sm text-gray-400">
                 Intervention 6j/7 - 8h/18h
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section id="devis" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-blue-900 mb-4">Demander un Devis Gratuit</h2>
            <p className="text-gray-600">Réponse rapide – Sans engagement – Travail soigné</p>
          </div>

          {formStatus === 'success' ? (
            <div className="bg-green-50 border border-green-200 p-8 rounded-3xl text-center animate-in zoom-in">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="text-white w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-green-900 mb-2">Demande Envoyée !</h3>
              <p className="text-green-800">Merci ! Nous vous recontacterons dans les plus brefs délais pour discuter de votre projet.</p>
              <Button className="mt-6 mx-auto" variant="outline" onClick={() => setFormStatus('idle')}>Envoyer une autre demande</Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Votre Nom</label>
                  <Input placeholder="Ex: Jean Dupont" required aria-label="Votre Nom" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Ville</label>
                  <Input placeholder="Ex: Savigny-sur-Orge" required aria-label="Ville" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Téléphone</label>
                  <Input type="tel" placeholder="06 .. .. .. .." required aria-label="Téléphone" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Email (Optionnel)</label>
                  <Input type="email" placeholder="votre@email.com" aria-label="Email" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Type de prestation</label>
                <Select required aria-label="Type de prestation">
                  <option value="">Sélectionnez un service</option>
                  <option value="depannage">Dépannage d'urgence</option>
                  <option value="fuite">Recherche de fuite</option>
                  <option value="debouchage">Débouchage canalisations</option>
                  <option value="chauffe-eau">Chauffe-eau / Ballon</option>
                  <option value="renovation">Rénovation salle de bain</option>
                  <option value="autre">Autre demande</option>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Votre Message</label>
                <TextArea placeholder="Décrivez votre besoin en quelques mots..." required aria-label="Votre Message" />
              </div>

              <Button type="submit" fullWidth className="text-lg py-5" disabled={formStatus === 'sending'}>
                {formStatus === 'sending' ? 'Envoi en cours...' : 'Envoyer ma demande de devis'}
              </Button>
            </form>
          )}
        </div>
      </section>

      {/* Map & Contact Footer */}
      <footer className="bg-gray-900 text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            <div>
              <h2 className="text-3xl font-black mb-8">Contactez-nous</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Notre Adresse</h4>
                    <p className="text-gray-400">{ARTISAN_INFO.address}</p>
                    <a href={ARTISAN_INFO.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline mt-2 inline-block">
                      Ouvrir dans Google Maps
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shrink-0">
                    <Phone />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Téléphone Direct</h4>
                    <a href={ARTISAN_INFO.phoneHref} className="text-2xl font-black text-white hover:text-blue-400 transition-colors">
                      {ARTISAN_INFO.phone}
                    </a>
                    <p className="text-gray-400 mt-1">Intervention urgente</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shrink-0">
                    <Mail />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Email</h4>
                    <p className="text-gray-400">contact@bg2m-plomberie.fr</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-[400px] rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-800">
              <iframe 
                src="https://maps.app.goo.gl/YK2vnMeYytSWMSuu9" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation de CYP Plomberie à Annecy"
              ></iframe>
            </div>
          </div>

          <div className="pt-10 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="bg-blue-600 p-1.5 rounded-lg">
                <ShieldCheck className="text-white w-5 h-5" />
              </div>
              <span className="text-lg font-extrabold tracking-tight">
                CYP <span className="text-blue-600 font-normal">Plomberie</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} CYP Plomberie. Tous droits réservés. Mentions Légales.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating CTA for Mobile */}
      <div className="md:hidden fixed bottom-6 left-6 right-6 z-50 animate-in slide-in-from-bottom-8 duration-500 delay-1000">
        <a href={ARTISAN_INFO.phoneHref} className="block group">
          <div className="bg-blue-600 text-white p-4 rounded-2xl shadow-2xl flex items-center justify-between border-2 border-blue-400 group-active:scale-95 transition-all">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-2 rounded-lg">
                <Phone className="w-6 h-6 animate-bounce" />
              </div>
              <div>
                <p className="text-xs font-bold text-blue-100 uppercase tracking-widest">Urgence Plomberie</p>
                <p className="text-xl font-black">{ARTISAN_INFO.phone}</p>
              </div>
            </div>
            <ChevronRight className="w-6 h-6 opacity-50" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default App;
