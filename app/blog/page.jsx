import BlogClient from "@/components/BlogClient";

// This file is the Server Component
export const metadata = {
  title: "Blog",
};

// It renders the Client Component
export default function BlogPage() {
  return <BlogClient />;
}