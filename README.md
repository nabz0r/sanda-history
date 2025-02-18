# Histoire de l'Huile de Sanda

Une application React moderne documentant l'histoire fascinante de l'huile de sanda et ses méthodes d'extraction traditionnelles.

## Installation

Suivez ces étapes pour installer et exécuter le projet localement :

1. Cloner le projet :
```bash
git clone https://github.com/nabz0r/sanda-history.git
cd sanda-history
```

2. Installer les dépendances de base :
```bash
npm install
```

3. Installer les dépendances supplémentaires pour la configuration :
```bash
npm install --save-dev @craco/craco
```

4. Lancer l'application en mode développement :
```bash
npm start
```

## Configuration supplémentaire

Si vous rencontrez des problèmes avec les imports utilisant '@/', assurez-vous que le fichier craco.config.js est présent à la racine du projet avec le contenu suivant :

```javascript
const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
};
```

## Fonctionnalités

- Navigation interactive avec défilement fluide
- Interface utilisateur moderne et responsive
- Visualisation des routes commerciales historiques
- Documentation détaillée des méthodes d'extraction

## Technologies utilisées

- React
- TailwindCSS
- Lucide Icons
- ShadcnUI
- CRACO (Create React App Configuration Override)

## Structure du projet

```
src/
  ├── components/
  │   ├── HistoireSanda.jsx    # Composant principal
  │   └── ui/                  # Composants UI réutilisables
  │       └── card.jsx         # Composant Card de shadcn/ui
  ├── styles/
  │   └── globals.css         # Styles globaux et variables Tailwind
  ├── lib/
  │   └── utils.js            # Utilitaires pour les styles
  ├── App.jsx                 # Point d'entrée de l'application
  ├── index.js                # Configuration React
  └── index.css              # Imports Tailwind

Configuration/
  ├── jsconfig.json          # Configuration des chemins absolus
  ├── postcss.config.js      # Configuration PostCSS
  ├── tailwind.config.js     # Configuration Tailwind
  └── craco.config.js        # Configuration Craco
```

## Résolution des problèmes courants

Si vous rencontrez des erreurs liées aux imports '@/', vérifiez que :
1. @craco/craco est bien installé
2. Le fichier craco.config.js est présent à la racine
3. Le fichier jsconfig.json est correctement configuré

Pour les problèmes de styles, assurez-vous que :
1. globals.css est bien importé dans App.jsx
2. postcss.config.js est présent à la racine
3. tailwind.config.js contient toutes les configurations nécessaires