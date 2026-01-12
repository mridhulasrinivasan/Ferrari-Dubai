# Ferrari Dubai Showroom

A premium landing page for a Ferrari showroom in Dubai featuring an immersive design with Ferrari's signature red and black color scheme.

## Live Demo

[View Live Site](https://your-deployed-url.replit.app)

## Tech Stack

- **Frontend:** React 18, TypeScript, TailwindCSS, Shadcn UI
- **Backend:** Node.js, Express
- **Form Validation:** Zod, React Hook Form
- **Data Fetching:** TanStack Query
- **Styling:** Tailwind CSS with custom design tokens

## Features

- Full-screen hero section with video background
- Featured models grid showcasing 6 Ferrari vehicles with specs and pricing
- Virtual tour call-to-action section
- Contact form with validation and backend storage
- Newsletter signup
- Responsive design optimized for all devices
- Premium typography using Montserrat and Inter fonts

## Prerequisites

- Node.js 18+ and npm
- Git

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/ferrari-dubai.git
cd ferrari-dubai
```

### 2. Install dependencies

```bash
npm install
```

### 3. Environment Variables

Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

Add your configuration:

```env
SESSION_SECRET=your_session_secret_here
```

### 4. Run the development server

```bash
npm run dev
```

The app runs on http://localhost:5000

## Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Production build
npm run start        # Start production server
```

## Project Structure

```
├── client/
│   └── src/
│       ├── components/ui/   # Shadcn UI components
│       ├── pages/
│       │   └── home.tsx     # Main landing page
│       ├── lib/             # Utilities and query client
│       └── index.css        # Global styles and design tokens
├── server/
│   ├── routes.ts            # API endpoints
│   ├── storage.ts           # In-memory data storage
│   └── index.ts             # Express server setup
├── shared/
│   └── schema.ts            # Zod schemas and types
└── package.json
```

## Deployment

### Deploy to Replit

1. Import this repository to Replit
2. The app will automatically configure and run
3. Click "Deploy" to publish

### Deploy to Vercel

1. Push code to GitHub
2. Import project at [vercel.com/new](https://vercel.com/new)
3. Configure build settings:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Add environment variables
5. Deploy


## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `SESSION_SECRET` | Secret key for session management | Yes |

## Customization

### Colors

Edit `client/src/index.css` to modify the color scheme. The design uses:
- Primary: Ferrari Red (#DC2626)
- Background: Black/Dark grays
- Accents: Gold highlights

### Content

Update `client/src/pages/home.tsx` to modify:
- Hero section text and video
- Featured models data
- Contact information
- Footer content
