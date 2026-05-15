export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  type: "Seminar" | "Trip";
  date: string;
  excerpt: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "ai-ethics-seminar-2026",
    title: "Navigating AI Ethics in Modern Computing",
    type: "Seminar",
    date: "2026-04-15",
    excerpt: "An insightful seminar exploring the ethical implications of large language models and autonomous systems in society.",
    content: "The seminar featured guest speakers from leading tech firms and academic institutions. We discussed the transparency of algorithmic decision-making, the bias inherent in training datasets, and the potential for AI to both solve and create societal challenges. Key takeaways included the importance of human-in-the-loop systems and the need for robust regulatory frameworks."
  },
  {
    id: "2",
    slug: "quantum-computing-future",
    title: "Quantum Computing: The Next Frontier",
    type: "Seminar",
    date: "2026-05-02",
    excerpt: "A deep dive into quantum supremacy, qubit stability, and the future of cryptography in a post-quantum world.",
    content: "Dr. Aris Thorne delivered a compelling lecture on the current state of quantum hardware. We explored the challenges of error correction and the fascinating potential of quantum algorithms to revolutionize drug discovery and materials science. The session concluded with a discussion on the impending threat to current encryption standards and the rise of quantum-resistant cryptography."
  },
  {
    id: "3",
    slug: "silicon-valley-data-center-visit",
    title: "Inside the Core: Silicon Valley Data Center Visit",
    type: "Trip",
    date: "2026-03-20",
    excerpt: "An educational trip to one of the world's most advanced data centers to witness large-scale infrastructure in action.",
    content: "The trip provided a rare behind-the-scenes look at the massive cooling systems, redundant power supplies, and high-speed networking that power modern cloud services. We learned about the environmental impact of data centers and the innovative liquid cooling solutions being implemented to improve efficiency. Walking through the server aisles emphasized the sheer physical scale of the digital world."
  },
  {
    id: "4",
    slug: "innovation-hub-tour-seattle",
    title: "Seattle Tech Innovation Hub Tour",
    type: "Trip",
    date: "2026-05-10",
    excerpt: "Exploring the startup ecosystem and collaborative research centers in the heart of Seattle's tech district.",
    content: "We visited several incubators and co-working spaces, meeting with founders who are pushing the boundaries of AR/VR and sustainable tech. The tour highlighted the importance of interdisciplinary collaboration and the unique culture that fosters rapid innovation in Seattle. The day ended with a Q&A session with venture capitalists about the qualities they look for in early-stage tech ventures."
  }
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
