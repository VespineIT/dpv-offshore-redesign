import BlogSlugClient from "@/components/BlogSlugClient";

// This file is the Server Component, so metadata is allowed.
export async function generateMetadata({ params }) {
  // Capitalize the slug for a nice title
  const title = params.slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  return {
    title: title,
  };
}

// This page renders the Client Component and passes params to it
export default function BlogPostPage({ params }) {
  return <BlogSlugClient params={params} />;
}