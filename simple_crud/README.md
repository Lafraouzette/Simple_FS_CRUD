# Bute : 
- ce repo est  pour creer CRUD dune seul Entite Data ; apprendre la communication backend (SpringBoot) et FrontEnd (Angular)
# Test
- teste des endpoints avec POSTMAN : 
Oui, tu peux tester cette API avec **Postman** en utilisant les requêtes suivantes :  

### 📌 **1. Récupérer toutes les données**  
- **Méthode :** `GET`  
- **URL :** `http://localhost:8080/data`  

### 📌 **2. Récupérer une donnée par ID**  
- **Méthode :** `GET`  
- **URL :** `http://localhost:8080/data/{id}`  
- **Exemple :** `http://localhost:8080/data/1`  

### 📌 **3. Ajouter une nouvelle donnée**  
- **Méthode :** `POST`  
- **URL :** `http://localhost:8080/data`  
- **Headers :** `Content-Type: application/json`  
- **Body (raw, JSON) :**  
  ```json
  {
    "name": "TestData",
    "value": "12345"
  }
  ```

### 📌 **4. Mettre à jour une donnée existante**  
- **Méthode :** `PUT`  
- **URL :** `http://localhost:8080/data/{id}`  
- **Headers :** `Content-Type: application/json`  
- **Body (raw, JSON) :**  
  ```json
  {
    "name": "UpdatedData",
    "value": "67890"
  }
  ```

### 📌 **5. Supprimer une donnée**  
- **Méthode :** `DELETE`  
- **URL :** `http://localhost:8080/data/{id}`  
- **Exemple :** `http://localhost:8080/data/1`  

# differance entre JSON et x-www-form-urlencoded
JSON (raw) → @RequestBody
x-www-form-urlencoded → @RequestParam