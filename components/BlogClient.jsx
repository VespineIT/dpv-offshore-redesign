"use client";
import { motion } from "framer-motion";
import { FaArrowRight, FaClock, FaUser } from "react-icons/fa";
import Link from "next/link";

// NOTE: metadata export is REMOVED from this file

const blogPosts = [
  { title: "Latest Industry Trends", slug: "latest-industry-trends", date: "March 15, 2024", author: "DPV Team", excerpt: "Discover the emerging trends shaping offshore operations..." },
  { title: "Safety Best Practices", slug: "safety-best-practices", date: "March 10, 2024", author: "Safety Dept", excerpt: "Learn about our commitment to maintaining the highest safety standards..." },
  { title: "Technology Innovation", slug: "technology-innovation", date: "March 5, 2024", author: "Tech Team", excerpt: "How we're leveraging cutting-edge technology for better service..." },
];

export default function BlogClient() { // Renamed component
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-24 px-6 lg:px-12 bg-gradient-to-br from-primary via-primary/95 to-accent overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/pattern.svg')] opacity-10" />
        <div className="container mx-auto max-w-7xl relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Blog</h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Insights, updates, and industry news from DPV Offshore
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-24 px-6 lg:px-12">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, idx) => (
              <motion.article
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative p-8 bg-white dark:bg-dark-muted rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />
                
                <div className="relative">
                  <div className="flex items-center gap-4 text-sm text-light-text/60 dark:text-dark-text/60 mb-4">
                    <span className="flex items-center gap-1">
                      <FaClock /> {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaUser /> {post.author}
                    </span>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-primary dark:text-white mb-4 group-hover:text-accent transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-light-text/70 dark:text-dark-text/70 mb-6">
                    {post.excerpt}
                  </p>
                  
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-accent font-semibold group-hover:gap-3 transition-all"
                  >
                    Read More <FaArrowRight />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}