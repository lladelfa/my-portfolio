import type { Metadata } from "next";
import { HomePageView } from "./home-page-view";

export const metadata: Metadata = {
  title: "Lorenzo LaDelfa | Strategic Engineering Leader",
  description:
    "Hands-on engineering leader specializing in cloud modernization, solution architecture, and leading cross-functional teams to deliver impactful results.",
};

export default function HomePage() {
  return <HomePageView />;
}