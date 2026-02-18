import React from 'react';
import { ShieldCheck, Clock, FileText, ThumbsUp } from 'lucide-react';
import { Service, Review, Achievement } from './types';

export const ARTISAN_INFO = {
  name: "LC 74 Plomberie",
  phone: "06 68 58 66 22",
  phoneHref: "tel:+33668586622",
  address: "74250 Fillinges",
  locality: "Fillinges et alentours",
  googleMapsUrl: "https://www.google.com/maps/place/LC+74+plomberie/@0.0010259,0,0z/data=!4m16!1m9!3m8!1s0x478c73c865e89057:0xea747ae5921322d5!2sLC+74+plomberie!8m2!3d46.1433856!4d6.3877805!9m1!1b1!16s%2Fg%2F11j0ng_fyy!3m5!1s0x478c73c865e89057:0xea747ae5921322d5!8m2!3d46.1433856!4d6.3877805!16s%2Fg%2F11j0ng_fyy?authuser=0&hl=fr&entry=ttu&g_ep=EgoyMDI2MDIxMS4wIKXMDSoASAFQAw%3D%3D"
};

export const REASSURANCE_ITEMS = [
  { icon: <ShieldCheck className="w-6 h-6 text-lightgreen" />, label: "Artisan local de confiance" },
  { icon: <FileText className="w-6 h-6 text-lightgreen" />, label: "Devis gratuit & Transparent" },
  { icon: <Clock className="w-6 h-6 text-lightgreen" />, label: "Intervention rapide" },
  { icon: <ThumbsUp className="w-6 h-6 text-lightgreen" />, label: "Travail soigné & Garanti" }
];

export const SERVICES: Service[] = [
  {
    id: 'depannage',
    title: 'Dépannage plomberie',
    description: 'Intervention d\'urgence 8h/18H pour tous vos problèmes de robinetterie, sanitaires bouchés ou fuites soudaines. Nous intervenons rapidement avec tout le matériel nécessaire pour sécuriser vos installations.',
    image: 'https://abc-plomberie-13.fr/wp-content/uploads/2016/07/depannage-plombier-marseille.jpg'
  },
  {
    id: 'fuites',
    title: 'Recherche & Réparation de fuites',
    description: 'Expertise précise dans la détection de fuites d\'eau, qu\'elles soient visibles ou encastrées. Nous utilisons des outils de diagnostic modernes pour localiser l\'origine du sinistre sans destruction inutile.',
    image: 'https://leaderservices.be/wp-content/uploads/2023/12/fuite.jpg'
  },
  {
    id: 'debouchage',
    title: 'Débouchage canalisations',
    description: 'Élimination radicale de tous types de bouchons dans vos canalisations : éviers, toilettes ou colonnes d\'évacuation par curage ou débouchage haute pression.',
    image: 'https://www.kaerchershop-schreiber.de/images/product_images/original_images/Kaercher-2.644-492.0-Rohrreinigungsset-PC-15-03.jpg'
  },
  {
    id: 'chauffe-eau',
    title: 'Installation Chauffe-eau',
    description: 'Pose, remplacement et maintenance de votre ballon d\'eau chaude électrique ou thermodynamique. Conseils personnalisés pour optimiser votre consommation d\'eau chaude.',
    image: 'https://images.prismic.io/homeserve-chauffage-du-nord/aFv_I3fc4bHWitvx_iStock-1331805490.jpg?auto=format%2Ccompress&rect=0%2C273%2C836%2C708&w=1920&fit=max'
  },
  {
    id: 'renovation',
    title: 'Rénovation de salle de bain',
    description: 'Modernisation de votre salle de bain : douche à l\'italienne, meubles vasques, pose de WC suspendus et réfection complète de vos réseaux de plomberie.',
    image: 'https://www.lepetitplombier.fr/wp-content/uploads/2023/08/renovation-salle-de-bain.jpg'
  }
];

export const REVIEWS: Review[] = [
  {
    id: '1',
    author: 'V. Jahan',
    rating: 5,
    text: 'Sérieux et professionnel.',
    date: 'Il y a 1 semaines'
  },
  {
    id: '2',
    author: 'Rayo Bg.',
    rating: 5,
    text: 'Un plombier efficace et agréable. Ravie de son travail qui n a pas été une mince affaire avec nos problèmes d arrivée d eau et de tuyauterie, Merci à lui je le recommande fortement.',
    date: 'Il y a 1 semaine'
  },
  {
    id: '3',
    author: 'Elsa.F',
    rating: 5,
    text: 'Un plombier exceptionnel, autant humainement que professionnellement. Cyprien est intervenu au sein de notre association pour femmes victimes de violences avec une grande bienveillance, discrétion et efficacité. Le travail réalisé était impeccable et son attitude irréprochable. C’est rare de rencontrer des professionnels aussi engagés, respectueux et sensibles au contexte dans lequel ils interviennent. Un immense merci à Cyprien.',
    date: 'Il y a 1 semaine'
  },
  {
    id: '4',
    author: 'Daisy B.',
    rating: 5,
    text: "Professionnel très réactif ! Tout était parfait.",
    date: 'Il y a 1 semaine'
  },
  {
    id: '5',
    author: 'Christine.',
    rating: 5,
    text: "Nous avons fait appel à Cyprien suite à la panne de notre PAC et à la surdité du professionnel qui venait de réviser notre équipement.  Il est intervenu très rapidement et a réglé le problème aussitôt.  Très compétent, sérieux et agréable,  ce jeune homme va très vite être débordé ! Nous le recommandons vivement et le remercions pour sa gentillesse et son professionnalisme.",
    date: 'Il y a 1 semaine'
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  { 
    id: 'a1', 
    label: 'Installation neuve', 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSgujm1g5MTQmc49VUWZTvjZAWEsefFp0ODg&s' 
  },
  { 
    id: 'a2', 
    label: 'Réparation d\'urgence', 
    image: 'https://hydralia-plomberie.fr/wp-content/uploads/2024/10/Agence-M-Com-Marseille-HYDRALIA-PLOMBERIE-CHAUFFAGE-Depannage-Fuite-Carnoux-artisan-plomberie-urgence-gemenos-faire-que-1-1024x682.jpg' 
  },
  { 
    id: 'a3', 
    label: 'Rénovation plomberie', 
    image: 'https://i-mc.unimedias.fr/2023/06/23/m61-avant-apres-salle-de-bain-1.jpg?auto=format%2Ccompress&crop=faces&cs=tinysrgb&fit=max&ixlib=php-4.1.0&w=1050' 
  }
];
