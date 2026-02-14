# SYNAPSE Frontend

This is the frontend application for SYNAPSE, an adaptive audio system built with Next.js.

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Context API
- **Real-time**: Socket.IO Client
- **HTTP Client**: Fetch API

## Project Structure

```
frontend/
├── app/                    # Next.js app router pages
│   ├── auth/              # Authentication pages (login, signup)
│   ├── map/               # Map view page
│   ├── session/           # Session management page
│   ├── progress/          # Progress tracking page
│   ├── explainability/    # Explainability dashboard
│   └── contact/           # Contact page
├── components/            # Reusable components
│   ├── hooks/            # Custom React hooks
│   ├── layout/           # Layout components
│   └── ui/               # UI components
├── contexts/             # React Context providers
│   ├── AuthContexts.tsx  # Authentication context
│   └── SocketContext.tsx # Socket.IO context
├── lib/                  # Utility libraries
│   ├── api.ts           # API client functions
│   ├── socket.ts        # Socket.IO client setup
│   ├── audio.ts         # Audio utilities
│   ├── geo.ts           # Geolocation utilities
│   └── constants.ts     # App constants
└── public/              # Static assets
```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- Backend server running on `http://localhost:5000`

### Installation

```bash
npm install
```

### Environment Variables

Create a `.env.local` file in the frontend directory:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
NEXT_PUBLIC_SOCKET_URL=http://localhost:5000
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## Features

### Authentication
- User signup and login
- JWT-based authentication
- Protected routes
- Onboarding flow

### Session Management
- Start/end audio sessions
- Real-time session updates via WebSocket
- Session history tracking

### Real-time Communication
- Socket.IO integration
- Live session updates
- Event-driven architecture

### Location Services
- Geolocation tracking
- Location-based context

### Audio Features
- Custom audio hooks
- Audio playback utilities

## API Integration

The frontend communicates with the backend through:

1. **REST API** (`/api/*`)
   - Authentication endpoints
   - Session management
   - Feedback submission

2. **WebSocket** (Socket.IO)
   - Real-time session events
   - Live updates

## Context Providers

### AuthContext
Manages user authentication state and provides:
- `user` - Current user object
- `login()` - Login function
- `logout()` - Logout function
- `isAuthenticated` - Auth status

### SocketContext
Manages Socket.IO connection and provides:
- `socket` - Socket.IO client instance
- `connected` - Connection status
- Event listeners and emitters

## Custom Hooks

### useLocation
Tracks user's geolocation:
```typescript
const { location, error, loading } = useLocation();
```

### useAudio
Manages audio playback:
```typescript
const { play, pause, stop } = useAudio();
```

## Development Guidelines

1. **File Naming**: Use kebab-case for files, PascalCase for components
2. **TypeScript**: Use strict typing, avoid `any`
3. **Components**: Keep components small and focused
4. **State**: Use Context for global state, local state for component-specific
5. **API Calls**: Use the centralized `lib/api.ts` functions
6. **Styling**: Use Tailwind utility classes

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Troubleshooting

### Socket Connection Issues
- Ensure backend is running
- Check CORS configuration
- Verify `NEXT_PUBLIC_SOCKET_URL` in `.env.local`

### Authentication Issues
- Clear browser cookies
- Check JWT token expiration
- Verify backend `/api/auth` endpoints

### Build Errors
- Delete `.next` folder and rebuild
- Clear `node_modules` and reinstall

## Next Steps

- Implement agent orchestration UI
- Add audio visualization
- Enhance session analytics
- Add progress tracking charts

## License

Private - All rights reserved
