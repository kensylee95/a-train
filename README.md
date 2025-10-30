# VitalSwap – Fee & FX Rate Simulator

VitalSwap is a modern web application that empowers users to understand, simulate, and compare real transaction fees and FX rates with total clarity.

## Features

- **Live Fee Schedule:**

  - Supports Customer and Business products, each with categorized services and detailed fee rules.
  - Fetches live data from the backend using `/api/get-fees`; designed to proxy remote JSON for flexibility.

- **Transparent Calculators:**

  - "Live Calculator" estimates fees for any product/service and displays applicable min/max, percentage, or fixed rates.
  - FX Simulator enables real-time currency conversions (USD/NGN) with bidirectional calculations and latest rates.

- **Responsive UI, Modern Design:**

  - Built with Tailwind CSS, Framer Motion, Radix UI, and Lucide icons.
  - Fully responsive, mobile-first layouts.
  - Strong separation of server components (data-loading) and client (interactive) UI.

- **Referrals & App Promo:**
  - Seamless support for app store links and partner referral codes.

## Getting Started

1. **Clone the Repository:**

```bash
git clone <https://github.com/kensylee95/a-train.git>
cd a-train
```

2. **Install Dependencies:**

```bash
npm install  # or yarn install
```

3. **Run the Development Server:**

```bash
npm run dev
```

4. **Open Locally:**
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `src/app/page.tsx` – Main entry, fetches fees server-side and renders all sections.
- `src/app/api/get-fees/route.ts` – API endpoint; proxies remote fee data for the app.
- `src/app/api/get-fx-rate/route.ts` – API endpoint; proxies live FX rates (USD/NGN, etc).
- `src/components/FXSimulator.tsx` – Fully client-side FX calculator. Handles user input, swaps, and fetches rates live.
- `src/components/LiveCalculator.tsx` – Interactive fee estimator for all service/product categories.
- `src/components/ComparePlans.tsx`, `PricingOverview.tsx` – Visualizes all categories and fees with mobile/desktop UX.
- `src/types/global.ts` – TypeScript interfaces for fee, FX, and referral data.
- `src/lib/actions.ts` – (Server-side) data utilities for use in server components/pages.
- `src/utils/helper.ts` – Parsing/calculation helpers for fee/FX string logic.

## Key API Endpoints

- **GET `/api/get-fees`**

  - Returns: Full categorized fee JSON: `{ Customer: {...}, Business: {...} }`

- **GET `/api/get-fx-rate?from=USD&to=NGN`**
  - Returns: `{ from: "USD", to: "NGN", rate: <number> }`
  - Swappable: supports `/USD/NGN`, `/NGN/USD`, `/USD/USD`, `/NGN/NGN`

## Data Flow & Patterns

- Server page fetches core fee schedule using server action, passes as prop to all relevant UI sections.
- All live/interactive fetching (especially FX rates) is done **purely client-side**, so SSR stays robust.
- Fee and FX string rules are parsed and computed centrally via `helper.ts`, ensuring DRY logic and maximum accuracy.

## Tech Stack

- Next.js 13+
- TypeScript
- Tailwind CSS
- Framer Motion
- @radix-ui
- lucide-react icons

## Contact & Support

Need help or want to contribute? Join our team or open an issue!

---

VitalSwap Payment Technologies, Inc.

Security note: No sensitive data is ever persisted nor logged from user input in this demo app.
