# R3SULTS - Disaster Management Platform

**Respond. Recover. Rebuild.**

A comprehensive disaster management web application built with Next.js 14, designed to help communities prepare for, respond to, and recover from disasters.

![Next.js](https://img.shields.io/badge/Next.js-14-black)
![React](https://img.shields.io/badge/React-18-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8)

## Features

### 🚨 Core Features
- **Real-time Disaster Tracking** - Live map with active disaster zones
- **Emergency SOS** - One-tap emergency alert system
- **Family Finder** - Locate and track family members during disasters
- **Resource Locator** - Find nearby shelters, food, medical supplies
- **Disaster News Feed** - Real-time updates and alerts
- **Health & Vitals Tracking** - Monitor health metrics during emergencies

### 📱 Additional Features
- **Device Management** - Track and manage linked devices
- **Insurance & Claims** - Manage disaster-related insurance claims
- **Activity Reports** - Document and report damage
- **Notifications Center** - Categorized emergency alerts
- **Comprehensive Settings** - Full control over app preferences

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Shadcn UI
- **Icons:** Lucide React
- **State Management:** React Hooks

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/priyampathak/r3sults.git
cd r3sults
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
R3SULTS/
├── app/
│   ├── auth/              # Authentication pages
│   │   ├── login/
│   │   ├── otp/
│   │   └── profile/
│   ├── dashboard/         # Main application pages
│   │   ├── activity/      # Damage reporting
│   │   ├── devices/       # Device management
│   │   ├── family/        # Family finder
│   │   ├── insurance/     # Claims management
│   │   ├── news/          # Disaster news
│   │   ├── notifications/ # Alerts center
│   │   ├── profile/       # User profile
│   │   ├── resources/     # Resource locator
│   │   ├── settings/      # App settings
│   │   ├── sos/           # Emergency SOS
│   │   └── vitals/        # Health tracking
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx           # Landing page
├── components/
│   ├── ui/                # Shadcn UI components
│   ├── live-map.tsx
│   ├── navbar.tsx
│   └── sidebar.tsx
├── lib/
│   └── utils.ts
└── public/
```

## Key Pages

### Authentication
- **Login** (`/auth/login`) - Phone/Email and social login
- **OTP Verification** (`/auth/otp`) - Secure verification
- **Profile Setup** (`/auth/profile`) - User onboarding

### Dashboard
- **Main Dashboard** (`/dashboard`) - Overview with live map
- **Resources** (`/dashboard/resources`) - Find emergency resources
- **Family Finder** (`/dashboard/family`) - Track family members
- **Disaster News** (`/dashboard/news`) - Real-time updates
- **My Activity** (`/dashboard/activity`) - Report damage
- **SOS Emergency** (`/dashboard/sos`) - Emergency alerts
- **Devices** (`/dashboard/devices`) - Device management
- **Health & Vitals** (`/dashboard/vitals`) - Health tracking
- **Notifications** (`/dashboard/notifications`) - Alert center
- **Insurance** (`/dashboard/insurance`) - Claims management
- **Settings** (`/dashboard/settings`) - App preferences
- **Profile** (`/dashboard/profile`) - User profile

## Design Principles

- **Mobile-First Responsive Design** - Works on all devices
- **Professional UI** - Enterprise-ready interface
- **No Emojis** - Clean, professional appearance
- **Accessibility** - WCAG compliant
- **Performance** - Optimized for fast load times
- **Modular Components** - Reusable and maintainable

## Color Scheme

- **Primary:** #C91F42 (Red)
- **Secondary:** #A01836 (Dark Red)
- **Background:** Gradient from gray-50 to gray-100
- **Text:** Gray-900 for primary, Gray-600 for secondary

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is private and proprietary.

## Contact

Priyam Pathak - [GitHub](https://github.com/priyampathak)

## Acknowledgments

- Next.js team for the amazing framework
- Shadcn for the beautiful UI components
- Lucide for the icon library
- Tailwind CSS for the utility-first CSS framework

---

**Built with ❤️ for disaster preparedness and community resilience**

