/**
 * Klyvo Official Website Configuration File
 * Strictly Styled with Purple, Black, & White Theme
 */

export const KLYVO_CONFIG = {
  appName: 'Klyvo',
  tagline: 'College se Corporate tak. 🚀',
  subTaglineMain: 'Memes, communities, careers, jobs aur corporate life — sab ek jagah.',
  subTaglineSub: 'India’s #1 Anti-Corporate & Campus Network.',
  creator: 'Kush Mittal',
  version: 'v2.4.0',
  apkSize: '18.5 MB',
  releaseDate: 'September 2026',
  appIcon: '/app_icon.jpg',

  // Live App Deployment & Integration Links
  deployment: {
    webAppUrl: 'http://localhost:5173',
    apkDownloadUrl: '/downloads/klyvo-app-v2.4.0.apk',
    apiEndpoint: 'http://localhost:5173/api',
  },

  // REAL App Features analyzed from codebase
  features: [
    {
      id: 'campus-community',
      iconName: 'GraduationCap',
      title: 'College & Campus Communities',
      shortDesc: 'Verified student spaces for IIT, NIT, DU, NIFT & major Indian colleges to share campus news, memes & experiences.'
    },
    {
      id: 'corporate-translator',
      iconName: 'Sparkles',
      title: 'Corporate BS Translator & Rant Generator',
      shortDesc: 'Instantly decode confusing corporate jargon like "Let’s take this offline" and generate anti-corporate confessions.'
    },
    {
      id: 'messaging-chat',
      iconName: 'MessageSquare',
      title: 'Direct Messaging & Color Chat',
      shortDesc: 'Real-time DMs with custom color themes, status updates, read receipts, and direct peer networking.'
    },
    {
      id: 'reels-memes',
      iconName: 'Tv',
      title: 'Workplace Memes & Short Reels',
      shortDesc: 'Trending corporate meme feeds, appraisal jokes, manager banter, and viral campus video reels.'
    },
    {
      id: 'jobs-salaries',
      iconName: 'Briefcase',
      title: '1-Click Job Apply & Salary Insights',
      shortDesc: 'Explore verified job openings, anonymous salary benchmarks, company reviews, and interview prep.'
    },
    {
      id: 'ai-career',
      iconName: 'Bot',
      title: 'AI STAR Mock Interviews & Resume Scanner',
      shortDesc: 'Practice mock technical & HR interviews with AI, analyze ATS resume scores, and receive instant career coaching.'
    }
  ],

  // REAL App Subscription Tiers & Pricing analyzed directly from App Screenshot
  // Strictly Purple, Black, and White classes
  subscriptionTiers: [
    {
      tier: 'TIER 1',
      name: 'Free Starter',
      price: '₹0',
      duration: 'Forever',
      subtitle: 'Essential community & job apply tools',
      badge: null,
      isPopular: false,
      included: [
        'Home Feed & Memes',
        'College Communities',
        '1-Click Job Apply'
      ],
      notIncluded: [
        'AI STAR Mock Interviews',
        'Full ATS Resume Scanner',
        'AI Studio & Dashboards',
        'Recruiter HR Suite'
      ],
      cta: 'Active Plan',
      ctaClass: 'bg-purple-900 hover:bg-purple-800 text-white font-bold border border-purple-500/50'
    },
    {
      tier: 'TIER 2',
      name: 'Friendly AI Pro 💫',
      price: '₹249',
      duration: '3 Months',
      subtitle: 'Unlimited mock practice & resume scanning',
      badge: 'INTERVIEW PREP 🎯',
      badgeClass: 'bg-purple-950 text-purple-200 border-purple-700',
      isPopular: false,
      included: [
        'Everything in Free Starter',
        'Unlimited AI Mock Interviews',
        'Full ATS Resume Scanner'
      ],
      notIncluded: [
        'AI Career & Salary Dashboard',
        'AI Studio & Meme Creator',
        'Recruiter HR Suite'
      ],
      cta: 'Start AI Pro (₹249)',
      ctaClass: 'bg-purple-900 hover:bg-purple-800 text-white font-bold border border-purple-500/50'
    },
    {
      tier: 'TIER 3',
      name: 'AI Premium 👑',
      price: '₹449',
      duration: '6 Months',
      subtitle: 'Career intelligence & complete AI content suite',
      badge: 'MOST POPULAR 🔥',
      badgeClass: 'bg-purple-600 text-white font-black border-purple-400',
      isPopular: true,
      included: [
        'Everything in Friendly AI Pro',
        'AI Career Dashboard',
        'Salary Dashboard',
        'AI Studio & Meme Creator',
        'Recruiter Pro Analytics'
      ],
      notIncluded: [
        'Verified HR Recruiter Badge',
        'Featured Job Listings'
      ],
      cta: 'Get AI Premium (₹449)',
      ctaClass: 'bg-purple-900 hover:bg-purple-800 text-white font-bold border border-purple-500/50'
    },
    {
      tier: 'TIER 4',
      name: 'Recruiter 🪪',
      price: '₹799',
      duration: '1 Year',
      subtitle: 'Full candidate sourcing & hiring verification',
      badge: 'HIRING & HR 💼',
      badgeClass: 'bg-purple-950 text-purple-300 border-purple-700',
      isPopular: false,
      included: [
        'Everything in AI Premium',
        'Featured Job Listings',
        'AI Candidate Matcher',
        'Verified HR Recruiter Badge',
        'Founder Direct VIP Support'
      ],
      notIncluded: [],
      cta: 'Become a Recruiter (₹799)',
      ctaClass: 'bg-purple-900 hover:bg-purple-800 text-white font-bold border border-purple-500/50'
    }
  ],

  // REAL App Details analyzed from codebase
  appDetails: {
    techStack: [
      { name: 'Frontend Engine', detail: 'React 19 + Vite 8 + Tailwind CSS 4' },
      { name: 'State & Local Persistence', detail: 'Local DB Sync, localStorage recovery & Gmail Auth' },
      { name: 'Database & Schema', detail: 'Prisma Client Architecture & User Database Manager' },
      { name: 'Payment Integration', detail: 'Direct Dynamic PhonePe & UPI Payment to Founder Kush Mittal' }
    ],
    authSystem: 'Seamless Gmail / Google Account Instant Authentication with past profile state auto-restoration.'
  },

  // REAL FAQ Items based on App
  faqs: [
    {
      question: 'Klyvo App kya hai aur yeh kiske liye hai?',
      answer: 'Klyvo India ka #1 Anti-Corporate aur Campus Network hai. Yeh college students, freshers aur working professionals ke liye hai jahan memes, communities, job applications, salary insights aur corporate life sab ek jagah milta hai.'
    },
    {
      question: 'Klyvo me Premium Subscriptions kaise kaam karte hain?',
      answer: 'Klyvo me 4 tiers hain: Free Starter (₹0), Friendly AI Pro (₹249/3 Mo), AI Premium (₹449/6 Mo), aur Recruiter (₹799/1 Yr). Payment Direct PhonePe & UPI se Founder Kush Mittal ko hoti hai aur sabhi AI/Recruiter features instantly unlock ho jaate hain.'
    },
    {
      question: 'App me account kaise banaye ya log in kaise karein?',
      answer: 'Klyvo me log in karna super simple hai. Aap direct apne kisi bhi Gmail / Google ID se 1-click me log in kar sakte hain. Aapka past profile aur posts automatically restore ho jaate hain.'
    },
    {
      question: 'Kya Klyvo par anonymous post ya rant kar sakte hain?',
      answer: 'Haan! Klyvo me Anonymous Confessions aur Corporate Rant Generator built-in hai, jahan aap bina kisi fear ke campus ya corporate life ke baare me post kar sakte hain.'
    },
    {
      question: 'Klyvo Android APK ya Web Browser par kaise chalayein?',
      answer: 'Aap is website se direct Android APK download kar sakte hain, ya "Launch Web App" button par click karke Chrome, Edge, Safari browser me bina install kiye direct chala sakte hain.'
    }
  ]
};
