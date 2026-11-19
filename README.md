# Mon Portfolio — React 19 + Tailwind CSS

Portfolio moderne, responsive et animé, construit avec **React 19**, **Vite** et **Tailwind CSS v4**.
Déployé automatiquement sur **GitHub Pages**.

## 🚀 Lancer en local

Prérequis : [Node.js](https://nodejs.org) 20 ou plus.

```bash
npm install
npm run dev
```

Ouvre ensuite http://localhost:5173

## ✏️ Personnaliser

Tout le contenu se trouve dans **`src/data.js`** :
- `common` : nom, email, CV, liens (identiques dans les deux langues)
- `fr` / `en` : textes du portfolio en français et en anglais
- `ui` : textes de l'interface (menu, boutons…)

Les couleurs des thèmes clair et sombre se changent dans `src/index.css` (`:root` = clair, `.dark` = sombre).

Le thème et la langue suivent les réglages du visiteur, et son choix est mémorisé.

## 🌍 Mettre en ligne sur GitHub Pages

1. Crée un dépôt sur GitHub :
   - nommé **`ton-pseudo.github.io`** → le site sera sur `https://ton-pseudo.github.io`
   - ou n'importe quel nom (ex. `portfolio`) → le site sera sur `https://ton-pseudo.github.io/portfolio`
2. Dans ce dossier :
   ```bash
   git init
   git add .
   git commit -m "Premier commit"
   git branch -M main
   git remote add origin https://github.com/ton-pseudo/NOM-DU-DEPOT.git
   git push -u origin main
   ```
3. Sur GitHub : **Settings → Pages → Build and deployment → Source : « GitHub Actions »**.
4. Va dans l'onglet **Actions** : le déploiement tourne (1–2 min). Ensuite ton site est en ligne ✅

À chaque `git push`, le site se met à jour tout seul.
