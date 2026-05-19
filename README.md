<div align="center">

# 🌐 Prabhdeep Singh - Full-Stack & AI Engineer Portfolio

Production-grade portfolio for a Full-Stack & AI Engineer focused on NestJS, React, Agentic AI, Deep Learning, and AI-driven automation workflows (n8n).

Built with **Next.js**, the site combines a polished interactive experience with a recruiter-friendly showcase of scalable backend systems, automated integrations, and AI-driven features.

<!-- ![Homepage Screenshot](public/static/home.png) -->

</div>

---

## ✨ Feature Highlights

### 1. 🤖 AI Twin Chatbot Integration
An interactive AI twin chatbot (`src/components/AITwinChat.tsx`) integrated directly into the portfolio:
- Floating widget positioned at the bottom-right corner.
- Context-aware responses regarding Prabhdeep's professional background, skills, internships, and projects.
- Provides immediate, conversational answers for recruiters and hiring managers.

### 2. 🖱️ Fluid Cursor & Canvas Effects
- Custom fluid cursor (`src/components/FluidCursor.tsx`) tracking mouse movement.
- Trailing canvas effect for a modern, engaging interactive micro-interaction.
- Implemented via custom hooks (`src/hooks/useFluidCursor`) optimized for smooth rendering.

### 3. 🧊 Consistent Glassmorphic Aesthetic
- Site-wide modern glassmorphism aesthetic tailored for dark and light modes.
- Sleek gradients, translucent panels, subtle borders, and backdrop blurs on cards and sidebars.
- Polished layout designed to look premium, professional, and visually stunning.

### 4. 🎬 High-Performance Animations
Leveraging **Framer Motion** for premium interactive feedback:
- 3D Card tilt effects on hover (`src/components/Card3D.tsx`).
- Smooth, scroll-triggered reveal animations optimized across mobile, tablet, laptop, and PC screens.
- Micro-interactions on project cards, stats widgets, and contact sections.

### 5. 🎨 Light & Dark Theme Support
- Adaptive Dark / Light themes powered by `next-themes`.
- Curated color palettes matching high-end modern design practices.
- Tailwind CSS utility-first styling for modularity and lightning-fast styles.

### 6. 💼 Modular Section Architecture
- Reusable components: Hero, About, Stats, Experience, Projects, Skills, Contact.
- Built via React Server / Client Components, prioritizing maintainability and SEO optimization.
- Live Next.js API contact route with validation and delivery mechanisms.

---

## 🖥️ Technology Stack

- **Next.js** – App Router, hybrid rendering, and optimized performance
- **TypeScript** – Strict type safety and clear domain models
- **Tailwind CSS** – Highly optimized utility styling
- **Framer Motion** – Performance-tuned fluid React animations
- **Radix UI / Shadcn UI** – Accessible, unstyled foundation primitives
- **Lucide React** – Clean, modern vector iconography
- **Zod** – Strict runtime validation for forms and API routes

---

## 🔐 Environment Variables
Create a `.env.local` file to securely store keys for the AI Twin Chatbot and the contact form delivery.

```bash
# Example environment variables 
# -----------------------------
# Contact / Email
RESEND_API_KEY=re_your_resend_api_key
CONTACT_EMAIL_FROM="Prabhdeep Portfolio <contact@yourdomain.com>"
CONTACT_EMAIL_TO=sprabhdeep960@gmail.com

# -----------------------------
# LLM / AI Provider
LLM_API_KEY=your-llm-api-key
LLM_BASE_URL=https://integrate.api.nvidia.com/v1/chat/completions
AI_MODEL=openai/gpt-oss-20b
```

> Never commit real credentials. Always configure them in your hosting provider's dashboard (e.g. Vercel) for production.

---

## 🛠️ Development Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Dev Server
```bash
npm run dev
```
Visit: `http://localhost:3000`

---

## 🧪 Testing & Linting
```bash
# Run the linter
npm run lint

# Run the unit tests
npm test

# Build for production
npm run build
```

---

## 🧱 Project Structure (Excerpt)
```
src/
  app/            # App Router pages, global layouts, API routes
  components/     # Modular UI segments (Hero, Skills, Projects, AITwinChat, etc.)
    ui/           # Reusable atomic base UI components (Shadcn/Radix based)
  data/           # Portfolio source of truth (portfolio.ts)
  hooks/          # Custom hooks (e.g., useFluidCursor)
  lib/            # AI configuration, Twin utilities, and API managers
```

---

## 📄 License
See LICENSE for details.

---

<div align="center">Made with passion & TypeScript ⚡</div>
