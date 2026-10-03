# Wanderlust Weaver

A modern, high-performance, and responsive travel discovery & smart itinerary booking platform built with **React**, **TypeScript**, **Tailwind CSS**, and **Vite**.

---

## Project Overview

**Wanderlust Weaver** is an intuitive web application designed to help travelers discover top global destinations, receive AI-style smart trip suggestions, save favorite locations to an interactive wishlist, explore luxury travel packages, and seamlessly submit custom booking requests.

Whether you are seeking solo adventures, romantic getaways, family fun, or cultural exploration, Wanderlust Weaver weaves tailor-made travel itineraries for an unforgettable journey.

---

## Problem Statement

Planning travel often presents several hurdles:
- **Overwhelming Choices**: Sorting through thousands of travel destinations without clear categorization or smart recommendations.
- **Fragmented Experiences**: Disconnected search filters, booking forms, and saved items forcing users to switch tabs or re-enter data.
- **Poor Mobile UX**: Cluttered layouts that break or degrade on mobile devices and small screens.

---

## Solution

Wanderlust Weaver solves these issues by providing:
1. **Interactive Destination Discovery**: Instant search bar and tag-based filtering (Adventure, Romantic, Family, Solo, Cultural).
2. **Smart Trip Suggestion Engine**: A 3-step recommendation wizard that matches user budget, duration, and trip style to optimal destinations.
3. **Seamless Cross-Component Booking Flow**: One-click booking from Hero, Destination Cards, Detail Modals, and Package Offers directly pre-fills the Reservation Form.
4. **Persistent Wishlist / Saved Destinations Drawer**: LocalStorage-backed bookmarking system allowing users to build their dream itinerary.
5. **Fluid Modern Design & Theme Switcher**: Glassmorphism, smooth micro-animations, full dark/light mode toggle, and responsive mobile layouts.

---

## Features

- 🌟 **Hero Search & Smooth Scroll**: Instant search input connecting to popular destinations with smooth viewport scroll.
- 🗺️ **Popular Destinations Grid**: Filter by travel type, search by keyword, view star ratings, review counts, and best travel seasons.
- 💡 **Smart Trip Suggestion System**: Filter destinations based on user budget, preferred duration, and trip category with top-pick recommendations.
- 🎁 **Exclusive Travel Packages**: Bundled deals highlighting total savings, all-inclusive perks, and direct package reservation.
- 📸 **Interactive Photo Gallery**: Fullscreen image lightbox modal with keyboard and arrow navigation.
- 💬 **Testimonials & Reviews**: Automated sliding carousel featuring real traveler feedback and ratings.
- ❤️ **Saved Wishlist Drawer**: Persistent bookmark drawer in navbar showing saved trip items, total counter, and quick-book triggers.
- 📝 **Reservation & Booking Form**: Interactive form with real-time validation, past date prevention, pre-populated destination selection, and toast notifications.
- 🌓 **Dark & Light Mode Toggle**: Theme toggle with automatic system preference detection and smooth background transition.

---

## Tech Stack

- **Core Framework**: React 18 (TypeScript)
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS + `tailwindcss-animate`
- **UI Components**: Radix UI primitives & Lucide React icons
- **State Management**: React Context API (`TravelContext`) with `localStorage` persistence
- **Feedback & Notifications**: Sonner Toast Notifications
- **Testing**: Vitest & React Testing Library
- **Code Quality**: ESLint 9 & TypeScript 5

---

## Project Structure

```
wanderlust-weaver/
├── public/                 # Static public assets and favicon
├── src/
│   ├── components/         # Modular UI components
│   │   ├── ui/             # Radix UI primitives (Button, Modal, Toast, etc.)
│   │   ├── Contact.tsx     # Booking reservation form & interactive map visual
│   │   ├── DestinationCard.tsx # Individual destination card with wishlist toggle
│   │   ├── DestinationModal.tsx # Detailed destination view modal
│   │   ├── Destinations.tsx# Filterable grid of popular destinations
│   │   ├── Footer.tsx      # Responsive footer with newsletter subscription
│   │   ├── Gallery.tsx     # Fullscreen photo gallery lightbox
│   │   ├── Hero.tsx        # Hero banner with background image & search bar
│   │   ├── Navbar.tsx      # Sticky header with theme toggle & wishlist drawer trigger
│   │   ├── Packages.tsx    # Special travel packages grid
│   │   ├── Testimonials.tsx# Traveler review carousel
│   │   ├── TripPlanner.tsx # Smart 3-step recommendation wizard
│   │   └── WishlistDrawer.tsx # Slide-out saved destinations drawer
│   ├── context/
│   │   └── TravelContext.tsx # Global state provider for search, wishlist & booking
│   ├── data/
│   │   └── travelData.ts   # Structured destinations, packages & testimonials data
│   ├── lib/
│   │   └── utils.ts        # Helper functions (`cn` for Tailwind class merges)
│   ├── pages/
│   │   ├── Index.tsx       # Main single-page application entry page
│   │   └── NotFound.tsx    # 404 fallback page
│   ├── test/               # Vitest unit test suites
│   │   ├── Contact.test.tsx
│   │   ├── TravelContext.test.tsx
│   │   ├── example.test.ts
│   │   └── travelData.test.ts
│   ├── App.tsx             # Main routing setup
│   ├── main.tsx            # React DOM entry point
│   └── index.css           # Design tokens, variables & base styles
├── .env.example            # Environment variables template
├── .gitignore              # Files ignored by Git
├── eslint.config.js        # ESLint configuration
├── index.html              # HTML entry template
├── package.json            # Dependencies and npm scripts
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite configuration
```

---

## Prerequisites

- **Node.js**: `v18.0.0` or higher
- **npm**: `v9.0.0` or higher

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Tejaswini-2006/wanderlust-weaver.git
   cd wanderlust-weaver
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

---

## Environment Variables

Refer to `.env.example` for available environment variables:

```bash
cp .env.example .env
```

Key variables:
- `VITE_APP_TITLE`: Application title displayed in header.
- `VITE_APP_URL`: Development or production URL.

---

## How to Run

Start the local development server with instant hot-module replacement (HMR):

```bash
npm run dev
```

Open [http://localhost:8080](http://localhost:8080) in your browser.

---

## Build

To compile a production-ready bundle with optimized minification and gzip compression:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## Database Setup

*Wanderlust Weaver currently operates with a client-side data layer (`src/data/travelData.ts`) and browser `localStorage` persistence for saved wishlists.*

For future backend integrations (e.g. Node.js/Express, PostgreSQL, or Supabase):
1. Connect your database driver via environment variables.
2. Replace static arrays with API query hooks using `@tanstack/react-query`.

---

## API Documentation

While the frontend currently consumes local data modules, the data model supports RESTful endpoint consumption:

| Endpoint | Method | Description | Request Parameters / Body | Response |
| :--- | :--- | :--- | :--- | :--- |
| `/api/destinations` | `GET` | Fetch all travel destinations | `?type=adventure&search=bali` | `Array<Destination>` |
| `/api/packages` | `GET` | Fetch special travel packages | None | `Array<Package>` |
| `/api/booking` | `POST` | Submit a trip reservation request | `{ name, email, phone, destination, date, travelers, message }` | `{ status: "success", bookingId: string }` |

---

## Authentication

Current authentication flow handles user preferences (dark mode, saved wishlists) via secure local storage. 
When connecting an authentication provider (Auth0, Firebase, or Supabase):
- Users log in to sync wishlists across devices.
- Booking forms auto-fill account user profiles.

---

## Testing

Run unit tests via **Vitest**:

```bash
# Run tests once
npm test

# Run tests in watch mode
npm run test:watch
```

Existing test suites verify:
- Data structure integrity (`travelData.ts`)
- Wishlist toggles and state management (`TravelContext.tsx`)
- Search filtering logic & form submission validation

---

## Troubleshooting

- **Deprecation warnings on `npm install`**: Safe to ignore; dependencies are pinned and compatible.
- **Port conflicts**: If port 8080 is occupied, Vite will automatically select the next available port.
- **Dark mode reset**: Theme settings are stored in `localStorage.getItem('darkMode')`. Clearing browser storage resets to system preference.

---

## Future Improvements

- 🌐 Multi-language i18n support (English, Spanish, French, Japanese).
- ✈️ Integration with live Flight & Hotel APIs (Amadeus, Skyscanner).
- 🗺️ Mapbox / Google Maps API integration for interactive route plotting.
- 💳 Stripe payment gateway integration for direct package purchases.

---

## Author

**Tejaswini Rakhunde**
- GitHub: [@Tejaswini-2006](https://github.com/Tejaswini-2006)
- Repository: [wanderlust-weaver](https://github.com/Tejaswini-2006/wanderlust-weaver)

---

## License

This project is licensed under the [MIT License](LICENSE).
