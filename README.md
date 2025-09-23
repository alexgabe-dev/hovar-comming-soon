# Hóvár Egyesület - Coming Soon landing page

## 🚀 Features

- **Countdown Timer** - time remaining until launch
- **Location Detection** - automatic city recognition
- **Responsive Design** - perfect on all devices
- **Modern UI** - Tailwind CSS + animations
- **Social Media Integration** - Facebook, Instagram, Apply

## 🛠️ Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - type safety
- **Tailwind CSS** - utility-first CSS
- **Framer Motion** - animations
- **Lucide React** - icons

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Production build
npm run build
npm start
```

## 🔧 Configuration

### Environment Variables
```env
NODE_ENV=production
```

### Security Headers
- CSP (Content Security Policy)
- HSTS (HTTPS only)
- X-Frame-Options
- Permissions Policy

## 📁 Project Structure

```
├── app/
│   ├── components/          # React components
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx           # Homepage
├── hooks/                 # Custom React hooks
├── public/               # Static files
├── middleware.ts         # Next.js middleware
└── next.config.mjs       # Next.js configuration
```

## 🎨 Components

### `IrogepDots.tsx`
Animated dots for loading state.

### `SocialButtons.tsx`
Social media buttons with Facebook, Instagram and Apply links.

### `use-mobile.tsx`
Mobile breakpoint detection hook.

### `use-toast.ts`
Toast notification system - production ready implementation.

## 🔒 Security

- **CSP** - script injection protection
- **HSTS** - HTTPS enforcement
- **X-Frame-Options** - clickjacking protection
- **Permissions Policy** - API access restrictions

## 🚀 Deployment

### Vercel (recommended)
```bash
vercel --prod
```

### Static Export
```bash
npm run build
npm run export
```

## 📱 Responsive

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🎯 Performance

- **Image optimization** - Next.js Image component
- **Code splitting** - automatic chunking
- **Tree shaking** - unused code removal
- **Gzip compression** - compression

## 🐛 Debug

### Console Banner
ASCII art banner appears in console even in production.

### Development Tools
```bash
# TypeScript check
npm run type-check

# Linting
npm run lint

# Build check
npm run build
```

## 📄 License

© 2024 Hóvár Association. All rights reserved.

## 👨‍💻 Developer

**Gábor Sándor** - [vizitor.hu](https://vizitor.hu)

---

*Made with ❤️ for the Carpathian Ruthenian community*
