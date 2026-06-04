import type { DecisionCardData } from "@/types/connection-card";

export const DECISION_CTA_CARDS: DecisionCardData[] = [
  {
    id: "follow-jesus",
    title: "I decided to follow Jesus",
    description:
      "Whether this is your first step or a fresh start, we're here to celebrate with you and help you grow.",
    buttonLabel: "Learn What's Next",
    buttonUrl: "https://www.churchofthehighlands.com/next-steps/jesus",
    relatedDecision: "committingToJesus",
  },
  {
    id: "water-baptism",
    title: "Water Baptism",
    description:
      "Baptism is a public declaration of your faith. Sign up for our next baptism weekend.",
    buttonLabel: "Sign Up for Baptism",
    buttonUrl: "https://www.churchofthehighlands.com/baptism",
    relatedDecision: "waterBaptism",
  },
  {
    id: "ministry-team",
    title: "Talk with the Ministry Team",
    description:
      "Have questions or want prayer? A member of our team would love to connect with you.",
    buttonLabel: "Request Follow-Up",
    buttonUrl: "#ministry-follow-up",
    relatedDecision: "ministryTeamReachOut",
  },
];
