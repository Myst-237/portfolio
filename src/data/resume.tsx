import { Icons } from "@/components/icons";
import { FileTextIcon, HomeIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Docker } from "@/components/ui/svgs/docker";
import { Java } from "@/components/ui/svgs/java";

export const DATA = {
  name: "Cadell Griffith",
  initials: "CG",
  url: "https://cadellgriffith.vercel.app",
  location: "Yaoundé, Cameroon",
  locationLink: "https://www.google.com/maps/place/Yaound%C3%A9",
  description:
    "Technical co-founder and software architect. I build trading infrastructure, distributed systems on AWS, and products people pay for.",
  summary:
    "I'm a software architect and technical co-founder with a [Master of Engineering in Computer Software Engineering](/#education) from the École Nationale Supérieure Polytechnique de Yaoundé.\n\nIn 2023 I co-founded [OddsFantasy](https://oddsfantasy.com), a trading terminal for sports prediction markets. I designed its serverless microservices architecture on AWS, built a sub-600 ms execution engine with automated take-profit and stop-loss, and lead a team of five. Alongside it we run [OddsFantasy Prop](https://trade.oddsfantasy.com), a prop firm for prediction-market traders, and I also co-founded [Ofidely](https://ofidely.com), a loyalty program and WhatsApp CRM for local businesses.\n\nI work across the whole stack, from system design and infrastructure as code to the UI and go-to-market. I'm open to software architecture and senior engineering roles in Canada and remote.",
  avatarUrl: "/me.jpg",
  resumeUrl: "/cadell-griffith-resume.pdf",
  skills: [
    { name: "TypeScript", icon: Typescript },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "React", icon: ReactLight },
    { name: "Node.js", icon: Nodejs },
    { name: "Python", icon: Python },
    { name: "AWS Cloud Architecture", icon: undefined },
    { name: "DevOps", icon: undefined },
    { name: "Terraform", icon: undefined },
    { name: "Docker", icon: Docker },
    { name: "MongoDB", icon: undefined },
    { name: "DynamoDB", icon: undefined },
    { name: "RabbitMQ", icon: undefined },
    { name: "Celery", icon: undefined },
    { name: "Solidity", icon: undefined },
    { name: "Java", icon: Java },
    { name: "CI/CD", icon: undefined },
    { name: "Data Analysis", icon: undefined },
    { name: "AI Automation", icon: undefined },
    { name: "Microservices", icon: undefined },
    { name: "Distributed Systems", icon: undefined },
    { name: "System Design", icon: undefined },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/cadell-griffith-resume.pdf", icon: FileTextIcon, label: "Resume" },
  ],
  contact: {
    email: "cadellgriffith@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Myst-237",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/cadell-griffith-4314b5246/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Email",
        url: "mailto:cadellgriffith@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "OddsFantasy",
      href: "https://oddsfantasy.com",
      badges: [],
      location: "Yaoundé, Cameroon · Hybrid",
      title: "Co-Founder & Software Architect",
      logoUrl: "/oddsfantasy.png",
      start: "Jun 2023",
      end: "Present",
      description:
        "- Led the architecture and technical development of the OddsFantasy trading platform\n- Designed and deployed a fully serverless microservices system on AWS, built for scalability and reliability\n- Built a low-latency execution engine (<600 ms) for trading operations, with take-profit and stop-loss automation\n- Developed the data pipelines and analytics systems behind the terminal\n- Ran the infrastructure for ~$50/month while serving 1,000+ monthly active users; reached 100+ users in the first month\n- Managed a team of 5 and owned technical decisions end to end",
    },
    {
      company: "Ofidely",
      href: "https://ofidely.com",
      badges: [],
      location: "Yaoundé, Cameroon",
      title: "Co-Founder & Software Architect",
      logoUrl: "/ofidely.svg",
      start: "Jul 2026",
      end: "Present",
      description:
        "- Built a loyalty program and customer CRM that runs on WhatsApp: customers scan a QR code at the counter to collect points and rewards, with no app to download\n- Business dashboard in Next.js for clients, QR codes, risk rules, redemptions and WhatsApp messages to all customers\n- Integrated the WhatsApp Business Cloud API (OTP sign-in, webhooks, text and image replies) on a DynamoDB single-table design with S3 and Auth.js\n- Bilingual (English/French) product, deployed on a hardened VPS with Ansible, NGINX and Let's Encrypt",
    },
    {
      company: "Ufipay",
      href: "",
      badges: [],
      location: "Yaoundé, Cameroon · On-site",
      title: "Software Engineer Intern",
      logoUrl: "",
      start: "Jun 2022",
      end: "Oct 2023",
      description:
        "- Built the client and account management system for Leel Cash Pay, a financial app: client profiles, account creation, deposits, withdrawals and transfers (Java EE, MVC, JSF, Oracle Database)\n- Researched value-added services for SIM cards and Java Cards using the Taisys thin SIM and the SIMoME API",
    },
    {
      company: "École Nationale Supérieure Polytechnique de Yaoundé",
      href: "https://polytechnique.cm",
      badges: [],
      location: "Yaoundé, Cameroon · On-site",
      title: "Student Software Engineer",
      logoUrl: "/ensp.png",
      start: "Oct 2021",
      end: "Jan 2023",
      description:
        "- Built a multisig crypto wallet for secure, collaborative transactions on Ethereum, with Solidity smart contracts and a Vue.js front end\n- Built a web app that digitizes hospital workflows: patient registration, doctor appointments, consultation queues and payments",
    },
  ],
  education: [
    {
      school: "École Nationale Supérieure Polytechnique de Yaoundé",
      href: "https://polytechnique.cm",
      degree: "Master of Engineering (MEng), Computer Software Engineering · Grade A",
      logoUrl: "/ensp.png",
      start: "2018",
      end: "2023",
    },
  ],
  projects: [
    {
      title: "OddsFantasy",
      href: "https://oddsfantasy.com",
      dates: "Jun 2023 - Present",
      active: true,
      description:
        "A trading terminal for sports prediction markets. Live order books and price charts, one-click trading with automated take-profit and stop-loss, positive-EV and arbitrage scanners, automated entry strategies and trade tracking. Runs on a serverless microservices architecture on AWS with a sub-600 ms execution engine.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Python",
        "AWS (serverless)",
        "Terraform",
        "Docker",
        "MongoDB",
        "RabbitMQ",
        "Celery",
      ],
      links: [
        {
          type: "Website",
          href: "https://oddsfantasy.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/oddsfantasy.jpg",
      video: "",
    },
    {
      title: "OddsFantasy Prop",
      href: "https://trade.oddsfantasy.com",
      dates: "Jun 2024 - Present",
      active: true,
      description:
        "A prop trading firm for sports prediction-market traders: funded accounts up to $50,000 with up to a 90% reward share, plus subscriptions to the OddsFantasy tools suite. Built on WordPress and WooCommerce with recurring subscriptions, Stripe and crypto payments.",
      technologies: [
        "WordPress",
        "WooCommerce",
        "Stripe",
        "Crypto payments",
        "Meta Pixel + CAPI",
      ],
      links: [
        {
          type: "Website",
          href: "https://trade.oddsfantasy.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/prop-firm.jpg",
      video: "",
    },
    {
      title: "Ofidely",
      href: "https://ofidely.com",
      dates: "Jul 2026 - Present",
      active: true,
      description:
        "A loyalty program and WhatsApp CRM for local businesses. Customers scan a QR code at the counter to collect points and rewards with no app to download, and businesses message all their customers on WhatsApp. Bilingual English/French.",
      technologies: [
        "Next.js",
        "TypeScript",
        "WhatsApp Cloud API",
        "DynamoDB",
        "AWS S3",
        "Auth.js",
        "Ansible",
      ],
      links: [
        {
          type: "Website",
          href: "https://ofidely.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/ofidely.jpg",
      video: "",
    },
  ],
} as const;
