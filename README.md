🛒 GreenStyle – Site E-commerce Éco-responsable (MERN Stack)
1. Contexte et Présentation

GreenStyle est un projet de site e-commerce dédié à la vente de vêtements et accessoires éco-responsables (coton bio, matériaux recyclés, productions locales...).
L’objectif est d’offrir aux utilisateurs une expérience fluide, moderne et éthique pour découvrir, acheter et gérer leurs achats de mode durable.
La plateforme proposera un catalogue de produits, un panier, un système de paiement, ainsi qu’un espace administrateur pour la gestion de la boutique.

2. Objectifs du Projet

Promouvoir une consommation éthique et durable dans l’industrie de la mode

Offrir une expérience utilisateur intuitive pour la recherche, l’achat et le suivi de commandes

Fournir un back-office complet pour les administrateurs (gestion des produits, utilisateurs, commandes)

Déployer un site e-commerce moderne basé sur la stack MERN (MongoDB, Express, React, Node.js)

📁 Arborescence du projet
greenstyle/
│
├── backend/                        
│   ├── config/                    # Configurations (BD, JWT, etc.)
│   ├── controllers/               # Logique métier (produits, utilisateurs, commandes)
│   ├── middleware/                # Middlewares (auth, erreurs, etc.)
│   ├── models/                    # Schémas MongoDB (User, Product, Order, etc.)
│   ├── routes/                    # Routes API (produits, auth, commandes, etc.)
│   ├── utils/                     # Fonctions utilitaires (paiement, email, etc.)
│   ├── .env                       # Variables d’environnement
│   ├── server.js                  # Point d’entrée serveur
│   └── package.json               # Dépendances backend
│
├── frontend/                      
│   ├── public/                    
│   ├── src/
│   │   ├── assets/                # Images, logos, icônes
│   │   ├── components/            # Composants React (UI, produits, panier)
│   │   ├── contexts/              # Contexte (auth, panier)
│   │   ├── hooks/                 # Hooks personnalisés
│   │   ├── pages/                 # Pages principales (Home, Product, Cart, etc.)
│   │   ├── services/              # Appels API via Axios
│   │   ├── styles/                # CSS/SCSS
│   │   ├── App.js                 # Composant racine
│   │   └── routes.js              # Routing React
│   ├── .env                       
│   └── package.json               
│
├── README.md                      
└── .gitignore                     

3. Description Fonctionnelle Détaillée
3.1. Utilisateurs & Rôles
Rôle Utilisateur	Description	Fonctionnalités clés
Visiteur	Utilisateur non connecté	Parcourir les produits, recherche, voir les détails
Client	Utilisateur inscrit	Passer commande, gérer panier, voir historique
Administrateur	Gestionnaire du site	CRUD produits, gestion des commandes, utilisateurs
3.2. Fonctionnalités Détaillées
a) Page d’accueil

Mise en avant des produits populaires, nouveautés

Bannière marketing

Accès rapide aux catégories

b) Catalogue Produits

Liste paginée

Filtres : catégorie, prix, matériau, taille

Tri : prix croissant/décroissant, nouveautés

c) Fiche Produit

Images haute qualité

Description, tailles disponibles, stock

Bouton "Ajouter au panier"

Suggestions produits similaires

d) Panier & Paiement

Panier dynamique

Modification des quantités

Validation de commande

Paiement simulé (ou Stripe/PayPal en option)

e) Espace Client

Historique des commandes

Suivi des livraisons

Modification des informations personnelles

f) Back-office Admin

Interface sécurisée

CRUD produits

Gestion des commandes

Gestion des utilisateurs

Statistiques de vente (optionnel)

4. Contraintes Techniques et Fonctionnelles

Technologies : MERN (MongoDB, Express, React, Node.js)

Responsive design : mobile / tablette / desktop

Performance : Chargement rapide des pages (< 3s)

Sécurité :

Authentification avec JWT

Hashage des mots de passe avec bcrypt

Validation des entrées

Protection XSS/CSRF

Accessibilité : conforme aux normes WCAG (niveau AA recommandé)

5. Sécurité

Chiffrement des mots de passe (bcrypt)

Sessions sécurisées avec JWT

Validation des formulaires

Protection contre les attaques courantes (XSS, CSRF, NoSQL injection)

Sauvegarde régulière de la base

6. Indicateurs de Performance
Indicateur	Objectif
Temps de chargement	< 3s
Disponibilité	> 99.5%
Erreurs critiques	< 1%
Taux de conversion (visite → achat)	> 5%
7. Maintenance & Évolutivité

Code structuré, modulaire, documenté

Architecture facilement extensible (nouveaux modules, API tierces)

Possibilité d’ajouter : messagerie client/admin, alertes stock, avis produits, notifications par mail

8. Planning Prévisionnel
Étape	Description	Durée estimée
Spécifications	Définir les besoins	3 jours
Design UI/UX	Maquettes (Figma ou autre)	1 semaine
Frontend	React + intégration	2 semaines
Backend	API REST avec Express/MongoDB	2 semaines
Tests	QA + corrections	5 jours
Déploiement	Hosting (Render, Vercel, etc.)	2 jours
Support	Docs + formation admin	2 jours
9. Livrables

Cahier des charges

Maquettes graphiques

Code source MERN (front + back)

Site déployé

Documentation technique et utilisateur

Rapport final de projet


📌 Technologies utilisées

React.js + React Router + Context API

Node.js / Express

MongoDB + Mongoose

JWT / Bcrypt / Dotenv

Axios / Postman

CSS Modules ou Tailwind CSS (au choix)