# SHO Digital Solutions — Website

A complete, production-ready Next.js website for a digital agency.

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Font**: Poppins (Google Fonts)

## 📁 Folder Structure

```
sho-digital/
├── app/
│   ├── layout.tsx              # Root layout with Navbar & Footer
│   ├── page.tsx                # Home page
│   ├── globals.css             # Global styles
│   ├── not-found.tsx           # 404 page
│   ├── about/page.tsx
│   ├── services/page.tsx
│   ├── portfolio/
│   │   ├── page.tsx
│   │   └── [id]/page.tsx       # Dynamic project detail page
│   ├── industries/page.tsx
│   ├── pricing/page.tsx
│   ├── testimonials/page.tsx
│   ├── contact/page.tsx
│   └── blog/
│       ├── page.tsx
│       └── [id]/page.tsx       # Dynamic blog post page
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Sticky navbar with mobile menu
│   │   └── Footer.tsx          # Full footer with CTAstrip
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── ServicesHighlight.tsx
│   │   ├── WhyChooseUs.tsx
│   │   ├── ProcessSection.tsx
│   │   ├── PortfolioPreview.tsx
│   │   ├── TestimonialsSection.tsx
│   │   └── CTASection.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── Badge.tsx
│       └── SectionHeader.tsx
├── lib/
│   └── data.ts                 # All dummy data
├── types/
│   └── index.ts                # TypeScript interfaces
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17+ 
- npm or yarn

### Installation

```bash
# 1. Navigate to the project
cd sho-digital

# 2. Install dependencies
npm install

# 3. Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

### Contact Form Email Setup

Create a `.env.local` file and add:

```bash
RESEND_API_KEY=your_resend_api_key
CONTACT_FROM_EMAIL=Website Leads <onboarding@resend.dev>
CONTACT_TO_EMAIL=hello@shodigital.com
```

Notes:
- `CONTACT_FROM_EMAIL` must use a sender allowed by your Resend account.
- The contact form posts to `/api/contact` and sends emails through Resend.

## 📄 Pages

| Route | Description |
|-------|-------------|
| `/` | Home with hero, services, process, portfolio, testimonials |
| `/about` | Company story, values, team, timeline |
| `/services` | All 6 services with features and CTAs |
| `/portfolio` | Project grid with filters |
| `/portfolio/[id]` | Individual project case study |
| `/industries` | 6 industry-specific sections |
| `/pricing` | 3-tier pricing with FAQ |
| `/testimonials` | All client reviews |
| `/contact` | Contact form with validation + WhatsApp |
| `/blog` | Blog index with featured post |
| `/blog/[id]` | Individual blog article |

## 🎨 Color Palette

| Name | Hex |
|------|-----|
| Navy | `#0A1F44` |
| Electric Blue | `#2563EB` |
| White | `#FFFFFF` |
| Light Gray | `#F9FAFB` |

## ✨ Features

- ✅ Fully responsive (mobile-first)
- ✅ Sticky navbar with mobile hamburger menu
- ✅ SEO metadata on all pages
- ✅ TypeScript interfaces throughout
- ✅ Form validation with error states
- ✅ Dynamic routes for portfolio & blog
- ✅ Hover animations and transitions
- ✅ Optimized images with Next/Image
- ✅ Smooth scroll
- ✅ Accessible semantic HTML
- ✅ WhatsApp integration button
- ✅ Custom 404 page

## 📝 Customization

1. **Brand colors**: Edit `tailwind.config.ts`
2. **Content/data**: Edit `lib/data.ts`
3. **Contact info**: Update `Footer.tsx` and `contact/page.tsx`
4. **Images**: Replace Unsplash URLs with your own images
5. **WhatsApp number**: Search for `wa.me/` and replace the number

## 📦 Dependencies

```json
{
  "next": "14.2.5",
  "react": "^18",
  "react-dom": "^18",
  "lucide-react": "^0.400.0",
  "tailwindcss": "^3.4.1",
  "typescript": "^5"
}
```
