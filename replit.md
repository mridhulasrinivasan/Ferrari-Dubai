# Ferrari Dubai Showroom

## Overview

A luxury automotive showroom website for Ferrari Dubai, designed to showcase high-end sports cars with a premium, cinematic user experience. The application follows a reference-based luxury automotive design approach inspired by Porsche, Lamborghini configurators, and premium e-commerce sites like Rolex and Tesla.

The site features a full-viewport hero section, featured models grid, virtual tour CTA, heritage/brand story sections, and a contact form with showroom information.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: shadcn/ui component library (Radix UI primitives)
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite with React plugin

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript (compiled with tsx)
- **API Pattern**: RESTful endpoints under `/api` prefix
- **Build Process**: esbuild for server bundling, Vite for client

### Data Storage
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema**: Defined in `shared/schema.ts` using Drizzle's pgTable
- **Current Storage**: In-memory storage (MemStorage class) for development
- **Database Ready**: Drizzle config expects `DATABASE_URL` environment variable for PostgreSQL

### Project Structure
```
client/           # React frontend
  src/
    components/   # UI components (shadcn/ui)
    hooks/        # Custom React hooks
    lib/          # Utilities (queryClient, utils)
    pages/        # Page components
server/           # Express backend
  index.ts        # Server entry point
  routes.ts       # API route definitions
  storage.ts      # Data storage layer
  static.ts       # Static file serving
shared/           # Shared code between client/server
  schema.ts       # Database schema and Zod types
```

### Design System
- **Typography**: Montserrat (primary), Inter (secondary), Playfair Display (serif accents)
- **Color Scheme**: Ferrari red primary (`--primary: 0 84% 42%`), neutral grays
- **Theme**: CSS variables with light/dark mode support
- **Spacing**: Tailwind spacing scale (4, 6, 8, 12, 16, 24, 32)

## External Dependencies

### Core Libraries
- **@tanstack/react-query**: Server state management and caching
- **drizzle-orm**: Type-safe SQL ORM for PostgreSQL
- **zod**: Schema validation for forms and API
- **react-hook-form**: Form state management

### UI Framework
- **Radix UI**: Accessible component primitives (dialog, select, toast, etc.)
- **class-variance-authority**: Component variant styling
- **tailwind-merge**: Tailwind class merging utility
- **lucide-react**: Icon library

### Database
- **PostgreSQL**: Primary database (via DATABASE_URL)
- **connect-pg-simple**: Session storage for Express

### Build & Development
- **Vite**: Frontend bundler with HMR
- **esbuild**: Server bundler for production
- **tsx**: TypeScript execution for development

### Replit-Specific
- **@replit/vite-plugin-runtime-error-modal**: Error overlay
- **@replit/vite-plugin-cartographer**: Development tooling
- **@replit/vite-plugin-dev-banner**: Development banner