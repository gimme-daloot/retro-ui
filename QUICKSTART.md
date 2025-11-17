# 🚀 Quick Start Guide - The Factory OS

Get up and running with The Factory OS in minutes.

## Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The application will open automatically at `http://localhost:3000`

## Using The Factory OS

### Desktop Interface

The Factory OS works just like a classic desktop operating system:

#### Desktop Icons
- **Double-click** any icon to open an application
- Available apps:
  - 💻 **Terminal** - Command-line interface
  - 📚 **Team Library** - Browse AI agent teams
  - 📊 **System Monitor** - View system status
  - 🔐 **Credential Vault** - Coming soon

#### Window Management
- **Drag** windows by their title bar to move them
- **Click** the minimize button (`_`) to minimize to taskbar
- **Click** the close button (`X`) to close the window
- **Click** anywhere on a window to bring it to front
- Multiple windows can be open simultaneously

#### Taskbar
- **START button** - Opens the start menu
- **Window buttons** - Click to restore minimized windows
- **System tray** - Shows current time

#### Start Menu
- Click **START** button or press Windows key
- Navigate hierarchical menu:
  - **Teams** → Team Library, Deploy Team (coming soon)
  - **Tools** → Terminal, System Monitor, Credential Vault
  - **Settings** (coming soon)
  - **Help** (coming soon)

## Using the Applications

### Terminal

The terminal is a command-line interface for interacting with The Factory.

**Available Commands:**

```bash
help      # Show available commands
status    # Display system status
teams     # List available teams
clear     # Clear terminal screen
```

**Keyboard Shortcuts:**
- `Ctrl + L` - Clear screen
- `Enter` - Execute command

**Tips:**
- Terminal auto-focuses input when you click anywhere
- Command history coming in Phase 2

### Team Library

Browse and explore AI agent teams (deployment coming in Phase 2).

**Features:**
- **Sidebar Categories** - Filter teams by type
  - All Teams
  - Development
  - Content
  - Research
- **Team Cards** - View team details
  - Name and icon
  - Version number
  - Description
  - Component tags
  - Status badges
- **Actions** - Deploy and configure (coming soon)

**Current Teams:**
1. **Python Development Team** - Web scraping, data analysis, automation
2. **Video Creation Team** - Video editing and processing
3. **Research & Scraping Team** - Web research and data extraction

### System Monitor

View system health and activity metrics.

**Dashboard Sections:**

1. **Metrics Cards** - High-level stats
   - API Calls Today
   - Active Teams
   - Total Cost
   - Success Rate

2. **Service Status** - Health of backend services
   - PostgreSQL
   - FastAPI
   - n8n
   - Langfuse
   - Claude API

3. **Activity Log** - Real-time event stream
   - Timestamped events
   - Color-coded by type (info/warning/error/success)

**Coming in Phase 2:**
- Real-time monitoring
- Service health checks
- Alert notifications

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl + L` | Clear terminal (when terminal is focused) |
| `Escape` | Close start menu |
| `Double-Click` | Open desktop icon |

## Tips & Tricks

### Window Management
- Stack windows by opening multiple apps
- Minimize windows you're not using to keep desktop clean
- Click taskbar buttons to quickly switch between windows

### Performance
- The app uses 60fps animations for smooth experience
- Glow effects are optimized for modern browsers
- All rendering is done client-side (no backend calls yet)

### Customization
Want to change the theme? Edit `src/styles/factory-theme.css`:

```css
:root {
  --neon-blue: #5d5dff;      /* Change primary color */
  --neon-cyan: #5dffff;      /* Change secondary color */
  --surface: #2a2a3e;        /* Change window background */
}
```

## What Works Now

✅ Desktop environment with icons
✅ Draggable windows
✅ Taskbar with running apps
✅ Start menu navigation
✅ Terminal with basic commands
✅ Team Library browsing
✅ System Monitor dashboard
✅ Smooth animations and effects

## What's Coming Soon

🚧 Backend API integration
🚧 Real Claude AI conversations
🚧 One-click team deployment
🚧 Credential management
🚧 Real-time monitoring
🚧 Command history in terminal

## Troubleshooting

### Development server won't start
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Styles look broken
- Make sure Press Start 2P font loaded from Google Fonts
- Check browser console for CSS errors
- Try hard refresh: `Ctrl + Shift + R`

### Windows won't drag
- Ensure you're dragging by the title bar (colored gradient bar)
- Check that react-draggable is installed: `npm list react-draggable`

### Fonts not loading
- Check internet connection (Google Fonts CDN)
- Font fallback to monospace should still work

## Building for Production

```bash
# Create optimized build
npm run build

# Preview production build locally
npm run preview
```

Output will be in the `dist/` folder, ready to deploy.

## Deployment

### Deploy to Vercel
```bash
npx vercel
```

### Deploy to Netlify
```bash
npx netlify deploy --prod --dir=dist
```

### Deploy to GitHub Pages
```bash
npm run build
# Push dist/ folder to gh-pages branch
```

## Getting Help

- Check the [README.md](./README.md) for architecture details
- Look at component source code in `src/components/`
- Examine theme variables in `src/styles/factory-theme.css`

## Next Steps

1. **Explore the UI** - Open all the apps and get familiar
2. **Check the code** - See how components are structured
3. **Customize the theme** - Make it your own
4. **Wait for Phase 2** - Real AI integration coming soon!

---

**Welcome to The Factory. Let's build something amazing.**
