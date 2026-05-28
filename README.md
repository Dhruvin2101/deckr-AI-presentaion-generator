````md
# 🚀 Deckr AI

### AI-Powered Presentation Generator

Deckr AI is a modern full-stack AI presentation generation platform that transforms prompts into visually stunning presentations using AI.

Built with the modern TanStack ecosystem, Deckr allows users to create, manage, edit, regenerate, and present beautiful AI-generated slide decks with a premium SaaS-inspired experience.

---

# ✨ Features

- 🎨 AI-generated presentations from prompts
- 🧠 Smart slide generation with customizable styles & tones
- 🖼️ AI-powered image prompt generation for slides
- 📑 Dynamic slide preview system
- 🎞️ Full slideshow mode
- 🌙 Dark / Light / System theme support
- ⚡ Modern glassmorphism UI
- 🔐 Authentication system
- 💾 Persistent database storage
- 🔄 Regenerate presentations instantly
- 🗑️ Delete & manage presentations
- 📱 Fully responsive design
- 🚀 Built with the modern TanStack ecosystem

---

# 🛠️ Tech Stack

## Frontend
- React
- TypeScript
- TanStack Start
- TanStack Router
- TanStack Query
- Tailwind CSS
- Shadcn UI
- Lucide React

## Backend
- TanStack Server Functions
- Prisma ORM
- PostgreSQL

## Authentication
- Better Auth

## AI Integration
- Gemini API 

---

# 📸 Screenshots

## Home Page
- Prompt input system
- Presentation generation controls
- Templates section
- Previously generated presentations

## Presentation Viewer
- Live slide preview
- Slideshow mode
- Regeneration workflow
- Edit presentation settings
- Fullscreen support

---

# ⚙️ Installation

## 1. Clone Repository

```bash
git clone https://github.com/your-username/deckr-ai.git
````

---

## 2. Navigate to Project

```bash
cd deckr-ai
```

---

## 3. Install Dependencies

```bash
npm install
```

---

## 4. Setup Environment Variables

Create a `.env` file in the root directory:

```env
DATABASE_URL=

BETTER_AUTH_SECRET=
BETTER_AUTH_URL=http://localhost:3000

GEMINI_API_KEY=
```

---

## 5. Setup Database

```bash
npx prisma generate
```

```bash
npx prisma db push
```

---

## 6. Start Development Server

```bash
npm run dev
```

Application will run at:

```txt
http://localhost:3000
```

---

# 🧩 Project Structure

```bash
src/
│
├── components/
|   ├── auth/
│   ├── ui/
│   └── shared/
│
├── features/
│   └── presentation/
│       ├── actions/
│       ├── components/
│       ├── constant/
│       ├── hooks/
│       ├── types/
│       └── utils/
│
├── routes/├── ui/
│
├── lib/
│
├── middleware/
│
└── generated/
```

---

# 🧠 How Deckr Works

1. User enters a prompt/topic
2. User selects:

   * Slide count
   * Style
   * Tone
   * Layout
3. AI generates structured presentation data
4. Slides are stored in PostgreSQL
5. Presentation preview is rendered dynamically
6. Users can:

   * Edit
   * Regenerate
   * Delete
   * Present slides

---

# 🎨 Presentation Customization

Deckr supports multiple presentation modes.

## Styles

* Minimal
* Modern
* Corporate
* Creative

## Tones

* Formal
* Professional
* Casual
* Educational

## Layouts

* Balanced
* Visual-heavy
* Text-focused

---

# 🌗 Theme System

Deckr includes:

* Light mode
* Dark mode
* System theme detection

Theme preferences are stored using localStorage.

---

# 🔒 Authentication

Authentication powered by Better Auth.

Features:

* Secure login/signup
* Session management
* Protected routes
* User-specific presentations

---

# 🗄️ Database Models

## Presentation

* Title
* Prompt
* Style
* Tone
* Layout
* Slide count
* Status

## Slide

* Title
* Content
* Notes
* Image prompt
* Order

---

# 🚀 Future Improvements

* Export to PowerPoint/PDF
* AI voice narration
* Collaborative editing
* Presentation sharing
* Real-time generation updates
* Multiple presentation themes
* Custom branding support
* Drag-and-drop slide editing
* AI animation suggestions

---

# 🧪 Scripts

## Run Development Server

```bash
npm run dev
```

## Build Production

```bash
npm run build
```

## Start Production

```bash
npm run start
```

## Prisma Generate

```bash
npx prisma generate
```

## Prisma Push

```bash
npx prisma db push
```

---

# 💡 Key Highlights

* Full-stack AI SaaS application
* Production-ready architecture
* Modern TanStack ecosystem
* Advanced React patterns
* Real-world database integration
* Premium UI/UX implementation
* Scalable project structure

---

# 👨‍💻 Author

## Dhruvin Patel

Full Stack Developer passionate about:

* AI-powered applications
* Modern frontend engineering
* SaaS product development
* UI/UX systems
* Scalable web architecture

---


# ⭐ Support

If you like this project, consider giving it a star ⭐ on GitHub.

---

# 🔥 Deckr AI

### “Turn ideas into beautiful presentations instantly.”

```
```
