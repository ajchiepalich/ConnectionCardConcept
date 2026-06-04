import type { ManagedContentCardData } from "@/types/connection-card";

/**
 * Mock managed content — swap for CMS fetch in lib/api/get-managed-content.ts
 */
export const MOCK_MANAGED_CONTENT: ManagedContentCardData[] = [
  {
    id: "summer-blast",
    title: "Register for Summer Blast",
    description:
      "A fun-filled week for kids to grow in faith and make new friends. Spots fill quickly!",
    imageUrl: "/images/summer-blast.webp",
    imageAlt:
      "Kids wearing Highlands Kids shirts, smiling together at Summer Blast",
    ctaLabel: "Register Now",
    ctaUrl: "https://www.churchofthehighlands.com/events/summer-blast",
    tag: "Kids & Students",
    dateTime: "June 9–13, 2026",
    audience: ["all"],
  },
  {
    id: "anthem",
    title: "Register for Anthem",
    description:
      "Middle and high school students — worship, community, and life-changing teaching.",
    imageUrl: "/images/anthem.webp",
    imageAlt:
      "Students smiling together holding Motion Midweek and Motion Night cards",
    ctaLabel: "Learn More",
    ctaUrl: "https://www.churchofthehighlands.com/students",
    tag: "Students",
    audience: ["all"],
  },
  {
    id: "growth-track",
    title: "Growth Track",
    description:
      "Discover your purpose and learn how to use your gifts to make a difference.",
    imageUrl: "/images/growth-track.webp",
    imageAlt:
      "Two men greeting each other with a handshake in a welcoming church lobby",
    ctaLabel: "Sign Up",
    ctaUrl: "https://www.churchofthehighlands.com/growth-track",
    tag: "Next Steps",
    audience: ["guest", "member"],
  },
  {
    id: "small-groups",
    title: "Small Groups",
    description:
      "Find community and grow in faith alongside others who are on the same journey.",
    imageUrl: "/images/small-groups.webp",
    imageAlt:
      "Four men smiling together outside a Church of the Highlands building",
    ctaLabel: "Find a Group",
    ctaUrl: "https://www.churchofthehighlands.com/groups",
    tag: "Community",
    audience: ["all"],
  },
  {
    id: "serve-day",
    title: "Serve Day",
    description:
      "Join us as we serve our city together — a great way to get involved and make an impact.",
    imageUrl: "/images/serve-day.webp",
    imageAlt:
      "Serve Team volunteers in red shirts working together outdoors on Serve Day",
    ctaLabel: "Volunteer",
    ctaUrl: "https://www.churchofthehighlands.com/serve-day",
    tag: "Serve",
    dateTime: "Saturday, Aug 15, 2026",
    campusVisibility: ["grant", "huntsville", "montgomery"],
    audience: ["all"],
  },
  {
    id: "dream-team",
    title: "Dream Team",
    description:
      "Use your gifts on the weekend team — hospitality, production, kids, and more.",
    imageUrl: "/images/dream-team.webp",
    imageAlt:
      "Four young women smiling together at a Highlands student gathering",
    ctaLabel: "Get Involved",
    ctaUrl: "https://www.churchofthehighlands.com/dream-team",
    tag: "Serve",
    audience: ["member", "all"],
  },
  {
    id: "events",
    title: "Upcoming Events",
    description:
      "See what's happening across Highlands campuses this month.",
    imageUrl: "/images/events.webp",
    imageAlt:
      "Students cheering with hands raised at a lively Highlands night event",
    ctaLabel: "View Events",
    ctaUrl: "https://www.churchofthehighlands.com/events",
    tag: "Events",
    audience: ["all"],
  },
];
