import React from 'react';
import { ShieldCheck, Clock, FileText, ThumbsUp, CheckCircle2, Shield, Wrench } from 'lucide-react';
import { Service, Review, Achievement } from './types';

export const ARTISAN_INFO = {
  name: "Bg2m Plomberie",
  phone: "06 34 17 10 45",
  phoneHref: "tel:+33634171045",
  address: "11 bis rue des Marguerites, 91600 Savigny-sur-Orge",
  locality: "Savigny-sur-Orge",
  googleMapsUrl: "https://www.google.com/maps/search/11+bis+rue+des+Marguerites,+91600+Savigny-sur-Orge"
};

export const REASSURANCE_ITEMS = [
  { icon: <CheckCircle2 className="w-5 h-5 text-emerald-500" />, label: "DEVIS GRATUIT" },
  { icon: <Shield className="w-5 h-5 text-emerald-500" />, label: "ASSURANCE DÉCENNALE" },
  { icon: <Wrench className="w-5 h-5 text-emerald-500" />, label: "MATÉRIEL PRO" },
  { icon: <Clock className="w-5 h-5 text-emerald-500" />, label: "15 ANS D'EXPÉRIENCE" }
];

export const SERVICES: Service[] = [
  {
    id: 'depannage',
    title: 'Dépannage plomberie',
    description: 'Intervention d\'urgence 24h/24 pour tous vos problèmes de robinetterie, sanitaires bouchés ou fuites soudaines. Nous intervenons rapidement avec tout le matériel nécessaire pour sécuriser vos installations.',
    image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'fuites',
    title: 'Recherche & Réparation de fuites',
    description: 'Expertise précise dans la détection de fuites d\'eau, qu\'elles soient visibles ou encastrées. Nous utilisons des outils de diagnostic modernes pour localiser l\'origine du sinistre sans destruction inutile.',
    image: 'https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'debouchage',
    title: 'Débouchage canalisations',
    description: 'Élimination radicale de tous types de bouchons dans vos canalisations : éviers, toilettes ou colonnes d\'évacuation par curage ou débouchage haute pression.',
    image: 'https://images.unsplash.com/photo-1585704032915-c3400ca1f965?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'chauffe-eau',
    title: 'Installation Chauffe-eau',
    description: 'Pose, remplacement et maintenance de votre ballon d\'eau chaude électrique ou thermodynamique. Conseils personnalisés pour optimiser votre consommation d\'eau chaude.',
    image: 'https://images.unsplash.com/photo-1620627459825-023a97b0d4b8?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'renovation',
    title: 'Rénovation de salle de bain',
    description: 'Modernisation de votre salle de bain : douche à l\'italienne, meubles vasques, pose de WC suspendus et réfection complète de vos réseaux de plomberie.',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80&w=800'
  }
];

export const REVIEWS: Review[] = [
  {
    id: '1',
    author: 'M. Lefebvre',
    rating: 5,
    text: 'Intervention très rapide pour une fuite importante un samedi. Artisan très professionnel et honnête sur les tarifs.',
    date: 'Il y a 2 semaines'
  },
  {
    id: '2',
    author: 'Julie D.',
    rating: 5,
    text: 'Travail impeccable pour le changement de mon chauffe-eau. Chantier propre et explications claires.',
    date: 'Il y a 1 mois'
  },
  {
    id: '3',
    author: 'Thomas R.',
    rating: 5,
    text: 'Le meilleur plombier de Savigny. Sympathique, ponctuel et efficace. Je recommande sans hésiter !',
    date: 'Il y a 3 jours'
  },
  {
    id: '4',
    author: 'Marc V.',
    rating: 5,
    text: "Super réactivité ! Appelé à 22h pour une fuite d'eau, le plombier était là en 30 min. Travail impeccable et prix très correct.",
    date: 'Il y a 1 semaine'
  },
  {
    id: '5',
    author: 'Sophie L.',
    rating: 5,
    text: "Professionnel sérieux et ponctuel. Il a rénové ma salle de bain de A à Z. Le résultat dépasse mes attentes.",
    date: 'Il y a 2 mois'
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  { 
    id: 'a1', 
    label: 'Installation neuve', 
    image: 'https://images.unsplash.com/photo-1605117815763-89ae3f9399a5?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: 'a2', 
    label: 'Réparation d\'urgence', 
    image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: 'a3', 
    label: 'Rénovation plomberie', 
    image: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&q=80&w=800' 
  }
];