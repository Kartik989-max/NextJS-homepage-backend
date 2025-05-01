
# Customizable Homepage with Admin Dashboard

This is a full-stack web application that allows users to view a professional customizable homepage and gives an admin the ability to log in and update homepage content via a drag-and-drop interface.

## ✨ Features

### Homepage
- Hero Section: Title, subtitle, and CTA buttons
- About Section: Introduction with text and/or image
- Featured Logos: Company logos displayed in horizontal scroll
- CTA/Footer: Final call to action
- Smooth drag-and-drop reordering of homepage sections (admin only)
- Responsive and professional UI with TailwindCSS and ShadCN

### Admin Panel
- Secure login (no registration)
- Drag-and-drop section management
- Edit section content (text, images, buttons)
- JWT-based authentication
- Protected routes

## 🛠️ Tech Stack

### Frontend
- Next.js 14 (App Router)
- TailwindCSS + ShadCN UI
- TypeScript

### Backend
- Node.js + Express.js
- TypeScript
- MongoDB (via Mongoose)
- CORS & dotenv configuration
- bcrypt for password hashing
- JWT for authentication

## 📁 Folder Structure

```
project-root/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── middlewares/
│   │   └── index.ts
│   ├── .env
│   └── package.json
└── frontend/
    ├── app/
    │   ├── admin/
    │   │   └── page.tsx
    │   ├── login/
    │   │   └── page.tsx
    │   └── page.tsx (Home)
    ├── components/
    ├── .env.local
    └── package.json
```

## 🔐 Environment Variables

### Backend `.env`
```
PORT=5000
FRONTEND_URL=http://localhost:3000
JWT_SECRET=your_jwt_secret_key
MONGO_URI=your_mongodb_uri
```

### Frontend `.env.local`
```
NEXT_PUBLIC_API_URL=http://localhost:5000
```

## 🚀 Getting Started

### Backend
```bash
cd backend
npm install
npm run dev
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

## ✅ Testing Admin Login with Postman

**POST** `http://localhost:5000/api/admin/login`  
Body (JSON):
```json
{
  "username": "admin",
  "password": "yourpassword"
}
```

## 📝 To Do
- Add user registration (optional)
- Add image upload to sections
- Add page-level SEO tags
- Deploy to production

---

© 2025 Kartik Bhatnagar — All rights reserved.
