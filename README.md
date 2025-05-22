# AI Day: Vibe Coding Edition

A modern landing page for an AI-focused developer workshop/hackathon built with React, TypeScript, and Tailwind CSS.

![AI Day: Vibe Coding Edition Banner](public/placeholder.svg)

## 📋 About

This project serves as a landing page for "AI Day: Vibe Coding Edition" - an event focused on teaching developers how to leverage AI tools in their workflow. The site includes sections for event information, featured AI tools, rewards, and registration.

## 🛠️ Technologies Used

- **React** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Component library

## 🚀 Features

- Responsive design optimized for all device sizes
- Modern UI with hover animations and interactive components
- Comprehensive showcase of AI development tools categorized by function:  - AI Code Assistants (GitHub Copilot, Gemini Code Assist, Claude, ChatGPT)
  - AI-Powered IDEs & Editors (Cursor, Windsurf, VS Code, Replit)
  - Full-Stack Platforms (v0.dev, a0.dev)
  - Backend & Databases (Firebase)
  - Version Control & Deployment (Git, GitHub, Vercel, Netlify)
- Event information and registration section
- Rewards and participation benefits section
- Participant ID card generation

## 🏁 Getting Started

### Prerequisites

- Node.js (LTS version recommended)
- npm or yarn package manager

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/ai-day-vibe-coding-edition.git
   cd ai-day-vibe-coding-edition
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   # or 
   bun install
   ```

3. Set up environment variables
   ```bash
   cp .env.example .env
   ```
   Then edit `.env` file with your specific configuration

4. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   bun dev
   ```

5. Open your browser and navigate to `http://localhost:5173`

## 🔧 Development

### Project Structure

```
ai-day-vibe-coding-edition/
├── public/              # Static assets
├── src/
│   ├── assets/          # Project-specific assets
│   ├── components/      # React components
│   │   └── ui/          # shadcn/ui components
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions
│   ├── pages/           # Page components
│   ├── App.tsx          # Main application component
│   └── main.tsx         # Application entry point
```

### Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run lint` - Run ESLint
- `npm run preview` - Preview the production build

## 📦 Deployment

### Using Vercel

1. Import your GitHub repository on Vercel
2. Configure your deployment settings
3. Deploy

### Using Netlify

1. Import your GitHub repository on Netlify
2. Configure your build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
3. Deploy

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgements

- All the AI tools featured in the project
- [shadcn/ui](https://ui.shadcn.com/) for the component library
- [Tailwind CSS](https://tailwindcss.com) for the styling framework
- [Vite](https://vitejs.dev/) for the build tool
- [React](https://reactjs.org/) for the UI library
