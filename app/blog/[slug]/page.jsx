"use client";
import { motion } from "framer-motion";
import { FaClock, FaUser, FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

export async function generateMetadata({ params }) {
  return {
    title: `Blog Post: ${params.slug}`,
  };
}

export default function BlogPostPage({ params }) {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto max-w-4xl px-6 lg:px-12 py-24">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-accent font-semibold mb-8 hover:gap-3 transition-all"
        >
          <FaArrowLeft /> Back to Blog
        </Link>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="prose prose-lg max-w-none"
        >
          <div className="flex items-center gap-6 text-light-text/60 dark:text-dark-text/60 mb-8">
            <span className="flex items-center gap-2">
              <FaClock /> March 15, 2024
            </span>
            <span className="flex items-center gap-2">
              <FaUser /> DPV Team
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-primary dark:text-white mb-8">
            {params.slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
          </h1>

          <div className="p-8 bg-accent/5 rounded-2xl mb-8">
            <p className="text-xl text-light-text/80 dark:text-dark-text/80 italic">
              This is a placeholder page for a dynamic blog post. Content for this post will be populated from a CMS or markdown files in the future.
            </p>
          </div>

          <div className="space-y-6 text-light-text/90 dark:text-dark-text/90">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </motion.article>
      </div>
    </div>
  );
}