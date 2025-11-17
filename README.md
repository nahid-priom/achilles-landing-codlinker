# Achilles Virtual Agency - Marketing Website

A modern, premium marketing website built with Next.js, TypeScript, Tailwind CSS, shadcn/ui, and Framer Motion.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui** components
- **Framer Motion** for animations
- **React Hook Form** + **Zod** for form validation

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.



## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── services/          # Services page
│   ├── about/             # About page
│   ├── pricing/           # Pricing page
│   ├── contact/           # Contact page
│   ├── book-a-call/       # Appointment booking page
│   ├── layout.tsx         # Root layout with Navbar & Footer
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── navbar.tsx        # Navigation component
│   ├── footer.tsx        # Footer component
│   ├── hero-section.tsx  # Homepage hero
│   ├── services-grid.tsx # Services grid component
│   ├── lead-form.tsx     # Lead capture form
│   └── ...               # Other reusable components
├── lib/                  # Utility functions
│   └── utils.ts          # Helper functions (cn, etc.)
└── public/               # Static assets
    └── logo.png          # Company logo
```

## Features

- ✅ Fully responsive design (mobile-first)
- ✅ Smooth animations with Framer Motion
- ✅ Form validation with React Hook Form + Zod
- ✅ Accessible components (ARIA labels, keyboard navigation)
- ✅ SEO-friendly structure
- ✅ TypeScript for type safety

## Backend Integration

Currently, forms submit to a simulated API. To integrate with a real backend:

1. **Lead Form** (`components/lead-form.tsx`):
   - Update the `onSubmit` function in `LeadForm` component
   - Replace the simulated API call with your actual endpoint
   - Example:
     ```typescript
     const response = await fetch('/api/leads', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify(data)
     });
     ```

2. **Email Integration**:
   - Consider using services like SendGrid, Resend, or Nodemailer
   - Set up API routes in `app/api/` directory
   - Add environment variables for API keys

3. **Appointment Scheduling**:
   - Integrate with services like Calendly, Cal.com, or build custom scheduling
   - Update the form submission handler in `app/book-a-call/page.tsx`

## Customization

### Colors

Brand colors are defined in `tailwind.config.ts`:
- Lilac: `#E8D5FF` (light: `#F3E8FF`, dark: `#D4B3FF`)
- Pastel Pink: `#FFD5E8` (light: `#FFE8F3`, dark: `#FFB3D4`)

### Content

Update content in:
- Page components (`app/*/page.tsx`)
- Component files (`components/*.tsx`)
- Metadata in `app/layout.tsx`

## License

Built by Codlinker Web Solutions

