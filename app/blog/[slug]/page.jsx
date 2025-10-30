import BlogSlugClient from "@/components/BlogSlugClient";

// --- ADD THIS DATA ---
// This data is needed on the server to generate the static pages.
// You should consider moving this to a central file like `lib/siteData.js`
// and importing it here and in `components/BlogClient.jsx`.
const blogPosts = [
  { title: "Latest Industry Trends", slug: "latest-industry-trends", date: "March 15, 2024", author: "DPV Team", excerpt: "Discover the emerging trends shaping offshore operations..." },
  { title: "Safety Best Practices", slug: "safety-best-practices", date: "March 10, 2024", author: "Safety Dept", excerpt: "Learn about our commitment to maintaining the highest safety standards..." },
  { title: "Technology Innovation", slug: "technology-innovation", date: "March 5, 2024", author: "Tech Team", excerpt: "How we're leveraging cutting-edge technology for better service..." },
];

// --- THIS IS THE FIX ---
// This function tells Next.js which static pages to build.
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// --- THIS IS UPDATED ---
// This function now generates correct metadata for each static page.
export async function generateMetadata({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  
  return {
    title: post ? post.title : "Blog Post",
  };
}

// This is your original page component. It passes the params
// to the client component, which will render the UI.
export default function BlogPostPage({ params }) {
  return <BlogSlugClient params={params} />;
}