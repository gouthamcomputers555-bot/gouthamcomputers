# TechNest — Computer & CCTV Sales & Services

A responsive React + Vite ecommerce/service website inspired by the supplied TechNest-style reference design.

## Included

- Responsive React + JavaScript + CSS
- Computer, laptop, accessories, CCTV, networking, storage and service products
- Search and category filtering
- Product cards with automatic price/old-price rendering
- Product detail modal
- 3-image product slider with arrows and dots
- Buy/Enquire button opens WhatsApp with the selected product details
- Cart drawer for multiple products
- WhatsApp enquiry for all cart items
- Computer and CCTV service section
- About section
- Google Maps location button using the supplied map link
- Newsletter form UI
- Mobile responsive navigation
- Vercel-ready Vite project
- `public/DESIGN_REFERENCE.jpg` contains the supplied visual reference

## Add more products

Open:

`src/data/products.js`

Copy one product object and change:

- `id`
- `name`
- `category`
- `price`
- `oldPrice`
- `badge`
- `sku`
- `images` — use exactly 3 image URLs for the slider
- `description`
- `features`

The React UI automatically uses the new product's price, details and images.

## WhatsApp number

The site currently uses:

`+91 63693 58582`

Change `WHATSAPP_NUMBER` and `STORE_PHONE` at the top of `src/App.jsx` if needed.

Important: WhatsApp opens a pre-filled message. The customer still needs to press Send in WhatsApp.

## Google Maps

The About section uses the supplied location link:

https://maps.app.goo.gl/oh5NAcawMP2Z6bgB7

## Run locally

```bash
npm install
npm run dev
```

Open the local Vite URL shown in the terminal.

## Production test

```bash
npm run build
npm run preview
```

## Deploy to Vercel

Push the project to GitHub and import it into Vercel.

Vercel can detect the Vite/React project automatically. The normal build command is:

`npm run build`

Output directory:

`dist`

You can also use Vercel Drop to upload a project zip.

## Notes

The product photos in this demo use image URLs so the zip stays lightweight. Replace them with your own local product images or CDN URLs in `src/data/products.js` when you have the real catalogue.
