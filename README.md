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

## 🏗️ Architecture

The LMS System follows a modern, scalable architecture built on Next.js App Router:

- **Frontend**: Next.js 16 with React 19, TypeScript, and Tailwind CSS 4
- **Authentication**: Clerk for secure user management with custom theming
- **Database**: Supabase (PostgreSQL) with real-time capabilities
- **Voice AI**: Vapi.ai for real-time voice conversations
- **Form Handling**: React Hook Form + Zod for validation
- **UI Components**: Radix UI primitives with custom styling

### Data Flow

```
User → Clerk Auth → Next.js App Router → Server Actions → Supabase
                              ↓
                        Vapi.ai (Voice)
                              ↓
                     Real-time Audio Stream
```

## 🔑 Key Implementations

### 1. Real-time Voice Conversations

- **Vapi.ai Integration**: Implemented in [CompanionComponent.tsx](components/CompanionComponent.tsx)
- Uses WebSocket for low-latency voice streaming
- Handles call status (CONNECTING, ACTIVE, FINISHED)
- Speech detection with visual feedback (Lottie animations)

### 2. Server Actions & Database

- **CRUD Operations**: [companion.actions.ts](lib/actions/companion.actions.ts)
- Secure data access with Clerk + Supabase integration
- Real-time path revalidation for instant UI updates
- Bookmark system with user-specific filtering

### 3. Form Validation

- **Zod Schema**: Comprehensive validation in [CompanionForm.tsx](components/CompanionForm.tsx)
- Real-time error feedback
- Type-safe form handling with React Hook Form

### 4. Authentication Flow

- **Clerk Integration**: Custom appearance with primary color `#fe5933`
- Protected routes with server-side auth checks
- Token-based Supabase access

## 🧠 Challenges & Solutions

### Challenge 1: Real-time Voice State Management

**Problem**: Managing multiple voice states (connecting, speaking, muted) and syncing with UI.

**Solution**: Implemented enum-based state machine with useEffect hooks for event listeners. Used Lottie animations for visual feedback during speech.

### Challenge 2: Clerk + Supabase Authentication

**Problem**: Connecting Clerk's JWT tokens with Supabase for secure database access.

**Solution**: Created custom Supabase client with async token getter that retrieves Clerk's token server-side.

### Challenge 3: Form Data Persistence

**Problem**: Ensuring companion data is saved correctly before redirecting.

**Solution**: Used Server Actions with proper error handling and redirect after successful creation.

## 👨‍💻 My Contributions

### Core Features Implemented

1. **Companion Creation System**: Full CRUD with form validation
2. **Voice Chat Interface**: Real-time audio with Vapi.ai integration
3. **Session History**: Tracking and storing completed lessons
4. **Search & Filter**: Subject-based filtering with Supabase queries
5. **Bookmark System**: Save favorite companions

### Technical Highlights

- Built reusable UI components with Radix UI primitives
- Implemented type-safe database operations with TypeScript
- Optimized performance with Next.js caching and revalidation
- Created responsive design with Tailwind CSS

### Key Files Created/Modified

- [companion.actions.ts](lib/actions/companion.actions.ts) - Server actions
- [CompanionForm.tsx](components/CompanionForm.tsx) - Creation form
- [CompanionComponent.tsx](components/CompanionComponent.tsx) - Voice chat
- [supabase.ts](lib/supabase.ts) - Auth client
- [vapi.sdk.ts](lib/vapi.sdk.ts) - Voice SDK wrapper

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
