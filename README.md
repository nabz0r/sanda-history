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

## Déploiement sur Render

Pour déployer l'application sur Render, suivez ces étapes :

1. Créez un nouveau service "Static Site" sur Render
2. Connectez votre repository GitHub
3. Configurez les paramètres de build :
   ```
   Build Command: npm install && npm run build
   Publish Directory: build
   ```

Le fichier render.yaml est déjà configuré avec les paramètres optimaux :
```yaml
services:
  - type: web
    name: sanda-history
    env: static
    buildCommand: npm install && npm run build
    staticPublishPath: ./build
    pullRequestPreviewsEnabled: true
    envVars:
      - key: NODE_VERSION
        value: 18
      - key: CI
        value: false
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
  ├── data/
  │   └── extraction.js        # Données historiques
  ├── App.jsx                 # Point d'entrée de l'application
  ├── index.js                # Configuration React
  └── index.css              # Imports Tailwind

Configuration/
  ├── jsconfig.json          # Configuration des chemins absolus
  ├── postcss.config.js      # Configuration PostCSS
  ├── tailwind.config.js     # Configuration Tailwind
  ├── craco.config.js        # Configuration Craco
  └── render.yaml            # Configuration Render
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

Pour les problèmes avec les icônes Lucide :
1. Vérifiez que vous utilisez les bons noms d'icônes (par exemple, TestTube au lieu de Flask)
2. Consultez la documentation de lucide-react pour les noms exacts des icônes
3. Utilisez la version spécifiée dans package.json (0.263.1)

## Notes de version

- Mise à jour des icônes Lucide (Flask -> TestTube)
- Ajout de la configuration Render pour le déploiement
- Intégration des données historiques dans un fichier séparé