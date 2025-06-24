## 🧠 BlagueBack – API REST de blagues | CDA 2025

Bienvenue sur le backend de l’application **Blagues Carambar & Co**, une mini API Express + Sequelize en TypeScript qui permet de :

* Ajouter, consulter, modifier et supprimer des blagues.
* Consommer des blagues aléatoires depuis une base de données ou depuis une API publique (blagues-api.fr).
* Utiliser Swagger pour tester l'API facilement.
* Être utilisée avec un front React (déposé dans le dossier `blague-front/`).

---

## 🚀 Installation locale

### 1. Cloner le repo

```bash
git clone https://github.com/votre-utilisateur/blague-back.git
cd blague-back
```

### 2. Installer les dépendances

```bash
npm install
```

### 3. Configurer la base de données

Par défaut, on utilise **SQLite**. Le fichier de base est créé automatiquement.

Tu peux modifier la configuration dans :

```
/src/config/database.ts
```

### 4. (Facultatif) Ajouter un `.env`

Si tu veux utiliser des **tokens sécurisés**, crée un fichier `.env` à la racine :

```env
BLAGUES_API_TOKEN=ton_token_ici
```

> Obtiens ton token gratuit sur [https://www.blagues-api.fr](https://www.blagues-api.fr)

### 5. Lancer le projet

```bash
npx ts-node-dev src/server.ts
```

> L’API sera disponible sur : `http://localhost:3000`

---

## 📖 Documentation Swagger

Swagger est disponible ici :

```
http://localhost:3000/api-docs
```

Tu peux y :

* voir toutes les routes disponibles,
* tester les endpoints en live,
* voir les réponses types,
* essayer les méthodes `GET`, `POST`, `PUT`, `DELETE`.

---

## 📦 Structure du projet

```bash
blague-back/
├── src/
│   ├── controllers/      # Logique des actions (GET, POST...)
│   ├── models/           # Modèle Sequelize (blague.model.ts)
│   ├── routes/           # Définition des routes Express
│   ├── config/           # Fichier de config DB
│   ├── docs/             # Swagger config
│   ├── seed/             # Fichier d’exemples de blagues à injecter
│   └── server.ts         # Point d’entrée
├── package.json
└── README.md
```

---

## 🔌 Endpoints principaux

| Méthode | Route                    | Description                     |
| ------- | ------------------------ | ------------------------------- |
| GET     | `/api/v1/blagues`        | Toutes les blagues              |
| GET     | `/api/v1/blagues/random` | Une blague aléatoire depuis BDD |
| GET     | `/api/v1/blagues/:id`    | Blague par ID                   |
| POST    | `/api/v1/blagues`        | Ajouter une blague              |
| PUT     | `/api/v1/blagues/:id`    | Modifier une blague existante   |
| DELETE  | `/api/v1/blagues/:id`    | Supprimer une blague            |

---

## ✨ Bonus : Utiliser l'API publique de blagues

Nous utilisons aussi l’API gratuite [https://www.blagues-api.fr](https://www.blagues-api.fr).

Tu peux créer un compte gratuitement pour obtenir un **token personnel**, que tu peux :

* injecter dans un `.env`
* utiliser via le module npm officiel `blagues-api`

---

## 🛠 Contribuer ou modifier

* Pour ajouter des blagues → utilise Postman ou Swagger (`POST`)
* Pour modifier une blague existante → `PUT /:id`
* Pour voir ton API → Swagger
* Pour contribuer au projet → Fork et PR bienvenues 🙌

---

## 📬 Liens utiles

* 🧠 API publique : [https://www.blagues-api.fr](https://www.blagues-api.fr)
* 🖥️ Projet Front-end : [Lien vers le repo React `blague-front`](https://github.com/...)
* 💢 Swagger UI : [http://localhost:3000/api-docs](http://localhost:3000/api-docs)
* 📁 Démo du projet : (bientôt)
