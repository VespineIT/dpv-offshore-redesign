"use client";
import { motion } from "framer-motion";
import { FaArrowLeft, FaClock, FaUser } from "react-icons/fa";
import Link from "next/link";

export default function BlogSlugClient({ params }) {
  // In a real app, you would fetch post data based on params.slug
  const post = {
    title: params.slug.replace(/-/g, ' '),
    date: "March 15, 2024",
    author: "DPV Team",
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-24 px-6 lg:px-12 bg-gradient-to-br from-primary via-primary/95 to-accent overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/pattern.svg')] opacity-10" />
        <div className="container mx-auto max-w-4xl relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white"
          >
            <div className="flex items-center gap-4 text-sm text-gray-300 mb-4">
              <span className="flex items-center gap-1">
                <FaClock /> {post.date}
              </span>
              <span className="flex items-center gap-1">
                <FaUser /> {post.author}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 capitalize">
              {post.title}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Post Content */}
      <section className="py-24 px-6 lg:px-12">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="prose prose-lg dark:prose-invert max-w-none text-light-text/90 dark:text-dark-text/90"
          >
            <p>
              This is a placeholder for your blog post content. In a real
              application, you would fetch this content from a CMS or a markdown
              file based on the <strong>{params.slug}</strong>.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              euismod, nisl nec ultricies lacinia, nisl nisl aliquet
              nunc, eget aliquam nisl nisl sit amet nisl.
            </p>
            {/* Add more placeholder content as needed */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-16 border-t border-light-muted dark:border-dark-muted pt-8"
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-accent font-semibold hover:underline"
            >
              <FaArrowLeft /> Back to Blog
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}