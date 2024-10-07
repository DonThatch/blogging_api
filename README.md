# Projet TypeScript avec Deno

## Prérequis

- Deno (version 2.0 Release Candidate [ici](https://docs.deno.com/deploy/manual/))
- MongoDB

## Installation

Clonez le dépôt :
    ```bash
    git clone <https://github.com/DonThatch/blogging_api.git>
    cd <blogging_api>
    ```

## Utilisation

1. Démarrez le serveur :
    ```bash
    deno task dev
    ```

2. Accédez à l'API via `http://localhost:<3000>`.

## Routes de l'API

### Utilisateurs

- `GET /users` : Récupère tous les utilisateurs.
- `GET /users/:id` : Récupère un utilisateur par ID (authentification requise).
- `POST /users/register` : Crée un nouvel utilisateur.
- `POST /users/login` : Connecte un utilisateur.
- `PUT /users/:id` : Met à jour un utilisateur par ID (authentification requise).
- `DELETE /users/:id` : Supprime un utilisateur par ID (authentification requise).

### Likes

- `POST /posts/:id/like` : Ajoute un like à un post.
- `POST /posts/:id/unlike` : Retire un like d'un post.

### Commentaires

- `GET /posts/:id/comments` : Récupère tous les commentaires d'un post (authentification requise).
- `POST /posts/:id/comments` : Ajoute un commentaire à un post (authentification requise).
- `PUT /comments/:id` : Met à jour un commentaire par ID (authentification requise).
- `DELETE /comments/:id` : Supprime un commentaire par ID (authentification requise).

## Modèles de données

### Utilisateur

```json
{
  "username": "string",
  "password": "string",
  "email": "string"
}
