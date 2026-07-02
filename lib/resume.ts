export interface Job {
  title: string;
  company: string;
  location: string;
  dates: string;
  description: string;
  bullets: string[];
}

export const contact = {
  location: "Nanaimo, BC",
  email: "michael@sortofrad.com",
  website: "notsocials.com",
  github: "github.com/SatelliteDish",
  linkedIn: "linkedin.com/in/michael-a-j-vitale",
};

export const summary =
  "Full stack engineer with hands-on experience across web, mobile, and cloud infrastructure. TypeScript and Rust are primary languages, with a broad background spanning systems programming, scripting, and general purpose languages. Strong focus on clean architecture, security, and understanding systems at a low level.";

export const accomplishments: string[] = [
  "Accepted into the New Ventures BC startup accelerator program, securing $10,000 in AWS infrastructure credits that funded the platform's entire cloud foundation",
  "Delivered a full production stack spanning web, mobile, cloud infrastructure, IoT hardware programming, e-commerce, and custom authentication",
  "Identified critical flaws in contractor-delivered AWS infrastructure including hardcoded credentials and broken environment assumptions, then rebuilt it from the ground up into a stable lifecycle-managed dev/prod system",
  "Designed and implemented a zero-cost business email system using Cloudflare routing and AWS SES, providing unlimited custom domain addresses with full send and receive capability at no ongoing cost",
  "Built a custom authentication system from first principles covering JWT key rotation, bcrypt hashing, and cache-backed confirmation flows without relying on third party auth providers",
  "Authored technical writing on Rust including deep dives into the standard library, reflecting a habit of studying languages well beyond surface level",
];

export const experience: Job[] = [
  {
    title: "Lead Software Engineer",
    company: "Not Socials Inc.",
    location: "Vancouver, BC",
    dates: "Mar 2025 - Present",
    description:
      "Pre-launch IoT startup connecting people through NFC technology, accepted into the New Ventures BC accelerator, with a manufactured physical product and fully developed e-commerce platform staged for launch.",
    bullets: [
      "Designed and implemented scalable AWS cloud architecture using CDK, including Aurora Serverless v2, ElastiCache, and a Lambda-based security layer with input sanitization and authentication on sensitive operations",
      "Built and managed a unified IaC and CI/CD system using AWS CDK and GitHub Actions, with lifecycle-based dev/prod environment separation in a shared VPC and automated image builds pushing to ECR via SSM",
      "Built a Next.js web platform and separate React Native (Expo) mobile app, with a fully developed and tested Stripe-integrated e-commerce system staged for launch",
      "Implemented a custom auth system including JWT key rotation, bcrypt hashing, and email/phone confirmation flows backed by cache-based token management",
      "Architected a zero-cost business email system using Cloudflare routing and AWS SES, enabling unlimited custom domain addresses",
      "Programmed type 4 NFC chips via APDU commands, refining the core IoT interaction model",
      "Collaborated with founding stakeholders on technical strategy and product direction",
    ],
  },
  {
    title: "Software Developer",
    company: "DataAnnotation",
    location: "Remote",
    dates: "Jun 2024 - Present",
    description:
      "Contract role contributing to AI code training and evaluation across multiple programming languages, primarily TypeScript, Rust, and Python.",
    bullets: [
      "Evaluated and ranked AI-generated code for correctness, performance, and clarity",
      "Designed containerized development environments and prompts to benchmark agentic AI tools against complex real-world programming tasks",
      "Wrote original code and adapted existing codebases to create meaningful training problems and failure cases",
      "Navigated open source repositories to surface and contextualize problems for model evaluation",
    ],
  },
  {
    title: "Sales Associate",
    company: "Canaropa",
    location: "Vancouver, BC",
    dates: "Mar 2022 - Jun 2024",
    description:
      "Customer-facing sales role at the Vancouver branch of Canaropa, handling inbound orders and general office operations across a small team where responsibilities were broad by nature.",
    bullets: [
      "Developed internal tools using PowerShell and Excel to streamline office workflows and reduce manual workload across the team",
      "Reorganized and audited warehouse stock systems to reduce inventory errors",
      "Handled inbound customer orders, shipping verification, and general office IT support",
    ],
  },
];

export const skillGroups: { label: string; items: string[] }[] = [
  {
    label: "Core",
    items: [
      "TypeScript / JavaScript",
      "React / Next.js",
      "React Native (Expo)",
      "Rust",
      "AWS CDK / IaC",
      "Lambda / Aurora / ElastiCache",
      "CI/CD · GitHub Actions",
      "Cloud architecture",
      "Web security",
      "NFC / IoT integration",
      "PostgreSQL / Valkey",
    ],
  },
  {
    label: "Also comfortable in",
    items: ["C", "C#", "Python", "Bash", "PowerShell", "Java", "SQL"],
  },
];
