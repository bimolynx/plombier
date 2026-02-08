BIMOLYNX
bimolynx
En partage d'écran

BIMOLYNX
 a changé le nom du groupe : 2k26. Modifier le groupe — 22/01/2026 19:52
BIMOLYNX
 a changé l'icône du groupe. Modifier le groupe — 22/01/2026 19:52
BIMOLYNX — 22/01/2026 19:52
j'ai pris le devant et je creer aussi un groupe ici pour ce soir
gwadaseys — 22/01/2026 21:21
Les gars je crois pas avoir prévu assez large j'ai toujours pas commencé a gry
Je risque de pas être dispo avant 22h30 là sorry
Chems — 22/01/2026 21:41
profite de la miff mon reuf
BIMOLYNX — 22/01/2026 21:54
oue trkl
meme moi je serais la dans ces eaux la (jsuis antillais hein)
BIMOLYNX — 22/01/2026 22:31
j'suis la
Chems — 22/01/2026 22:33
la
gwadaseys — 22/01/2026 22:34
la
gwadaseys
 a commencé un appel qui a duré 4 heures. — 22/01/2026 22:34
BIMOLYNX — 22/01/2026 23:23
com
https://www.youtube.com/watch?v=7KfAKLxPUbg
YouTube
Louis Key
7 Mini-Business qui vont exploser en 2026
Image
BIMOLYNX — 22/01/2026 23:32
https://www.youtube.com/watch?v=6VASoDJqjF8
YouTube
Thomas Tavola
J’ai créé une app mobile sans coder (et je te dis combien ça r...
Image
Tu as manqué un appel de 
gwadaseys
 qui a duré quelques secondes. — 27/01/2026 22:03
BIMOLYNX
 a commencé un appel qui a duré 2 heures. — 03/02/2026 22:55
BIMOLYNX — 03/02/2026 23:47
marvyn.consulting@gmail.com
BIMOLYNX
 a commencé un appel. — 22:09
BIMOLYNX — 22:18
Image
gwadaseys — 22:35
import React from 'react';
import { ShieldCheck, Clock, FileText, ThumbsUp } from 'lucide-react';
import { Service, Review, Achievement } from './types';

export const ARTISAN_INFO = {
  name: "Bg2m Plomberie",

message.txt
5 Ko
﻿
import React from 'react';
import { ShieldCheck, Clock, FileText, ThumbsUp } from 'lucide-react';
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
  { icon: <ShieldCheck className="w-6 h-6 text-white" />, label: "Artisan local de confiance" },
  { icon: <FileText className="w-6 h-6 text-white" />, label: "Devis gratuit & Transparent" },
  { icon: <Clock className="w-6 h-6 text-white" />, label: "Intervention rapide 24h/24" },
  { icon: <ThumbsUp className="w-6 h-6 text-white" />, label: "Travail soigné & Garanti" }
];

export const SERVICES: Service[] = [
  {
    id: 'depannage',
    title: 'Dépannage plomberie',
    description: 'Intervention d\'urgence 24h/24 pour tous vos problèmes de robinetterie, sanitaires bouchés ou fuites soudaines. Nous intervenons rapidement avec tout le matériel nécessaire pour sécuriser vos installations.',
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
