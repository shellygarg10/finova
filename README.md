# 💸 FINOVA - Full Stack AI Finance Platform

FINOVA is a modern, AI-powered finance tracking platform that helps individuals manage their expenses, income, and budgeting—all in one intuitive interface. 
Built with Next.js and powered by cutting-edge tools, FINOVA offers intelligent insights and automation for smarter financial decisions.

---

## 🚀 Features

- 🔍 **AI Receipt Scanner**  
  Upload receipts and let AI extract relevant data like date, amount, description, and category.


- 🧠 **AI-Generated Spending Reports**  
  Get personalized reports highlighting your top spending categories, with suggestions to optimize your expenses.


- 📧 **Email Notifications**  
  Get notified when your monthly spending exceeds your set budget threshold.


- 📂 **Categorization & Sorting**  
  Easily filter your transactions by category, date, or type.

---

## 🛠️ Tech Stack

- **Frontend**: Next.js, Tailwind CSS, ShadCN UI
- **Backend**: Serverless API routes with Next.js
- **Database**: PostgreSQL (Hosted on Neon)
- **ORM**: Prisma
- **Authentication** : Clerk
- **Email Service**: Resend
- **Security & Rate Limiting**: Arcjet

---

## 📦 Installation

```bash
git clone https://github.com/shellygarg10/finova.git
cd finova
npm install
```

### 🔐 Set up your environment variables

Create a `.env.local` file and add the following keys:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY = your-clerk-publishable-key
CLERK_SECRET_KEY = your-clerk-secret-key
NEXT_PUBLIC_CLERK_SIGN_IN_URL = signin
NEXT_PUBLIC_CLERK_SIGN_UP_URL = signup
DATABASE_URL= postgresql://your-user:your-password@your-neon-host/dbname
ARCJET_KEY = your-arcjet-secret
RESEND_API_KEY = your-resend-api-key
GOOGLE_AI_API_KEY= your-gemini-api-key

```

---

## 🧪 Development

To run the app locally:

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

---
