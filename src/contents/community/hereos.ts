import type { Benefit } from "src/types/benefit.type";
import type { ExploreSection } from "src/types/explore-section.type";

export const benefits: Benefit[] = [
  {
    icon: {
      src: "/svg/heroes/oppritunities-to-grow.svg",
    },
    title: "Oppurtunities to grow",
    text: "Improve your coding, content creation or even public speaking skills with us, we promise you a safe space to do so.",
  },
  {
    icon: {
      src: "/svg/heroes/build-a-network.svg",
      transform: "scale(1.6)",
    },
    title: "Build a network",
    text: "Build your network with our thriving community, connect with and learn from like-minded people.",
  },
  {
    icon: {
      src: "/svg/heroes/recogination.svg",
      transform: "scale(1.9) translateY(3px)",
    },
    title: "Recognition",
    text: "Become one of our community moderators on Discord. Associate yourself with a cool brand!",
  },
  {
    icon: {
      src: "/svg/heroes/free-oss-plan.svg",
      transform: "scale(1.6)",
    },
    title: "Free OSS plan",
    text: "Enjoy free, unlimited hours on any public repository.",
  },
  {
    icon: {
      src: "/svg/heroes/extra-resources.svg",
      transform: "scale(1.9) translateY(3px)",
    },
    title: "Extra resources",
    text: "Receive exclusive swag, access to resources to help you spread the word, content reviews from the Gitpod team,  and more!",
  },
  {
    icon: {
      src: "/svg/heroes/beta-access.svg",
      transform: "scale(1.6)",
    },
    title: "Beta access",
    text: "Test new features before they are officially released. Share your feedback and collaborate with the product team.",
  },
];

export const exploreContents: ExploreSection = {
  title: "Apply Now",
  description:
    "Join us empowering developers to make engineering collaborative and joyful again.",
  note: " Are you our next community hero?",
  link: { text: "Apply Now", href: "https://forms.gle/hPSZ2Bws9rpqE7M4A" },
  useKumquatIllustration: true,
};
