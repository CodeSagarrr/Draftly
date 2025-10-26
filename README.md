# Email Assistant

A modern web application built with Next.js that helps users generate, paraphrase, and manage emails efficiently using AI technology.

## Features

- **AI Email Generation**: Create professional emails using AI-powered content generation
- **Email Paraphrasing**: Rewrite and improve existing email content
- **Email Templates**: Access to various email templates for different purposes
- **Email Management**: Track and manage sent emails
- **User Authentication**: Secure login and registration system
- **Dashboard**: Comprehensive dashboard for email management
- **Responsive Design**: Modern UI with Tailwind CSS

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS
- **Authentication**: NextAuth.js
- **Database**: Prisma ORM
- **AI Integration**: LangChain with Google Gemini
- **Email Service**: Nodemailer
- **Charts**: Chart.js with React integration

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Database (PostgreSQL || MongoDB)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd email-assistant
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Configure your environment variables:
- Database URL
- NextAuth secret
- Google Gemini API key
- Email service credentials

5. Set up the database:
```bash
npx prisma db push
```

6. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Project Structure

```
app/
├── (routes)/
│   ├── dashboard/          # Dashboard pages
│   ├── login/             # Authentication pages
│   └── register/
├── _Components/           # Reusable components
├── api/                   # API routes
└── globals.css           # Global styles

lib/                      # Utility functions
├── auth.ts              # Authentication config
├── prisma.ts            # Database client
└── utils.ts             # Helper functions
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run push` - Push database schema changes

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is private and proprietary.