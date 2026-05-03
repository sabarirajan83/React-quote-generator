# 🌟 React Quote Generator

A modern React application that fetches inspiring quotes and pairs them with beautifully transitioning background images. 

---

## 📖 About the Project

**React Quote Generator** is a responsive web application designed to deliver daily inspiration with a premium user experience. Built with a focus on modern UI/UX principles, the app features a frosted-glass ("glassmorphism") aesthetic, smooth state-driven image transitions, and built-in social sharing.

To ensure reliable data fetching without browser security blocks, this project utilizes a custom Express proxy server alongside the React frontend.

## ✨ Key Features

* **🪞 Glassmorphism UI:** A sleek, modern interface utilizing advanced CSS `backdrop-filter` techniques.
* **🖼️ Dynamic Image Cycling:** Seamlessly transitions through a curated gallery of background images based on user interaction states.
* **🚀 Smart Asynchronous Loading:** Implements loading states to prevent "ghost clicks" and UI freezing during API calls.
* **🛡️ CORS-Bypassing Proxy:** Uses a lightweight Node.js/Express backend to securely route API requests.

---

## 🛠️ Tech Stack

* **Frontend:** React 18, Vite (for rapid HMR and optimized builds)
* **Styling:** Vanilla CSS3 (Flexbox, CSS Variables, Transitions)
* **Backend:** Node.js, Express.js, CORS middleware
* **API:** [DummyJSON Quotes API](https://dummyjson.com/docs/quotes)

---

## 🧠 What I Learned

Building this project provided valuable hands-on experience with several core web development concepts:

1. **Solving CORS Errors:** I learned how to build a custom Express proxy server to securely fetch data from third-party APIs that block direct browser requests.
2. **Vite Asset Handling:** Explored Vite's `import.meta.glob` feature to dynamically import whole directories of images, optimizing the build process.
3. **Complex State Management:** Managed multiple pieces of React state (`quote`, `author`, `clickCount`, `isLoading`) to synchronize API data, UI loading indicators, and background image math logic.

---

## 🚀 Getting Started

Want to run this project locally? Follow these steps:

### 📋 Prerequisites
Make sure you have the following installed:
- Node.js (v14 or higher recommended)
- npm or yarn

---

### ⚙️ Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/React-quote-generator.git
cd React-quote-generator
```

2. Install dependencies:
```bash
npm install
```
or
```bash
yarn install
```

---

### ▶️ Running the App

3. Start the development server:
```bash
npm start
```
or
```bash
yarn start
```

4. Open in browser:
```
http://localhost:3000
```

---

### 🏗️ Build for Production

```bash
npm run build
```

---

### 🧪 Run Tests

---

## 📦 Project Structure

```
React-quote-generator/
├── public/
│   └── screenshot.png
├── src/
│   ├── components/
│   ├── assets/
│   ├── App.jsx
│   └── main.jsx
├── server/
│   └── index.js
├── package.json
└── README.md
```

---

## 🌐 API Configuration

This project uses a custom Express proxy server to fetch quotes.

If needed, update the API endpoint inside your backend:

```js
const API_URL = "https://dummyjson.com/quotes";
```

---

## 🤝 Contributing

Contributions are welcome!  

1. Fork the repository  
2. Create your feature branch  
```bash
git checkout -b feature/AmazingFeature
```
3. Commit your changes  
```bash
git commit -m "Add some AmazingFeature"
```
4. Push to the branch  
```bash
git push origin feature/AmazingFeature
```
5. Open a Pull Request  

---

## 💻 Sample Output

<p align="center">
  <img src="quote-app\public\Screenshot.png" alt="App Screenshot" width="800"/>
</p>

## 📄 License

This project is licensed under the MIT License.  
Feel free to use and modify it for your own projects.

---

## 🙌 Acknowledgements

- DummyJSON for providing a free quotes API  
- Inspiration from modern UI/UX design trends  
- React & Vite communities  

---

## ⭐ Support

If you like this project:

- ⭐ Star the repo  
- 🍴 Fork it  
- 🧑‍💻 Share it with others  

---

Created by **Sabarirajan**  
Feel free to connect or reach out!

---
