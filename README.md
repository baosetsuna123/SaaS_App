<!-- Centered Header -->
<h1 align="center">LMS System: Real-time AI Teaching Platform</h1>

<!-- Tech Stack Section -->
<p align="center">
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js">
  <img src="https://img.shields.io/badge/Clerk-3E8BFF?style=for-the-badge&logo=clerk&logoColor=white" alt="Clerk">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white" alt="Supabase">
</p>

## 📖 Overview
The LMS System is a cutting-edge learning management platform designed to provide real-time, AI-driven teaching experiences. It allows users to create personalized learning companions with unique voices, styles, and subjects, enabling interactive and engaging learning sessions.

## ✨ Features
- **Personalized Learning Companions**: Build companions with customizable names, subjects, voices, and styles.
- **Real-time Voice Conversations**: Engage in natural and interactive voice-based learning sessions.
- **Dynamic Subject Support**: Covers a wide range of subjects, including Science, Maths, History, and more.
- **Session History**: Track completed lessons and review past sessions.
- **Subscription Plans**: Integrated pricing table for managing subscriptions.

## 🗂️ Project Structure
The project is built using Next.js and follows a modular structure:

- **`app/`**: Contains the main application pages and layouts.
  - `companions/`: Pages for managing and interacting with companions.
  - `subscription/`: Subscription management page.
  - `layout.tsx`: Root layout with global styles and navigation.
- **`components/`**: Reusable UI components such as Navbar, CompanionForm, and CTA.
- **`constants/`**: Stores static data like subjects, colors, and voices.
- **`lib/`**: Utility functions and API integrations.
- **`public/`**: Static assets like images and icons.
- **`types/`**: TypeScript type definitions for the project.

## ⚙️ Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd lms_system
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Set up environment variables in `.env.local`:
   ```bash
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=YOUR_PUBLISHABLE_KEY
   CLERK_SECRET_KEY=YOUR_SECRET_KEY
   ```
5. Run the development server:
   ```bash
   npm run dev
   ```

## 🚀 Usage
- **Build a Companion**: Navigate to `/companions/new` to create a new learning companion.
- **Start a Session**: Select a companion and begin a real-time voice session.
- **Manage Subscriptions**: Visit `/subscription` to view and manage subscription plans.

## 🤝 Contributing
Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## 📜 License
This project is licensed under the MIT License. See the LICENSE file for details.