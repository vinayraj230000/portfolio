export const GEMINI_MODELS = [
  'gemini-2.5-flash-lite',
  'gemini-2.5-flash',
  'gemini-2.5-pro',
] as const;

const fallbackReplies: { keywords: string[]; reply: string }[] = [
  {
    keywords: ['hi', 'hello', 'hey'],
    reply: "Hi! 👋 I'm Vinay Raj portfolio assistant. Ask about her projects, skills, or how to hire herr.",
  },
  {
    keywords: ['project', 'portfolio', 'built', 'work'],
    reply: 'Vinay Raj has built MIS Dashboard, Neural AI Search, TestForge AI, StagePass, ArchViz, Cryptrix, and more. Check the Projects page for details!',
  },
  {
    keywords: ['skill', 'tech', 'stack', 'react', 'node', 'next'],
    reply: 'Her stack includes React, Next.js, Node.js, TypeScript, Tailwind, MongoDB, MySQL, and UI/UX design.',
  },
  {
    keywords: ['contact', 'hire', 'email', 'reach'],
    reply: 'You can contact Vinay Raj at vinayraj01276@gmail.com or use the Contact page on this site.',
  },
  {
    keywords: ['experience', 'job', 'work', 'intern'],
    reply: 'She currently works as a MERN Stack Developer at AllHeart Web and has intern experience at Virtuoso Netsoft and CSIO-CSIR.',
  },
];

export function getLocalFallbackReply(input: string): string {
  const normalized = input.toLowerCase().replace(/[^a-z0-9 ]/g, '');

  for (const item of fallbackReplies) {
    if (item.keywords.some((keyword) => normalized.includes(keyword))) {
      return item.reply;
    }
  }

  return "I'm in offline mode right now. Browse the Projects page or email vinay raj at vinayraj01276@gmail.com.";
}

export function isQuotaError(message: string): boolean {
  return (
    message.includes('quota') ||
    message.includes('Quota exceeded') ||
    message.includes('limit: 0') ||
    message.includes('RESOURCE_EXHAUSTED')
  );
}
