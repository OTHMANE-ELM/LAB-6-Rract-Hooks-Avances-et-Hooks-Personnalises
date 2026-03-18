# ⚛️ TP6 — Hooks Avancés & Hooks Personnalisés React

> **TP6** du cours *Développement Front-End moderne avec React*.  
> Ce TP explore les hooks avancés de React — `useReducer`, `useRef` — et la création de **hooks personnalisés** pour encapsuler et réutiliser la logique métier.

---
-

## 🎯 Objectif pédagogique

Ce TP t'apprend à :

- ✅ Gérer un état complexe avec **`useReducer`** (pattern action/reducer)
- ✅ Manipuler le DOM directement avec **`useRef`** (focus, comptage de rendus)
- ✅ Créer des **hooks personnalisés** (`useFetch`, `useTimer`) pour réutiliser de la logique
- ✅ Comprendre quand préférer `useReducer` à `useState`
- ✅ Structurer son projet en séparant la logique des composants visuels

---

## 🧠 Concepts couverts

| Hook / Concept | Description |
|---|---|
| `useReducer` | Gérer un état complexe via un reducer (action → nouvel état) |
| `useRef` – DOM | Accéder à un élément DOM et le manipuler (ex: focus) |
| `useRef` – valeur persistante | Stocker une valeur sans déclencher de re-render |
| `useEffect` | Déclencher des effets de bord (fetch, timer, abonnements) |
| Hook personnalisé `useFetch` | Encapsuler la logique de chargement de données distantes |
| Hook personnalisé `useTimer` | Encapsuler la logique d'un chronomètre start/stop/reset |

---

## 🗂️ Étapes du TP

### Étape 1 — Préparer le projet


### Étape 2 — Créer un compteur avec `useReducer`


### Étape 3 — Utiliser `useRef` pour donner le focus à un champ texte


### Étape 4 — Compter les rendus avec `useRef`


### Étape 5 — Créer un Hook personnalisé `useFetch`



### Étape 6 — Utiliser `useFetch` pour afficher une liste



### Étape 7 — Créer un Timer (Hook personnalisé `useTimer`)



**Pourquoi `useRef` pour l'intervalle ?**  
L'identifiant retourné par `setInterval` doit persister entre les rendus pour pouvoir appeler `clearInterval`. Utiliser `useState` ne serait pas approprié car mettre à jour cet ID déclencherait un re-render inutile.

--



## 🚀 Installation & Lancement

```bash
# 1. Créer le projet
npm create vite@latest tp6-react -- --template react
cd tp6-react

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur de développement
npm run dev

# 4. Ouvrir dans le navigateur
# → http://localhost:5173
```

---

## 📁 Structure des fichiers

```
tp6-react/
├── public/
├── src/
│   ├── components/
│   │   ├── Counter.jsx          # Étape 2 – useReducer
│   │   ├── FocusInput.jsx       # Étape 3 – useRef (focus DOM)
│   │   ├── RenderCounter.jsx    # Étape 4 – useRef (comptage rendus)
│   │   ├── UserList.jsx         # Étape 6 – consommateur de useFetch
│   │   └── Timer.jsx            # Étape 7 – consommateur de useTimer
│   ├── hooks/
│   │   ├── counterReducer.js    # Étape 2 – reducer du compteur
│   │   ├── useFetch.js          # Étape 5 – hook personnalisé fetch
│   │   └── useTimer.js          # Étape 7 – hook personnalisé timer
│   ├── App.jsx                  # Composant racine
│   ├── main.jsx                 # Point d'entrée
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

---


## 🎬 Démonstration vidéo



https://github.com/user-attachments/assets/2c6d53de-ba99-42d1-97d5-407a45f64ad0



> 💬 *Ce TP fait partie du cours "Développement Front-End moderne avec React". Consulte le TP5 pour les bases de `useState`, les formulaires et le Context API.*
