# 🛒 Shopping List

Shopping application built with **React + TypeScript**.

This application allows users to:

- Add custom items
- Remove items
- Mark items as purchased
- Undo purchased items
- Clear all purchased items
- Save data using localStorage

---

## 🔗 Structure

The application follows a clear separation:

- **App**
  - Manages state
  - Contains the logic
  - Uses a custom reducer hook
  - Connects the Shopping List with the Store
  - Handles localStorage

- **ItemInput**
  - Handles user input
  - Triggers item creation

- **ItemList**
  - Displays items
  - Triggers delete and toggle actions
 
- **ProductList**
  - Fetches items from an external API
  - Handles errors and loading

This structure improves scalability and maintainability of the application and its content.

---

## 🌐 External API

Products are fetched from:

https://fakestoreapi.com/products

---

## 🖥️ Technologies Used

- React
- TypeScript
- Vite
- CSS
