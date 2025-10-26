import {
  BarChart3,
  Copy,
  Edit3,
  LucideLayoutTemplate,
  Send,
  Sparkles,
  Type,
} from "lucide-react";
import toast from "react-hot-toast";
import { FaHistory, FaParagraph } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { BsFillSendArrowUpFill } from "react-icons/bs";

// Data
export const locations = [
  { id: 1, path: "#home", label: "Home" },
  { id: 2, path: "#process", label: "How it's work" },
  { id: 3, path: "#features", label: "Features" },
  { id: 4, path: "#faq", label: "FAQ" },
];

export const features = [
  {
    id: 1,
    heading: "Smart Drafting",
    paragraph:
      "Turn rough notes or bullet points into polished emails in seconds with AI-powered drafting.",
    icon: Edit3,
  },
  {
    id: 2,
    heading: "Tone Customization",
    paragraph:
      "Choose from formal, casual, persuasive, or friendly tones to match your message style.",
    icon: Type,
  },
  {
    id: 3,
    heading: "One-Click Polish",
    paragraph:
      "Grammar, clarity, and flow are refined automatically so every email looks professional.",
    icon: Sparkles,
  },
  {
    id: 4,
    heading: "Direct Send & Schedule",
    paragraph:
      "Send instantly or schedule emails for later, directly from your connected inbox.",
    icon: Send,
  },
  {
    id: 5,
    heading: "Reusable Templates",
    paragraph:
      "Save your favorite drafts as templates to reuse and speed up future communication.",
    icon: Copy,
  },
  {
    id: 6,
    heading: "Analytics Insights",
    paragraph:
      "Track opens and responses to understand what’s working and optimize your emails.",
    icon: BarChart3,
  },
];

export const faqs = [
  {
    id: 1,
    question: "What does this tool do?",
    answer:
      "It helps you turn rough notes into clear, professional emails with AI.",
  },
  {
    id: 2,
    question: "Can I choose how my email sounds?",
    answer:
      "Yes, you can pick a tone like formal, casual, or persuasive before generating.",
  },
  {
    id: 3,
    question: "Do I need to install anything?",
    answer: "No, it runs fully online. Just sign up and start writing.",
  },
  {
    id: 4,
    question: "Can I send emails directly from the app?",
    answer:
      "Yes, you can send instantly or schedule them once your inbox is connected.",
  },
];

export const dashboardNav = [
  { id: 1, label: "Templates", icons: LucideLayoutTemplate, path: "/dashboard/templates" },
  {
    id: 3,
    label: "Your Created Email",
    icons: FaHistory,
    path: "/dashboard/created-emails",
  },
  { id: 2, label: "Email Writer", icons: MdAttachEmail, path: "/dashboard" },
  { id: 4, label: "Paraphrasing", icons: FaParagraph, path: "/dashboard/paraphraser" },
  { id: 5, label: "Send To", icons: BsFillSendArrowUpFill, path: "/dashboard/send-to" },
];

export const Language = [
  "Englidh (Us)",
  "Indian English",
  "Arabic",
  "Chinese (Simplified)",
  "French",
  "German",
  "Hindi",
  "Italian",
  "Japanese",
  "Korean",
  "Russian",
  "Spanish",
];

export const Tone = [
  "Apologetic",
  "Casual",
  "Critical",
  "Diplomatic",
  "Enthusiastic",
  "Formal",
  "Friendly",
  "Humorous",
  "Motivational",
  "Persuasive",
  "Sarcastic",
  "Sympathetic",
];

export const Length = ["Short", "Medium", "Long"];

export const EmailTemplates = [
  {
    id: 1,
    topic:
      "Write an email to apply for a Full Stack Developer internship at a startup",
    category: "Job Application",
    rating: 4.8,
    bgColor: "#FDE68A",
  },
  {
    id: 2,
    topic: "Create a follow-up email after an interview with HR",
    category: "Follow-up",
    rating: 4.7,
    bgColor: "#BFDBFE",
  },
  {
    id: 3,
    topic: "Draft an email to invite clients to a product demo meeting",
    category: "Business",
    rating: 4.6,
    bgColor: "#FCA5A5",
  },
  {
    id: 4,
    topic: "Write a cold email to pitch my web design services",
    category: "Sales",
    rating: 4.5,
    bgColor: "#BBF7D0",
  },
  {
    id: 5,
    topic: "Create a professional apology email to a client for late delivery",
    category: "Customer Support",
    rating: 4.9,
    bgColor: "#DDD6FE",
  },
  {
    id: 6,
    topic: "Write a thank-you email after closing a project successfully",
    category: "Gratitude",
    rating: 4.8,
    bgColor: "#FBCFE8",
  },
  {
    id: 7,
    topic: "Draft an email to my manager requesting leave for two days",
    category: "Workplace",
    rating: 4.6,
    bgColor: "#A7F3D0",
  },
  {
    id: 8,
    topic:
      "Create an email to follow up with a recruiter about application status",
    category: "Follow-up",
    rating: 4.7,
    bgColor: "#FEF3C7",
  },
  {
    id: 9,
    topic: "Write an email to HR for a role change request",
    category: "Workplace",
    rating: 4.5,
    bgColor: "#FDE68A",
  },
  {
    id: 10,
    topic: "Draft an email to schedule a meeting with a potential client",
    category: "Business",
    rating: 4.8,
    bgColor: "#BFDBFE",
  },
  {
    id: 11,
    topic: "Write a professional email to request a project deadline extension",
    category: "Workplace",
    rating: 4.6,
    bgColor: "#FCA5A5",
  },
  {
    id: 12,
    topic: "Create a reminder email for payment pending invoice",
    category: "Finance",
    rating: 4.5,
    bgColor: "#BBF7D0",
  },
  {
    id: 13,
    topic:
      "Write a formal email to college professor requesting recommendation letter",
    category: "Academic",
    rating: 4.9,
    bgColor: "#DDD6FE",
  },
  {
    id: 14,
    topic: "Draft an introduction email for new client onboarding",
    category: "Business",
    rating: 4.7,
    bgColor: "#FBCFE8",
  },
  {
    id: 15,
    topic: "Create a follow-up email for a sales prospect who hasn’t responded",
    category: "Sales",
    rating: 4.6,
    bgColor: "#A7F3D0",
  },
  {
    id: 16,
    topic: "Write an email to invite team for project kickoff meeting",
    category: "Workplace",
    rating: 4.8,
    bgColor: "#FEF3C7",
  },
  {
    id: 17,
    topic: "Create an email to request feedback after completing a workshop",
    category: "Engagement",
    rating: 4.7,
    bgColor: "#FDE68A",
  },
  {
    id: 18,
    topic: "Write a customer apology email for delayed response",
    category: "Customer Support",
    rating: 4.9,
    bgColor: "#BFDBFE",
  },
  {
    id: 19,
    topic: "Draft an appreciation email for a coworker’s excellent performance",
    category: "Gratitude",
    rating: 4.6,
    bgColor: "#FCA5A5",
  },
  {
    id: 20,
    topic: "Write a professional resignation email with two weeks’ notice",
    category: "Workplace",
    rating: 4.9,
    bgColor: "#BBF7D0",
  },
  {
    id: 21,
    topic: "Create a partnership proposal email to a brand",
    category: "Business",
    rating: 4.8,
    bgColor: "#DDD6FE",
  },
  {
    id: 22,
    topic: "Draft a newsletter announcement for product update",
    category: "Marketing",
    rating: 4.5,
    bgColor: "#FBCFE8",
  },
  {
    id: 23,
    topic: "Write an event invitation email for webinar registration",
    category: "Marketing",
    rating: 4.7,
    bgColor: "#A7F3D0",
  },
  {
    id: 24,
    topic: "Create an onboarding welcome email for new users",
    category: "Marketing",
    rating: 4.8,
    bgColor: "#FEF3C7",
  },
  {
    id: 25,
    topic: "Draft an email to request testimonial from satisfied client",
    category: "Engagement",
    rating: 4.6,
    bgColor: "#FDE68A",
  },
  {
    id: 26,
    topic: "Write a polite reminder email for a pending document submission",
    category: "Workplace",
    rating: 4.7,
    bgColor: "#BFDBFE",
  },
  {
    id: 27,
    topic: "Create a short thank-you note after receiving job offer",
    category: "Job Application",
    rating: 4.9,
    bgColor: "#FCA5A5",
  },
  {
    id: 28,
    topic: "Draft an email to share project updates with the team",
    category: "Workplace",
    rating: 4.5,
    bgColor: "#BBF7D0",
  },
  {
    id: 29,
    topic: "Write an email to HR to update my contact details",
    category: "Workplace",
    rating: 4.6,
    bgColor: "#DDD6FE",
  },
  {
    id: 30,
    topic: "Create a professional email to apologize for a missed meeting",
    category: "Workplace",
    rating: 4.8,
    bgColor: "#FBCFE8"
  },
  {
    id: 31,
    topic: "Draft an investor pitch email for new SaaS product",
    category: "Business",
    rating: 4.9,
    bgColor: "#A7F3D0",
  },
  {
    id: 32,
    topic: "Write a marketing campaign email for festive season discount",
    category: "Marketing",
    rating: 4.5,
    bgColor: "#FEF3C7",
  },
  {
    id: 33,
    topic: "Create a partnership inquiry email to collaborate on event",
    category: "Business",
    rating: 4.7,
    bgColor: "#FDE68A",
  },
  {
    id: 34,
    topic:
      "Draft a personal introduction email to connect with an industry mentor",
    category: "Networking",
    rating: 4.8,
    bgColor: "#BFDBFE",
  },
  {
    id: 35,
    topic:
      "Write a short appreciation email to a client for choosing our services",
    category: "Customer Support",
    rating: 4.9,
    bgColor: "#FCA5A5",
  },
  {
    id: 36,
    topic: "Create an email to re-engage inactive customers",
    category: "Marketing",
    rating: 4.6,
    bgColor: "#BBF7D0",
  },
  {
    id: 37,
    topic: "Draft a formal request email for internship certificate",
    category: "Academic",
    rating: 4.8,
    bgColor: "#DDD6FE",
  },
  {
    id: 38,
    topic: "Write a polite rejection email to a vendor proposal",
    category: "Business",
    rating: 4.6,
    bgColor: "#FBCFE8",
  },
  {
    id: 39,
    topic: "Create a collaboration email with a YouTube influencer",
    category: "Marketing",
    rating: 4.7,
    bgColor: "#A7F3D0",
  },
  {
    id: 40,
    topic: "Draft a formal complaint email to a service provider",
    category: "Customer Support",
    rating: 4.5,
    bgColor: "#FEF3C7",
  },
  {
    id: 41,
    topic: "Write a friendly catch-up email to an old colleague",
    category: "Networking",
    rating: 4.6,
    bgColor: "#FDE68A",
  },
  {
    id: 42,
    topic: "Create an announcement email for company milestone celebration",
    category: "Business",
    rating: 4.8,
    bgColor: "#BFDBFE",
  },
  {
    id: 43,
    topic: "Draft an appreciation email for HR after onboarding experience",
    category: "Workplace",
    rating: 4.7,
    bgColor: "#FCA5A5",
  },
  {
    id: 44,
    topic: "Write a polite reminder to client for contract renewal",
    category: "Business",
    rating: 4.6,
    bgColor: "#BBF7D0",
  },
  {
    id: 45,
    topic: "Create a thank-you email after attending a conference",
    category: "Networking",
    rating: 4.8,
    bgColor: "#DDD6FE",
  },
  {
    id: 46,
    topic: "Draft a professional introduction email for new job role",
    category: "Workplace",
    rating: 4.9,
    bgColor: "#FBCFE8",
  },
  {
    id: 47,
    topic: "Write a formal escalation email to resolve urgent issue",
    category: "Customer Support",
    rating: 4.6,
    bgColor: "#A7F3D0",
  },
  {
    id: 48,
    topic: "Create a follow-up email for proposal shared last week",
    category: "Sales",
    rating: 4.5,
    bgColor: "#FEF3C7",
  },
  {
    id: 49,
    topic: "Draft an email to schedule performance review discussion",
    category: "Workplace",
    rating: 4.7,
    bgColor: "#FDE68A",
  },
  {
    id: 50,
    topic: "Write a feedback request email for recently delivered project",
    category: "Engagement",
    rating: 4.8,
    bgColor: "#BFDBFE",
  },
];

// functions
export const CopyText = (result: string) => {
  if (result) {
    navigator.clipboard.writeText(result);
    toast.success("Your email text has copied!");
  } else {
    toast.error("Email has not copied!");
  }
};
