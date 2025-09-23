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

MIT License - Free for NGOs and non-commercial use.

Copyright (c) 2025 Hóvár Association

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE. 

## 👨‍💻 Developer

**Gábor Sándor** - [vizitor.hu](https://vizitor.hu) | [GitHub](https://github.com/alexgabe-dev)

---

*Made with ❤️ for the Transcarphatian Hungarian communities*
