```markdown
# 🛍️ WearHere (Angular E-Commerce Frontend)

An interactive, responsive, and fully functional e-commerce frontend application built with Angular. This project serves as the client-side architecture for an online clothing store, complete with a mock backend, authentication guards, and a dedicated admin dashboard for inventory management.

## ✨ Key Features

* **Dynamic Product Catalog:** Browse products, view individual product details, and filter by categories.
* **Shopping Cart System:** Add items, adjust quantities, calculate real-time totals, and remove products.
* **Admin Dashboard (CRUD):** A protected route where administrators can Create, Read, Update, and Delete products from the inventory.
* **Authentication & Authorization:** Mock login system with route guarding. Only users with Admin credentials can access the dashboard.
* **Dark/Light Mode:** Full global theme toggling using Angular Signals and standard CSS.
* **Responsive Design:** Optimized layout for desktop, tablet, and mobile viewing using CSS Grid and Flexbox.

## 🛠️ Tech Stack

* **Framework:** Angular
* **Language:** TypeScript, HTML5, CSS
* **State Management:** Angular Signals & RxJS
* **Mock Database:** `json-server` (Local JSON file persistence)

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites
Make sure you have Node.js and the Angular CLI installed on your machine.
* npm
  ```sh
  npm install npm@latest -g

```

* Angular CLI
```sh
npm install -g @angular/cli

```



### Installation & Setup

1. **Clone the repo**
```sh
git clone (https://github.com/MahmoudElFeeky/WearHere.git)

```


2. **Install NPM packages**
```sh
npm install

```


3. **Start the Mock Backend (JSON Server)**
Open a terminal in the project root and run the mock database to serve the products:
```sh
npx json-server --watch db.json --port 3000

```


4. **Start the Angular Development Server**
Open a *second* terminal and run:
```sh
ng serve

```


5. **Open the App**
Navigate to `http://localhost:4200` in your browser.

## 🔐 Testing the Admin Roles

To test the route guards and Admin CRUD capabilities:

1. Navigate to the **Login** page.
2. Enter the Admin email: `admin@wearhere.com` (Password can be anything for this mock).
3. The **Admin** tab will automatically appear in the navigation bar, granting access to the inventory table.

## 📁 Project Architecture

This application follows a highly modular, component-based architecture inside the `src/app` directory:

* `/components`: Reusable UI elements (Navbar, Product Cards, Sliders, Admin Tables).
* `/pages`: Routable views (Home, Cart, Login, Admin Dashboard, Product Details).
* `/services`: Singletons managing data and state (AuthService, CartService, ProductService, ThemeService).
* `/guards`: Route protection logic (AdminGuard).

## 🔮 Future Development

*Note: This repository represents the completed frontend-only architecture. The project is currently being migrated to a full MEAN stack (MongoDB, Express, Angular, Node.js) in a separate repository to handle real user authentication, payment processing, and a production-ready database.*
