import AboutClient from "@/components/AboutClient";

// 1. Export metadata from the SERVER component
export const metadata = {
  title: "About Us",
};

// 2. This is the main page component (a Server Component)
export default function AboutPage() {
  
  // 3. It renders the CLIENT component that has all the UI and animations
  return <AboutClient />;
}