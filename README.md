# Gidy Profile Project

## Overview
This project is a full-stack profile application built as part of the Gidy.ai Full-Stack Technical Challenge.
The goal was to recreate a high-fidelity version of the Gidy.ai profile page while implementing real backend logic, database persistence, and clean UI interactions.

The application allows a user to:
- View their profile information
- Edit profile details
- Persist changes in a database
- Experience a clean, responsive, modern UI

---

## Tech Stack

### Frontend
- Next.js (App Router)
- TypeScript
- React
- Tailwind CSS

### Backend
- Next.js API Routes
- REST API

### Database
- PostgreSQL
- Prisma ORM

### Deployment
- Vercel

---

## Features

### Core Features
- Profile page displaying:
  - Name
  - Title
  - Bio
  - Skills
  - Social links
- Data fetched from backend API
- Edit profile functionality
- Changes saved and persisted in database
- Fully responsive UI

### Edit Mode
- Edit profile information using a modal
- Skills entered as comma-separated values
- Updates reflected immediately on save
- Data synced with database using Prisma

---

## Innovation Feature

### Persistent Edit Experience
Instead of a static profile page, this project focuses on a real editable profile system.
Profile data is stored in a relational database and persists across page reloads.

---

## Project Structure

src/
│
├── app/
│   ├── page.tsx
│   └── api/
│       └── profile/
│           └── route.ts
│
├── components/
│   ├── ProfileHeader.tsx
│   ├── BioSection.tsx
│   ├── SkillsSection.tsx
│   ├── SocialLinks.tsx
│   ├── EditModal.tsx
│   └── EditButton.tsx
│
├── lib/
│   └── prisma.ts
│
├── prisma/
│   └── schema.prisma

---

## Setup Instructions

### 1. Clone the repository
git clone https://github.com/Nehaselvaraj23/gidy-profile.git
cd gidy-profile

### 2. Install dependencies
npm install

### 3. Environment variables
Create a .env file and add:

DATABASE_URL=your_postgresql_database_url

### 4. Prisma setup
npx prisma generate
npx prisma migrate dev

### 5. Run the project
npm run dev

App will run on:
http://localhost:3000

---

## API Endpoints

GET /api/profile  
Fetches profile data from the database.

PUT /api/profile  
Updates profile information and saves it to the database.

---

## Live Demo
(Add your deployed link here)

## Code Repository
https://github.com/Nehaselvaraj23/gidy-profile

---

## Notes
This project focuses on clean architecture, real backend persistence, and a production-like profile experience.
