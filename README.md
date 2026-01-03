# 🎓 Edusity

A **modern, responsive educational website landing page** built using **React** and **Vite**. Edusity serves as a comprehensive web platform for a **university or college**, showcasing academic programs, campus life, testimonials, and a fully functional contact system — all within a clean single-page design.

---

## 🚀 Features

* **Responsive Landing Page**
  Clean single-page layout with sections for Home, Programs, About, Campus, and Testimonials.

* **Interactive Video Player**
  Integrated video player with overlay state management for smooth user interaction.

* **Functional Contact Form**
  Contact form powered by **Web3Forms**, enabling direct message submissions without a backend server.

* **Smooth Navigation**
  Seamless scrolling between sections using `react-scroll`.

* **Modular UI Components**
  Reusable and well-structured components such as Hero, Programs, Campus Gallery, and Testimonials.

---

## 🛠️ Tech Stack

* **Frontend Framework:** React 19
* **Build Tool:** Vite
* **Navigation:** React Scroll
* **Form Handling:** Web3Forms
* **Linting:** ESLint

---

## 📂 Project Structure

```text
edusity/
├── public/
├── src/
│   ├── assets/              # Images and icons
│   ├── Components/
│   │   ├── About/           # About Us section
│   │   ├── Campus/          # Campus photo gallery
│   │   ├── Contact/         # Contact form logic
│   │   ├── Footer/          # Application footer
│   │   ├── Hero/            # Landing page hero section
│   │   ├── Navbar/          # Top navigation bar
│   │   ├── Programs/        # Academic programs section
│   │   ├── Testimonials/    # Student testimonials carousel
│   │   ├── Title/           # Section titles
│   │   └── VideoPlayer/     # Video overlay component
│   ├── App.jsx              # Main application layout
│   └── main.jsx             # Application entry point
├── eslint.config.js
├── package.json
└── vite.config.js
```

---

## ⚙️ Installation & Setup

### ✅ Prerequisites

* Node.js (v18 or higher recommended)
* npm or yarn

---

### 1️⃣ Clone the Repository

```bash
git clone <repository-url>
cd edusity
```

---

### 2️⃣ Install Dependencies

```bash
npm install
```

---

### 3️⃣ Run Development Server

Start the development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

The application will be available at:
👉 **[http://localhost:5173](http://localhost:5173)**

---

### 4️⃣ Build for Production

To generate an optimized production build:

```bash
npm run build
```

---

## 🔌 API Integration

### 📩 Contact Form (Web3Forms)

The contact form uses **Web3Forms** to handle submissions without requiring a backend.

* **Endpoint:** `https://api.web3forms.com/submit`
* **Method:** `POST`
* **Access Key:** `1251121c-020f-4bb2-b5fe-60ac9bee8492`

> ⚠️ **Note:** For production environments, it is strongly recommended to move the access key to environment variables.

---

## 🤝 Contributing

Contributions are welcome! 🎉

1. Fork the repository
2. Create a new branch:

```bash
git checkout -b feature/NewFeature
```

3. Commit your changes:

```bash
git commit -m "Add NewFeature"
```

4. Push to the branch:

```bash
git push origin feature/NewFeature
```

5. Open a Pull Request

---


✨ *Designed for modern educational institutions. Built with React.*
