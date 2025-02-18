# Guide Angular - Gestion des Formulaires et Architecture

## 📌 Angular Standalone API (Depuis Angular 14+)
1️⃣ `app.module.ts` n'est plus obligatoire grâce à l'**API Standalone**.
2️⃣ Chaque composant **standalone** doit importer lui-même ses dépendances.
3️⃣ Les dépendances globales (comme `HttpClient` ou `Router`) doivent être déclarées dans `app.config.ts`.
4️⃣ `main.ts` démarre l'application avec `bootstrapApplication(AppComponent, appConfig)`.

## 🛠 CommonModule
Le **CommonModule** met à disposition toutes les fonctionnalités Angular de base comme :
- `*ngIf` (conditions dans les templates)
- `*ngFor` (boucles sur des listes)

Il doit être intégré dans le fichier `.ts` des composants standalone pour pouvoir utiliser ces fonctionnalités.

## ⚡ Providers en Angular
Dans Angular, un **provider** est une méthode permettant de fournir une instance d'une classe ou une valeur à une ou plusieurs parties de l'application. Il permet d'injecter des dépendances au sein des services et composants.

Exemple de **provider** :
- `HttpClientProvider` : Permet de gérer les requêtes HTTP dans Angular en utilisant `HttpClient`.

## 🔗 Références en Angular
Une **référence** (ou *local reference*) est une variable définie directement dans le template HTML. Elle permet d’accéder aux propriétés d’un élément Angular.
- Syntaxe : `#xxx` (exemple : `#inputRef` pour référencer un champ input).

## 📝 Gestion des Formulaires en Angular
Angular propose deux approches principales pour la gestion des formulaires :

### 1️⃣ Template-driven Forms 📄
- Utilise `FormsModule` dans le composant.
- Tout est défini dans le **template HTML**.
- Angular gère automatiquement les valeurs, la validation et la soumission.

#### Concepts clés :
- `#XForm="ngForm"` : Référence locale pour le formulaire, liée à `ngForm`.
- `[(ngModel)]="model.prop"` : Synchronisation bidirectionnelle entre l'input et la variable `model.prop`.
- `#Y="ngModel"` : Référence locale pour accéder aux erreurs et états de l’input.

### 2️⃣ Reactive Forms ⚡
- Utilise `ReactiveFormsModule`.
- La structure du formulaire est définie directement dans le **TypeScript**.
- Permet une meilleure **gestion des validations** et **plus de flexibilité**.


