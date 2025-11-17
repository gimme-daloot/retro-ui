# 🏭 The Factory OS

**A web-based operating system interface for deploying and managing AI agent teams**

The Factory OS is a Nintendo N64-inspired desktop environment that makes deploying Claude-powered AI teams as easy as installing an app. Think Windows 98 aesthetics meets modern AI orchestration - with a gaming twist.

## 🎮 The Vision

Imagine if deploying sophisticated AI workflows was as simple as double-clicking an icon on your desktop. That's The Factory.

### What is The Factory?

The Factory is a **web-based operating system** that provides a familiar desktop interface for:

- **Browsing & discovering** pre-built AI agent teams from a library
- **One-click deployment** of complete tech stacks (FastAPI + PostgreSQL + n8n + monitoring)
- **Managing credentials** securely through a vault interface
- **Monitoring activity** via system dashboards
- **Interacting with agents** through a terminal interface

### The Factory Philosophy

**"Desktop simplicity meets AI complexity"**

Complex AI orchestration shouldn't require DevOps expertise. The Factory abstracts away the technical complexity of:
- Docker container orchestration
- Database setup and migrations
- API key management
- Service monitoring and health checks
- Agent workflow configuration

Instead, you get a familiar desktop UI where "deploying an AI team" is as intuitive as "installing software."

## 🎨 Design Philosophy

**Windows 98 Structure + Nintendo 64 Aesthetics = The Factory OS**

### Visual Theme
- **Base**: Windows 98 component library (98.css)
- **Colors**: N64 dark charcoal (#2a2a3e) with neon accents
- **Accents**: Neon blue (#5d5dff), cyan (#5dffff), purple (#bd5dff)
- **Typography**: Press Start 2P pixel font
- **Effects**: Smooth glow animations, subtle scanlines

### Why This Aesthetic?
The retro gaming aesthetic isn't just for nostalgia - it's intentional:
- **Familiar**: Everyone knows how to use a desktop OS
- **Playful**: Makes complex AI feel approachable
- **Unique**: Stands out in a sea of modern SaaS interfaces
- **Consistent**: Strong visual identity across all components

## 🏗️ Current Status: Phase 1 - UI Foundation

This repository contains the **complete UI foundation** for The Factory OS. Everything you see here is functional and production-ready - the intelligence just isn't wired up yet.

### ✅ What Works Now

- **Desktop Environment**: Full draggable window management
- **Three Applications**: Terminal, Team Library, System Monitor
- **Start Menu**: Hierarchical navigation system
- **Taskbar**: Running app management with system tray
- **Theme System**: Complete N64 gaming aesthetic
- **Smooth Animations**: 60fps window dragging, glow effects
- **Responsive Design**: Works on different screen sizes

### 🚧 What's Coming in Phase 2

- **Backend Integration**: Connect to actual FastAPI services
- **Claude API**: Real AI agent conversations
- **Team Deployment**: One-click Docker stack deployment
- **Credential Management**: Secure vault for API keys
- **Real Monitoring**: Live service health checks
- **Agent Communication**: Terminal talks to real agents

## 📚 Architecture

### Frontend Stack
- **React 18**: Component framework
- **Vite**: Build tool and dev server
- **98.css**: Windows 98 component library
- **react-draggable**: Window management
- **Press Start 2P**: Pixel font from Google Fonts

### Component Structure
```
src/
├── components/
│   ├── Desktop/          # Desktop background & icons
│   ├── Window/           # Draggable window container
│   ├── Taskbar/          # Bottom taskbar with Start button
│   ├── StartMenu/        # Hierarchical start menu
│   ├── DesktopIcon/      # Desktop icon component
│   └── Apps/
│       ├── Terminal/     # Command-line interface
│       ├── TeamLibrary/  # Browse & deploy teams
│       └── Monitor/      # System monitoring dashboard
├── styles/
│   ├── factory-theme.css # N64 color overrides
│   └── animations.css    # Glow effects & transitions
└── App.jsx              # Main application logic
```

## 🚀 Quick Start

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd retro-ui

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` to see The Factory OS in action.

### Building for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

### Deployment

Deploy to Vercel, Netlify, or any static hosting:

```bash
# Deploy to Vercel
npx vercel

# Deploy to Netlify
npx netlify deploy
```

## 🎯 The Three Core Apps

### 1. Terminal
A command-line interface for interacting with The Factory.

**Current Commands:**
- `help` - Show available commands
- `status` - Display system status
- `teams` - List available teams
- `clear` - Clear terminal screen

**Future:** Direct AI agent communication, deployment commands, system management

### 2. Team Library
Browse and deploy pre-built AI agent teams.

**Current Features:**
- Category filtering (Development, Content, Research)
- Team cards with descriptions and tags
- Three placeholder teams:
  - Python Development Team
  - Video Creation Team
  - Research & Scraping Team

**Future:** One-click deployment, configuration wizards, custom team creation

### 3. System Monitor
Monitor system health and activity.

**Current Features:**
- Metrics dashboard (API calls, teams, cost, success rate)
- Service status table (PostgreSQL, FastAPI, n8n, Langfuse, Claude)
- Activity log with timestamps

**Future:** Real-time monitoring, service health checks, alert system

## 🎨 Customization

### Changing Colors

Edit `src/styles/factory-theme.css`:

```css
:root {
  --neon-blue: #5d5dff;      /* Primary accent */
  --neon-cyan: #5dffff;      /* Secondary accent */
  --neon-purple: #bd5dff;    /* Tertiary accent */
  --surface: #2a2a3e;        /* Window background */
  --desktop-bg: #1a1a2e;     /* Desktop background */
}
```

### Adding New Apps

1. Create app component in `src/components/Apps/YourApp/`
2. Add to `appComponents` in `src/App.jsx`
3. Add desktop icon to `desktopIcons`
4. Add to Start Menu in `src/components/StartMenu/StartMenu.jsx`

## 🔮 The Future: Phase 2 & Beyond

### Phase 2: Backend Integration
- FastAPI backend with PostgreSQL
- Claude API integration
- Docker orchestration
- Credential management
- Real-time monitoring

### Phase 3: Advanced Features
- Custom team builder
- Workflow designer
- Cost tracking and optimization
- Multi-user support
- Team sharing marketplace

### Phase 4: AI Autonomy
- Computer use capabilities
- Self-healing systems
- Autonomous team coordination
- Learning from user patterns

## 🤝 Contributing

The Factory is currently in active development. Contributions welcome!

### Areas for Contribution
- Additional app components
- Theme variations
- Performance optimizations
- Accessibility improvements
- Documentation

## 📝 License

MIT License - feel free to use this for your own projects!

## 🙏 Acknowledgments

- **98.css** - For the amazing Windows 98 component library
- **PostHog OS** - Interface inspiration
- **Nintendo 64** - For the color palette and gaming aesthetic
- **Anthropic Claude** - The AI that powers the intelligence layer

## 📧 Contact

Built by Chris for The Factory OS project.

---

**Remember:** This is Phase 1 - the UI foundation. The real magic happens in Phase 2 when we wire up the AI. But even now, you can deploy this as a standalone retro-themed desktop interface for any web application.

**The Factory is coming. Get ready to build.**
