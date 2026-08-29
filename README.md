# E-Store

A simple, clean, and responsive e-commerce frontend built with Next.js. Browse a list of products and view detailed information for each one.

**Live Url:** [https://zabsys-ecommerce-next-js-project.vercel.app/](https://zabsys-ecommerce-next-js-project.vercel.app/)

## Overview

This is a **frontend-only** project — there is no backend or admin panel. All product data is fetched directly from the public API at **[https://restful-api.dev/](https://restful-api.dev/)**.

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm (or yarn/pnpm)

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/khalidhossain5000/zabsys-ecommerce-next-js-project.git
   cd zabsys-ecommerce-next-js-project
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Run the development server
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Features

- Responsive product listing page showing all available products
- Dedicated product detail page for each item, accessible by clicking a product
- Graceful handling of inconsistent/missing fields in the API response (e.g. products with `data: null`, or fields with varying casing like `price` / `Price`)
- Loading states for a smoother browsing experience
- Clean, professional UI built with Tailwind CSS

## Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** react-icons
- **Data Source:** [restful-api.dev](https://restful-api.dev/) — `GET /objects`

## Project Structure

```
app/
  page.tsx                 → Home page (product listing)
  products/[id]/page.tsx   → Product detail page
components/
  NavBar.tsx
  ProductCard.tsx
  ProductDetails.tsx
  ...
lib/
  api.ts                   → API fetch functions
Types/
  types.ts                 → TypeScript interfaces
```

## API Reference

All product data in this project comes from **[restful-api.dev](https://restful-api.dev/)**, specifically:
```
GET https://api.restful-api.dev/objects
```

This is a public demo API with a fixed set of sample products. No API key is required.

## Notes

- The API returns product `data` fields with inconsistent naming (e.g. `capacity` vs `Capacity`, `price` vs `Price`), and some products have `data: null`. This is handled gracefully throughout the UI rather than assuming a fixed schema.
