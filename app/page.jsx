"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SITE } from "@/lib/siteData";
import { FaArrowRight, FaCheckCircle, FaShip, FaAnchor, FaHardHat, FaSwimmer, FaGasPump } from "react-icons/fa";
import ServiceCard from "@/components/ServiceCard";
import CustomersCarousel from "@/components/CustomersCarousel";

const icons = {
  FaShip: <FaShip className="text-5xl" />,
  FaAnchor: <FaAnchor className="text-5xl" />,
  FaHardHat: <FaHardHat className="text-5xl" />,
  FaSwimmer: <FaSwimmer className="text-5xl" />,
  FaGasPump: <FaGasPump className="text-5xl" />,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section - Modern with Parallax Effect */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/placeholders/hero.jpg"
            alt="Offshore vessel at sea"
            fill
            className="object-cover"
            quality={90}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-accent/40" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-block mb-6 px-4 py-2 bg-accent/20 backdrop-blur-sm rounded-full border border-accent/30"
            >
              <span className="text-accent font-semibold text-sm tracking-wide">OFFSHORE EXCELLENCE SINCE YEARS</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              {SITE.tagline}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed"
            >
              Delivering world-class offshore and marine solutions with precision and reliability.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href={`mailto:${SITE.email}?subject=Website%20Enquiry`}
                className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent to-accent/80 rounded-xl font-semibold text-white shadow-2xl shadow-accent/30 hover:shadow-accent/50 transition-all duration-300 hover:scale-105"
              >
                <span>Get Started</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm rounded-xl font-semibold text-white border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                Our Services
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ opacity: { delay: 1 }, y: { repeat: Infinity, duration: 2 } }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/60 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* About Section - Modern Cards */}
      <section className="py-24 px-6 lg:px-12 bg-gradient-to-br from-light-background to-light-muted/30 dark:from-dark-background dark:to-dark-muted/30">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
              WHO WE ARE
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary dark:text-white mb-6">
              About DPV Offshore
            </h2>
            <p className="text-xl text-light-text/70 dark:text-dark-text/70 max-w-3xl mx-auto">
              {SITE.about}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "⚡", title: "Fast Response", desc: "24/7 emergency support for your operations" },
              { icon: "🌍", title: "Global Reach", desc: "Serving clients across UAE, India & Sri Lanka" },
              { icon: "✓", title: "Certified Quality", desc: "ISO compliant with highest safety standards" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative p-8 bg-white dark:bg-dark-muted rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-2xl font-bold text-primary dark:text-white mb-3">{item.title}</h3>
                  <p className="text-light-text/70 dark:text-dark-text/70">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <blockquote className="text-3xl font-bold text-primary dark:text-white">
              &ldquo;{SITE.aboutTagline}&rdquo;
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* Services Section - Modern Grid */}
      <section className="py-24 px-6 lg:px-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent" />
        
        <div className="container mx-auto max-w-7xl relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
              WHAT WE OFFER
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary dark:text-white mb-6">
              Our Services
            </h2>
            <p className="text-xl text-light-text/70 dark:text-dark-text/70 max-w-2xl mx-auto">
              Comprehensive offshore and marine solutions tailored to your needs
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {SITE.services.map((service, idx) => (
              <motion.div
                key={service.group}
                variants={itemVariants}
                className="group relative p-8 bg-white dark:bg-dark-muted rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />
                
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/5 rounded-xl mb-6 text-accent group-hover:scale-110 transition-transform duration-300">
                    {icons[service.icon]}
                  </div>
                  <h3 className="text-2xl font-bold text-primary dark:text-white mb-4 group-hover:text-accent transition-colors">
                    {service.group}
                  </h3>
                  <ul className="space-y-2 mb-6">
                    {service.items.slice(0, 3).map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-light-text/70 dark:text-dark-text/70">
                        <FaCheckCircle className="text-accent mt-1 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 text-accent font-semibold group-hover:gap-3 transition-all"
                  >
                    Learn More <FaArrowRight className="text-sm" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent to-accent/80 rounded-xl font-semibold text-white shadow-lg shadow-accent/30 hover:shadow-accent/50 transition-all duration-300 hover:scale-105"
            >
              View All Services <FaArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Customers Section */}
      <section className="py-24 px-6 lg:px-12 bg-gradient-to-br from-primary/5 to-accent/5 dark:from-primary/10 dark:to-accent/10">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
              TRUSTED BY THE BEST
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary dark:text-white mb-6">
              Our Valued Customers
            </h2>
            <p className="text-xl text-light-text/70 dark:text-dark-text/70 max-w-2xl mx-auto">
              Partnering with industry leaders worldwide
            </p>
          </motion.div>
          <CustomersCarousel />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 lg:px-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent" />
        <div className="absolute inset-0 bg-[url('/assets/pattern.svg')] opacity-10" />
        
        <div className="container mx-auto max-w-4xl relative text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Contact us today for a consultation and discover how we can support your offshore operations.
            </p>
            <a
              href={`mailto:${SITE.email}?subject=Website%20Enquiry`}
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-white rounded-xl font-semibold text-primary shadow-2xl hover:shadow-accent/50 transition-all duration-300 hover:scale-105"
            >
              <span>Contact Us</span>
              <FaArrowRight className="text-accent group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}