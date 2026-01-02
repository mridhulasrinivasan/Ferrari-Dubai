# Ferrari Dubai Showroom

## Overview
A premium landing page for a Ferrari showroom in Dubai featuring a sophisticated red and black color scheme with elegant typography. The application showcases luxury Ferrari vehicles with an immersive user experience.

## Current State
- Fully functional landing page with all sections implemented
- Contact form with backend API integration
- Responsive design with premium styling

## Features
1. **Hero Section**: Full-screen video background with smooth scroll navigation
2. **Featured Models Grid**: 6 Ferrari models with specs (HP, 0-100, Top Speed) and pricing
3. **Virtual Tour CTA**: Immersive call-to-action section with showroom imagery
4. **Contact Form**: Validated form with name, email, phone, model interest, and message fields
5. **Footer**: Newsletter signup, quick links, and company information

## Tech Stack
- Frontend: React with TypeScript, Tailwind CSS, Shadcn UI
- Backend: Express.js with in-memory storage
- Form Validation: Zod with react-hook-form
- Data Fetching: TanStack Query

## Project Structure
```
client/src/
  pages/
    home.tsx        # Main landing page with all sections
  components/ui/    # Shadcn UI components
shared/
  schema.ts         # Contact form schema and types
server/
  routes.ts         # API endpoints (/api/contact)
  storage.ts        # In-memory storage for contact submissions
```

## API Endpoints
- `POST /api/contact` - Submit contact form (validated with Zod)
- `GET /api/contact` - Retrieve all contact submissions

## Design System
- Primary Font: Montserrat (sans-serif)
- Secondary Font: Inter (for technical details)
- Color Scheme: Ferrari red (#DC2626) and black with sophisticated grays
- See `design_guidelines.md` for complete design specifications

## Running the Application
The application runs via the "Start application" workflow using `npm run dev`.
