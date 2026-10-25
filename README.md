# LakeB2B - MERN Stack Project

Modern, high-performance **MERN Stack** (MongoDB, Express, React, Node.js) application reproducing the exact landing experience from the LakeB2B screenshot with high fidelity and a modular architecture.

## 📂 Project Architecture

```
lakeb2b-mern/
├── server/                           # Backend (Node.js + Express + MongoDB)
│   ├── models/
│   │   ├── Contact.js                # Schema for Contact Sales & Expert Consultations
│   │   ├── User.js                   # Schema for Registered Users / Logins
│   │   └── Lead.js                   # Schema for Free Sample Data Leads
│   ├── routes/
│   │   ├── contact.js                # Endpoints: /api/contact/sales, /api/contact/free-sample, /api/contact/talk-to-expert
│   │   ├── auth.js                   # Endpoints: /api/auth/login, /api/auth/profile
│   │   ├── search.js                 # Endpoints: /api/search?q=
│   │   └── dataIntelligence.js      # Endpoints: /api/intelligence/stats, /api/intelligence/sample-records
│   ├── .env                          # Server environment configuration
│   ├── package.json
│   └── server.js                     # Main Express server entry point
│
├── client/                           # Frontend (React + Vite + Modern CSS)
│   ├── src/
│   │   ├── components/
│   │   │   ├── Home.jsx              # Main page container orchestrating all modules
│   │   │   ├── Body.jsx              # Hero section matching screenshot with 3D ribbons & CTAs
│   │   │   ├── Footer.jsx            # Polished enterprise footer & compliance links
│   │   │   ├── Navbar.jsx            # Header navigation with LakeB2B logo & action triggers
│   │   │   ├── DataIntelligence.jsx  # Dedicated module for Data Intelligence & stats
│   │   │   ├── Solutions.jsx         # Dedicated module for B2B Outbound & ABM solutions
│   │   │   ├── Industries.jsx        # Dedicated module for targeted industry verticals
│   │   │   ├── AboutUs.jsx           # Dedicated module for company background & stats
│   │   │   ├── Resources.jsx         # Dedicated module for reports, playbooks & guides
│   │   │   ├── Login.jsx             # Dedicated module for user portal authentication
│   │   │   ├── Search.jsx            # Dedicated module for real-time search & filters
│   │   │   ├── ContactSales.jsx      # Dedicated module for Contact Sales inquiry modal
│   │   │   ├── ExpertModal.jsx       # Modal for "TALK TO AN EXPERT" & "GET A FREE SAMPLE"
│   │   │   └── SparkleModal.jsx      # AI Audience Copilot modal for sparkle button
│   │   ├── App.jsx                   # React root application
│   │   ├── main.jsx                  # React DOM render entry
│   │   └── index.css                 # Master design system & glowing ribbon aesthetics
│   ├── index.html                    # HTML shell with Google Fonts & Meta tags
│   ├── vite.config.js                # Vite config with API proxy to port 5000
│   └── package.json
│
├── package.json                      # Root orchestration scripts
└── README.md
```

---

## 🚀 Getting Started

### 1. Run Backend Server (Express + Node)
```bash
cd server
npm start
# Server runs on http://localhost:5000
```

### 2. Run Frontend Client (React + Vite)
```bash
cd client
npm run dev
# Frontend runs on http://localhost:5173
```

### 3. Run Both Concurrently from Root
```bash
npm run dev:all
```

---

## ✨ Features Included

1. **Pixel-Perfect Hero Experience**:
   - Exact typography: `"Custom B2B Data."`, `"Built For Outreach"`
   - Subtitle: `"Custom B2B contact data intelligence with intent signals. Take it by API, or hand the whole campaign to our team."`
   - Actions: `"TALK TO AN EXPERT"` and `"GET A FREE SAMPLE"`
   - Bottom-left floating badge with clock/checkmark icon
   - 3D curved digital glass ribbons & glowing purple/magenta/cyan lighting
2. **Modular File Structure**:
   - Every single requested item (`Home`, `Body`, `Footer`, `DataIntelligence`, `Solutions`, `Industries`, `AboutUs`, `Resources`, `Login`, `Search`, `ContactSales`) is neatly isolated into its own file in `client/src/components/`.
3. **Full MERN Stack Endpoints**:
   - MongoDB database connection with automatic schema validation
   - In-memory persistence fallback for instant zero-config testing
   - Live search endpoint (`/api/search?q=`)
   - Auth endpoint (`/api/auth/login`)
   - Sales & Lead capture endpoints (`/api/contact/sales`, `/api/contact/talk-to-expert`, `/api/contact/free-sample`)
