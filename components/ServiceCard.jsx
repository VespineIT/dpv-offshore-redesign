import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function ServiceCard({ title, icon, description }) {
  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)" }}
      className="flex flex-col rounded-lg bg-light-background p-6 shadow-lg dark:bg-dark-muted"
    >
      <div className="mb-4">{icon}</div>
      <h3 className="mb-3 text-2xl font-semibold text-primary dark:text-white">
        {title}
      </h3>
      <p className="flex-1 text-light-text/80 dark:text-dark-text/80">
        {description}
      </p>
      <Link
        href="/services"
        className="mt-4 inline-flex items-center font-semibold text-accent hover:underline"
      >
        Read more <FaArrowRight className="ml-2" />
      </Link>
    </motion.div>
  );
}