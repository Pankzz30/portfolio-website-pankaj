# Pankaj Pramod Koli - Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean, professional, and minimal design
- **Responsive**: Fully responsive across all devices
- **Dark/Light Mode**: Toggle between themes
- **Smooth Animations**: Framer Motion animations and transitions
- **Interactive Components**: Hover effects and micro-interactions
- **SEO Optimized**: Meta tags and structured data
- **Performance**: Optimized images and lazy loading
- **TypeScript**: Full type safety
- **Contact Form**: Functional contact form with validation

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Form Handling**: React Hook Form
- **Image Optimization**: Next.js Image component

## 📦 Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/Pankzz30/portfolio.git
cd portfolio
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
# or
yarn install
# or
pnpm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

### AWS Amplify

1. Connect your GitHub repository
2. Configure build settings:
   - Build command: \`npm run build\`
   - Output directory: \`.next\`
3. Deploy

## 📁 Project Structure

\`\`\`
portfolio/
├── app/
│   ├── components/
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   └── ThemeProvider.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
\`\`\`

## 🎨 Customization

### Colors
Update the color scheme in \`tailwind.config.ts\`:
\`\`\`typescript
colors: {
  primary: '#1E3A8A',  // Deep Blue
  accent: '#06B6D4',   // Electric Cyan
}
\`\`\`

### Content
Update personal information in the respective components:
- Hero section: \`app/components/Hero.tsx\`
- About section: \`app/components/About.tsx\`
- Projects: \`app/components/Projects.tsx\`
- Skills: \`app/components/Skills.tsx\`

## 📱 Sections

1. **Hero**: Introduction with typing animation
2. **About**: Education, certifications, and publications
3. **Skills**: Technical skills with animated progress bars
4. **Projects**: Featured projects with interactive cards
5. **Contact**: Contact form and social links
6. **Footer**: Additional links and information

## 🔧 Scripts

- \`npm run dev\`: Start development server
- \`npm run build\`: Build for production
- \`npm run start\`: Start production server
- \`npm run lint\`: Run ESLint

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Pankaj Pramod Koli**
- GitHub: [@Pankzz30](https://github.com/Pankzz30)
- LinkedIn: [Pankaj Koli](https://www.linkedin.com/in/pankaj-koli-9a55b2327)
- Email: pankajkoli3005@gmail.com

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/Pankzz30/portfolio/issues).

## ⭐ Show your support

Give a ⭐️ if this project helped you!